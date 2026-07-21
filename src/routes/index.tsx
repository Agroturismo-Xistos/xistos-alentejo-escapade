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
import ContactSection from "@/components/site/ContactSection";

import BookingWidget from "@/components/site/BookingWidget";
import CampaignOverlay from "@/components/site/CampaignOverlay";
import GalleryNudge from "@/components/site/GalleryNudge";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Agroturismo Xistos | Turismo Rural no Alentejo" },
      {
        name: "description",
        content:
          "Descubra o Agroturismo Xistos na Herdade Monte da Ponte, Beja. Uma autêntica experiência de turismo rural no Alentejo. Sustentabilidade, natureza e tranquilidade.",
      },
      { property: "og:title", content: "Agroturismo Xistos | Turismo Rural no Alentejo" },
      {
        property: "og:description",
        content: "Descubra o Agroturismo Xistos na Herdade Monte da Ponte, Beja. Uma autêntica experiência de turismo rural no Alentejo.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: "Agroturismo Xistos | Turismo Rural no Alentejo" },
      {
        name: "twitter:description",
        content: "Descubra o Agroturismo Xistos na Herdade Monte da Ponte, Beja. Uma autêntica experiência de turismo rural no Alentejo.",
      },
    ],
    links: [
      { rel: "canonical", href: "https://www.xistos.pt/" }
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "LodgingBusiness",
              "name": "Agroturismo Xistos Herdade Monte da Ponte",
              "image": "https://www.xistos.pt/og-image.jpg",
              "description": "Descubra o Agroturismo Xistos na Herdade Monte da Ponte, Beja. Uma autêntica experiência de turismo rural no Alentejo. Sustentabilidade, natureza e tranquilidade.",
              "url": "https://www.xistos.pt/",
              "telephone": "+351964814928",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Herdade Monte da Ponte - Estrada Nacional 122, Km 18",
                "addressLocality": "Trindade",
                "postalCode": "7800-786",
                "addressRegion": "Beja",
                "addressCountry": "PT"
              },
              "priceRange": "€€"
            },
            {
              "@type": "WebSite",
              "name": "Agroturismo Xistos",
              "url": "https://www.xistos.pt/",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://www.xistos.pt/?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            },
            {
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "O que é xisto?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "O xisto é uma rocha metamórfica com forte foliação, muito comum na região do Alentejo, e que dá nome ao nosso Agroturismo pelas suas características únicas e forte presença na nossa paisagem e construções."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Quais são as propriedades do xisto?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "O xisto possui alta resistência, impermeabilidade e propriedades térmicas excelentes, sendo tradicionalmente usado na arquitetura alentejana para manter as casas frescas no verão e isoladas no inverno."
                  }
                }
              ]
            }
          ]
        })
      }
    ]
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-background text-foreground">
      <CampaignOverlay />
      <Navbar />
      <Hero />
      <HouseSection />
      <PurposeSection />
      <NatureSection />
      <ActivitiesSection />
      <CampaignSection />
      <LocationSection />
      <ContactSection />

      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-[min(100%-1rem,56rem)] px-2 pointer-events-none">
        <div className="pointer-events-auto">
          <BookingWidget />
        </div>
      </div>

      <div className="fixed bottom-20 md:bottom-4 right-4 z-50 hidden md:flex items-center gap-2 bg-cream/90 backdrop-blur rounded-full p-2 shadow-lg">
        <a
          href="https://www.instagram.com/agroturismoxistos/"
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram"
          className="h-10 w-10 grid place-items-center rounded-full text-bark hover:bg-ochre/20 hover:text-ochre transition-colors"
        >
          <Instagram className="h-5 w-5" />
        </a>
        <a
          href="https://wa.me/351964814928"
          target="_blank"
          rel="noreferrer"
          aria-label="WhatsApp"
          className="h-10 w-10 grid place-items-center rounded-full text-bark hover:bg-ochre/20 hover:text-ochre transition-colors"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
            <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 0 1 8.413 3.488 11.82 11.82 0 0 1 3.48 8.414c-.003 6.554-5.338 11.89-11.893 11.89a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
          </svg>
        </a>
        <a
          href="https://www.tiktok.com/@agroturismoxistos"
          target="_blank"
          rel="noreferrer"
          aria-label="TikTok"
          className="h-10 w-10 grid place-items-center rounded-full text-bark hover:bg-ochre/20 hover:text-ochre transition-colors"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.66a8.07 8.07 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.84-.09z"/>
          </svg>
        </a>
      </div>
    </main>
  );
}
