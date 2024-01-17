/* eslint-disable no-unused-vars */
import React, { useState, useReducer } from 'react';
import Web3 from 'web3';
import abi from '../contract/abi';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import WalletLink from 'walletlink'

import 'normalize.css';
import './main.scss';

import HomePageComponent from './pages/home/home.component';
import MintPageComponent from './pages/mint/mint.component';

import createStarfield from './misc/starfield';
import WalletConnectProvider from '@walletconnect/web3-provider'
import { getPresaleStatus, getPublicStatus, getRaffleStatus } from '../contract/ethereum';

import environment from '../environment/environment';
import Web3Modal, { providers as web3Providers } from 'web3modal'
import { providers } from 'ethers'

const web3 = new Web3(new Web3.providers.HttpProvider('https://mainnet.infura.io/v3/196d9033022f4453af7bd9117a1759c8'));
const contractAddress = '0x2be20E65BecFd7494Bf232b1859d556F8a5893fF';
// const contractAddress = '0x3b922B37D3746315EED949C3c33b273BBA54B35f';
const contract = new web3.eth.Contract(abi, contractAddress);

const modValue = (count, value) => {
  console.log((parseFloat(value) * count).toFixed(2))
  return (parseFloat(value) * count).toFixed(2);
};

const deviceType = () => {
  const ua = navigator.userAgent;
  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
    return 'tablet';
  }
  else if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
    return 'mobile';
  }
  return 'desktop';
};

const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider, // required
    options: {
      infuraId: '196d9033022f4453af7bd9117a1759c8', // required
    },
  },
};

if (window) {
  const { web3 = {} } = window || {};
  const { currentProvider = {} } = web3 || {};
  const { isMetaMask } = currentProvider || {};

  if (!isMetaMask && deviceType() === 'desktop') {
    providerOptions['custom-walletlink'] = {
      display: {
        logo: web3Providers.METAMASK.logo,
        name: 'Install MetaMask',
        description: 'Connect using browser wallet',
      },
      options: {},
      package: WalletLink,
      connector: async (_, options) => {
        window.open('https://metamask.io')
        throw new Error('MetaMask not installed');
      },
    };
  }
}

let web3Modal;

if (typeof window !== 'undefined') {
  web3Modal = new Web3Modal({
    network: 'mainnet', // optional
    cacheProvider: true,
    providerOptions, // required
  })
}

const initialState = {
  provider: null,
  web3Provider: null,
  address: null,
  chainId: null,
};

