import React, { useEffect, useState } from 'react';

function Background() {
    const [opacity, setOpacity] = useState(1);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const viewportHeight = window.innerHeight; // Hauteur dynamique de la fenêtre
            const maxOpacityScroll1 = viewportHeight * 1; // Point de contrôle basé sur la hauteur
            const maxOpacityScroll2 = viewportHeight * 4.3; // Ajustement pour le deuxième point

            let newOpacity;

            // Premier intervalle de défilement
            if (scrollPosition <= maxOpacityScroll1) {
                newOpacity = Math.max(1 - scrollPosition / maxOpacityScroll1, 0); // Réduit l'opacité
            }
            // Deuxième intervalle de défilement
            else if (scrollPosition > maxOpacityScroll2) {
                newOpacity = Math.max(0 + scrollPosition / maxOpacityScroll2, 0);
            } else {
                newOpacity = 0; // Opacité à 0 au-delà du deuxième point
            }

            setOpacity(newOpacity);
        };

        window.addEventListener('scroll', handleScroll);

        // Nettoyage de l'événement lors du démontage
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div
            className="background-fixed"
            style={{
                opacity,
                transition: 'opacity 0.3s ease', // Transition pour un effet plus fluide
            }}
        ></div>
    );
}

export default Background;
