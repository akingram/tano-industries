import type { Metadata } from "next";
import { VisionPage } from "../site";

export const metadata: Metadata = {
  title: "Our Vision | Tano Industries",
  description:
    "Tano Industries is building a platform for Africa to process, manufacture, and export value to a larger share of global value chains.",
};

export default function Page() {
  return <VisionPage />;
}
