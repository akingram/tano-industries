import type { Metadata } from "next";
import { RubberPage } from "../site";

export const metadata: Metadata = {
  title:
    "Tano Tire and Rubber Company | Rubber, Tires and Rubber Products from Africa",
  description:
    "Tano Tire and Rubber Company plants, develops, manufactures, and sells rubber products, from natural rubber, synthetic rubber and tires to hoses, cables, and footwear.",
};

export default function Page() {
  return <RubberPage />;
}
