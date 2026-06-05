import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export type CarouselImage = { src: string; alt: string };

export default function ImageCarousel({
  images,
  aspect = "aspect-[4/3]",
}: {
  images: CarouselImage[];
  aspect?: string;
}) {
  const [emblaRef, embla] = useEmblaCarousel({ loop: true, align: "start" });
  const [selected, setSelected] = useState(0);
  const [lightbox, setLightbox] = useState<number | null>(null);

  const scrollTo = useCallback((i: number) => embla?.scrollTo(i), [embla]);

  useEffect(() => {
    if (!embla) return;
    const onSelect = () => setSelected(embla.selectedScrollSnap());
    embla.on("select", onSelect);
    onSelect();
  }, [embla]);

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") setLightbox((i) => (i! + 1) % images.length);
      if (e.key === "ArrowLeft") setLightbox((i) => (i! - 1 + images.length) % images.length);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox, images.length]);

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-3xl shadow-card" ref={emblaRef}>
        <div className="flex">
          {images.map((img, i) => (
            <button
              type="button"
              key={i}
              onClick={() => setLightbox(i)}
              className={`relative flex-[0_0_100%] ${aspect} group`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bark/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          ))}
        </div>
      </div>

      <button
        aria-label="Anterior"
        onClick={() => embla?.scrollPrev()}
        className="absolute left-3 top-1/2 -translate-y-1/2 h-11 w-11 rounded-full bg-cream/90 backdrop-blur text-olive-deep shadow-soft hover:bg-ochre hover:text-cream transition flex items-center justify-center"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        aria-label="Seguinte"
        onClick={() => embla?.scrollNext()}
        className="absolute right-3 top-1/2 -translate-y-1/2 h-11 w-11 rounded-full bg-cream/90 backdrop-blur text-olive-deep shadow-soft hover:bg-ochre hover:text-cream transition flex items-center justify-center"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      <div className="mt-5 flex justify-center gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            aria-label={`Ir para imagem ${i + 1}`}
            onClick={() => scrollTo(i)}
            className={`h-1.5 rounded-full transition-all ${
              selected === i ? "w-8 bg-ochre" : "w-2 bg-clay/60 hover:bg-clay"
            }`}
          />
        ))}
      </div>

      {lightbox !== null && (
        <div className="fixed inset-0 z-[80] bg-bark/95 backdrop-blur flex items-center justify-center p-4">
          <button
            aria-label="Fechar"
            className="absolute top-6 right-6 text-cream/90 hover:text-ochre"
            onClick={() => setLightbox(null)}
          >
            <X className="h-8 w-8" />
          </button>
          <button
            aria-label="Anterior"
            className="absolute left-6 text-cream/90 hover:text-ochre"
            onClick={() => setLightbox((i) => (i! - 1 + images.length) % images.length)}
          >
            <ChevronLeft className="h-10 w-10" />
          </button>
          <img
            src={images[lightbox].src}
            alt={images[lightbox].alt}
            className="max-h-[85vh] max-w-[90vw] object-contain rounded-xl shadow-2xl"
          />
          <button
            aria-label="Seguinte"
            className="absolute right-6 text-cream/90 hover:text-ochre"
            onClick={() => setLightbox((i) => (i! + 1) % images.length)}
          >
            <ChevronRight className="h-10 w-10" />
          </button>
        </div>
      )}
    </div>
  );
}
