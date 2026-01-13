import React, { useRef, useEffect, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import * as THREE from "three";

const AnimatedFBX = ({ animationPath }) => {
  const group = useRef();
  const mixer = useRef();
  const { scene } = useThree();

  useEffect(() => {
    const loader = new FBXLoader();
    loader.load(animationPath, (obj) => {
      obj.scale.set(0.01, 0.01, 0.01); // Adjust size
      scene.clear(); // Clear previous scene
      scene.add(obj);

      mixer.current = new THREE.AnimationMixer(obj);
      if (obj.animations.length > 0) {
        const action = mixer.current.clipAction(obj.animations[0]);
        action.reset().play();
      }
    });
  }, [animationPath, scene]);

  useFrame((state, delta) => {
    if (mixer.current) mixer.current.update(delta);
  });

  return <group ref={group} />;
};

const ThreeModel = () => {
  const [currentAnim, setCurrentAnim] = useState("/models/Happy Idle.fbx");

  const animations = [
    { name: "Slide Hip Hop", path: "/models/Slide Hip Hop Dance.fbx" },
    { name: "Waving", path: "/models/Waving.fbx" },
    { name: "Wave Hip Hop", path: "/models/Wave Hip Hop Dance.fbx" },
    { name: "Happy Idle", path: "/models/Happy Idle.fbx" },
    { name: "Death Fall", path: "/models/Falling Back Death.fbx" },
  ];

  return (
    <div>
      <Canvas camera={{ position: [0, 1, 3], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 2, 5]} intensity={1} />
        <AnimatedFBX animationPath={currentAnim} />
        <OrbitControls />
      </Canvas>

      {/* Animation control buttons */}
      <div style={{ display: "flex", gap: "10px", marginTop: "10px", justifyContent: "center" }}>
        {animations.map((anim, i) => (
          <button key={i} onClick={() => setCurrentAnim(anim.path)}>
            {anim.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ThreeModel;
  