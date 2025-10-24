import React from 'react';
import { motion } from 'framer-motion';
import "../../assets/projet/Projet.css";

const Presentation = ({ projet = {} }) => {
    if (!projet) return null;

    const {
        titre = '',
        description = '',
        contexte = '',
        objectifs = [],
        images = []
    } = projet;

    return (
        <motion.section 
            className="projet-presentation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <h1>{titre}</h1>
            <p>{description}</p>
            {contexte && (
                <div className="contexte">
                    <h2>Contexte</h2>
                    <p>{contexte}</p>
                </div>
            )}
            {objectifs.length > 0 && (
                <div className="objectifs">
                    <h2>Objectifs</h2>
                    <ul>
                        {objectifs.map((obj, index) => (
                            <li key={index}>{obj}</li>
                        ))}
                    </ul>
                </div>
            )}
            {images.length > 0 && (
                <div className="projet-images">
                    {images.map((img, index) => (
                        <img 
                            key={index}
                            src={img}
                            alt={`${titre} aperçu ${index + 1}`}
                        />
                    ))}
                </div>
            )}
        </motion.section>
    );
};



export default Presentation;
