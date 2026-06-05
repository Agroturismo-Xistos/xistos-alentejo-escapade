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
    <section id="atividades" className="py-24 md:py-32 bg-cream">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Experiências"
          title="Atividades"
          subtitle="Experiências autênticas para descobrir o Alentejo com outros olhos."
        />

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((a) => (
            <article
              key={a.title}
              className="group flex flex-col rounded-3xl bg-card overflow-hidden shadow-soft hover:shadow-card transition-all duration-500 border border-border"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={a.img}
                  alt={a.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bark/60 to-transparent" />
                <h3 className="absolute bottom-5 left-5 right-5 font-display text-2xl text-cream leading-tight">
                  {a.title}
                </h3>
              </div>
              <ul className="p-7 space-y-5 flex-1">
                {a.items.map((it) => (
                  <li key={it.name}>
                    <p className="font-medium text-olive-deep leading-snug">{it.name}</p>
                    <ul className="mt-1.5 text-sm text-muted-foreground space-y-0.5">
                      {it.details.map((d) => (
                        <li key={d} className="flex gap-2 before:content-['·'] before:text-ochre">
                          <span>{d}</span>
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
