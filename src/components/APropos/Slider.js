import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const images = [
    `${process.env.PUBLIC_URL}/image/scolarité.webp`,
    `${process.env.PUBLIC_URL}/image/e-commerce.webp`,
    `${process.env.PUBLIC_URL}/image/data-analysis.webp`,
    `${process.env.PUBLIC_URL}/image/informatique.webp`,
    `${process.env.PUBLIC_URL}/image/mma.webp`,
    `${process.env.PUBLIC_URL}/image/voyage.webp`,
];


function Slider({ setImage }) {

    const slides = [
        {
            number: 1,
            content: "Scolaire",
            texte: {
                info1: "Diplome d'ingénieur",
                info2: "Mines de Saint-Etienne",
                info3: "Double diplome à l'international",
            },
        },
        {
            number: 2,
            content: "E-commerce",
            texte: {
                info1: "Ouverture de mon site Ecandia",
                info2: "Site construit intégralement à la main",
                info3: "Technologies : React pour la partie frontend, Node JS pour l'API et SQL pour la base de donnée", 
                info4: "Intégration d'un module de paiement avec Stripe, système de mailing automatisé avec NodeMail",
                info5: "Gestion des comptes clients de façon sécurisée",
            },
        },
        {
            number: 3,
            content: "Analyse de donnée",
            texte: {
                info1: "Création d'un pipeline automatique pour alerter sur la qualité des données.",
                info2: "Critères à vérifier :",
                info3: "Complétude, Temporalité, Intégrité, Doublons",
                info4: "Utilisation de librairie python :",
                info5: "pandas / great_expectations",
                info6: "Création du pipeline lors de mon stage de 1 mois chez Skiils",
            },
        },
        {
            number: 4,
            content: "Cyber-sécurité",
            texte: {
                info1: "Apprentissage des bases de la sécurité numérique",
                info2: "Sécurité en ligne et sécurité des réseaux",
                info3: "Découverte de la configuration d'environnement pour stocker les données sensibles",
                info4: "Découverte des différentes failles informatiques (injection sql, man-in-the-middle...)",
                info5: "Maitrise des protocoles de bases (TCP/IP, FTP, Ternel, HTTP/HTTPS)",
                info6: "Manipulation d'outils pour l'analyse réseaux (WireShark, Netcat)",
                info7: "exercice pratique sur les plateformes rootMe, tryhackMe et la vm Metasploitable"
            },
        },
        {
            number: 5,
            content: "Sports",
            texte: {
                info1: "MMA, entrainements et combats amateur",
                info2: "Trek, Tanzanie : Kilimandjaro, Grêce : Crête, Norvège: Iles Lofoten",
            },
        },
        {
            number: 6,
            content: "Voyage",
            texte: {
                info1: "Europe :",
                info2: "France, Espagne, Italie, Grêce, Ecosse, Norvège, Danemark, Hongrie, Autriche, ",
                info3: "Afrique :",
                info4: "Senegal, Tanzanie",
                info5: "Amérique",
                info6: "Etats-Unis, Brésil",
                info7: "Asie :",
                info8: "Jordanie"
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
