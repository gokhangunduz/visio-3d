"use client";

import { Canvas } from "@react-three/fiber";
import Control3D from "../Control3D/Control3D";
import Light3D from "../Light3D/Light3D";
import Model3D from "../Model3D/Model3D";
import { ReactElement } from "react";

export default function Scene3D(): ReactElement {
  return (
    <Canvas>
      <Model3D />
      <Light3D />
      <Control3D />
    </Canvas>
  );
}
