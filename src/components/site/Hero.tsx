import { useEffect, useState } from "react";
import hero from "@/assets/hero.jpg";
import mobileVideo from "@/assets/1.Reels_LongaDuracao.mp4";
import desktopVideo from "@/assets/2.Filme_TurismoLongaDuracao.mp4";
import { useT } from "@/i18n/LanguageContext";

export default function Hero() {
  const t = useT();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile(); // Check immediately on mount
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <video
        key={isMobile ? "mobile" : "desktop"}
        src={isMobile ? mobileVideo : desktopVideo}
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
      </div>
    </section>
  );
}
