import React, { useEffect, useState } from 'react';

function Background() {
    const [opacity, setOpacity] = useState(1);
    const [dimensions, setDimensions] = useState({
        viewportHeight: window.innerHeight,
        viewportWidth: window.innerWidth,
    });

    useEffect(() => {
        // Fonction pour gérer le défilement
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const { viewportHeight, viewportWidth } = dimensions;

            // Ajuster les points de contrôle en fonction de la largeur de l'écran
            const maxOpacityScroll1 = viewportHeight * 1; // Point de contrôle pour réduire l'opacité
            const maxOpacityScroll2 = viewportWidth < 800
                ? viewportHeight * 2 // Si l'écran est étroit, ajuster le 2ème point
                : viewportHeight * 4.3; // Large écran

            let newOpacity;

            if (scrollPosition <= maxOpacityScroll1) {
                // Réduire l'opacité dans le premier intervalle
                newOpacity = Math.max(1 - scrollPosition / maxOpacityScroll1, 0);
            } else if (scrollPosition > maxOpacityScroll2) {
                // Ajuster l'opacité dans le deuxième intervalle
                newOpacity = Math.max(0 + scrollPosition / maxOpacityScroll2, 0);
            } else {
                newOpacity = 0; // Fixer à 0 en dehors des intervalles
            }

            setOpacity(newOpacity);
        };

        // Fonction pour gérer le redimensionnement
        const handleResize = () => {
            setDimensions({
                viewportHeight: window.innerHeight,
                viewportWidth: window.innerWidth,
            });
        };

        // Ajouter les écouteurs
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);

        // Nettoyer les écouteurs lors du démontage
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, [dimensions]); // Dépendance à `dimensions` pour recalculer à chaque changement

    return (
        <div
            className="background-fixed"
            style={{
                opacity,
                transition: 'opacity 0.3s ease', // Transition pour un effet fluide
            }}
        ></div>
    );
}

export default Background;
