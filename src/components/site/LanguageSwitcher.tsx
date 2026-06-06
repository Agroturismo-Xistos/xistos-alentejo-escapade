import { useEffect, useRef, useState } from "react";
import { Globe, Check } from "lucide-react";
import { LANGS, useLanguage } from "@/i18n/LanguageContext";

export default function LanguageSwitcher({ light = false }: { light?: boolean }) {
  const { lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const current = LANGS.find((l) => l.code === lang) ?? LANGS[0];

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        aria-label="Change language"
        onClick={() => setOpen((v) => !v)}
        className={`inline-flex items-center gap-2 rounded-full border px-3 py-2 text-[11px] uppercase tracking-[0.22em] transition-colors ${
          light
            ? "border-cream/40 text-cream hover:bg-cream/10"
            : "border-bark/20 text-bark hover:bg-bark/5"
        }`}
      >
        <Globe className="h-3.5 w-3.5" />
        <span className="font-medium">{current.label}</span>
      </button>
      {open && (
        <ul className="absolute right-0 mt-2 min-w-[140px] rounded-2xl bg-cream border border-bark/10 shadow-card overflow-hidden z-[70]">
          {LANGS.map((l) => (
            <li key={l.code}>
              <button
                type="button"
                onClick={() => {
                  setLang(l.code);
                  setOpen(false);
                }}
                className={`w-full flex items-center justify-between gap-3 px-4 py-2.5 text-sm hover:bg-ochre-soft/40 transition-colors ${
                  l.code === lang ? "text-olive-deep font-medium" : "text-bark/80"
                }`}
              >
                <span className="flex items-center gap-2">
                  <span>{l.flag}</span>
                  <span>{l.label}</span>
                </span>
                {l.code === lang && <Check className="h-3.5 w-3.5 text-ochre" />}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
