import bg from "@/assets/purpose-bg.jpg";

export default function PurposeSection() {
  return (
    <section id="proposito" className="relative py-32 md:py-40 overflow-hidden">
      <img src={bg} alt="" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
      <div className="absolute inset-0 bg-gradient-to-b from-cream/85 via-cream/80 to-cream/90" />

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.35em] text-ochre">
          <span className="h-px w-6 bg-current" /> Manifesto
        </span>
        <h2 className="mt-5 font-display text-5xl md:text-6xl lg:text-7xl text-olive-deep">
          Propósito
        </h2>

        <div className="mt-12 space-y-7 text-lg md:text-xl leading-relaxed text-bark/85 font-display italic">
          <p>
            Queremos trazer a todos quantos nos visitam a consciência de que vale a pena
            valorizar a vida, a natureza!
          </p>
          <p>
            Apreciar a biodiversidade presente no Agroturismo Xistos e pasmar-nos com a nossa
            pequenez e insignificância nesta grande cadeia de valor.
          </p>
          <p>
            Temos por propósito tornar-nos humildes perante a grandiosidade deste maravilhoso
            ecossistema.
          </p>
        </div>

        <p className="mt-12 text-2xl md:text-3xl font-display text-ochre tracking-wide">
          Entre! Vai começar a viagem.
        </p>
      </div>
    </section>
  );
}
