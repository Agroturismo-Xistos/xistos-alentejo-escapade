import SectionHeading from "./SectionHeading";
import ImageCarousel from "./ImageCarousel";
import c1 from "@/assets/common-1.jpg.asset.json";
import c2 from "@/assets/common-2.jpg.asset.json";
import c3 from "@/assets/common-3.jpg.asset.json";
import c4 from "@/assets/common-4.jpg.asset.json";
import c5 from "@/assets/common-5.jpg.asset.json";
import c6 from "@/assets/common-6.jpg.asset.json";
import c7 from "@/assets/common-7.jpg.asset.json";
import c8 from "@/assets/common-8.jpg.asset.json";
import c9 from "@/assets/common-9.jpg.asset.json";
import r1 from "@/assets/room-1.jpg.asset.json";
import r2 from "@/assets/room-2.jpg.asset.json";
import r3 from "@/assets/room-3.jpg.asset.json";
import r4 from "@/assets/room-4.jpg.asset.json";
import r5 from "@/assets/room-5.jpg.asset.json";
import r6 from "@/assets/room-6.jpg.asset.json";
import a1 from "@/assets/apt-1.jpg";
import a2 from "@/assets/apt-2.jpg";
import a3 from "@/assets/apt-3.jpg";
import { useT } from "@/i18n/LanguageContext";

const groupImages = [
  [c1.url, c2.url, c3.url, c4.url, c8.url, c5.url, c6.url, c7.url, c9.url],
  [r1.url, r2.url, r6.url, r3.url, r4.url, r5.url],
  [a1, a2, a3],
];

const roomAlts = [
  "Quarto com vista para a piscina",
  "Exterior dos quartos ao anoitecer",
  "Varanda do quarto com mesa exterior",
  "Casa de banho dos quartos",
  "Detalhe do quarto com secretária",
  "Quarto duplo acolhedor",
];

const commonAlts = [
  "Espaço exterior ao anoitecer",
  "Piscina com vista para o campo",
  "Sala de estar ampla e luminosa",
  "Cozinha e sala de refeições",
  "Balanço de madeira junto à piscina",
  "Mesa de lanche junto à piscina",
  "Fachada ao anoitecer com escultura iluminada",
  "Sala de jantar com detalhes decorativos",
  "Baloiço com vista para o campo ao pôr-do-sol",
];

export default function HouseSection() {
  const t = useT();
  return (
    <section id="casa" className="py-28 md:py-40 bg-cream">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="flex items-end justify-between gap-10 flex-wrap">
          <SectionHeading
            align="left"
            eyebrow={t.house.eyebrow}
            title={t.house.title}
            subtitle={t.house.subtitle}
          />
          <span className="text-[10px] uppercase tracking-[0.4em] text-bark/40 pb-2">
            {t.house.tag}
          </span>
        </div>

        <div className="mt-24 space-y-32">
          {t.house.groups.map((g, i) => {
            const altsForGroup = i === 0 ? commonAlts : i === 1 ? roomAlts : g.alts;
            const images = groupImages[i].map((src, j) => ({ src, alt: altsForGroup?.[j] ?? g.title }));
            return (
              <div
                key={g.title}
                className={`grid lg:grid-cols-12 gap-10 lg:gap-16 items-center ${
                  i % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""
                }`}
              >
                <div className="lg:col-span-8">
                  <ImageCarousel images={images} />
                </div>
                <div className="lg:col-span-4">
                  <span className="font-display italic text-ochre text-2xl">— 0{i + 1}</span>
                  <h3 className="mt-4 font-display font-light text-5xl md:text-6xl text-olive-deep leading-[0.95] tracking-[-0.02em]">
                    {g.title}
                  </h3>
                  <div className="mt-6 h-px w-12 bg-clay" />
                  <p className="mt-6 text-muted-foreground leading-[1.8] text-[15px] max-w-sm">
                    {g.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
