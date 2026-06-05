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
    <section id="natureza" className="py-28 md:py-40 bg-cream">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-end">
          <div className="lg:col-span-5">
            <SectionHeading
              align="left"
              eyebrow="Ecossistema"
              title="Natureza."
              subtitle="Descobrir, respirar, contemplar — no ritmo lento do Alentejo."
            />
          </div>
          <div className="lg:col-span-7 text-bark/75 leading-[1.8] text-[15px] space-y-5">
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
            <div className="flex flex-wrap gap-2 pt-4">
              {["Bosque Mediterrânico", "Ribeira", "Charca", "Animais", "Abelhas", "Pôr do Sol"].map((tag) => (
                <span key={tag} className="text-[11px] uppercase tracking-[0.2em] px-3 py-1.5 rounded-full border border-bark/15 text-bark/70">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20">
          <ImageCarousel images={images} aspect="aspect-[21/9]" />
        </div>
      </div>
    </section>
  );
}
