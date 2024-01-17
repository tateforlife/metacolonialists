import React from 'react';

import Menu from '../menu/menu.component';
import Social from '../social/social.component';

import './mobile-menu.styles.scss';

const MobileMenu = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    document.addEventListener('kek', () => {
      setIsOpen(false);
    }, false);

    return () => document.removeEventListener('kek', () => null);
  }, []);

  return (
    <>
      <div
        className={`mobile-menu ${isOpen ? 'mobile-menu--open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className='bar1'></div>
        <div className='bar2' style={{ opacity: isOpen ? '0' : '1' }}></div>
        <div className='bar3'></div>
      </div>
      <div className={`mobile-menu__overlay ${isOpen ? 'mobile-menu__overlay--visible' : ''}`}>
        <div className='mobile-menu__wrapper'>
          <Menu />
          <Social />
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
