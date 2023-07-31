import { ReactElement } from "react";
import { DirectionalLight } from "three";

export default function Light3D(): ReactElement {
  return (
    <directionalLight position={[5, 10, 5]} intensity={1.25} color="white" />
  );
}
