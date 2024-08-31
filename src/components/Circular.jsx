import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useState, useEffect } from "react";
import Cyl from "./Cyl";
import { Bloom, EffectComposer } from "@react-three/postprocessing";

const Circular = () => {
  const [fov, setFov] = useState(60); // Default fov for larger screens

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 640) { // 'sm' breakpoint
        setFov(60);
      } else if (window.innerWidth <= 768) { // 'md' breakpoint
        setFov(53);
      } else if (window.innerWidth <= 1024) { // 'lg' breakpoint
        setFov(48);
      } else {
        setFov(45);
      }
    };
    
    window.addEventListener('resize', handleResize);
    handleResize(); // Set initial fov based on the initial screen size

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // useEffect to log the fov whenever it changes
  useEffect(() => {
    console.log(`Current fov: ${fov}`);
  }, [fov]);

  return (
    <div className="circular w-[60vh] h-[80vh] sm:w-[90vh] sm:h-[90vh] sm:pl-[10%] md:w-[100vh] md:pl-[15%] rounded-[50%] md:h-[85vh] lg:w-[150vh] lg:h-[100vh] lg:pl-[25%] absolute lg:top-[-45px] ">
      <Canvas camera={{ fov }}>
        <OrbitControls />
        <ambientLight />
        <Cyl />
        <EffectComposer>
          <Bloom
            intensity={7.5} // Lower intensity for a subtler bloom effect
            luminanceThreshold={0.2} // Only apply bloom to brighter areas
            luminanceSmoothing={0.1} // Smooth the transition for a softer bloom
            mipmapBlur
          />
        </EffectComposer>
      </Canvas>
    </div>
  );
};

export default Circular;
