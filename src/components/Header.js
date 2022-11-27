import React from 'react';
import Logo from './logo.svg';

import { Link } from 'react-router-dom';
import './Header.css';


const Header = () => {
  return (
    
    <div className='header'>
        <img src={Logo}/>
        <h3 className='h3'>Rent</h3>
        <h3 className='h3'>Buy</h3>
        <h3 className='h3'>Sell</h3>
        <h3 className='h3'>Manage Property</h3>
        <h3 className='h3'>Resources</h3>
          <Link className='link' to='/'>Log in</Link>
          <Link className='link' to='/'>Sign up</Link>
    
    </div>

  );
};

export default Header;