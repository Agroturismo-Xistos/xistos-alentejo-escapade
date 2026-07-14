import { useEffect, useState } from "react";
import { X } from "lucide-react";
import img from "@/assets/img-4105.jpg";

export default function CampaignOverlay() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const show = setTimeout(() => setOpen(true), 1500);
    return () => clearTimeout(show);
  }, []);

  useEffect(() => {
    if (!open) return;
    const hide = setTimeout(() => setOpen(false), 15000);
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      clearTimeout(hide);
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-300"
      onClick={() => setOpen(false)}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-4xl bg-cream rounded-lg overflow-hidden shadow-2xl grid grid-cols-1 md:grid-cols-2 animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => setOpen(false)}
          aria-label="Fechar"
          className="absolute top-3 right-3 z-10 h-9 w-9 grid place-items-center rounded-full bg-white/90 hover:bg-white text-bark shadow-md transition"
        >
          <X className="h-5 w-5" />
        </button>
        <div className="aspect-[4/3] md:aspect-auto md:h-full">
          <img src={img} alt="Agroturismo Xistos" className="h-full w-full object-cover" />
        </div>
        <div className="p-8 md:p-10 flex flex-col justify-center gap-5">
          <h2 className="font-serif text-3xl md:text-4xl leading-tight text-bark">
            A sua Casa no Campo!
          </h2>
          <p className="text-base md:text-lg text-bark/80 leading-relaxed">
            <span className="font-semibold text-bark">Reserva:</span> 10% de desconto ao reservar diretamente connosco.
          </p>
        </div>
      </div>
    </div>
  );
}
