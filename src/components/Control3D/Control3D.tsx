"use client";

import { OrbitControls } from "@react-three/drei";
import { ReactElement } from "react";

export default function Control3D(): ReactElement {
  return (
    <OrbitControls
      minDistance={500}
      maxDistance={100}
      minPolarAngle={Math.PI / 4}
      maxPolarAngle={Math.PI / 2}
      target={[0, 200, 0]}
    />
  );
}
