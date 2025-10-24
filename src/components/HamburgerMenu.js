import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/HamburgerMenu.css';

const HamburgerMenu = ({ menuOpen, onHamburgerClick }) => {
    return (
        <div className="menu-container">
            <button 
                className={`menu-btn ${menuOpen ? 'open' : ''}`} 
                onClick={onHamburgerClick}
            >
                <span></span>
                <span></span>
                <span></span>
            </button>

            <nav className={`menu-nav ${menuOpen ? 'open' : ''}`}>
                <ul>
                    <li><Link to="/projet1">Projet 1</Link></li>
                    <li><Link to="/projet2">Projet 2</Link></li>
                    <li><Link to="/projet3">Projet 3</Link></li>
                    <li>Projet 4</li>
                    <li>Projet 5</li>
                </ul>
            </nav>
        </div>
    );
};

export default HamburgerMenu;
