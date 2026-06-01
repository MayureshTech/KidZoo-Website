import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AppPageTemplate } from "@/components/sections/AppPageTemplate";
import { getAppBySlug } from "@/lib/apps-data";

export default function MarketPage() {
  const app = getAppBySlug("/market");
  if (!app) return null;

  return (
    <>
      <Navbar />
      <main className="flex-1">
        <AppPageTemplate app={app} />
      </main>
      <Footer />
    </>
  );
}
