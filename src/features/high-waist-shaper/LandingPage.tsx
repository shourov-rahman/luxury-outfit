import { ReactElement } from "react";
import { FAQ } from "./components/FAQ";
import { FooterTrust } from "./components/FooterTrust";
import { Hero } from "./components/Hero";
import { ProblemAgitation } from "./components/ProblemAgitation";
import { RiskReversal } from "./components/RiskReversal";
import { SizeFit } from "./components/SizeFit";
import { SocialProof } from "./components/SocialProof";
import { SolutionShowcase } from "./components/SolutionShowcase";
import { Urgency } from "./components/Urgency";
import { UseCases } from "./components/UseCases";

export default function HighWaistShaperLandingPage(): ReactElement {
  return (
    <main className="min-h-screen font-sans text-slate-900 bg-white">
      <Hero />
      <ProblemAgitation />
      <SolutionShowcase />
      <SocialProof />
      <SizeFit />
      <UseCases />
      <RiskReversal />
      <Urgency />
      <FAQ />
      <FooterTrust />
    </main>
  );
}
