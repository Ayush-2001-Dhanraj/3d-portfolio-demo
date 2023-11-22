import { useGLTF } from "@react-three/drei";
// @ts-ignore
import skyScene from "../assets/3d/sky.glb";

function Sky() {
  const sky = useGLTF(skyScene);

  return (
    <mesh>
      <primitive object={sky.scene} />
    </mesh>
  );
}

export default Sky;
