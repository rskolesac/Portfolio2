import React, { useState, useEffect } from 'react';
import '../assets/style.css';
import Lightning from './Three/Lightning'; // Assurez-vous que le chemin est correct
import { ReactTyped } from 'react-typed';
import DelayedRender from './DelayedRender';

function Hero() {
    const [isActive, setIsActive] = useState(false);
    const [_, setInitialPosition] = useState({ left: 0, top: 0 });
    const [imageSrc, setImageSrc] = useState('');
    const [textCompleted, setTextCompleted] = useState(false);
    const [imageVisible, setImageVisible] = useState(false);

    useEffect(() => {
        if (textCompleted) {
            setTimeout(() => setImageVisible(true), 500); // Attendez avant de montrer les images
        }
    }, [textCompleted]);


    const handleClick = (event, imagePath) => {
        // Déterminer l'image à utiliser en fonction de la largeur de la fenêtre
    
        // Capture la position de la souris comme point de départ lors du clic
        setInitialPosition({
            left: event.clientX,
            top: event.clientY,
        });
    
        // Met à jour le chemin de l'image à afficher
        setImageSrc(imagePath);
        setIsActive(true); // Déclenche l'animation
    };
    

    const handleOverlayClick = () => {
        // Réinitialise l'animation et masque l'image lors d'un second clic
        setIsActive(false);
    };

    return (
        <section className="hero-section" style={{ position: 'relative' }}>
            <div className="hero-content">
            <DelayedRender delay={500}>
                    <h1 className="hero-title">
                        <ReactTyped
                            strings={['Bienvenue sur mon Portfolio']}
                            typeSpeed={50} // Vitesse de saisie
                            showCursor={false}
                            onComplete={() => setTextCompleted(true)} // Appelé lorsque l'animation est terminée
                        />
                    </h1>
                </DelayedRender>
                {textCompleted && (
                    <DelayedRender delay={1000}>
                        <div className='hero-description'>
                            <p>
                                <ReactTyped
                                    strings={['Etudiant en microélectronique']}
                                    typeSpeed={50} // Vitesse de saisie
                                    showCursor={true}
                                />
                            </p>
                        </div>
                    </DelayedRender>
                )}
                <div className="three-js-container">
                    <Lightning />
                </div>
            </div>
            {imageVisible && (
                <DelayedRender delay={1500}>
                    <div className="hero-video-container">
                        <img src='Portfolio2/image/cerisier.webp' alt='cerisier' style={{ width: "400px" }} />
                    </div>
                </DelayedRender>
            )}
            {imageVisible && (
                <DelayedRender delay={2000}>
                    <div className="Hero-list">
                        <ul>
                            <li onClick={(event) =>handleClick(event, window.innerWidth < 1000 ? 'Portfolio2/image/loaderSmall.png' : '/image/loader.png')}>
                                Projet 1
                            </li>
                            <li onClick={(event) =>handleClick(event, window.innerWidth < 1000 ? 'Portfolio2/image/loaderSmall.png' : '/image/loader.png')}>
                                Projet 2
                            </li>
                            <li onClick={(event) =>handleClick(event, window.innerWidth < 1000 ? 'Portfolio2/image/loaderSmall.png' : '/image/loader.png')}>
                                Projet 3
                            </li>
                            <li onClick={(event) =>handleClick(event, window.innerWidth < 1000 ? 'Portfolio2/image/loaderSmall.png' : '/image/loader.png')}>
                                Projet 4
                            </li>
                            <li onClick={(event) =>handleClick(event, window.innerWidth < 1000 ? 'Portfolio2/image/loaderSmall.png' : '/image/loader.png')}>
                                Projet 5
                            </li>
                        </ul>
                    </div>
            </DelayedRender>
            )}
            <div
                className={`hover-overlay ${isActive ? 'active' : ''}`}
                style={{
                    top: 0,
                    left: 0,
                }}
                onClick={handleOverlayClick} // Clic pour fermer l'image
            >
                {imageSrc && <img src={imageSrc} alt="Aperçu du projet" />}
            </div>
        </section>
    );
}

export default Hero;
