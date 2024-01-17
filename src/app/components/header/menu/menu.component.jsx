import React from 'react';
// import { Link } from 'react-router-dom';

import './menu.styles.scss';

const Menu = () => {
  return (
    <nav className='menu-wrapper'>
      <ul>
        {/* <li>
          <Link to="/link">Mint</Link>
        </li> */}
        <li onClick={() => {
          const event = new Event('kek');
          document.dispatchEvent(event);
        }}>
          <a href="/#about">About</a>
        </li>
        <li onClick={() => {
          const event = new Event('kek');
          document.dispatchEvent(event);
        }}>
          <a href="/#roadmap">Roadmap</a>
        </li>
        <li onClick={() => {
          const event = new Event('kek');
          document.dispatchEvent(event);
        }}>
          <a href="/#team">Team</a>
        </li>
        <li onClick={() => {
          const event = new Event('kek');
          document.dispatchEvent(event);
        }}>
          <a href="/#faq">F.A.Q</a>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
