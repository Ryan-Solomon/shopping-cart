import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const NavBar = () => {
  return (
    <nav className='nav-container'>
      <h1>NavBar</h1>
      <div className='icon-container'>
        <AiOutlineShoppingCart size='2rem' style={{ margin: '0 20px' }} />
        <span className='icon-count'>1</span>
      </div>
    </nav>
  );
};

export default NavBar;
