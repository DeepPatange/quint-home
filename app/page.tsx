import { Hero } from "@/components/sections/hero";
import { DiffuserShowcase } from "@/components/sections/diffuser-showcase";
import { ScentLibrary } from "@/components/sections/scent-library";
import { Atmosphere } from "@/components/sections/atmosphere";
import { SmartHome } from "@/components/sections/smart-home";
import { FounderTeaser } from "@/components/sections/founder-teaser";
import { JournalTeaser } from "@/components/sections/journal-teaser";

export default function Home() {
  return (
    <>
      <Hero />
      {/* Minimal white breathing space between the hero and the smart-home section */}
      <div
        aria-hidden
        className="h-[clamp(1.25rem,3vh,2.25rem)] bg-[color:var(--color-white)]"
      />
      <SmartHome />
      <DiffuserShowcase />
      <ScentLibrary />
      <FounderTeaser />
      <Atmosphere />
      <JournalTeaser />
    </>
  );
}
