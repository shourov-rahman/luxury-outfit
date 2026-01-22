import HighWaistShaperLandingPage from "@/features/high-waist-shaper/LandingPage";
import { Metadata } from "next";
import { ReactElement } from "react";

export const metadata: Metadata = {
  title: "High Waist Shaper - Luxury Outfit",
  description: "Get the perfect slim look instantly with our High Waist Shaper. Comfortable, breathable, and perfect for Saree or Kameez.",
};

export default function Page(): ReactElement {
  return <HighWaistShaperLandingPage />;
}
