import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const images = [
    `${process.env.PUBLIC_URL}/image/scolarité.webp`,
    `${process.env.PUBLIC_URL}/image/mma.webp`,
    `${process.env.PUBLIC_URL}/image/avion.png`,
];


function Slider({ setImage }) {

    const slides = [
        {
            number: 1,
            content: "Scolaire",
            texte: {
                info1: "Diplome d'ingénieur",
                info2: "Mines de Saint-Etienne",
                info3: "Echange à l'international possible en 5ème année",
            },
        },
        {
            number: 2,
            content: "Sports",
            texte: {
                info1: "MMA, entrainements et combats amateur",
                info2: "Trek, Kilimandjaro, Crête, Iles Lofoten",
                info3: "Football, niveau amateur",
            },
        },
        {
            number: 3,
            content: "Voyage",
            texte: {
                info1: "Europe :",
                info2: "🇫🇷 🇪🇸 🇮🇹 🇬🇷 🇳🇴 🇩🇰 🇭🇺 🇦🇹",
                info3: "Afrique :",
                info4: "🇸🇳 🇹🇿",
                info5: "Amérique :",
                info6: "🇺🇸 🇧🇷",
                info7: "Asie :",
                info8: "🇯🇴"

            },
        },
    ];

    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const handleScroll = () => {
            const { scrollTop, scrollHeight, clientHeight } = container;
            const scrollFraction = scrollTop / (scrollHeight - clientHeight);
            const index = Math.floor(scrollFraction * images.length);
            setImage(images[Math.min(Math.max(index, 0), images.length - 1)]);
        };

        container.addEventListener('scroll', handleScroll);
        return () => container.removeEventListener('scroll', handleScroll);
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
                        {Object.entries(slide.texte).map(([key, value], index) => (
                            <li key={index}>
                                {value}
                            </li>
                        ))}
                    </ul>
                </motion.div>
            ))}
        </motion.div>
    );
}

export default Slider;
