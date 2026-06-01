import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroPlaydates } from "@/components/sections/HeroPlaydates";
import { MissionSection } from "@/components/sections/MissionSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { EcosystemGrid } from "@/components/sections/EcosystemGrid";
import { NewsletterSection } from "@/components/sections/NewsletterSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <HeroPlaydates />
        <MissionSection />
        <FeaturesSection />
        <EcosystemGrid />
        <NewsletterSection />
      </main>
      <Footer />
    </>
  );
}
