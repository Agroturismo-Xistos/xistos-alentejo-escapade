import hero from "@/assets/hero.jpg";
import heroVideo from "@/assets/hero.mp4.asset.json";
import { MessageCircle, ArrowRight, Sparkles } from "lucide-react";

const WHATSAPP = "https://wa.me/351964814928?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20Agroturismo%20Xistos.";

export default function Hero() {
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
      <div className="absolute inset-0 bg-gradient-to-b from-bark/40 via-bark/20 to-bark/70" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,oklch(0.22_0.018_60/0.5)_100%)]" />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 md:px-12 text-center text-cream">
        <span className="inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] text-ochre-soft reveal">
          <span className="h-px w-10 bg-ochre-soft" /> Agroturismo · Boutique Retreat <span className="h-px w-10 bg-ochre-soft" />
        </span>
        <h1 className="mt-8 font-display font-light text-[clamp(3.5rem,11vw,11rem)] leading-[0.9] tracking-[-0.04em] text-balance reveal-slow">
          A vida é de{" "}
          <em className="italic text-ochre-soft">Momentos</em>
          <span className="text-ochre-soft">!</span>
        </h1>

        <div className="mt-14 flex flex-wrap items-center justify-center gap-3 reveal">
          <a
            href="#campanhas"
            className="group inline-flex items-center gap-3 rounded-full bg-cream text-olive-deep pl-6 pr-2 py-2 text-[11px] uppercase tracking-[0.22em] font-medium hover:bg-ochre hover:text-cream transition-all duration-500"
          >
            Reservar Estadia
            <span className="grid place-items-center h-9 w-9 rounded-full bg-olive-deep text-cream group-hover:bg-cream group-hover:text-ochre transition-all">
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </span>
          </a>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-cream/40 px-5 py-3 text-[11px] uppercase tracking-[0.22em] text-cream backdrop-blur-sm hover:bg-cream/10 hover:border-cream transition-all"
          >
            <MessageCircle className="h-3.5 w-3.5" /> WhatsApp
          </a>
          <a
            href="#campanhas"
            className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-ochre-soft hover:text-cream transition-colors px-3 py-3 border-b border-ochre-soft/40 hover:border-cream"
          >
            <Sparkles className="h-3.5 w-3.5" /> Muda os teus Planos
          </a>
        </div>
      </div>

      <a
        href="#casa"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-cream/70 text-[10px] tracking-[0.4em] uppercase z-10 flex flex-col items-center gap-2 hover:text-cream transition-colors"
      >
        <span className="h-10 w-px bg-cream/40" />
        scroll
      </a>
    </section>
  );
}
