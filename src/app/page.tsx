import Scene3D from "@/components/Scene3D/Scene3D";
import Image from "next/image";
import { ReactElement } from "react";

export default function Home(): ReactElement {
  return (
    <div className="w-screen h-screen cursor-move">
      <Scene3D />
    </div>
  );
}
