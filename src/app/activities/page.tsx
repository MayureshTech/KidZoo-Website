import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AppPageTemplate } from "@/components/sections/AppPageTemplate";
import { getAppBySlug } from "@/lib/apps-data";

export default function ActivitiesPage() {
  const app = getAppBySlug("/activities");
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
