import type { Metadata } from "next";
import { AboutPage } from "../site";

export const metadata: Metadata = {
  title:
    "About Tano Industries | Manufacturing, Mining, Agriculture and Natural Resources",
  description:
    "Learn how Tano Industries partners across Africa to develop, process, and manufacture raw materials into finished products for local and global markets.",
};

export default function Page() {
  return <AboutPage />;
}
