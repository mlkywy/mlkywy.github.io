import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import "../../index.css";

const Shape = ({ time, ...props }) => {
  return (
    <mesh {...props}>
      <sphereGeometry />
      <meshStandardMaterial roughness={0} emissive="#171923" />
      <Html distanceFactor={15}>
        <div className="w-24 p-2.5 translate-x-1/2 text-center bg-light2 dark:bg-dark2 rounded-lg text-sm text-dark1 dark:text-light1 font-monospace">
          hello, world!
        </div>
      </Html>
    </mesh>
  );
};

const Content = () => {
  const ref = useRef();

  const [click, setClick] = useState(false);

  useFrame(() => {
    if (click) {
      ref.current.rotation.x =
        ref.current.rotation.y =
        ref.current.rotation.z +=
          0.015;
    } else {
      ref.current.rotation.x =
        ref.current.rotation.y =
        ref.current.rotation.z -=
          0.015;
    }
  });

  return (
    <group
      ref={ref}
      onClick={() => {
        setClick(!click);
      }}
    >
      <Shape position={[-2, 0, 0]} />
      <Shape position={[0, -2, -2]} />
      <Shape position={[2, 0, 0]} />
    </group>
  );
};

const Light = () => {
  return (
    <>
      <pointLight color="red" />
      <pointLight position={[10, 10, -10]} color="#F27579" />
      <pointLight position={[-10, -10, 10]} color="#84a59d" />
    </>
  );
};
export const ShapeCanvas = () => {
  return (
    <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 11] }}>
      <Light />
      <Content />
    </Canvas>
  );
};
