interface ProjectCardProps {
  title: string;
  industry: string;
  stage: string;
  technology: string[];
  challenge: string;
  solution: string;
  features: string[];
}

export default function ProjectCard({
  title,
  industry,
  stage,
  technology,
  challenge,
  solution,
  features,
}: ProjectCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-[var(--ts-navy)]/8 bg-white p-6 shadow-[0_1px_2px_rgba(14,27,38,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-transparent hover:shadow-[0_20px_40px_-12px_rgba(14,27,38,0.16)]">
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-[var(--ts-green)] to-[var(--ts-accent)] transition-transform duration-300 group-hover:scale-x-100"
      />
      <div className="flex flex-wrap items-center gap-2">
        <span className="rounded-full bg-[var(--ts-dark-green)]/8 px-2.5 py-1 text-xs font-semibold text-[var(--ts-dark-green)]">
          {industry}
        </span>
        <span className="rounded-full border border-[var(--ts-navy)]/10 px-2.5 py-1 text-xs font-medium text-[var(--ts-gray)]">
          {stage}
        </span>
      </div>

      <h3 className="mt-4 font-[family-name:var(--font-manrope)] text-lg font-bold text-[var(--ts-navy)]">
        {title}
      </h3>

      <dl className="mt-3 space-y-2 text-sm">
        <div>
          <dt className="font-semibold text-[var(--ts-navy)]">Challenge</dt>
          <dd className="text-[var(--ts-gray)]">{challenge}</dd>
        </div>
        <div>
          <dt className="font-semibold text-[var(--ts-navy)]">Solution</dt>
          <dd className="text-[var(--ts-gray)]">{solution}</dd>
        </div>
      </dl>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {features.map((feature) => (
          <span key={feature} className="rounded-full bg-[var(--ts-bg)] px-2.5 py-1 text-[11px] font-medium text-[var(--ts-navy)]">
            {feature}
          </span>
        ))}
      </div>

      <div className="mt-3 flex flex-wrap gap-1.5">
        {technology.map((tech) => (
          <span key={tech} className="rounded-full border border-[var(--ts-navy)]/10 px-2.5 py-1 text-[11px] font-medium text-[var(--ts-dark-green)]">
            {tech}
          </span>
        ))}
      </div>
    </article>
  );
}
