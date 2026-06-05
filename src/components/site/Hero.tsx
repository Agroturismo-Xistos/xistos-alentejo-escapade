import hero from "@/assets/hero.jpg";
import heroVideo from "@/assets/hero.mp4.asset.json";
import { MessageCircle, ArrowRight, Sparkles } from "lucide-react";

const WHATSAPP = "https://wa.me/351964814928?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20Agroturismo%20Xistos.";

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-end overflow-hidden">
      <video
        src={heroVideo.url}
        poster={hero}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-bark/40 via-bark/10 to-bark/80" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,oklch(0.3_0.035_120/0.4),transparent_60%)]" />




      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 pb-20 md:pb-28 text-cream">
        <div className="max-w-4xl">
          <span className="inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] text-ochre-soft reveal">
            <span className="h-px w-10 bg-ochre-soft" /> Agroturismo · Boutique Retreat
          </span>
          <h1 className="mt-8 font-display font-light text-[clamp(3.5rem,11vw,11rem)] leading-[0.88] tracking-[-0.04em] text-balance reveal-slow">
            A vida é de<br />
            <em className="not-italic italic text-ochre-soft" style={{ fontStyle: "italic" }}>
              Momentos
            </em>
            <span className="text-ochre-soft">.</span>
          </h1>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-12 items-end">
          <p className="max-w-md text-[15px] md:text-base text-cream/85 leading-[1.7] reveal">
            No Agroturismo Xistos, cada paisagem, cada som e cada silêncio lembram-nos
            que a natureza não se visita apenas: sente-se, vive-se e leva-se connosco.
          </p>

          <div className="flex flex-wrap items-center gap-3 md:justify-end reveal">
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
