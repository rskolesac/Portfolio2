import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Footer from '../components/Footer';
import Skill from '../components/Skill';
import Background from '../components/Background';

function AccueilPage() {
    return (
        <div className="home-page">
            <Background /> 
            <div className="hero-background">
                <Navbar />
                <Hero />
            </div>
            <About />
            <Skill />
            <Footer />
        </div>
    );
}

export default AccueilPage;
