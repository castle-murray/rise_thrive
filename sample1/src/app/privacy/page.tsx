import { PageHero, Section } from "@/components/PageHero";
import { site } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy",
  description: `How ${site.shortName} handles the information you share.`,
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        compact
        eyebrow="Privacy"
        title="We treat your words like they matter."
        lede="This is a working draft. Counsel will tighten it before launch."
        image="/images/plant.jpg"
        imageAlt="A plant growing toward a window of light"
      />
      <Section className="max-w-2xl prose-warm text-ink/80 leading-relaxed space-y-5">
        <p>
          {site.name} collects only what you choose to send through our forms: name, email,
          phone, and the message you write. We use it to respond to you. We do not sell it.
        </p>
        <p>
          Referral information about a young person is treated as confidential and shared only
          with staff and partners who need it to provide care, or when the law requires.
        </p>
        <p>
          This site may use privacy-respecting analytics later. No advertising trackers are
          installed today.
        </p>
        <p>
          Questions:{" "}
          <a className="text-forest underline" href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}>
            {process.env.NEXT_PUBLIC_EMAIL}
          </a>
          .
        </p>
      </Section>
    </>
  );
}