function reducer(state, action) {
  switch (action.type) {
  case 'SET_WEB3_PROVIDER':
    return {
      ...state,
      provider: action.provider,
      web3Provider: action.web3Provider,
      address: action.address,
      chainId: action.chainId,
    }
  case 'SET_ADDRESS':
    return {
      ...state,
      address: action.address,
    }
  case 'SET_CHAIN_ID':
    return {
      ...state,
      chainId: action.chainId,
    }
  case 'RESET_WEB3_PROVIDER':
    return initialState
  default:
    throw new Error()
  }
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const { provider, address: currentAccount, chainId: network, web3Provider } = state;

  const [publicActive, setPublicActive] = useState();
  const [presaleActive, setPresaleActive] = useState();
  const [raffleStatus, setRaffleStatus] = useState();
  const [raffleSuccessMessage, setRaffleSuccessMessage] = useState();
  const [isProofLoading, setProofLoading] = useState();

  const [errorMessage, setError] = useState();

  const [mintType, setMintType] = useState();
  const [mintProof, setMintProof] = useState();

  const isRaffleRegOpen = false;

  const connect = React.useCallback(async function () {
    const provider = await web3Modal.connect();
    const web3Provider = new providers.Web3Provider(provider);

    const signer = web3Provider.getSigner();
    const address = await signer.getAddress();

    const network = await web3Provider.getNetwork();

    dispatch({
      type: 'SET_WEB3_PROVIDER',
      provider,
      web3Provider,
      address,
      chainId: network.chainId,
    });
  }, [])

  const disconnect = React.useCallback(
    async function () {
      await web3Modal.clearCachedProvider()
      if (provider.disconnect && typeof provider.disconnect === 'function') {
        await provider.disconnect()
      }
      dispatch({
        type: 'RESET_WEB3_PROVIDER',
      })
    },
    [provider]
  );

  // React.useEffect(() => {
  //   if (web3Modal.cachedProvider) {
  //     connect()
  //   }
  // }, [connect]);

  React.useEffect(() => {
    if (provider && provider.on) {
      const handleAccountsChanged = async accounts => {
        console.log('accountsChanged', accounts)
        dispatch({
          type: 'SET_ADDRESS',
          address: accounts[0],
        });
      }

      const handleChainChanged = (_hexChainId) => {
        window.location.reload()
        console.log('reload', _hexChainId)
      }

      const handleDisconnect = error => {
        console.log('disconnect', error)
        disconnect()
      }

      provider.on('accountsChanged', handleAccountsChanged)
      provider.on('chainChanged', handleChainChanged)
      provider.on('disconnect', handleDisconnect)

      // Subscription Cleanup
      return () => {
        if (provider.removeListener) {
          provider.removeListener('accountsChanged', handleAccountsChanged)
          provider.removeListener('chainChanged', handleChainChanged)
          provider.removeListener('disconnect', handleDisconnect)
        }
      }
    }
  }, [provider, disconnect]);

  React.useEffect(() => {
    createStarfield();
    getPublicStatus().then(setPublicActive);
    getPresaleStatus().then(setPresaleActive);
    getRaffleStatus().then(setRaffleStatus);
  }, []);

  React.useEffect(() => {
    if (currentAccount && isRaffleRegOpen) {
      axios.post(environment.REGISTER_RAFFLE_URL, {
        address: currentAccount,
      })
        .then(response => {
          setRaffleSuccessMessage(response.data.message);

          setTimeout(() => {
            setRaffleSuccessMessage(null);
          }, 3000);
        })
        .catch(error => {
          console.log(error)
        });
    }
  }, [currentAccount, isRaffleRegOpen]);

  React.useEffect(() => {
    if (currentAccount && publicActive !== undefined) {
      if (!publicActive) {
        if (presaleActive) {
          console.log('Fetching WL/OG/Mod proof', currentAccount)
          axios.get(environment.GET_PRESALE_PROOF_URL, {
            params: {
              address: currentAccount,
            },
          })
            .then(response => {
              const { data: { functionName, hexProof } } = response;
              setMintType(functionName);
              setMintProof(hexProof);
            })
            .catch(error => {
              const {
                response: {
                  data: {
                    message,
                  } = {},
                } = {},
              } = error || {};

              setMintProof(null);
              setError(message || error.message || 'error');
            });
        }

        if (raffleStatus) {
          console.log('Fetching raffle proof')
          axios.get(environment.GET_RAFFLE_PROOF_URL, {
            params: {
              address: currentAccount,
            },
          })
            .then(response => {
              const { data: { functionName, hexProof } } = response;
              setMintType(functionName);
              setMintProof(hexProof);
            })
            .catch(error => {
              const {
                response: {
                  data: {
                    message,
                  } = {},
                } = {},
              } = error || {};

              setMintProof(null);
              setError(message || error.message || 'error');
            });
        }
      }
    }
  }, [currentAccount, presaleActive, raffleStatus, isProofLoading]);

  // React.useEffect(() => {
  //   if (currentAccount) {
  //     setMintProof(null);
  //     setMintType(null);
  //   }
  // }, [currentAccount]);

  const callPublic = async (count) => {
    return await web3Provider.send('eth_sendTransaction', [{
      to: contractAddress,
      from: currentAccount,
      value: web3.utils.toHex(web3.utils.toWei(modValue(count, '0.15'), 'ether')),
      data: contract.methods.mint(count).encodeABI(),
    }]);
  };

  const callRaffle = async (count, proof) => {
    return await web3Provider.send('eth_sendTransaction', [{
      to: contractAddress,
      from: currentAccount,
      value: web3.utils.toHex(web3.utils.toWei(modValue(count, '0.15'), 'ether')),
      data: contract.methods.raffleMint(count, proof).encodeABI(),
    }]);
  }

  const callWl = async (count, proof) => {
    console.log(contractAddress, currentAccount, count, proof)
    return await web3Provider.send('eth_sendTransaction', [{
      to: contractAddress,
      from: currentAccount,
      value: web3.utils.toHex(web3.utils.toWei(modValue(count, '0.15'), 'ether')),
      data: contract.methods.presaleMint(count, proof).encodeABI(),
    }]);
  }

  const callMod = async (count, proof) => {
    return await web3Provider.send('eth_sendTransaction', [{
      to: contractAddress,
      from: currentAccount,
      data: contract.methods.modMint(count, proof).encodeABI(),
    }]);
  }

  const callOg = async (count, proof) => {
    return await web3Provider.send('eth_sendTransaction', [{
      to: contractAddress,
      from: currentAccount,
      value: web3.utils.toHex(web3.utils.toWei(modValue(count, '0.14'), 'ether')),
      data: contract.methods.ogPresaleMint(count, proof).encodeABI(),
    }]);
  }

  return (
    <Router>
      <Routes>
        <Route path="/" exact element={
          <HomePageComponent
            setPresaleActive={setPresaleActive}
            setPublicActive={setPublicActive}
            setRaffleStatus={setRaffleStatus}
            currentAccount={currentAccount}
            publicActive={publicActive}
            presaleActive={presaleActive}
            raffleStatus={raffleStatus}
            setMintType={setMintType}
            setMintProof={setMintProof}
            setCurrentAccount={connect}
          />
        } />
        <Route path="mint" exact element={
          <MintPageComponent
            raffleActive={raffleStatus}
            publicActive={publicActive}
            presaleActive={presaleActive}
            currentAccount={currentAccount}
            mintType={mintType}
            mintProof={mintProof}
            errorMessage={errorMessage}
            setCurrentAccount={connect}
            raffleSuccessMessage={raffleSuccessMessage}
            isProofLoading={isProofLoading}
            callPublic={callPublic}
            callRaffle={callRaffle}
            callWl={callWl}
            callMod={callMod}
            callOg={callOg}
          />
        } />
      </Routes>
    </Router>
  );
};

export default App;
