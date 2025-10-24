import React from 'react';
import { motion } from 'framer-motion';
import "../../assets/projet/Projet.css";
import "../../assets/projet/Techno.css";

const Techno = ({ technologies }) => {
    if (!technologies) return null;

    return (
        <motion.div 
            className="tech-container"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <h2>Technologies Utilisées</h2>
            <div className="tech-grid">
                {Object.entries(technologies).map(([tech, description], index) => (
                    <motion.div
                        key={tech}
                        className="tech-bubble"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ 
                            scale: 1.05,
                            boxShadow: "0 8px 16px rgba(0,0,0,0.1)"
                        }}
                    >
                        <h3>{tech}</h3>
                        <p>{description}</p>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default Techno;
