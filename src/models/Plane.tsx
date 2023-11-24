import { useAnimations, useGLTF } from "@react-three/drei";
// @ts-ignore
import PlaneScene from "../assets/3d/plane.glb";
import { useEffect, useRef } from "react";
import React from "react";

function Plane({ isRotating, ...props }: any) {
  const ref = useRef();
  const { scene, animations } = useGLTF(PlaneScene);
  const { actions } = useAnimations(animations, ref);

  useEffect(() => {
    if (isRotating) {
      actions["Take 001"]?.play();
    } else {
      actions["Take 001"]?.stop();
    }
  }, [actions, isRotating]);

  return (
    <mesh {...props}>
      <primitive object={scene} ref={ref} />
    </mesh>
  );
}

export default Plane;
