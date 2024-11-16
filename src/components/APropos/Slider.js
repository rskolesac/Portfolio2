import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const images = [
    `${process.env.PUBLIC_URL}/image/scolarité.webp`,
    `${process.env.PUBLIC_URL}/image/football.webp`,
    `${process.env.PUBLIC_URL}/image/mma.webp`,
    `${process.env.PUBLIC_URL}/image/cinema.webp`,
    `${process.env.PUBLIC_URL}/image/musique.webp`,
    `${process.env.PUBLIC_URL}/image/design.webp`,
];


function Slider({ setImage }) {

    const slides = [
        {
            number: 1,
            content: "Scolarité",
            texte: {
                info1: "Détails sur la scolarité",
                info2: "Activités scolaires",
                info3: "Réalisations académiques",
            },
        },
        {
            number: 2,
            content: "Football",
            texte: {
                info1: "Iniesta",
                info2: "Numero 10 technique",
                info3: "Marseille",
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
            content: "Cinéma",
            texte: {
                info1: "Westerns",
                info2: "12 hommes en colères",
                info3: "",
            },
        },
        {
            number: 5,
            content: "Musique",
            texte: {
                info1: "New wave",
                info2: "House",
                info3: "Piano",
            },
        },
        {
            number: 6,
            content: "Design",
            texte: {
                info1: "Moderne",
                info2: "épuré",
                info3: "",
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
