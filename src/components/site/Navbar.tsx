import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";
import logoLight from "@/assets/logo-light.png.asset.json";

const links = [
  { href: "#inicio", label: "Início" },
  { href: "#casa", label: "A sua Casa" },
  { href: "#proposito", label: "Propósito" },
  { href: "#natureza", label: "Natureza" },
  { href: "#atividades", label: "Atividades" },
  { href: "#campanhas", label: "Campanhas" },
  { href: "#localizacao", label: "Localização" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-cream/90 backdrop-blur-xl border-b border-bark/5"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-[1400px] px-6 md:px-12 flex items-center justify-between h-20">
        <a href="#inicio" className="flex items-center gap-3 shrink-0">
          <img src={logo} alt="Agroturismo Xistos" className="h-11 md:h-12 w-auto" />
        </a>

        <ul className="hidden lg:flex items-center gap-10">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`text-[12px] uppercase tracking-[0.18em] font-medium transition-colors relative after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-ochre after:transition-all hover:after:w-full ${
                  scrolled ? "text-bark/75 hover:text-ochre" : "text-cream/90 hover:text-cream"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="#campanhas"
            className={`hidden md:inline-flex items-center rounded-full px-5 py-2.5 text-[11px] uppercase tracking-[0.2em] font-medium transition-all duration-300 ${
              scrolled
                ? "bg-olive-deep text-cream hover:bg-ochre"
                : "bg-cream/95 text-olive-deep hover:bg-ochre hover:text-cream"
            }`}
          >
            Reservar
          </a>
          <button
            aria-label="Abrir menu"
            className={`lg:hidden p-2 ${scrolled ? "text-olive-deep" : "text-cream"}`}
            onClick={() => setOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </nav>

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
            <button aria-label="Fechar menu" onClick={() => setOpen(false)} className="p-2">
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
        </div>
      </div>
    </header>
  );
}
