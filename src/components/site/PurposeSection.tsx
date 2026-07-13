import bg from "@/assets/purpose-couple.jpg";
import { useT } from "@/i18n/LanguageContext";

export default function PurposeSection() {
  const t = useT();
  return (
    <section id="proposito" className="relative py-16 md:py-24 overflow-hidden bg-sand/40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12 grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        <div className="lg:col-span-7">
          <span className="inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] text-ochre">
            <span className="h-px w-8 bg-current" /> {t.purpose.eyebrow}
          </span>
          <h2 className="mt-6 font-display font-light text-6xl md:text-7xl lg:text-[5.5rem] text-olive-deep leading-[0.95] tracking-[-0.03em]">
            <em className="not-italic italic">{t.purpose.title}</em>
          </h2>

          <div className="mt-10 space-y-7 text-xl md:text-2xl leading-[1.5] text-bark/80 font-display font-light tracking-[-0.01em] max-w-2xl">
            <p>
              {t.purpose.p1Part1}<span className="text-ochre">{t.purpose.p1Part2}</span>
            </p>
            <p className="text-bark/60 text-lg md:text-xl">{t.purpose.p2}</p>
            <p className="text-bark/60 text-lg md:text-xl">{t.purpose.p3}</p>
          </div>

          <p className="mt-12 inline-flex items-center gap-4 font-display italic text-3xl md:text-4xl text-ochre tracking-tight">
            <span className="h-px w-12 bg-ochre" />
            {t.purpose.end}
          </p>
        </div>

        <div className="lg:col-span-5 relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
            <img src={bg} alt="" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-bark/15" />
          </div>
          <div className="absolute -bottom-6 -right-6 hidden md:block">
            <span className="font-display italic text-olive-deep/15 text-[10rem] leading-none">”</span>
          </div>
        </div>
      </div>
    </section>
  );
}
