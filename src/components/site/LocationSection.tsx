import SectionHeading from "./SectionHeading";
import { MapPin, ExternalLink } from "lucide-react";

const ADDRESS = "Herdade Monte da Ponte - Estrada Nacional 122, Km 18 - Trindade, 7800-786 Beja";
const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`;
const EMBED = `https://www.google.com/maps?q=${encodeURIComponent(ADDRESS)}&output=embed`;

export default function LocationSection() {
  return (
    <section id="localizacao" className="py-24 md:py-32 bg-sand/60">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Como chegar"
          title="Localização"
          subtitle="O Agroturismo Xistos está localizado no distrito de Beja, entre Beja e Mértola, perto de Vale de Açor. Um refúgio rural no coração do Alentejo, com acesso fácil e envolvido pela tranquilidade da natureza."
        />

        <div className="mt-16 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5 space-y-8">
            <div className="grid grid-cols-2 gap-4">
              {[
                { km: "19", to: "kms de Beja" },
                { km: "35", to: "kms de Mértola" },
              ].map((d) => (
                <div key={d.km} className="rounded-3xl bg-card p-6 shadow-soft text-center border border-border">
                  <div className="font-display text-5xl text-ochre">{d.km}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{d.to}</div>
                </div>
              ))}
            </div>

            <div className="rounded-3xl bg-card p-7 shadow-soft border border-border">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-ochre mt-1 shrink-0" />
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">Morada</p>
                  <p className="mt-1 text-olive-deep leading-relaxed">{ADDRESS}</p>
                </div>
              </div>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-olive-deep text-cream px-6 py-3 text-sm hover:bg-ochre transition"
              >
                <ExternalLink className="h-4 w-4" /> Abrir no Google Maps
              </a>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="relative rounded-3xl overflow-hidden shadow-card aspect-[4/3] lg:aspect-auto lg:h-full min-h-[420px] border border-border">
              <iframe
                title="Mapa Agroturismo Xistos"
                src={EMBED}
                className="absolute inset-0 w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
