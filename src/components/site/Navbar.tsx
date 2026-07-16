import { useEffect, useState, useRef } from "react";
import { Menu, X, Phone } from "lucide-react";

import logoLight from "@/assets/logo-light.png";
import logoDark from "@/assets/xistos-logo-dark.png";
import LanguageSwitcher from "./LanguageSwitcher";
import { useT } from "@/i18n/LanguageContext";

export default function Navbar({ alwaysDark = false }: { alwaysDark?: boolean }) {
  const t = useT();
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [open, setOpen] = useState(false);
  const lastScrollY = useRef(0);

  const links = [
    { href: "#casa", label: t.nav.house },
    { href: "#proposito", label: t.nav.purpose },
    { href: "#natureza", label: t.nav.nature },
    { href: "#atividades", label: t.nav.activities },
    { href: "#campanhas", label: t.nav.campaigns },
    { href: "#localizacao", label: t.nav.location },
  ];

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 40);
      if (currentY <= 40) {
        setVisible(true);
      } else if (currentY < lastScrollY.current) {
        setVisible(true);
      } else {
        setVisible(false);
      }
      lastScrollY.current = currentY;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isDark = alwaysDark || scrolled;

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          visible ? "translate-y-0" : "-translate-y-full"
        } ${
          isDark
            ? "bg-sand/95 backdrop-blur-xl border-b border-bark/10"
            : "bg-transparent"
        }`}
      >
        <nav className="w-full px-6 md:px-10 flex justify-between lg:grid lg:grid-cols-3 items-center h-20 md:h-24">
        <a href="/" className="flex items-center gap-3 shrink-0 lg:justify-self-start">
          <img
            src={isDark ? logoDark : logoLight}
            alt="Agroturismo Xistos"
            className="h-12 md:h-16 w-auto transition-opacity duration-300"
          />
        </a>

        <ul className="hidden lg:flex items-center justify-center gap-8 xl:gap-12 lg:justify-self-center">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`whitespace-nowrap text-[13px] uppercase tracking-[0.18em] font-medium transition-colors relative after:absolute after:-bottom-2 after:left-0 after:h-px after:w-0 after:transition-all hover:after:w-full ${
                  isDark ? "text-bark hover:text-bark/80 after:bg-bark" : "text-cream/90 hover:text-cream after:bg-cream"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4 lg:justify-self-end">
          <div className="hidden md:block">
            <LanguageSwitcher light={!isDark} />
          </div>
          <a
            href="tel:+351964814928"
            className={`hidden md:inline-flex items-center gap-2 text-[13px] uppercase tracking-[0.18em] font-medium transition-colors ${
              isDark ? "text-bark hover:text-bark/80" : "text-cream/90 hover:text-cream"
            }`}
          >
            <Phone className="h-5 w-5" />
            +351 964 814 928
          </a>

          <button
            aria-label={t.nav.openMenu}
            className={`lg:hidden p-2 ${isDark ? "text-bark" : "text-cream"}`}
            onClick={() => setOpen(true)}
          >
            <Menu className="h-7 w-7" />
          </button>
        </div>
      </nav>
      </header>

      {/* Mobile drawer */}
      <div
        className={`lg:hidden fixed inset-0 z-[60] transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-bark/40" onClick={() => setOpen(false)} />
        <div
          className={`absolute right-0 top-0 h-full w-[80%] max-w-sm bg-cream shadow-2xl p-8 transition-transform duration-500 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-end">
            <button aria-label={t.nav.closeMenu} onClick={() => setOpen(false)} className="p-2">
              <X className="h-6 w-6 text-olive-deep" />
            </button>
          </div>
          <ul className="mt-8 space-y-6">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block font-display text-2xl text-olive-deep hover:text-ochre transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-10 pt-6 border-t border-bark/10">
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </>
  );
}
