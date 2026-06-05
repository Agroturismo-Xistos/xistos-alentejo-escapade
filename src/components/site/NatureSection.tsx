import SectionHeading from "./SectionHeading";
import ImageCarousel from "./ImageCarousel";
import n1 from "@/assets/nature-1.jpg";
import n2 from "@/assets/nature-2.jpg";
import n3 from "@/assets/nature-3.jpg";
import n4 from "@/assets/nature-4.jpg";
import hero from "@/assets/hero.jpg";

const images = [
  { src: n1, alt: "Trilho no Bosque Mediterrânico" },
  { src: n2, alt: "Abelhas em flores de lavanda" },
  { src: n3, alt: "Rebanho ao pôr do sol no Alentejo" },
  { src: n4, alt: "Charca natural com reflexos" },
  { src: hero, alt: "Paisagem alentejana ao entardecer" },
];

export default function NatureSection() {
  return (
    <section id="natureza" className="py-24 md:py-32 bg-sand/60">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Ecossistema"
          title="Natureza"
          subtitle="Descobrir, respirar, contemplar."
        />

        <div className="mt-16 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <ImageCarousel images={images} aspect="aspect-[4/3]" />
          </div>
          <div className="lg:col-span-5 space-y-6 text-bark/80 leading-relaxed">
            <p>
              No Agroturismo Xistos, a natureza é vivida com calma, curiosidade e autenticidade.
              Entre o Bosque Mediterrânico, os trilhos, a ribeira, a charca, os animais do monte,
              as abelhas e o pôr do sol alentejano, cada visita convida a descobrir a
              biodiversidade local, respirar fundo e contemplar a paisagem com outro olhar.
            </p>
            <p>
              Das atividades em família às caminhadas mais aventureiras, há experiências para
              todas as idades: visitas aos animais, caças ao tesouro, contacto com plantas,
              percursos pela ribeira, observação da fauna e flora, e momentos de pura
              tranquilidade no coração do Alentejo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
