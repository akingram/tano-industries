import type { Metadata } from "next";
import { HomePage } from "./site";

export const metadata: Metadata = {
  title: "Tano Industries | Unlocking the Value of African Natural Resources",
  description:
    "Tano Industries builds African industries from the ground up, turning raw materials into finished products through manufacturing, mining, refining, and agriculture.",
};

export default function Home() {
  return <HomePage />;
}
