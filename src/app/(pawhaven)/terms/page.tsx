import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | PawSync.tech",
  description: "Terms governing use of the PawSync website.",
};

export default function TermsPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
      <h1 className="font-[family-name:var(--font-display)] text-4xl font-extrabold tracking-tight text-stone-900 dark:text-stone-50">
        Terms of Service
      </h1>
      <p className="mt-3 text-sm text-stone-500 dark:text-stone-400">
        Last updated: placeholder — this is template content for a demo
        project, not a reviewed legal document.
      </p>

      <div className="mt-8 space-y-6 text-stone-600 dark:text-stone-300">
        <p>
          These terms describe acceptable use of this site. Replace this
          template with terms reviewed by legal counsel before launch.
        </p>

        <section>
          <h2 className="font-[family-name:var(--font-display)] text-xl font-bold text-stone-900 dark:text-stone-50">
            Using this site
          </h2>
          <p className="mt-2">
            This is a demonstration website. Adoption listings, donation
            forms, and inquiry forms are not connected to a live backend
            or payment provider — no application, donation, or message
            submitted here is currently processed or stored.
          </p>
        </section>

        <section>
          <h2 className="font-[family-name:var(--font-display)] text-xl font-bold text-stone-900 dark:text-stone-50">
            Content
          </h2>
          <p className="mt-2">
            Pet listings, statistics, and testimonials shown on this site
            are sample data for demonstration purposes and should be
            replaced with verified information before this site
            represents a real organization.
          </p>
        </section>

        <section>
          <h2 className="font-[family-name:var(--font-display)] text-xl font-bold text-stone-900 dark:text-stone-50">
            Contact
          </h2>
          <p className="mt-2">
            Questions about these terms can be sent to{" "}
            <a href="mailto:contact@pawsync.tech" className="font-semibold text-orange-600 underline underline-offset-2 dark:text-orange-400">
              contact@pawsync.tech
            </a>
            .
          </p>
        </section>
      </div>
    </article>
  );
}
