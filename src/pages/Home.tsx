// @ts-nocheck
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import Loader from "../components/Loader";
import Sky from "../models/Sky";
import Bird from "../models/Bird";
import Plane from "../models/Plane";
import HomeContent from "../components/HomeContent";
import React from "react";
import sakura from "../assets/sakura.mp3";
import { soundoff, soundon } from "../assets/icons";
import Main from "../models/Main";
import { arrow } from "../assets/icons";
import Tower from "../models/Tower";

function Home() {
  const audioRef = useRef(new Audio(sakura));
  audioRef.current.volume = 0.4;
  audioRef.current.loop = true;

  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState<null | number>(1);
  const [isPlayingMusic, setIsPlayingMusic] = useState(true);

  useEffect(() => {
    if (isPlayingMusic) audioRef.current.play();

    return () => {
      audioRef.current.pause();
    };
  }, [isPlayingMusic]);

  const adjustIslandForScreenSize = () => {
    let islandScale: Array<number> | null = null;
    const islandPosition = [0, -20, -43];
    const islandRotation = [0.1, 4.7, 0];

    if (window.innerWidth < 768) {
      islandScale = [1.1, 1.1, 1.1];
    } else {
      islandScale = [2, 2, 2];
    }

    return [islandScale, islandPosition, islandRotation];
  };

  const adjustPlaneForScreenSize = () => {
    let planeScale, planePosition;

    if (window.innerWidth < 768) {
      planeScale = [1.5, 1.5, 1.5];
      planePosition = [0, -1.5, 0];
    } else {
      planeScale = [4, 4, 4];
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
          <directionalLight position={[1, 1, 1]} intensity={1} />
          <ambientLight intensity={0.5} />
          <hemisphereLight
            color="#b1e1ff"
            groundColor="#000000"
            intensity={1}
          />

          <Bird />

          <Sky isRotating={isRotating} />

          <Tower
            scale={islandScale}
            position={islandPosition}
            rotation={islandRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
          />

          {/* island model */}

          {/* <Main
            scale={islandScale}
            position={islandPosition}
            rotation={islandRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
          /> */}

          <Plane
            isRotating={isRotating}
            scale={planeScale}
            position={planePosition}
            rotation={[0, 20, 0]}
          />
        </Suspense>
      </Canvas>
      <div className="absolute bottom-2 left-2">
        <img
          src={isPlayingMusic ? soundon : soundoff}
          onClick={() => setIsPlayingMusic(!isPlayingMusic)}
          className="w-10 h-10 cursor-pointer object-contain"
          alt="sound"
        />
      </div>
      {!isRotating && (
        <div className="flex gap-4 items-center text-center text-slate-200 font-medium absolute top-[90%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <img src={arrow} className="w-4 h-4 object-contain scale-x-[-1]" />
          Drag or use arrow keys to travel
          <img src={arrow} className="w-4 h-4 object-contain" />
        </div>
      )}
    </section>
  );
}

export default Home;
