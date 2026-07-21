import { useEffect, useState } from "react";
import { X, Camera } from "lucide-react";
import poolImg from "@/assets/nudge-pool.jpg";
import roomImg from "@/assets/nudge-room.jpg";

const SESSION_KEY = "xistos.galleryNudge.dismissed.v2";

export default function GalleryNudge() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | null = null;

    const schedule = () => {
      try {
        if (sessionStorage.getItem(SESSION_KEY) === "1") return;
      } catch {}
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => setVisible(true), 2000);
    };

    // If the campaign popup is not present after a short delay, show anyway.
    const initial = setTimeout(() => {
      if (!document.querySelector('[aria-modal="true"]')) schedule();
    }, 500);

    const onClosed = () => schedule();
    window.addEventListener("campaign-overlay:closed", onClosed);

    return () => {
      clearTimeout(initial);
      if (timer) clearTimeout(timer);
      window.removeEventListener("campaign-overlay:closed", onClosed);
    };
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
      className="fixed z-40 bottom-24 md:bottom-6 left-3 md:left-6 w-[85vw] max-w-md animate-in fade-in slide-in-from-bottom-4 duration-500"
    >
      <div className="relative rounded-2xl bg-cream border border-sand shadow-xl p-5 pr-10">
        <button
          onClick={dismiss}
          aria-label="Fechar"
          className="absolute top-2 right-2 h-7 w-7 grid place-items-center rounded-full text-bark/60 hover:text-bark hover:bg-sand transition"
        >
          <X className="h-4 w-4" />
        </button>
        <div className="flex items-center gap-2 text-ochre">
          <div className="h-8 w-8 grid place-items-center rounded-full bg-ochre/15">
            <Camera className="h-4 w-4" />
          </div>
          <h3 id="gallery-nudge-title" className="font-display text-xl text-bark leading-tight">
            Conheça o Xistos
          </h3>
        </div>
        <div className="mt-3 grid grid-cols-2 gap-2">
          <img src={poolImg} alt="Piscina do Agroturismo Xistos" className="h-24 sm:h-28 w-full object-cover rounded-lg" loading="lazy" />
          <img src={roomImg} alt="Quarto do Agroturismo Xistos" className="h-24 sm:h-28 w-full object-cover rounded-lg" loading="lazy" />
        </div>
        <p className="mt-3 text-sm text-bark/75 leading-snug">
          Descubra os quartos, a piscina e todos os espaços preparados para tornar a sua estadia especial.
        </p>
        <button
          onClick={handleClick}
          className="mt-4 inline-flex items-center gap-2 rounded-full bg-ochre text-cream px-4 py-2 text-sm font-medium hover:bg-ochre/90 transition"
        >
          Conhecer o espaço
        </button>
      </div>
    </div>
  );
}
