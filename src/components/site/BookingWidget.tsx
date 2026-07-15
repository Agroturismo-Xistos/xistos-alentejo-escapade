import { useState } from "react";
import { CalendarIcon, Users, Search, Minus, Plus } from "lucide-react";
import { format } from "date-fns";
import { pt as ptLocale, enUS, fr as frLocale, es as esLocale } from "date-fns/locale";
import type { DateRange } from "react-day-picker";
import { Link } from "@tanstack/react-router";

import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { useT, useLanguage } from "@/i18n/LanguageContext";
import { useBookingModal } from "@/components/site/BookingModalProvider";

const WHATSAPP = "https://wa.me/351964814928";

const localeMap = { pt: ptLocale, en: enUS, fr: frLocale, es: esLocale } as const;

export default function BookingWidget() {
  const t = useT();
  const { lang } = useLanguage();
  const locale = localeMap[lang];
  const b = t.booking;
  const { openModal } = useBookingModal();

  const [range, setRange] = useState<DateRange | undefined>();
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);

  const datesLabel =
    range?.from && range?.to
      ? `${format(range.from, "dd MMM", { locale })} — ${format(range.to, "dd MMM", { locale })}`
      : range?.from
      ? `${format(range.from, "dd MMM", { locale })} — …`
      : b.datesPlaceholder;

  const guestsLabel = `${adults} ${adults === 1 ? b.adult : b.adults} · ${children} ${
    children === 1 ? b.child : b.children
  }`;

  const handleSearch = () => {
    const lines = [
      b.msgIntro,
      `${b.when}: ${
        range?.from && range?.to
          ? `${format(range.from, "dd/MM/yyyy")} → ${format(range.to, "dd/MM/yyyy")}`
          : b.datesPlaceholder
      }`,
      `${b.who}: ${adults} ${b.adults}, ${children} ${b.children}`,
    ].filter(Boolean) as string[];
    const msg = encodeURIComponent(lines.join("\n"));
    window.open(`${WHATSAPP}?text=${msg}`, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="rounded-2xl md:rounded-full bg-cream/95 backdrop-blur-md shadow-card border-2 border-ochre p-2 flex flex-col md:flex-row items-stretch gap-2">
        <div className="hidden md:contents">
          {/* Quando */}
          <Popover>
          <PopoverTrigger className="flex-1 flex items-center gap-3 px-5 py-3 rounded-xl md:rounded-full hover:bg-bark/5 transition text-left">
            <CalendarIcon className="h-5 w-5 text-ochre shrink-0" />
            <div className="min-w-0">
              <div className="text-[10px] uppercase tracking-[0.2em] text-bark/60">{b.when}</div>
              <div className="text-sm text-olive-deep truncate">{datesLabel}</div>
            </div>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="range"
              selected={range}
              onSelect={setRange}
              numberOfMonths={2}
              locale={locale}
              disabled={{ before: new Date() }}
            />
          </PopoverContent>
        </Popover>

        <div className="hidden md:block w-px bg-bark/10 my-2" />

        {/* Quem */}
        <Popover>
          <PopoverTrigger className="flex-1 flex items-center gap-3 px-5 py-3 rounded-xl md:rounded-full hover:bg-bark/5 transition text-left">
            <Users className="h-5 w-5 text-ochre shrink-0" />
            <div className="min-w-0">
              <div className="text-[10px] uppercase tracking-[0.2em] text-bark/60">{b.who}</div>
              <div className="text-sm text-olive-deep truncate">{guestsLabel}</div>
            </div>
          </PopoverTrigger>
          <PopoverContent className="w-72 p-5" align="start">
            <Counter
              label={b.adults}
              hint={b.adultsHint}
              value={adults}
              min={1}
              onChange={setAdults}
            />
            <div className="h-4" />
            <Counter
              label={b.children}
              hint={b.childrenHint}
              value={children}
              min={0}
              onChange={setChildren}
            />
          </PopoverContent>
        </Popover>

        </div>

        <button
          onClick={() => openModal({ range, adults, children })}
          className="inline-flex items-center justify-center gap-2 rounded-xl md:rounded-full bg-ochre text-cream px-7 py-4 text-[12px] uppercase tracking-[0.2em] font-medium hover:bg-ochre/90 transition cursor-pointer"
        >
          <Search className="h-4 w-4" />
          {t.nav.book}
        </button>
      </div>
    </div>
  );
}

function Counter({
  label,
  hint,
  value,
  min,
  onChange,
}: {
  label: string;
  hint: string;
  value: number;
  min: number;
  onChange: (v: number) => void;
}) {
  return (
    <div className="flex items-center justify-between">
      <div>
        <div className="text-sm font-medium text-olive-deep">{label}</div>
        <div className="text-xs text-bark/60">{hint}</div>
      </div>
      <div className="flex items-center gap-3">
        <button
          type="button"
          aria-label="-"
          onClick={() => onChange(Math.max(min, value - 1))}
          className="h-8 w-8 rounded-full border border-bark/20 grid place-items-center text-olive-deep hover:bg-bark/5 disabled:opacity-40"
          disabled={value <= min}
        >
          <Minus className="h-4 w-4" />
        </button>
        <span className="w-6 text-center text-sm">{value}</span>
        <button
          type="button"
          aria-label="+"
          onClick={() => onChange(value + 1)}
          className="h-8 w-8 rounded-full border border-bark/20 grid place-items-center text-olive-deep hover:bg-bark/5"
        >
          <Plus className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
