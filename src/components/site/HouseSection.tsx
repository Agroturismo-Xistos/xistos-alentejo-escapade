import SectionHeading from "./SectionHeading";
import ImageCarousel from "./ImageCarousel";
import c1 from "@/assets/common-1.jpg";
import c2 from "@/assets/common-2.jpg";
import c3 from "@/assets/common-3.jpg";
import r1 from "@/assets/room-1.jpg";
import r2 from "@/assets/room-2.jpg";
import r3 from "@/assets/room-3.jpg";
import a1 from "@/assets/apt-1.jpg";
import a2 from "@/assets/apt-2.jpg";
import a3 from "@/assets/apt-3.jpg";
import { useT } from "@/i18n/LanguageContext";

const groupImages = [
  [c1, c2, c3],
  [r1, r2, r3],
  [a1, a2, a3],
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
            const images = groupImages[i].map((src, j) => ({ src, alt: g.alts[j] }));
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
