import React, { createContext, useContext, useState, useEffect } from 'react';

const images = [
    `${process.env.PUBLIC_URL}/image/scolarité.webp`,
    `${process.env.PUBLIC_URL}/image/e-commerce.webp`,
    `${process.env.PUBLIC_URL}/image/informatique.webp`,
    `${process.env.PUBLIC_URL}/image/data-analysis.webp`,
    `${process.env.PUBLIC_URL}/image/mma.webp`,
    `${process.env.PUBLIC_URL}/image/voyage.webp`,
];

const ImageContext = createContext();

export const ImageProvider = ({ children }) => {

    const [currentImage, setCurrentImage] = useState(images[0]);
    const [isCyclingFinished, setIsCyclingFinished] = useState(false);

    useEffect(() => {
        let imageIndex = 0;
        let cycleCount = 0;
        const maxCycles = 4;

        const interval = setInterval(() => {
            setCurrentImage(images[imageIndex]);
            imageIndex = (imageIndex + 1) % images.length;

            if (imageIndex === 0) {
                cycleCount += 1; // Un cycle complet est atteint
            }

            if (cycleCount >= maxCycles) {
                clearInterval(interval); // Arrête l'intervalle
                setCurrentImage(images[0]); // Réinitialise sur la première image
                setIsCyclingFinished(true); // Indique que le cycle est terminé
            }
        }, 100); // Adjust timing for image change

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    return (
        <ImageContext.Provider value={{ currentImage, setCurrentImage, isCyclingFinished }}>
            {children}
        </ImageContext.Provider>
    );
};


export const useImage = () => useContext(ImageContext);
