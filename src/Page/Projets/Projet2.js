import React, { useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Presentation from '../../components/Projets/Presentation';
import Techno from '../../components/Projets/Techno';
import { projetsData } from '../../data/projets.js';

function Projet2() {
        useEffect(() => {
            // Réinitialiser les styles du body
            document.body.style.overflow = '';
            document.body.style.height = '';
            document.body.classList.remove('menu-open');
            
            return () => {
                // Cleanup si nécessaire
                document.body.style.overflow = '';
                document.body.style.height = '';
            };
        }, []);
    // Utiliser le premier projet des données
    const projetData = projetsData.projet2;

    return (
        <div className="projet1-page">
            <Navbar />
            <main className="projet-content">
                <Presentation projet={projetData} />
                <Techno technologies={projetData.technologies} />
            </main>
            <Footer />
        </div>
    );
}

export default Projet2;