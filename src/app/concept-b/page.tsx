import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroMission } from "@/components/sections/HeroMission";
import { WhyWeExist } from "@/components/sections/WhyWeExist";
import { AppsGridConceptB } from "@/components/sections/AppsGridConceptB";
import { PlaydatesSpotlight } from "@/components/sections/PlaydatesSpotlight";
import { SafetyTrust } from "@/components/sections/SafetyTrust";
import { NewsletterSection } from "@/components/sections/NewsletterSection";

export default function ConceptB() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <HeroMission />
        <WhyWeExist />
        <AppsGridConceptB />
        <PlaydatesSpotlight />
        <SafetyTrust />
        <NewsletterSection />
      </main>
      <Footer />
    </>
  );
}
