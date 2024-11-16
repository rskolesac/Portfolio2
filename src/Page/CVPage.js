import React from 'react';
import Parcours1 from '../components/Parcours/Parcours1';
import Parcours2 from '../components/Parcours/Parcours2';
import Parcours3 from '../components/Parcours/Parcours3';
import Navbar from '../components/Navbar';
import CvPage from './AproposPage';

const CVPage = () => {
    const slides = [
        { component: <Parcours1 /> },
        { component: <Parcours2 /> },
        { component: <Parcours3 /> },
    ];

    return (
        <div className="parcours-page">
            <Navbar />
            <div className="horizontal-scroll-container">
                {slides.map((slide, index) => (
                    <div key={index} className="scroll-slide">
                        <div className="scroll-content">
                            {slide.component}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CVPage;
