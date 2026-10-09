interface SectionHeaderProps {
  badge?: string;
  title: string;
  highlight?: string;
  description?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionHeader({
  badge,
  title,
  highlight,
  description,
  centered = true,
  className = "",
}: SectionHeaderProps) {
  return (
    <div
      className={`max-w-3xl ${centered ? "mx-auto text-center" : "text-left"} mb-14 sm:mb-20 ${className}`}
    >
      {badge && (
        <div
          className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-semibold tracking-wider uppercase bg-cyan-500/10 border border-cyan-500/25 text-cyan-300 mb-4 shadow-sm backdrop-blur-md ${
            centered ? "mx-auto" : ""
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          <span>{badge}</span>
        </div>
      )}

      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight sm:tracking-tighter leading-[1.12]">
        {title}{" "}
        {highlight && (
          <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
            {highlight}
          </span>
        )}
      </h2>

      {description && (
        <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
}
