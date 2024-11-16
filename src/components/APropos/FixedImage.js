import React from 'react';

function FixedImage({ imageUrl }) {
    return (
        <div className="fixed-image">
            <img src={imageUrl} alt="Image dynamique" className="image" />
        </div>
    );
}

export default FixedImage;
