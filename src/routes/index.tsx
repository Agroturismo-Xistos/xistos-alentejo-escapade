import { createFileRoute } from "@tanstack/react-router";
import { Instagram } from "lucide-react";
import Navbar from "@/components/site/Navbar";
import Hero from "@/components/site/Hero";
import HouseSection from "@/components/site/HouseSection";
import PurposeSection from "@/components/site/PurposeSection";
import NatureSection from "@/components/site/NatureSection";
import ActivitiesSection from "@/components/site/ActivitiesSection";
import CampaignSection from "@/components/site/CampaignSection";
import LocationSection from "@/components/site/LocationSection";
import Footer from "@/components/site/Footer";
import BookingWidget from "@/components/site/BookingWidget";
import greenKey from "@/assets/greenkey.png.asset.json";
import biosphere from "@/assets/biosphere.png.asset.json";



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
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-[min(100%-1rem,56rem)] px-2 pointer-events-none">
        <div className="pointer-events-auto">
          <BookingWidget />
        </div>
      </div>
      <div className="fixed bottom-4 left-4 z-50 flex items-end gap-3 bg-cream/90 backdrop-blur rounded-lg p-2 shadow-lg">
        <img src={greenKey.url} alt="Green Key" className="h-14 w-auto object-contain" />
        <img src={biosphere.url} alt="Biosphere Sustainable Lifestyle" className="h-14 w-auto object-contain" />
      </div>
    </main>
  );
}
