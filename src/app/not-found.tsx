import type { Metadata } from "next";
import NotFoundContent from "@/components/terrasense/NotFoundContent";

// The visible 404 page is a client component (it reads the URL to pick the
// language), and client components can't export metadata. This server
// wrapper gives the 404 page its own title instead of the site default.
export const metadata: Metadata = {
  title: "Page not found | PawSync",
  robots: { index: false },
};

export default function NotFound() {
  return <NotFoundContent />;
}
