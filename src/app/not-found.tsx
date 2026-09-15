import Link from "next/link";

// Brand-neutral fallback for URLs that don't match any route at all (not
// even /adopt/... or /terrasense/...). Routes within either product get a
// branded 404 from their own nested not-found.tsx instead:
//   src/app/(pawhaven)/not-found.tsx
//   src/app/terrasense/not-found.tsx
export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-screen max-w-xl flex-col items-center justify-center bg-white px-4 py-20 text-center text-stone-900 sm:px-6">
      <h1 className="text-3xl font-bold tracking-tight">Page not found</h1>
      <p className="mt-3 text-stone-600">
        The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center justify-center rounded-full bg-stone-900 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-stone-700"
      >
        Go to homepage
      </Link>
    </div>
  );
}
