import React from 'react';
import { Link } from 'react-router-dom';
import logo from'../../images/Logo.svg';
import './Header.css';

const Header = () => {
    return (
        <nav className='header'> 
            <div className='header-wrap'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Order Review</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/about">About</Link>
                <Link to="/login">Login</Link>
            </div>
            </div>
        </nav>
    );
};

export default Header;