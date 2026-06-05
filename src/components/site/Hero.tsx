import hero from "@/assets/hero.jpg";
import heroVideo from "@/assets/hero.mp4.asset.json";
import { MessageCircle, CalendarHeart, Sparkles } from "lucide-react";

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
      <div className="absolute inset-0 bg-gradient-to-b from-bark/30 via-bark/20 to-bark/70" />


      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-cream pt-24 pb-16">
        <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.35em] text-cream/80 reveal">
          <span className="h-px w-8 bg-ochre" /> Alentejo · Beja <span className="h-px w-8 bg-ochre" />
        </span>
        <h1 className="mt-6 font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.05] text-balance reveal">
          A vida é de <em className="not-italic text-ochre-soft">Momentos</em>!
        </h1>
        <p className="mt-8 max-w-2xl mx-auto text-base md:text-lg text-cream/90 leading-relaxed text-balance reveal">
          No Agroturismo Xistos, cada paisagem, cada som e cada silêncio lembram-nos
          que a natureza não se visita apenas: sente-se, vive-se e leva-se connosco.
        </p>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-4 reveal">
          <a
            href="#campanhas"
            className="group inline-flex items-center gap-2 rounded-full bg-cream text-olive-deep px-7 py-4 text-sm font-medium tracking-wide shadow-soft hover:bg-ochre hover:text-cream transition-all duration-300"
          >
            <CalendarHeart className="h-4 w-4" /> Reservar
          </a>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-cream/60 px-7 py-4 text-sm text-cream backdrop-blur-sm hover:bg-cream/10 transition-all"
          >
            <MessageCircle className="h-4 w-4" /> WhatsApp
          </a>
          <a
            href="#campanhas"
            className="inline-flex items-center gap-2 rounded-full bg-ochre text-cream px-7 py-4 text-sm font-medium tracking-wide shadow-soft hover:bg-ochre/90 transition-all"
          >
            <Sparkles className="h-4 w-4" /> Muda os teus Planos
          </a>
        </div>
      </div>

      <a href="#casa" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cream/80 text-xs tracking-[0.3em] uppercase z-10 animate-pulse">
        descer
      </a>
    </section>
  );
}
