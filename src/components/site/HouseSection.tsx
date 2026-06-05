import SectionHeading from "./SectionHeading";
import ImageCarousel from "./ImageCarousel";
import c1 from "@/assets/common-1.jpg";
import c2 from "@/assets/common-2.jpg";
import c3 from "@/assets/common-3.jpg";
import r1 from "@/assets/room-1.jpg";
import r2 from "@/assets/room-2.jpg";
import r3 from "@/assets/room-3.jpg";
import a1 from "@/assets/apt-1.jpg";
import a2 from "@/assets/apt-2.jpg";
import a3 from "@/assets/apt-3.jpg";

const groups = [
  {
    title: "Espaços Comuns",
    desc: "Salas, exteriores e zonas de convívio onde o tempo se demora.",
    images: [
      { src: c1, alt: "Sala comum com lareira" },
      { src: c2, alt: "Pátio exterior com mesa de madeira" },
      { src: c3, alt: "Jardim com rede de descanso" },
    ],
  },
  {
    title: "Quartos",
    desc: "Conforto sereno, decoração natural e o silêncio do campo.",
    images: [
      { src: r1, alt: "Quarto com dossel e madeiras" },
      { src: r2, alt: "Quarto com parede de pedra e vista" },
      { src: r3, alt: "Casa de banho rústica" },
    ],
  },
  {
    title: "Apartamento",
    desc: "Casa completa para estadias mais longas, com cozinha e sala.",
    images: [
      { src: a1, alt: "Cozinha e sala do apartamento" },
      { src: a2, alt: "Quarto do apartamento" },
      { src: a3, alt: "Sala do apartamento com pedra" },
    ],
  },
];

export default function HouseSection() {
  return (
    <section id="casa" className="py-28 md:py-40 bg-cream">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="flex items-end justify-between gap-10 flex-wrap">
          <SectionHeading
            align="left"
            eyebrow="Alojamento"
            title="A sua Casa"
            subtitle="Cada espaço foi pensado para que se sinta em casa, rodeado pela tranquilidade do campo e pela autenticidade do Alentejo."
          />
          <span className="text-[10px] uppercase tracking-[0.4em] text-bark/40 pb-2">
            Três Experiências
          </span>
        </div>

        <div className="mt-24 space-y-32">
          {groups.map((g, i) => (
            <div
              key={g.title}
              className={`grid lg:grid-cols-12 gap-10 lg:gap-16 items-center ${
                i % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""
              }`}
            >
              <div className="lg:col-span-8">
                <ImageCarousel images={g.images} />
              </div>
              <div className="lg:col-span-4">
                <span className="font-display italic text-ochre text-2xl">
                  — 0{i + 1}
                </span>
                <h3 className="mt-4 font-display font-light text-5xl md:text-6xl text-olive-deep leading-[0.95] tracking-[-0.02em]">
                  {g.title}
                </h3>
                <div className="mt-6 h-px w-12 bg-clay" />
                <p className="mt-6 text-muted-foreground leading-[1.8] text-[15px] max-w-sm">
                  {g.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
