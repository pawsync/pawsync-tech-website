interface EyebrowProps {
  children: React.ReactNode;
  tone?: "orange" | "teal" | "light" | "sky";
}

// A small uppercase label used above section headings to create a
// consistent, considered visual rhythm across the site — mirrors the
// pattern used on the TerraSense side of this codebase. "sky" is used on
// the tech-forward surfaces (Contact page, footer) that adopt the
// blue/cyan accent instead of the site's usual orange/teal.
export default function Eyebrow({ children, tone = "orange" }: EyebrowProps) {
  const styles = {
    orange: { dot: "bg-orange-600 dark:bg-orange-400", text: "text-orange-700 dark:text-orange-400" },
    teal: { dot: "bg-teal-600 dark:bg-teal-400", text: "text-teal-700 dark:text-teal-400" },
    light: { dot: "bg-white/80", text: "text-white/80" },
    sky: { dot: "bg-sky-400", text: "text-sky-400" },
  }[tone];
  return (
    <span className={`inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-[0.14em] ${styles.text}`}>
      <span aria-hidden="true" className={`h-1.5 w-1.5 rounded-full ${styles.dot}`} />
      {children}
    </span>
  );
}
