import React from 'react';
import logo from '../Logo.svg';

const Footer = () => {
    return (
        <footer>
            <div>
                <img src={logo} alt="Little Lemon Logo" />
            </div>
            <div>
                <h3>Navigation</h3>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/menu">Menu</a></li>
                    <li><a href="/reservations">Reservations</a></li>
                    <li><a href="/order">Order Online</a></li>
                    <li><a href="/login">Login</a></li>
                </ul>
            </div>
            <div>
                <h3>Contact</h3>
                <ul>
                    <li>Address: 123 Main St, Chicago</li>
                    <li>Phone: (123) 456-7890</li>
                    <li>Email: info@littlelemon.com</li>
                </ul>
            </div>
            <div>
                <h3>Social Media</h3>
                <ul>
                    <li><a href="https://facebook.com">Facebook</a></li>
                    <li><a href="https://instagram.com">Instagram</a></li>
                    <li><a href="https://twitter.com">Twitter</a></li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;

