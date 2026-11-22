import type { Metadata } from "next";
import RootShell from "./_shared/RootShell";
import NotFoundContent from "@/components/terrasense/NotFoundContent";

// With one root layout per language there is no single layout to build the
// 404 page from, so unmatched URLs render this full document instead.
// NotFoundContent picks English, German or French text from the URL.
export const metadata: Metadata = {
  title: "Page not found | PawSync",
  robots: { index: false },
};

export default function GlobalNotFound() {
  return (
    <RootShell locale="en">
      <NotFoundContent />
    </RootShell>
  );
}
