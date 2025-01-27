import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

function About() {
    const bubblesRef = useRef([]);
    const [visibleBubbles, setVisibleBubbles] = useState([]);
    const [isReadyForBubbles, setIsReadyForBubbles] = useState(false);

    useEffect(() => {
        // Simulez une animation de la div précédente
        const timeout = setTimeout(() => {
            setIsReadyForBubbles(true);
        }, 3000); // Remplacez 1000ms par la durée réelle de votre animation précédente.

        return () => clearTimeout(timeout);
    }, []);

    useEffect(() => {
        if (!isReadyForBubbles) return;

        const observerOptions = {
            threshold: 0.5,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                const index = bubblesRef.current.indexOf(entry.target);
                if (entry.isIntersecting) {
                    setVisibleBubbles((prev) => {
                        if (!prev.includes(index)) {
                            return [...prev, index];
                        }
                        return prev;
                    });
                } else {
                    setVisibleBubbles((prev) => prev.filter((i) => i !== index));
                }
            });
        }, observerOptions);

        bubblesRef.current.forEach((bubble) => {
            if (bubble) {
                observer.observe(bubble);
            }
        });

        return () => {
            bubblesRef.current.forEach((bubble) => {
                if (bubble) {
                    observer.unobserve(bubble);
                }
            });
        };
    }, [isReadyForBubbles]);

    const bubbleVariants = (direction) => ({
        hidden: {
            opacity: 0,
            x: direction === 'left' ? -100 : 100,
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.7,
                ease: 'easeOut',
            },
        },
        exit: {
            opacity: 0,
            x: direction === 'left' ? -100 : 100,
            transition: {
                duration: 0.5,
                ease: 'easeIn',
            },
        },
    });

    return (
        <section className="about-section">
            <h2 className="about-title">À propos de moi</h2>
            <div className="bubbles-container">
                {isReadyForBubbles &&
                    ['', '', '', '', 'video'].map((type, index) =>
                        type === 'video' ? (
                            <motion.div
                                key={index}
                                className="bubble bubble-video"
                                ref={(el) => (bubblesRef.current[index] = el)}
                                initial="hidden"
                                animate={visibleBubbles.includes(index) ? 'visible' : 'exit'}
                                variants={bubbleVariants('right')}
                            >
                                <video
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="video-background"
                                >
                                    <source
                                        src={`${process.env.PUBLIC_URL}/video/stickman.mp4`}
                                        type="video/mp4"
                                    />
                                    Votre navigateur ne supporte pas la balise vidéo.
                                </video>
                                <div className="text-overlay">
                                    Combattant et fan de sport de combat
                                </div>
                            </motion.div>
                        ) : (
                            <motion.div
                                key={index}
                                className={`bubble bubble${index + 1}`}
                                ref={(el) => (bubblesRef.current[index] = el)}
                                initial="hidden"
                                animate={visibleBubbles.includes(index) ? 'visible' : 'exit'}
                                variants={bubbleVariants(index % 2 === 0 ? 'left' : 'right')}
                            />
                        )
                    )}
            </div>
        </section>
    );
}

export default About;
