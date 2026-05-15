import React from 'react';
import logo from '../Logo.svg';
import Nav from './Nav';

const Header = () => {
    return (
        <header className="header">
            <img src={logo} alt="Little Lemon Logo" className="logo" />
            <Nav />
        </header>
    );
};

export default Header;


