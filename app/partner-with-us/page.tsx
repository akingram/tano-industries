import type { Metadata } from "next";
import { PartnerPage } from "../site";

export const metadata: Metadata = {
  title: "Partner With Tano Industries",
  description:
    "Tano Industries builds through partnership. If you bring expertise, capital, or market access, let's talk about building Africa's next industry together.",
};

export default function Page() {
  return <PartnerPage />;
}
