import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

function About() {
    const bubblesRef = useRef([]);
    const [visibleBubbles, setVisibleBubbles] = useState([]);

    useEffect(() => {
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
                    // Supprime l'index de `visibleBubbles` lorsque l'élément sort de la vue
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
    }, []);

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
                {['', '', '', '', 'video'].map((type, index) => (
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
                                <source src="/video/stickman.mp4" type="video/mp4" />
                                Votre navigateur ne supporte pas la balise vidéo.
                            </video>
                            <div className="text-overlay">Combattant et fan de sport de combat</div>
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
                ))}
            </div>
        </section>
    );
}

export default About;
