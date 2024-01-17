/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';

import './header.styles.scss';

import Logo from './logo/logo.component';
import Menu from './menu/menu.component';
import Social from './social/social.component';
import Wallet from './wallet/wallet.component';
import MobileMenu from './mobile-menu/mobile-menu.component';

const Header = ({ currentAccount, setCurrentAccount }) => {
  return (
    <header className='header'>
      <div className='header__wrapper'>
        <Logo />
        <Menu />
        <Social />
        <Wallet
          onlyAddress
          currentAccount={currentAccount}
          setCurrentAccount={setCurrentAccount}
        />
        <MobileMenu />
      </div>
    </header>
  );
};


Header.propTypes = {
  currentAccount: PropTypes.string,
  setCurrentAccount: PropTypes.func,
};

export default Header;
