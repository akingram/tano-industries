import type { Metadata } from "next";
import { GrowthPipelinePage } from "../site";

export const metadata: Metadata = {
  title: "Our Growth Pipeline | Tano Industries",
  description:
    "Beyond rubber, Tano Industries is building a pipeline across copper, aluminum, lithium, cocoa, cassava, and bitumen, developed through global partnerships.",
};

export default function Page() {
  return <GrowthPipelinePage />;
}
