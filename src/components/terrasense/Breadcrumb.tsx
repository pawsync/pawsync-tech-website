import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface Crumb {
  label: string;
  href?: string;
}

export default function Breadcrumb({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mx-auto max-w-7xl px-4 pt-6 sm:px-6 lg:px-8">
      <ol className="flex flex-wrap items-center gap-1.5 text-sm text-[var(--ts-gray)]">
        <li className="flex items-center gap-1.5">
          <Link href="/terrasense" className="flex items-center gap-1 transition-colors hover:text-[var(--ts-dark-green)]">
            <Home className="h-3.5 w-3.5" aria-hidden="true" />
            Home
          </Link>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.label} className="flex items-center gap-1.5">
              <ChevronRight className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
              {item.href && !isLast ? (
                <Link href={item.href} className="transition-colors hover:text-[var(--ts-dark-green)]">
                  {item.label}
                </Link>
              ) : (
                <span aria-current={isLast ? "page" : undefined} className="font-medium text-[var(--ts-navy)]">
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
