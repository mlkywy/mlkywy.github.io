import * as THREE from "three";
import { Suspense, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import img1 from "../img/img1.jpg";
import img2 from "../img/img2.jpg";
import disp from "../img/displacement/10.jpg";
import "../ImageFadeMaterial";

const FadingImage = () => {
  const ref = useRef();
  const [texture1, texture2, dispTexture] = useTexture([img1, img2, disp]);
  const [hover, setHover] = useState(false);

  useFrame(
    () =>
      (ref.current.dispFactor = THREE.MathUtils.lerp(
        ref.current.dispFactor,
        !!hover,
        0.1
      ))
  );

  return (
    <mesh
      onPointerMove={(e) => setHover(true)}
      onPointerOut={(e) => setHover(false)}
      onClick={(e) =>
        window.open("https://www.artstation.com/mlkywy", "_blank")
      }
    >
      <planeGeometry />
      <imageFadeMaterial
        ref={ref}
        tex={texture1}
        tex-encoding={THREE.sRGBEncoding}
        tex2={texture2}
        tex2-encoding={THREE.sRGBEncoding}
        disp={dispTexture}
        disp-encoding={THREE.sRGBEncoding}
        toneMapped={false}
      />
    </mesh>
  );
};

export const FadingImageCanvas = (props) => {
  return (
    <Canvas camera={{ position: [0, 0, 1.5], fov: 50 }}>
      <Suspense fallback={null}>
        <FadingImage />
      </Suspense>
    </Canvas>
  );
};
