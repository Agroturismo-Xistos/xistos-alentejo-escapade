import { useMemo } from "react";
import SectionHeading from "./SectionHeading";
import ImageCarousel from "./ImageCarousel";
import n1 from "@/assets/nature-1.jpg";
import n2 from "@/assets/nature-2.jpg";
import n3 from "@/assets/nature-3.jpg";
import n4 from "@/assets/nature-4.jpg";
import n5 from "@/assets/nature-5.jpg";
import n6 from "@/assets/nature-6.jpg";
import n7 from "@/assets/nature-7.jpg";
import n8 from "@/assets/nature-8.jpg";
import n9 from "@/assets/nature-9.jpg";
import n10 from "@/assets/nature-10.jpg";
import { useT } from "@/i18n/LanguageContext";

const all = [n1, n2, n3, n4, n5, n6, n7, n8, n9, n10];

export default function NatureSection() {
  const t = useT();
  const shuffled = useMemo(() => {
    const a = [...all];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }, []);
  const images = shuffled.map((src) => ({ src, alt: t.nature.title }));

  return (
    <section id="natureza" className="py-28 md:py-40 bg-cream">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-end">
          <div className="lg:col-span-5">
            <SectionHeading
              align="left"
              eyebrow={t.nature.eyebrow}
              title={t.nature.title}
              subtitle={t.nature.subtitle}
            />
          </div>
          <div className="lg:col-span-7 text-bark/75 leading-[1.8] text-[15px] space-y-5">
            <p>{t.nature.p1}</p>
            <p>{t.nature.p2}</p>
            <div className="flex flex-wrap gap-2 pt-4">
              {t.nature.tags.map((tag) => (
                <span key={tag} className="text-[11px] uppercase tracking-[0.2em] px-3 py-1.5 rounded-full border border-bark/15 text-bark/70">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20">
          <ImageCarousel images={images} aspect="aspect-[21/9]" />
        </div>
      </div>
    </section>
  );
}
