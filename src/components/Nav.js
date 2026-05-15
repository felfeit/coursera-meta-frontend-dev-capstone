import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import hamburgerIcon from '../assets/icons/hamburger_menu_icon.svg';

const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    return (
        <nav className={`nav ${menuOpen ? "open" : ""}`}>
            <div className="menu-icon" onClick={toggleMenu}>
                <img src={hamburgerIcon} alt="Menu" />
            </div>
            <ul className={`nav-links ${menuOpen ? "visible" : ""}`}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/menu">Menu</Link></li>
                <li><Link to="/reservations">Reservations</Link></li>
                <li><Link to="/order">Order Online</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
        </nav>
    );
};

export default Nav;
