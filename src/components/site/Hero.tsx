import hero from "@/assets/hero.jpg";
import heroVideo from "@/assets/hero.mp4.asset.json";
import { useT } from "@/i18n/LanguageContext";
import BookingWidget from "./BookingWidget";

export default function Hero() {
  const t = useT();

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <video
        src={heroVideo.url}
        poster={hero}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-bark/50" />
      <div className="absolute inset-0 bg-gradient-to-b from-bark/40 via-bark/30 to-bark/70" />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 md:px-12 text-center text-cream">
        <span className="inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] text-ochre-soft reveal">
          <span className="h-px w-10 bg-ochre-soft" /> {t.hero.eyebrow} <span className="h-px w-10 bg-ochre-soft" />
        </span>
        <h1 className="mt-8 font-display font-light text-[clamp(3.5rem,11vw,11rem)] leading-[0.9] tracking-[-0.04em] text-balance reveal-slow">
          {t.hero.titleA}{" "}
          <em className="italic text-ochre-soft">{t.hero.titleB}</em>
          <span className="text-ochre-soft">!</span>
        </h1>

        <div className="mt-14 flex flex-col items-center gap-6 reveal">
          <BookingWidget />

        </div>
      </div>

    </section>
  );
}
