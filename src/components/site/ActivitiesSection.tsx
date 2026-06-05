import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import flavors from "@/assets/act-flavors.jpg";
import flavors2 from "@/assets/act-flavors-2.jpg";
import flavors3 from "@/assets/act-flavors-3.jpg";
import flavors4 from "@/assets/act-flavors-4.jpg";
import crafts from "@/assets/act-crafts.jpg";
import crafts2 from "@/assets/act-crafts-2.jpg";
import crafts3 from "@/assets/act-crafts-3.jpg";
import crafts4 from "@/assets/act-crafts-4.jpg";
import shepherd from "@/assets/act-shepherd.jpg";
import shepherd2 from "@/assets/act-shepherd-2.jpg";
import shepherd3 from "@/assets/act-shepherd-3.jpg";
import shepherd4 from "@/assets/act-shepherd-4.jpg";

const activities = [
  {
    images: [flavors, flavors2, flavors3, flavors4],
    title: "Workshops dos Sabores",
    items: [
      {
        name: 'Workshop na Herdade da Poupa – "Sabores da Terra – Vinho e Azeite"',
        details: ["Sessões até 12 pessoas — duração de 3h", "De Segunda a Sexta · Herdade da Poupa, Trindade, Beja"],
      },
      {
        name: 'Workshop com a Chefe Saudade Campeão – "Xistos à mesa"',
        details: ["Sessões até 12 pessoas — duração de 1h30", "De Segunda a Sábado · Agroturismo Xistos, Trindade, Beja"],
      },
      {
        name: 'Workshop com Manuel Oliveira – "Nós e as abelhas"',
        details: ["Sessões até 12 pessoas — duração de 1h30", "De Segunda a Domingo · Agroturismo Xistos, Trindade, Beja"],
      },
    ],
  },
  {
    images: [crafts, crafts2, crafts3, crafts4],
    title: "Workshops de Artesanato Local",
    items: [
      {
        name: 'Workshop com o Mestre Pica – "Mexer com o buinho"',
        details: ["Sessões até 12 pessoas — duração de 3h", "De Segunda a Sábado · Baleizão, Beja"],
      },
      {
        name: 'Workshop com Luthier Cardoso – "Artes e Ofícios – Viola campaniça"',
        details: ["Sessões até 8 pessoas — duração de 2h30", "De Segunda a Sábado · Trindade, Beja"],
      },
      {
        name: 'Workshop com António Mestre – "Mexer com barro"',
        details: ["Sessões até 8 pessoas — duração de 3h", "De Segunda a Sexta · Beringel, Beja"],
      },
      {
        name: 'Oficina de Tecelagem de Mértola – "A volta da lã e o tear"',
        details: ["Sessões até 8 pessoas — duração de 3h", "De Segunda a Sexta · Mértola"],
      },
    ],
  },
  {
    images: [shepherd, shepherd2, shepherd3, shepherd4],
    title: "Uma profissão nova, por um dia!",
    items: [
      {
        name: '"Ser pastor por um dia"',
        details: ["Sessões até 12 pessoas — duração de 3h", "De Segunda a Sexta · Agroturismo Xistos, Trindade, Beja"],
      },
      {
        name: '"Ser agricultor por um dia"',
        details: ["Sessões até 12 pessoas — duração de 3h", "De Segunda a Domingo · Agroturismo Xistos, Trindade, Beja"],
      },
      {
        name: '"Ser veterinário por um dia"',
        details: ["Sessões até 2 pessoas — duração de 1h30", "De Segunda a Domingo · Por todo o Alentejo"],
      },
      {
        name: '"Ser investigador científico por um dia"',
        details: ["Sessões até 6 pessoas — duração até 1h30", "De Segunda a Domingo · Agroturismo Xistos, Trindade, Beja"],
      },
    ],
  },
];

function CardCarousel({ images, title }: { images: string[]; title: string }) {
  const [emblaRef, embla] = useEmblaCarousel({ loop: true, align: "start" });
  const [selected, setSelected] = useState(0);

  const scrollTo = useCallback((i: number) => embla?.scrollTo(i), [embla]);

  useEffect(() => {
    if (!embla) return;
    const onSelect = () => setSelected(embla.selectedScrollSnap());
    embla.on("select", onSelect);
    onSelect();
  }, [embla]);

  return (
    <div className="relative aspect-[5/4] overflow-hidden">
      <div className="absolute inset-0" ref={emblaRef}>
        <div className="flex h-full">
          {images.map((src, i) => (
            <div key={i} className="relative flex-[0_0_100%] h-full">
              <img
                src={src}
                alt={`${title} — imagem ${i + 1}`}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bark/80 via-bark/20 to-transparent" />

      <button
        type="button"
        aria-label="Imagem anterior"
        onClick={(e) => {
          e.stopPropagation();
          embla?.scrollPrev();
        }}
        className="absolute left-3 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-cream/85 backdrop-blur text-olive-deep shadow-soft hover:bg-ochre hover:text-cream transition flex items-center justify-center z-10"
      >
        <ChevronLeft className="h-4 w-4" />
      </button>
      <button
        type="button"
        aria-label="Imagem seguinte"
        onClick={(e) => {
          e.stopPropagation();
          embla?.scrollNext();
        }}
        className="absolute right-3 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-cream/85 backdrop-blur text-olive-deep shadow-soft hover:bg-ochre hover:text-cream transition flex items-center justify-center z-10"
      >
        <ChevronRight className="h-4 w-4" />
      </button>

      <h3 className="absolute bottom-6 left-6 right-6 font-display font-light text-3xl md:text-4xl text-cream leading-[1.05] tracking-[-0.02em] z-[5]">
        {title}
      </h3>

      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
        {images.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Ir para imagem ${i + 1}`}
            onClick={(e) => {
              e.stopPropagation();
              scrollTo(i);
            }}
            className={`h-1.5 rounded-full transition-all ${
              selected === i ? "w-6 bg-cream" : "w-1.5 bg-cream/50 hover:bg-cream/80"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default function ActivitiesSection() {
  return (
    <section id="atividades" className="py-28 md:py-40 bg-cream">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <SectionHeading
          align="left"
          eyebrow="Experiências"
          title="Atividades"
          subtitle="Experiências autênticas para descobrir o Alentejo com outros olhos."
        />

        <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {activities.map((a) => (
            <article
              key={a.title}
              className="group flex flex-col rounded-3xl bg-card overflow-hidden border border-bark/8 hover:border-ochre/40 transition-all duration-500 hover:-translate-y-1 hover:shadow-card"
            >
              <CardCarousel images={a.images} title={a.title} />
              <ul className="p-7 space-y-0 flex-1 divide-y divide-bark/8">
                {a.items.map((it) => (
                  <li key={it.name} className="py-4 first:pt-0 last:pb-0 group/item">
                    <p className="font-medium text-olive-deep leading-snug text-[14px]">
                      {it.name}
                    </p>
                    <ul className="mt-2 text-[12px] text-muted-foreground/90 space-y-1">
                      {it.details.map((d) => (
                        <li key={d} className="flex gap-2">
                          <span className="text-ochre mt-0.5">·</span>
                          <span className="leading-relaxed">{d}</span>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
