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
                    animate={{
                        x: [0, 10, -10, 0],
                        y: [0, -10, 10, 0]
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 5,
                        ease: "easeInOut",
                    }}
                />
            ))}
        </div>
    );
}

export default ParcoursImages;
