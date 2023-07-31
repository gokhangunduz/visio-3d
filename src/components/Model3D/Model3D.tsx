"use client";

import React, { useRef, useMemo, useState, ReactElement } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export default function Model3D(): ReactElement {
  const [model, setModel] = useState(null);

  useMemo(() => {
    const loader = new GLTFLoader();

    loader.load(
      "/models/range-rover.glb",
      (gltf: any) => {
        console.log("Model loaded:", gltf);
        setModel(gltf.scene);
      },
      (progress: any) => {
        console.log("Model loading progress:", progress);
      },
      (error: any) => {
        console.error("Error loading the 3D model:", error);
      }
    );
  }, []);

  if (!model) {
    return <></>;
  }

  return <primitive object={model} />;
}
