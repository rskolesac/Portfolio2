import React from 'react';
import { motion } from 'framer-motion';

function SkillItem({ skill, items, isActive, onClick, imageSrc, index }) {
    return (
        <div className={`skill-item-container ${isActive ? 'active' : ''}`} onClick={onClick}>
            <div className="skill-header">
                <img src={imageSrc} alt={`${skill} icon`} className="skill-icon" />
                <h3 className="skill-title">{skill}</h3>
            </div>
            {isActive && (
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5 }}
                    className="skill-details-container"
                >
                    <ul className="skill-details">
                        {items.map((item, idx) => (
                            <li key={idx} className="skill-detail-item">{item}</li>
                        ))}
                    </ul>
                </motion.div>
            )}
            <p className="skill-index">0{index + 1}</p> {/* Affichage du numéro */}
        </div>
    );
}

export default SkillItem;
