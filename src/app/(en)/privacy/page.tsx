import type { Metadata } from "next";
import Breadcrumb from "@/components/terrasense/Breadcrumb";
import Eyebrow from "@/components/terrasense/Eyebrow";
import { buildAlternates, buildOpenGraph } from "@/i18n/config";

export const metadata: Metadata = {
  title: "Privacy Notice | PawSync",
  description: "How PawSync.tech handles the information you submit through the project-inquiry form.",
  alternates: buildAlternates("en", "privacy"),
  openGraph: buildOpenGraph("en", "privacy"),
};

export default function PrivacyPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Privacy Notice" }]} />

      <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">

        <Eyebrow>Privacy Notice</Eyebrow>
        <h1 className="mt-3 break-words font-[family-name:var(--font-manrope)] text-3xl font-extrabold tracking-tight text-[var(--ts-navy)] sm:text-4xl">
          Privacy Notice
        </h1>
        <p className="mt-3 text-sm text-[var(--ts-gray)]">Last updated 28 September 2026</p>

        <div className="prose-content mt-8 space-y-6 text-base leading-relaxed text-[var(--ts-navy)]">
          <section>
            <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
              Who operates this site
            </h2>
            <p className="mt-2">
              PawSync.tech is an independent website operated personally by Tahir Nazeer. It is
              not a registered company, and this notice does not describe it as one.
            </p>
            <p className="mt-2">
              The footer of this site credits <strong>Pak-EL LAB</strong> for engineering work
              on PawSync.tech. That credit is not a statement that Pak-EL LAB owns, operates,
              or is responsible for handling the data submitted through the contact form —
              PawSync.tech is operated personally, as stated above, and Pak-EL LAB&apos;s role
              is limited to engineering.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
              What this notice covers
            </h2>
            <p className="mt-2">
              This notice describes what happens to the information you submit through the
              project-inquiry form on this site. It does not cover any other PawSync
              communication channel unless stated otherwise.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
              Information we collect
            </h2>
            <p className="mt-2">When you submit the project-inquiry form, we collect:</p>
            <ul className="mt-2 list-disc space-y-1 pl-6">
              <li>Your name, company (optional), email address, phone number (optional), and country</li>
              <li>The project type and expected quantity you select</li>
              <li>Your project description</li>
              <li>An optional single file you choose to attach (up to 8 MB, any common document or image format)</li>
              <li>
                A hidden anti-spam (&quot;honeypot&quot;) field that should remain empty; submissions
                where it is filled in are treated as spam and discarded
              </li>
            </ul>
            <p className="mt-2">
              This site does not use cookies, analytics, or advertising scripts of its own —
              this is a fact about the site&apos;s own code, verified directly. Whether the
              hosting platform logs anything at an infrastructure level beyond this is not
              something this notice can currently confirm.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
              How your submission is transmitted and who sees it
            </h2>
            <p className="mt-2">
              Form submissions are processed by <strong>Netlify, Inc.</strong>, the third-party
              platform that hosts this website and its form-handling infrastructure
              (Netlify Forms). Submissions to the <code>project-inquiry</code> form are stored
              in the PawSync Netlify account&apos;s Forms dashboard, which is configured to
              send an email notification to <strong>contact@pawsync.tech</strong> for each new
              submission.
            </p>
            <p className="mt-2">
              Tahir Nazeer personally reviews these notifications. The contact@pawsync.tech
              mailbox has been checked and does not forward to any other address, and the
              Netlify account has been checked for integrations beyond this email
              notification — none were found. The Netlify-to-email flow described above is
              the complete path this data takes.
            </p>
            <p className="mt-2">
              Netlify&apos;s own handling of the data it stores is governed by Netlify&apos;s
              own privacy policy, available at{" "}
              <span className="italic">netlify.com/privacy</span> — this notice does not
              restate Netlify&apos;s terms and you should review them directly for how
              Netlify itself processes data it stores.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
              Why we collect this information
            </h2>
            <p className="mt-2">
              The details and any file you submit are used only to review your project
              inquiry and respond to you about it. We do not sell this information or use
              it for advertising.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
              How long we keep it
            </h2>
            <p className="mt-2">
              Inquiry messages, any uploaded files, and the corresponding notification emails
              are kept for up to 12 months after the last correspondence with you, and are
              then deleted from Netlify and from the email inbox. This is a <strong>manual</strong>{" "}
              process carried out by Tahir Nazeer, not an automatic or system-enforced deletion
              — this notice does not claim otherwise.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
              Your rights
            </h2>
            <p className="mt-2">
              You may request access to, correction of, or deletion of your submitted
              information at any time by contacting contact@pawsync.tech; such requests are
              handled manually. This notice does not claim certification or compliance with
              GDPR or any other specific privacy regulation.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-manrope)] text-xl font-bold text-[var(--ts-navy)]">
              Contact
            </h2>
            <p className="mt-2">
              Questions about this notice, or requests regarding your submitted information,
              can be sent to <strong>contact@pawsync.tech</strong>.
            </p>
          </section>
        </div>
      </section>
    </>
  );
}
