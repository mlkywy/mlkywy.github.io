import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import "../../index.css";

const Sphere = ({ time, ...props }) => {
  return (
    <mesh {...props}>
      <sphereGeometry />
      <meshStandardMaterial roughness={0} emissive="#171923" />
      <Html distanceFactor={15}>
        <div className="w-24 p-2.5 translate-x-1/2 text-center bg-light2 dark:bg-dark2 rounded-lg text-sm text-dark1 dark:text-light1">
          hello world
          <br />
        </div>
      </Html>
    </mesh>
  );
};

const Content = () => {
  const ref = useRef();
  useFrame(
    () =>
      (ref.current.rotation.x =
        ref.current.rotation.y =
        ref.current.rotation.z +=
          0.015)
  );
  return (
    <group ref={ref}>
      <Sphere position={[-2, 0, 0]} />
      <Sphere position={[0, -2, -2]} />
      <Sphere position={[2, 0, 0]} />
    </group>
  );
};

export default Content;
