import React from 'react';
import PropTypes from 'prop-types';

import './wallet.styles.scss';

const Wallet = ({ currentAccount, setCurrentAccount, onlyAddress, loading }) => {
  const account = currentAccount || '';
  const visibleAccount = account && `${currentAccount.slice(0, 5)}...${currentAccount.slice(currentAccount.length - 5)}`;

  if (!currentAccount && onlyAddress) return null;

  if (loading) {
    return (
      <div className='wallet-wrapper'>
        <button
          className='wallet-wrapper__button'
          onClick={() => setCurrentAccount()}
        >
          <h4 className='wallet-wrapper__title'>
            Loading...
          </h4>
        </button>
      </div>
    );
  }

  return (
    <div className='wallet-wrapper'>
      {(!currentAccount && !onlyAddress) &&
        <button
          className='wallet-wrapper__button'
          onClick={() => setCurrentAccount()}
        >
          <h4 className='wallet-wrapper__title'>
            Connect Wallet
          </h4>
        </button>
      }
      {currentAccount &&
        <p className='wallet-wrapper__wallet'>
          { visibleAccount }
        </p>
      }
    </div>
  );
};

Wallet.propTypes = {
  loading: PropTypes.bool,
  onlyAddress: PropTypes.bool,
  currentAccount: PropTypes.string,
  setCurrentAccount: PropTypes.func,
};

export default Wallet;
