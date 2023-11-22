import { useGLTF } from "@react-three/drei";
// @ts-ignore
import PlaneScene from "../assets/3d/plane.glb";

function Plane({ isRotating, ...props }: any) {
  const { scene, animations } = useGLTF(PlaneScene);
  return (
    <mesh {...props}>
      <primitive object={scene} />
    </mesh>
  );
}

export default Plane;
