import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | PawSync.tech",
  description: "How PawSync collects, uses, and protects your information.",
};

export default function PrivacyPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
      <h1 className="font-[family-name:var(--font-display)] text-4xl font-extrabold tracking-tight text-stone-900 dark:text-stone-50">
        Privacy Policy
      </h1>
      <p className="mt-3 text-sm text-stone-500 dark:text-stone-400">
        Last updated: placeholder — this is template content for a demo
        project, not a reviewed legal document.
      </p>

      <div className="mt-8 space-y-6 text-stone-600 dark:text-stone-300">
        <p>
          This page outlines, in plain terms, what PawSync would collect
          and how it would be used. Replace this template with a policy
          reviewed by legal counsel before this site handles real user
          data.
        </p>

        <section>
          <h2 className="font-[family-name:var(--font-display)] text-xl font-bold text-stone-900 dark:text-stone-50">
            Information we&apos;d collect
          </h2>
          <p className="mt-2">
            Contact details you provide through forms on this site — such
            as name, email, phone, and location — when you sign up for the
            newsletter, submit an adoption inquiry, or reach out through
            Get Involved.
          </p>
        </section>

        <section>
          <h2 className="font-[family-name:var(--font-display)] text-xl font-bold text-stone-900 dark:text-stone-50">
            How it would be used
          </h2>
          <p className="mt-2">
            To respond to inquiries, process adoption or volunteer
            applications, and send newsletter updates you&apos;ve opted
            into. This demo does not connect to a live backend, so no data
            submitted here is currently stored or transmitted anywhere.
          </p>
        </section>

        <section>
          <h2 className="font-[family-name:var(--font-display)] text-xl font-bold text-stone-900 dark:text-stone-50">
            Contact
          </h2>
          <p className="mt-2">
            Questions about this policy can be sent to{" "}
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
