import logo from "@/assets/logo.png";
import { Phone, MapPin, Instagram, Facebook } from "lucide-react";
import { useT } from "@/i18n/LanguageContext";

export default function Footer() {
  const t = useT();
  const links: [string, string][] = [
    ["#inicio", t.nav.home],
    ["#casa", t.nav.house],
    ["#proposito", t.nav.purpose],
    ["#natureza", t.nav.nature],
    ["#atividades", t.nav.activities],
    ["#campanhas", t.nav.campaigns],
    ["#localizacao", t.nav.location],
  ];

  return (
    <footer className="bg-olive-deep text-cream/85 pt-20 pb-10">
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-3 gap-12">
        <div>
          <img src={logo} alt="Agroturismo Xistos" className="h-20 w-auto brightness-0 invert opacity-90" />
          <p className="mt-5 text-sm leading-relaxed max-w-xs">{t.footer.tagline}</p>
          <div className="mt-6 flex gap-3">
            <a href="#" aria-label="Instagram" className="h-10 w-10 rounded-full border border-cream/30 grid place-items-center hover:bg-ochre hover:border-ochre transition">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="#" aria-label="Facebook" className="h-10 w-10 rounded-full border border-cream/30 grid place-items-center hover:bg-ochre hover:border-ochre transition">
              <Facebook className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-display text-xl text-cream">{t.footer.contacts}</h4>
          <ul className="mt-5 space-y-3 text-sm">
            <li className="flex gap-3">
              <Phone className="h-4 w-4 mt-1 text-ochre-soft shrink-0" />
              <a href="tel:+351964814928" className="hover:text-ochre transition">
                +351 964 814 928 <span className="block text-xs text-cream/60">{t.footer.phoneLabel}</span>
              </a>
            </li>
            <li className="flex gap-3">
              <MapPin className="h-4 w-4 mt-1 text-ochre-soft shrink-0" />
              <span>
                Herdade Monte da Ponte<br />
                Estrada Nacional 122, Km 18<br />
                Trindade, 7800-786 Beja
              </span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-xl text-cream">{t.footer.nav}</h4>
          <ul className="mt-5 grid grid-cols-2 gap-2 text-sm">
            {links.map(([href, label]) => (
              <li key={href}>
                <a href={href} className="hover:text-ochre transition">{label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-16 border-t border-cream/15 pt-6 mx-auto max-w-7xl px-6 text-xs text-cream/60 flex flex-col md:flex-row justify-between gap-3">
        <p>© {new Date().getFullYear()} Agroturismo Xistos. {t.footer.copyright}</p>
        <p>{t.footer.signoff}</p>
      </div>
    </footer>
  );
}
