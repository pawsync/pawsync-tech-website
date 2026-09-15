interface EyebrowProps {
  children: React.ReactNode;
  align?: "center" | "left";
  tone?: "light" | "dark";
}

export default function Eyebrow({ children, align = "center", tone = "light" }: EyebrowProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] ${
        align === "center" ? "justify-center" : ""
      } ${tone === "dark" ? "text-[var(--ts-accent)]" : "text-[var(--ts-green)]"}`}
    >
      <span
        aria-hidden="true"
        className={`h-1.5 w-1.5 rounded-full ${tone === "dark" ? "bg-[var(--ts-accent)]" : "bg-[var(--ts-green)]"}`}
      />
      {children}
    </span>
  );
}
