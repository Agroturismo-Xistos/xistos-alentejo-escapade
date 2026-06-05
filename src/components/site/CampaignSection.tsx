import bg from "@/assets/campaign-bg.jpg";
import { Check, MessageCircle, Sparkles, PlayCircle } from "lucide-react";

const WHATSAPP = "https://wa.me/351964814928";
const TEL = "tel:+351964814928";

export default function CampaignSection() {
  return (
    <section id="campanhas" className="relative py-24 md:py-32 overflow-hidden">
      <img src={bg} alt="" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
      <div className="absolute inset-0 bg-gradient-to-b from-olive-deep/90 via-olive-deep/85 to-bark/90" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.35em] text-ochre-soft">
            <span className="h-px w-6 bg-current" /> Campanha
          </span>
          <h2 className="mt-5 font-display text-5xl md:text-6xl text-cream text-balance">
            Muda os teus planos!
          </h2>
          <p className="mt-8 text-xl md:text-2xl font-display text-ochre-soft">
            🌱 Aproveite 30% de desconto na sua estadia ao reservar 7 dias ou mais!
          </p>
          <p className="mt-6 text-cream/85 leading-relaxed">
            Esta campanha, focada em estadias de longa duração, é uma oportunidade para entender
            a importância da gestão do tempo — equilibrando trabalho e lazer — e perceber que
            vale a pena acreditar: é bom viver!
          </p>
          <p className="mt-3 text-cream/70 text-sm italic">
            Por favor, visualize os vídeos abaixo, onde exemplificamos que o Agroturismo Xistos
            é um espaço para todos.
          </p>
        </div>

        {/* Video placeholders */}
        <div className="mt-12 grid sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {[1, 2].map((i) => (
            <div
              key={i}
              className="group relative aspect-video rounded-2xl border border-cream/20 bg-cream/5 backdrop-blur-sm overflow-hidden flex items-center justify-center cursor-pointer hover:bg-cream/10 transition"
            >
              <PlayCircle className="h-16 w-16 text-cream/70 group-hover:text-ochre transition" />
              <span className="absolute bottom-4 left-4 text-xs text-cream/60 uppercase tracking-widest">
                Vídeo {i}
              </span>
            </div>
          ))}
        </div>

        {/* Pricing */}
        <div className="mt-16 grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {[
            { name: "Quarto Duplo", day: "84 €", week: "588 €" },
            { name: "Apartamento", day: "119 €", week: "883 €" },
          ].map((p) => (
            <div
              key={p.name}
              className="rounded-3xl bg-cream/95 p-8 text-center shadow-card border border-cream/20"
            >
              <h3 className="font-display text-3xl text-olive-deep">{p.name}</h3>
              <div className="mt-6 flex items-baseline justify-center gap-2">
                <span className="font-display text-5xl text-ochre">{p.day}</span>
                <span className="text-muted-foreground">/ dia</span>
              </div>
              <div className="mt-2 text-bark/70">
                <span className="font-medium text-olive">{p.week}</span> / semana
              </div>
            </div>
          ))}
        </div>

        <p className="mt-10 max-w-3xl mx-auto text-center text-sm text-cream/75 leading-relaxed">
          O Agroturismo Xistos realiza o agendamento das experiências em parceria com empresários
          locais. O valor de cada atividade é definido pelo parceiro responsável, que também
          assume total responsabilidade pela sua realização. Para reservas, entre em contacto pelo
          telefone <a href={TEL} className="text-ochre-soft underline">+351 964 814 928</a>.
        </p>

        {/* Info */}
        <div className="mt-12 max-w-3xl mx-auto rounded-3xl bg-cream/10 backdrop-blur-md border border-cream/20 p-8">
          <h4 className="font-display text-2xl text-cream">Informações adicionais</h4>
          <ul className="mt-5 grid sm:grid-cols-2 gap-x-6 gap-y-3 text-cream/90 text-sm">
            {[
              "Reserva mínima de uma semana",
              "Campanha ativa de março a dezembro de 2026, com interrupção em julho e agosto",
              "Utilização do espaço como a sua casa no campo, com possibilidade de realizar refeições e convidar amigos",
              "Serviço de compras semanal: fazemos as compras por si e entregamos no alojamento",
              "Não inclui pequeno-almoço",
              "Inclui internet",
            ].map((t) => (
              <li key={t} className="flex gap-2">
                <Check className="h-4 w-4 text-ochre-soft shrink-0 mt-0.5" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <a
            href={WHATSAPP + "?text=Olá!%20Quero%20reservar%20a%20campanha%20Muda%20os%20teus%20Planos."}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-ochre text-cream px-8 py-4 font-medium shadow-soft hover:bg-ochre/90 transition"
          >
            <Sparkles className="h-4 w-4" /> Reservar Campanha
          </a>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-whatsapp text-cream px-8 py-4 font-medium shadow-soft hover:opacity-90 transition"
          >
            <MessageCircle className="h-4 w-4" /> +351 964 814 928
          </a>
        </div>
      </div>
    </section>
  );
}
