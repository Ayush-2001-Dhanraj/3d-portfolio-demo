import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import Loader from "../components/Loader";
import Sky from "../models/Sky";
import Bird from "../models/Bird";
import Plane from "../models/Plane";
import Island from "../models/Island";
import HomeContent from "../components/HomeContent";

function Home() {
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState<null | number>(null);

  const adjustIslandForScreenSize = () => {
    let islandScale = null;
    const islandPosition = [0, -6.5, -43];
    const islandRotation = [0.1, 4.7, 0];

    if (window.innerWidth < 768) {
      islandScale = [0.9, 0.9, 0.9];
    } else {
      islandScale = [1, 1, 1];
    }

    return [islandScale, islandPosition, islandRotation];
  };

  const adjustPlaneForScreenSize = () => {
    let planeScale, planePosition;

    if (window.innerWidth < 768) {
      planeScale = [1.5, 1.5, 1.5];
      planePosition = [0, -1.5, 0];
    } else {
      planeScale = [3, 3, 3];
      planePosition = [0, -4, -4];
    }

    return [planeScale, planePosition];
  };

  const [islandScale, islandPosition, islandRotation] =
    adjustIslandForScreenSize();

  const [planeScale, planePosition] = adjustPlaneForScreenSize();

  return (
    <section className="h-screen w-full relative">
      <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
        {currentStage && <HomeContent currentStage={currentStage} />}
      </div>
      <Canvas
        className={`h-screen w-full bg-transparent ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <hemisphereLight
            color="#b1e1ff"
            groundColor="#000000"
            intensity={1}
          />

          <Bird />

          <Sky isRotating={isRotating} />

          <Island
            scale={islandScale}
            position={islandPosition}
            rotation={islandRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
          />

          <Plane
            isRotating={isRotating}
            planeScale={planeScale}
            planePosition={planePosition}
            rotation={[0, 20, 0]}
          />
        </Suspense>
      </Canvas>
    </section>
  );
}

export default Home;
