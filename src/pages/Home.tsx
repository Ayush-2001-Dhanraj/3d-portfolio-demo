{
  /* <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
  POPUP
</div> */
}

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Loader from "../components/Loader";
import Island from "../models/island";

function Home() {
  const adjustIslandForScreenSize = () => {
    let screenScale = null;
    const screenPosition = [0, -6.5, -43];
    const screenRotataion = [0.1, 4.7, 0];

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
    } else {
      screenScale = [1, 1, 1];
    }

    return [screenScale, screenPosition, screenRotataion];
  };

  const [screenScale, screenPosition, screenRotataion] =
    adjustIslandForScreenSize();

  return (
    <section className="h-screen w-full relative">
      <Canvas
        className="h-screen w-full bg-transparent"
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight />
          <ambientLight />
          <pointLight />
          <spotLight />
          <hemisphereLight />

          <Island
            scale={screenScale}
            position={screenPosition}
            rotation={screenRotataion}
          />
        </Suspense>
      </Canvas>
    </section>
  );
}

export default Home;
