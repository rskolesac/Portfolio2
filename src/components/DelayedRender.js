import React, { useState, useEffect } from 'react';

function DelayedRender({ delay, children }) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, delay);

        return () => clearTimeout(timer);
    }, [delay]);

    return (
        <div
            style={{
                opacity: isVisible ? 1 : 0,
                transition: 'opacity 1s ease-in-out',
            }}
        >
            {children}
        </div>
    );
}

export default DelayedRender;
