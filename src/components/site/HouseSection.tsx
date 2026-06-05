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
    <section id="casa" className="py-24 md:py-32 bg-cream">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Alojamento"
          title="A sua Casa"
          subtitle="No Agroturismo Xistos, cada espaço foi pensado para que se sinta em casa, rodeado pela tranquilidade do campo e pela autenticidade do Alentejo."
        />

        <div className="mt-20 space-y-24">
          {groups.map((g, i) => (
            <div
              key={g.title}
              className={`grid lg:grid-cols-12 gap-10 items-center ${
                i % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""
              }`}
            >
              <div className="lg:col-span-7">
                <ImageCarousel images={g.images} />
              </div>
              <div className="lg:col-span-5">
                <span className="text-xs uppercase tracking-[0.3em] text-ochre">
                  0{i + 1}
                </span>
                <h3 className="mt-3 font-display text-4xl md:text-5xl text-olive-deep">
                  {g.title}
                </h3>
                <div className="mt-4 h-px w-16 bg-clay" />
                <p className="mt-6 text-muted-foreground leading-relaxed">{g.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
