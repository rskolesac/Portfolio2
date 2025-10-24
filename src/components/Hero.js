import React, { useState, useEffect } from 'react';
import '../assets/style.css';
import { ReactTyped } from 'react-typed';
import DelayedRender from './DelayedRender';
import HamburgerMenu from './HamburgerMenu';

function Hero() {
    const [isActive, setIsActive] = useState(false);
    const [_, setInitialPosition] = useState({ left: 0, top: 0 });
    const [imageSrc, setImageSrc] = useState('');
    const [textCompleted, setTextCompleted] = useState(false);
    const [imageVisible, setImageVisible] = useState(false);

    // état pour menu hamburger mobile
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        if (textCompleted) {
            setTimeout(() => setImageVisible(true), 500); // Attendez avant de montrer les images
        }
    }, [textCompleted]);

    // Ajouter/retirer la classe menu-open sur le body
    useEffect(() => {
        if (menuOpen) {
            document.body.classList.add('menu-open');
        } else {
            document.body.classList.remove('menu-open');
        }
    }, [menuOpen]);

    const handleClick = (event, imagePath) => {
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
        // fermer le menu mobile si ouvert (sécurité)
        setMenuOpen(false);
    };

        const scrollToTop = () =>
    new Promise((resolve) => {
        if (window.scrollY === 0) return resolve();

        let resolved = false;
        const timeout = setTimeout(() => {
        if (!resolved) {
            resolved = true;
            resolve();
        }
        }, 1200); // fallback si l'événement ne se produit pas

        const check = () => {
        if (window.scrollY === 0 && !resolved) {
            resolved = true;
            clearTimeout(timeout);
            resolve();
        } else {
            requestAnimationFrame(check);
        }
        };

        window.scrollTo({ top: 0, behavior: 'smooth' });
        requestAnimationFrame(check);
    });

    // Ouvre/ferme le menu, en scrollant d'abord si on est en train d'ouvrir
    const onHamburgerClick = async () => {
    if (menuOpen) {
        setMenuOpen(false);
        return;
    }
    await scrollToTop();
    setMenuOpen(true);
    };

    useEffect(() => {
        const handleScroll = () => {
            const bubbleContainer = document.querySelector('.bubbles-container');
            const hamburger = document.querySelector('.hamburger-button'); // Modifié ici
            if (bubbleContainer && hamburger) {
                const bubbleRect = bubbleContainer.getBoundingClientRect();
                const hamburgerRect = hamburger.getBoundingClientRect();
                
                // Vérifie si le hamburger entre en collision avec le conteneur de bulles
                if (bubbleRect.top <= hamburgerRect.bottom && bubbleRect.top >= 0) {
                    setMenuOpen(false);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Ajouter après les autres useEffect
    useEffect(() => {
        const handleResize = () => {
            // Fermer le menu si on redimensionne
            if (menuOpen) {
                setMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [menuOpen]);

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
                                    strings={['Etudiant en Informatique et microélectronique']}
                                    typeSpeed={50} // Vitesse de saisie
                                    showCursor={true}
                                />
                            </p>
                        </div>
                    </DelayedRender>
                )}
            </div>

            {imageVisible && (
                <DelayedRender delay={1500}>
                    <div className="hero-image-container">
                        <img src={`${process.env.PUBLIC_URL}/image/robin.png`} alt='cerisier' style={{ width: "500px" }} />
                        <div className='hero-image-texte'>
                            <h2>CRIFO ROBIN</h2>
                            <div className='hero-image-list-container'>
                                <p>Étudiant Ingénieur</p>
                                <ul className='hero-image-list'>
                                    <li>Developpement web</li>
                                    <li>Programmation Orientée Objet</li>
                                    <li>Data Science & Machine Learning</li>
                                    <li>Intéressé par le Biomédical</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </DelayedRender>
            )}

            {imageVisible && (
                <DelayedRender delay={2000}>
                    <HamburgerMenu 
                        menuOpen={menuOpen}
                        setMenuOpen={setMenuOpen}
                        onHamburgerClick={onHamburgerClick}
                        handleClick={handleClick}
                    />
                </DelayedRender>
            )}

            <div
                className={`hover-overlay ${isActive ? 'active' : ''}`}
                style={{ top: 0, left: 0 }}
                onClick={handleOverlayClick}
            >
                {imageSrc && <img src={imageSrc} alt="Aperçu du projet" />}
            </div>
        </section>
    );
}


export default Hero;
