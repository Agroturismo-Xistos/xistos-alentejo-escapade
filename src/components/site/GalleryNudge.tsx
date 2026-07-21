import { useEffect, useState } from "react";
import { X, Camera } from "lucide-react";

const SESSION_KEY = "xistos.galleryNudge.dismissed";

export default function GalleryNudge() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (sessionStorage.getItem(SESSION_KEY) === "1") return;
    } catch {}
    const t = setTimeout(() => setVisible(true), 2000);
    return () => clearTimeout(t);
  }, []);

  const dismiss = () => {
    setVisible(false);
    try { sessionStorage.setItem(SESSION_KEY, "1"); } catch {}
  };

  useEffect(() => {
    if (!visible) return;
    const el = document.getElementById("galeria") || document.getElementById("casa");
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) dismiss();
      },
      { rootMargin: "0px 0px -30% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [visible]);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.getElementById("galeria") || document.getElementById("casa");
    target?.scrollIntoView({ behavior: "smooth", block: "start" });
    dismiss();
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-labelledby="gallery-nudge-title"
      className="fixed z-40 bottom-24 md:bottom-6 left-3 md:left-6 w-[85vw] max-w-sm animate-in fade-in slide-in-from-bottom-4 duration-500"
    >
      <div className="relative rounded-2xl bg-cream border border-sand shadow-xl p-4 pr-9">
        <button
          onClick={dismiss}
          aria-label="Fechar"
          className="absolute top-2 right-2 h-7 w-7 grid place-items-center rounded-full text-bark/60 hover:text-bark hover:bg-sand transition"
        >
          <X className="h-4 w-4" />
        </button>
        <div className="flex items-start gap-3">
          <div className="h-10 w-10 shrink-0 grid place-items-center rounded-full bg-ochre/15 text-ochre">
            <Camera className="h-5 w-5" />
          </div>
          <div className="min-w-0">
            <h3 id="gallery-nudge-title" className="font-display text-lg text-bark leading-tight">
              Conheça o Xistos
            </h3>
            <p className="mt-1 text-sm text-bark/75 leading-snug">
              Descubra os quartos, a piscina e todos os espaços preparados para tornar a sua estadia especial.
            </p>
            <button
              onClick={handleClick}
              className="mt-3 inline-flex items-center gap-2 rounded-full bg-ochre text-cream px-4 py-2 text-sm font-medium hover:bg-ochre/90 transition"
            >
              Conhecer o espaço
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
