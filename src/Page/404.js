import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../assets/404.css';

const NotFound = () => {
    return (
        <div className="not-found">
            <motion.div 
                className="not-found-content"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h1>404</h1>
                <h2>Page non trouvée</h2>
                <p>La page que vous recherchez n'existe pas ou a été déplacée.</p>
                <Link to="/" className="home-button">
                    Retour à l'accueil
                </Link>
            </motion.div>
        </div>
    );
};

export default NotFound;
