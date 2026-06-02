import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroCarousel } from "@/components/sections/HeroCarousel";
import { MissionSection } from "@/components/sections/MissionSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { EcosystemCarousel } from "@/components/sections/EcosystemCarousel";
import { NewsletterSection } from "@/components/sections/NewsletterSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <HeroCarousel />
        <MissionSection />
        <FeaturesSection />
        <EcosystemCarousel />
        <NewsletterSection />
      </main>
      <Footer />
    </>
  );
}
