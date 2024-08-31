import React, { useRef } from 'react';
import { useTexture } from '@react-three/drei';
import * as THREE from 'three';
import banner from '../assets/banner1.png';
import { useFrame } from '@react-three/fiber';

const Cyl = () => {
    const tex = useTexture(banner); 
    let cyl = useRef(null);

    useFrame((state, delta) => {
        cyl.current.rotation.y += delta ; // Slow down the rotation by multiplying delta by 0.2
    });

    return (
        <group rotation={[0, 1.4, 0.5]}>
            <mesh ref={cyl}>
                <cylinderGeometry args={[1, 1, 1, 60, 60, true]} />
                <meshStandardMaterial map={tex} transparent side={THREE.DoubleSide} color={0xffffff} />
            </mesh>
        </group>
    );
};

export default Cyl;
