import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

function Model() {
    const { scene } = useGLTF(`${process.env.PUBLIC_URL}/3D/Lightning.glb`);
    const modelRef = useRef();

    // Utilisation de useFrame pour faire tourner le modèle
    useFrame(() => {
        if (modelRef.current) {
            modelRef.current.rotation.y += 0.01; // Ajustez la vitesse de rotation si nécessaire
        }
    });

    return <primitive ref={modelRef} object={scene} scale={0.1} />;
}

function Lightning() {
    return (
        <Canvas camera={{ position: [0, 0, 20] }} style={{ height: '150px', width: '150px' }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[2, 2, 2]} />
            <Model />
        </Canvas>
    );
}

export default Lightning;
