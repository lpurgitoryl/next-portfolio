"use client";
// tysm @ https://www.hover.dev/components/three-d

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import { pointsInner, pointsOuter } from "../utils/utils";
import { useRef, useEffect, useState } from "react";

const ParticleRing = () => {
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    if ("ontouchstart" in window) {
      // Device supports touch events, likely a mobile device
      setIsTouchDevice(true);
      // console.log("This is a touch device");
    } else {
      // Device does not support touch events, likely a desktop
      setIsTouchDevice(false);
      //console.log("This is not a touch device");
    }
  }, []);

  return (
    <div className="absolute w-[95vw] md:w-full h-screen z-20">
      <Canvas
        camera={{
          position: [10, -7.5, -5],
        }}
        style={{
          pointerEvents: isTouchDevice ? "none" : "auto", // Allow scrolling on touch devices
        }}
      >
        <OrbitControls
          maxDistance={20}
          minDistance={10}
          enableZoom={false}
          enablePan={!isTouchDevice}
          enableRotate={!isTouchDevice}
        />
        <directionalLight />
        <pointLight position={[-30, 0, -30]} power={10.0} />
        <PointCircle />
      </Canvas>
    </div>
  );
};

const PointCircle = () => {
  const ref = useRef(null);

  useFrame(({ clock }) => {
    if (ref.current?.rotation) {
      ref.current.rotation.z = clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <group ref={ref}>
      {pointsInner.map((point) => (
        <Point key={point.idx} position={point.position} color={point.color} />
      ))}
      {pointsOuter.map((point) => (
        <Point key={point.idx} position={point.position} color={point.color} />
      ))}
    </group>
  );
};

const Point = ({ position, color }) => {
  return (
    <Sphere position={position} args={[0.1, 10, 10]}>
      <meshStandardMaterial
        emissive={color}
        emissiveIntensity={0.5}
        roughness={0.5}
        color={color}
      />
    </Sphere>
  );
};

export default ParticleRing;
