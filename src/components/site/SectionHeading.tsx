export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = false,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  light?: boolean;
}) {
  const a = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={`max-w-3xl ${a}`}>
      {eyebrow && (
        <span
          className={`inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.35em] ${
            light ? "text-cream/80" : "text-ochre"
          }`}
        >
          <span className="h-px w-6 bg-current" /> {eyebrow}
        </span>
      )}
      <h2
        className={`mt-4 font-display text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-balance ${
          light ? "text-cream" : "text-olive-deep"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-5 text-base md:text-lg leading-relaxed text-balance ${
            light ? "text-cream/85" : "text-muted-foreground"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
