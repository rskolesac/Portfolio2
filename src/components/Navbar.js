import React from 'react';
import DelayedRender from './DelayedRender';
import { ReactTyped } from 'react-typed';
import { useLocation, Link } from 'react-router-dom';

function Navbar() {
    const location = useLocation();

    // Appliquez une classe différente si l'utilisateur est sur la page `cv`
    const isParcoursPage = location.pathname === '/parcours';
    const navbarClass = isParcoursPage ? 'navbar cv-style' : 'navbar default-style';

    return (
        <DelayedRender delay={2000}>
            <header className={navbarClass}>
                <div className="navbar-left">
                    <img src={`${process.env.PUBLIC_URL}/image/robin.svg`} alt="Logo" className="logo" />
                </div>
                <div className="navbar-typed">
                    <ReactTyped
                        strings={['Bienvenue sur mon site', 'Explorez mon parcours', 'Découvrez mes projets']}
                        typeSpeed={50}
                        backSpeed={30}
                        loop
                    />
                </div>
                <nav className="navbar-right">
                    <ul className="navbar-menu">
                        <li><Link to="/">Accueil</Link></li>
                        <li><Link to="/parcours">Projets</Link></li>
                        <li><Link to="/cv">CV</Link></li>
                    </ul>
                </nav>
            </header>
        </DelayedRender>
    );
}

export default Navbar;
