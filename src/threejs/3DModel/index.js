import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Html, useGLTF } from "@react-three/drei";

const Model = () => {
  const gltf = useGLTF("/scene.glb", true);
  return <primitive object={gltf.scene} dispose={null} />;
};

const HTMLContent = () => {
  return (
    <Html>
      <h1 className="title">title</h1>
    </Html>
  );
};

const Light = () => {
  return (
    <>
      <ambientLight intensity={0.1} />
      <directionalLight position={[10, 10, 5]} intensity={0.8} />
      <directionalLight position={[0, 10, 0]} intensity={1.5} color="#fb5d58" />
      <spotLight intensity={1} position={[1000, 0, 0]} />
    </>
  );
};

const Content = () => {
  const ref = useRef();
  useFrame(() => (ref.current.rotation.y += 0.03));
  return (
    <group ref={ref}>
      <Model position={[0, 0, 0]} />
    </group>
  );
};

export const ModelCanvas = () => {
  return (
    <Canvas camera={{ position: [0, 2, 1] }}>
      <Light />
      <Suspense fallback={null}>
        <Content />
      </Suspense>
    </Canvas>
  );
};
