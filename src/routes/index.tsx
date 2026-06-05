import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/site/Navbar";
import Hero from "@/components/site/Hero";
import HouseSection from "@/components/site/HouseSection";
import PurposeSection from "@/components/site/PurposeSection";
import NatureSection from "@/components/site/NatureSection";
import ActivitiesSection from "@/components/site/ActivitiesSection";
import CampaignSection from "@/components/site/CampaignSection";
import LocationSection from "@/components/site/LocationSection";
import Footer from "@/components/site/Footer";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Agroturismo Xistos · Refúgio no Alentejo, Beja" },
      {
        name: "description",
        content:
          "Agroturismo Xistos — um refúgio rural no coração do Alentejo, entre Beja e Mértola. Natureza, experiências autênticas e estadias memoráveis.",
      },
      { property: "og:title", content: "Agroturismo Xistos · Refúgio no Alentejo" },
      {
        property: "og:description",
        content: "Natureza, calma e autenticidade no coração do Alentejo. Reserve a sua estadia.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-background text-foreground">
      <Navbar />
      <Hero />
      <HouseSection />
      <PurposeSection />
      <NatureSection />
      <ActivitiesSection />
      <CampaignSection />
      <LocationSection />
      <Footer />
      
    </main>
  );
}
