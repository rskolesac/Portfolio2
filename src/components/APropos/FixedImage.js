import React from 'react';

function FixedImage({ imageUrl }) {
    return (
        <div className="fixed-image">
            <img src={imageUrl} alt="dynamique animation" className="image" />
        </div>
    );
}

export default FixedImage;
