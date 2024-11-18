import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const images = [
    `${process.env.PUBLIC_URL}/image/scolarité.webp`,
    `${process.env.PUBLIC_URL}/image/informatique.webp`,
    `${process.env.PUBLIC_URL}/image/mma.webp`,
    `${process.env.PUBLIC_URL}/image/trail.webp`,
    `${process.env.PUBLIC_URL}/image/musique.webp`,
    `${process.env.PUBLIC_URL}/image/design.webp`,
];


function Slider({ setImage }) {

    const slides = [
        {
            number: 1,
            content: "Scolarité",
            texte: {
                info1: "Baccalauréat scientifique",
                info2: "classe prépa Ingénieur",
                info3: "Mines de Saint Etienne (ISMIN)",
            },
        },
        {
            number: 2,
            content: "Informatique",
            texte: {
                info1: "Web developpement",
                info2: "Cybersécurité",
                info3: "programmation bas niveau",
            },
        },
        {
            number: 3,
            content: "Sport de combat",
            texte: {
                info1: "Boxe anglaise",
                info2: "Grappling",
                info3: "MMA",
            },
        },
        {
            number: 4,
            content: "Trails",
            texte: {
                info1: "Escalade",
                info2: "Randonné",
                info3: "trek",
            },
        },
        {
            number: 5,
            content: "Culture",
            texte: {
                info1: "Cinéma, film western, science-fiction",
                info2: "Lecture, Polar, dystopie, voyage",
                info3: "Musique, piano , house, nouvelle génération",
            },
        },
        {
            number: 6,
            content: "Art",
            texte: {
                info1: "Architecture moderne, épuré",
                info2: "Dessin",
                info3: "créeation diy",
            },
        },
    ];

    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;

        if (!container) return;

        const handleScroll = () => {
            const { scrollTop, scrollHeight, clientHeight } = container;

            // Calcul de la fraction du scroll
            const totalScrollableHeight = scrollHeight - clientHeight;
            const scrollFraction = scrollTop / totalScrollableHeight;

            // Calcul de l'index de l'image
            const index = Math.floor(scrollFraction * images.length);

            // Clamp l'index pour rester dans les limites
            const clampedIndex = Math.min(Math.max(index, 0), images.length - 1);

            // Mettre à jour l'image avec l'index calculé
            setImage(images[clampedIndex]);
        };

        container.addEventListener('scroll', handleScroll);

        return () => {
            container.removeEventListener('scroll', handleScroll);
        };
    }, [setImage]);

    return (
        <motion.div
            className="slider"
            ref={containerRef}
            style={{
                overflowY: 'auto',
                maxHeight: '100vh',
                position: 'relative',
            }}
            initial={{ y: "100vh", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
        >
            {slides.map((slide, index) => (
                <motion.div
                    className="slide"
                    key={slide.number}
                    data-index={index} // Index pour relier le slide à l'image
                    style={{ height: '300px', marginBottom: '20px' }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: slide.number * 0.2 }}
                >
                    <p className='slide-content'>{slide.content}</p>
                    <p className="slide-number">0{slide.number}</p>
                    <ul className="slide-text">
                        <li>{slide.texte.info1}</li>
                        <li>{slide.texte.info2}</li>
                        <li>{slide.texte.info3}</li>
                    </ul>
                </motion.div>
            ))}
        </motion.div>
    );
}

export default Slider;
