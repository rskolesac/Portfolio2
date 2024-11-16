import React from 'react';
import FixedImage from '../components/APropos/FixedImage';
import Slider from '../components/APropos/Slider';
import Navbar from '../components/Navbar';
import { useImage } from '../context/ImageContext'; // Import du contexte

function AproposPage() {
    const { currentImage, isCyclingFinished, setCurrentImage } = useImage();

    return (
        <div className="apropos-page">
            <Navbar />
            {/* Affiche l'image actuelle */}
            <FixedImage imageUrl={currentImage} />

            {isCyclingFinished && <Slider setImage={setCurrentImage} />}
        </div>
    );
}

export default AproposPage;
