import bg from "@/assets/campaign-bg.jpg";
import { Check, PlayCircle } from "lucide-react";
import { useT } from "@/i18n/LanguageContext";


const TEL = "tel:+351964814928";

export default function CampaignSection() {
  const t = useT();
  return (
    <section id="campanhas" className="relative py-16 md:py-24 overflow-hidden">
      <img src={bg} alt="" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
      <div className="absolute inset-0 bg-gradient-to-b from-olive-deep/90 via-olive-deep/85 to-bark/90" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.35em] text-ochre-soft">
            <span className="h-px w-6 bg-current" /> {t.campaign.eyebrow}
          </span>
          <h2 className="mt-5 font-display text-5xl md:text-6xl text-cream text-balance">
            {t.campaign.title}
          </h2>
          <p className="mt-8 text-xl md:text-2xl font-display text-ochre-soft">
            {t.campaign.highlight}
          </p>
          <p className="mt-6 text-cream/85 leading-relaxed">{t.campaign.desc}</p>
          <p className="mt-3 text-cream/70 text-sm italic">{t.campaign.videoNote}</p>
        </div>

        {/* Video placeholders */}
        <div className="mt-10 grid sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {[1, 2].map((i) => (
            <div
              key={i}
              className="group relative aspect-video rounded-2xl border border-cream/20 bg-cream/5 backdrop-blur-sm overflow-hidden flex items-center justify-center cursor-pointer hover:bg-cream/10 transition"
            >
              <PlayCircle className="h-16 w-16 text-cream/70 group-hover:text-ochre transition" />
              <span className="absolute bottom-4 left-4 text-xs text-cream/60 uppercase tracking-widest">
                {t.campaign.videoLabel} {i}
              </span>
            </div>
          ))}
        </div>

        {/* Pricing */}
        <div className="mt-10 grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {t.campaign.rooms.map((p) => (
            <div key={p.name} className="rounded-3xl bg-cream/95 p-8 text-center shadow-card border border-cream/20">
              <h3 className="font-display text-3xl text-olive-deep">{p.name}</h3>
              <div className="mt-6 flex items-baseline justify-center gap-2">
                <span className="font-display text-5xl text-ochre">{p.day}</span>
                <span className="text-muted-foreground">{p.perDay}</span>
              </div>
              <div className="mt-2 text-bark/70">
                <span className="font-medium text-olive">{p.week}</span> {p.perWeek}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-10 max-w-3xl mx-auto text-center text-sm text-cream/75 leading-relaxed">
          {t.campaign.disclaimer1}
          <a href={TEL} className="text-ochre-soft underline">+351 964 814 928</a>
          {t.campaign.disclaimer2}
        </p>

        {/* Info */}
        <div className="mt-12 max-w-3xl mx-auto rounded-3xl bg-cream/10 backdrop-blur-md border border-cream/20 p-8">
          <h4 className="font-display text-2xl text-cream">{t.campaign.infoTitle}</h4>
          <ul className="mt-5 grid sm:grid-cols-2 gap-x-6 gap-y-3 text-cream/90 text-sm">
            {t.campaign.info.map((s) => (
              <li key={s} className="flex gap-2">
                <Check className="h-4 w-4 text-ochre-soft shrink-0 mt-0.5" />
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}

