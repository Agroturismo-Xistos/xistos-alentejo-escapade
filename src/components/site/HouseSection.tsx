import SectionHeading from "./SectionHeading";
import ImageCarousel from "./ImageCarousel";
import c1 from "@/assets/common-1.jpg";
import c2 from "@/assets/common-pool.jpg";
import c3 from "@/assets/common-living.jpg";
import c4 from "@/assets/common-kitchen.jpg";
// Galeria de imagens do apartamento, atualizada com novos assets
import c5 from "@/assets/common-pool-snack.jpg";
import c6 from "@/assets/common-6.jpg";
import c7 from "@/assets/common-7.jpg";
import c8 from "@/assets/common-8.jpg";
import c9 from "@/assets/common-9.jpg";
import r1 from "@/assets/room-1.jpg";
import r2 from "@/assets/room-2.jpg";
import r3 from "@/assets/room-3.jpg";
import r4 from "@/assets/room-4.jpg";
import r5 from "@/assets/room-5.jpg";
import r6 from "@/assets/room-6.jpg";
import a1 from "@/assets/apartamento-1.jpg";
import a2 from "@/assets/apartamento-2.jpg";
import a3 from "@/assets/apartamento-3.jpg";
import a4 from "@/assets/apartamento-4.jpg";
import { useT } from "@/i18n/LanguageContext";

const groupImages = [
  [c1, c2, c3, c4, c8, c5, c6, c7, c9],
  [r1, r2, r6, r3, r4, r5],
  [a1, a3, a4, a2],
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
    <section id="casa" className="py-16 md:py-24 bg-cream">
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

        <div className="mt-16 space-y-16">
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
                <div className="lg:col-span-8 order-2 lg:order-none">
                  <ImageCarousel images={images} />
                </div>
                <div className="lg:col-span-4 order-1 lg:order-none">
                  <span className="font-display italic text-ochre text-xl">— 0{i + 1}</span>
                  <h3 className="mt-4 font-display font-light text-4xl md:text-5xl text-olive-deep leading-[0.95] tracking-[-0.02em]">
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
