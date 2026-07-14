import { useState } from "react";
import { CalendarIcon, Users, Search, Minus, Plus, AlertCircle, ExternalLink } from "lucide-react";

import { buildAmenitizBookingUrl } from "@/lib/amenitiz";
import { trackBookingIntent } from "@/lib/metaPixel";

export default function BookingSearchForm() {
  // today em formato YYYY-MM-DD (sem conversão de fuso horário)
  const todayStr = (() => {
    const d = new Date();
    const yyyy = d.getFullYear();
    const mm = String(d.getMonth() + 1).padStart(2, "0");
    const dd = String(d.getDate()).padStart(2, "0");
    return `${yyyy}-${mm}-${dd}`;
  })();

  // Os valores dos inputs type="date" são sempre strings YYYY-MM-DD — sem Date, sem fuso horário
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [lastUrl, setLastUrl] = useState<string | null>(null);

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!startDate) {
      newErrors.startDate = "A data de entrada é obrigatória.";
    }
    if (!endDate) {
      newErrors.endDate = "A data de saída é obrigatória.";
    }
    if (startDate && endDate && endDate <= startDate) {
      newErrors.endDate = "A data de saída deve ser posterior à de entrada.";
    }
    if (adults < 1) {
      newErrors.adults = "O número de adultos deve ser pelo menos 1.";
    }
    if (children < 0) {
      newErrors.children = "O número de crianças não pode ser negativo.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSearch = () => {
    if (!validate()) return;

    // Usa directamente os valores do input type="date" — sem Date, sem toISOString
    const url = buildAmenitizBookingUrl({
      startDate,  // já em formato YYYY-MM-DD
      endDate,    // já em formato YYYY-MM-DD
      adults,
      children,
    });

    console.log("[Xistos] URL de reserva gerada:", url);
    console.log("[Xistos] Parâmetros:", { startDate, endDate, adults, children });

    setLastUrl(url);
    trackBookingIntent("/reservas");

    // Abre directamente no Amenitiz numa nova aba — sem iframe
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="w-full">
      {/* Card do formulário */}
      <div className="relative rounded-2xl bg-white border border-border shadow-card overflow-hidden">
        {/* Banda decorativa superior */}
        <div className="h-1 w-full bg-gradient-to-r from-ochre via-clay to-olive-deep" />

        <div className="p-6 md:p-8">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6">
            Pesquisar disponibilidade
          </p>

          {/* Grid de campos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
            {/* Data de entrada */}
            <FormField
              label="Entrada"
              htmlFor="input-start-date"
              icon={<CalendarIcon className="h-4 w-4 text-ochre" />}
              error={errors.startDate}
            >
              <input
                id="input-start-date"
                type="date"
                value={startDate}
                min={todayStr}
                onChange={(e) => {
                  setStartDate(e.target.value);
                  setErrors((prev) => ({ ...prev, startDate: "" }));
                }}
                className="w-full text-sm font-medium text-olive-deep bg-transparent focus:outline-none [color-scheme:light] cursor-pointer"
              />
            </FormField>

            {/* Data de saída */}
            <FormField
              label="Saída"
              htmlFor="input-end-date"
              icon={<CalendarIcon className="h-4 w-4 text-ochre" />}
              error={errors.endDate}
            >
              <input
                id="input-end-date"
                type="date"
                value={endDate}
                min={startDate || todayStr}
                onChange={(e) => {
                  setEndDate(e.target.value);
                  setErrors((prev) => ({ ...prev, endDate: "" }));
                }}
                className="w-full text-sm font-medium text-olive-deep bg-transparent focus:outline-none [color-scheme:light] cursor-pointer"
              />
            </FormField>

            {/* Adultos */}
            <FormField
              label="Adultos"
              icon={<Users className="h-4 w-4 text-ochre" />}
              error={errors.adults}
            >
              <Counter
                value={adults}
                min={1}
                onChange={(v) => {
                  setAdults(v);
                  setErrors((prev) => ({ ...prev, adults: "" }));
                }}
              />
            </FormField>

            {/* Crianças */}
            <FormField
              label="Crianças"
              icon={<Users className="h-4 w-4 text-clay" />}
              error={errors.children}
              hint="até 12 anos"
            >
              <Counter
                value={children}
                min={0}
                onChange={(v) => {
                  setChildren(v);
                  setErrors((prev) => ({ ...prev, children: "" }));
                }}
              />
            </FormField>
          </div>

          {/* Acções */}
          <div className="mt-6 flex flex-wrap items-center justify-end gap-3">
            {/* Botão de teste — abre a URL numa nova aba para validação */}
            {lastUrl && (
              <a
                id="btn-testar-url"
                href={lastUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-olive-deep text-olive-deep px-6 py-3 text-sm font-medium hover:bg-olive-deep/5 transition-colors duration-200 cursor-pointer"
              >
                <ExternalLink className="h-4 w-4" />
                Testar em nova aba
              </a>
            )}

            <button
              id="btn-ver-disponibilidade"
              type="button"
              onClick={handleSearch}
              className="inline-flex items-center gap-2 rounded-full bg-olive-deep text-cream px-8 py-3.5 text-sm font-medium tracking-wide hover:bg-ochre transition-colors duration-300 shadow-soft cursor-pointer"
            >
              <Search className="h-4 w-4" />
              Ver disponibilidade
            </button>
          </div>

          {/* URL gerada (debug visível) */}
          {lastUrl && (
            <p className="mt-4 text-[11px] text-muted-foreground break-all font-mono bg-sand/40 rounded-lg px-3 py-2 border border-border">
              <span className="font-sans font-medium text-bark/70 not-italic">URL: </span>
              {lastUrl}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

/* ──────────────────────────── FormField ──────────────────────────── */

function FormField({
  label,
  htmlFor,
  icon,
  error,
  hint,
  children,
}: {
  label: string;
  htmlFor?: string;
  icon: React.ReactNode;
  error?: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={htmlFor}
        className="flex items-center gap-1.5 text-[10px] uppercase tracking-[0.18em] text-muted-foreground font-medium cursor-pointer"
      >
        {icon}
        <span>{label}</span>
        {hint && (
          <span className="normal-case tracking-normal text-[10px] text-muted-foreground/70">
            · {hint}
          </span>
        )}
      </label>

      <div
        className={`rounded-lg border bg-background px-3 py-2.5 transition-colors ${
          error
            ? "border-destructive bg-destructive/5"
            : "border-input hover:border-ochre focus-within:border-ochre"
        }`}
      >
        {children}
      </div>

      {error && (
        <p className="flex items-center gap-1 text-[11px] text-destructive">
          <AlertCircle className="h-3 w-3 shrink-0" />
          {error}
        </p>
      )}
    </div>
  );
}

/* ──────────────────────────── Counter ──────────────────────────── */

function Counter({
  value,
  min,
  onChange,
}: {
  value: number;
  min: number;
  onChange: (v: number) => void;
}) {
  return (
    <div className="flex items-center justify-between gap-2">
      <button
        type="button"
        aria-label="diminuir"
        onClick={() => onChange(Math.max(min, value - 1))}
        disabled={value <= min}
        className="h-6 w-6 rounded-full border border-bark/20 grid place-items-center text-olive-deep hover:bg-bark/5 disabled:opacity-40 disabled:cursor-not-allowed transition shrink-0"
      >
        <Minus className="h-3 w-3" />
      </button>
      <span className="text-sm font-semibold text-olive-deep w-6 text-center">{value}</span>
      <button
        type="button"
        aria-label="aumentar"
        onClick={() => onChange(value + 1)}
        className="h-6 w-6 rounded-full border border-bark/20 grid place-items-center text-olive-deep hover:bg-bark/5 transition shrink-0"
      >
        <Plus className="h-3 w-3" />
      </button>
    </div>
  );
}
