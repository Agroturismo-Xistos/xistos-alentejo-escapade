export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = false,
  index,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  light?: boolean;
  index?: string;
}) {
  const a = align === "center" ? "text-center mx-auto items-center" : "text-left items-start";
  return (
    <div className={`max-w-3xl flex flex-col ${a}`}>
      {eyebrow && (
        <span
          className={`inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] ${
            light ? "text-cream/70" : "text-ochre"
          }`}
        >
          <span className="h-px w-8 bg-current" />
          {eyebrow}
          {index && <span className="opacity-50">— {index}</span>}
        </span>
      )}
      <h2
        className={`mt-6 font-display font-light text-4xl md:text-5xl lg:text-6xl leading-[0.95] tracking-[-0.03em] text-balance ${
          light ? "text-cream" : "text-olive-deep"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-5 max-w-xl text-sm md:text-[15px] leading-[1.7] text-pretty ${
            light ? "text-cream/80" : "text-muted-foreground"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
