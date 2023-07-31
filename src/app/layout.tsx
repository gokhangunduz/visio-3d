import MainLayout from "@/layouts/MainLayout";
import "@/styles/global.css";
import { ReactElement } from "react";

interface IRootLayout {
  children: ReactElement | ReactElement[];
}

export default function RootLayout({ children }: IRootLayout) {
  return <MainLayout>{children}</MainLayout>;
}
