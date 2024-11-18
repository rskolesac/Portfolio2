import React from 'react';
import { motion } from 'framer-motion';

function ParcoursImages({ images }) {
    return (
        <div className="parcours-images">
            {images.filter(image => image.trim() !== "").map((image, index) => (
                <motion.img
                    key={index}
                    src={image}
                    alt={`Illustration ${index + 1}`}
                    className="parcours-image"
                />
            ))}
        </div>
    );
}

export default ParcoursImages;
