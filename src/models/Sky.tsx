import { useGLTF } from "@react-three/drei";
// @ts-ignore
import skyScene from "../assets/3d/sky.glb";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const Sky = ({ isRotating }: any) => {
  const skyRef = useRef();
  const sky = useGLTF(skyScene);

  useFrame((_, delta) => {
    if (isRotating) {
      // @ts-ignore
      skyRef.current.rotation.y += 0.15 * delta;
    }
  });

  return (
    <mesh>
      <primitive object={sky.scene} ref={skyRef} />
    </mesh>
  );
};

export default Sky;
