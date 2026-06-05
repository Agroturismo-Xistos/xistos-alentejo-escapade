import SectionHeading from "./SectionHeading";
import flavors from "@/assets/act-flavors.jpg";
import crafts from "@/assets/act-crafts.jpg";
import shepherd from "@/assets/act-shepherd.jpg";

const activities = [
  {
    img: flavors,
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
    img: crafts,
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
    img: shepherd,
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
          {activities.map((a, idx) => (
            <article
              key={a.title}
              className="group flex flex-col rounded-3xl bg-card overflow-hidden border border-bark/8 hover:border-ochre/40 transition-all duration-500 hover:-translate-y-1 hover:shadow-card"
            >
              <div className="relative aspect-[5/4] overflow-hidden">
                <img
                  src={a.img}
                  alt={a.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bark/80 via-bark/20 to-transparent" />
                <span className="absolute top-5 left-5 text-[10px] uppercase tracking-[0.35em] text-cream/80">
                  0{idx + 1} / 03
                </span>
                <h3 className="absolute bottom-6 left-6 right-6 font-display font-light text-3xl md:text-4xl text-cream leading-[1.05] tracking-[-0.02em]">
                  {a.title}
                </h3>
              </div>
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
