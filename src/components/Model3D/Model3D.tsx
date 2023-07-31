"use client";

import React, { useRef, useMemo, useState } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export default function Robot3D() {
  const [robotModel, setRobotModel] = useState(null);

  useMemo(() => {
    const loader = new GLTFLoader();

    loader.load(
      "/models/range-rover.glb",
      (gltf: any) => {
        console.log("Robot model loaded:", gltf);
        setRobotModel(gltf.scene);
      },
      (progress: any) => {
        console.log("Robot model loading progress:", progress);
      },
      (error: any) => {
        console.error("Error loading the 3D model:", error);
      }
    );
  }, []);

  if (!robotModel) {
    return null;
  }

  return <primitive object={robotModel} />;
}
