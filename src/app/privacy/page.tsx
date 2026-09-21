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
        eyebrow="Privacy"
        title="We treat your words like they matter."
        lede="A working draft. Counsel will tighten it before launch."
        image="/images/youth-living.jpg"
        imageAlt="Teens in the living room of the home"
      />
      <Section className="max-w-2xl space-y-5 text-ink/80 leading-relaxed">
        <p>
          {site.name} collects only what you choose to send through our forms: name, email,
          phone, and the message you write. We use it to respond. We do not sell it.
        </p>
        <p>
          Referral information about a young person is confidential and shared only with staff
          and partners who need it to provide care, or when the law requires.
        </p>
        <p>
          Questions:{" "}
          <a className="text-emerald underline" href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}>
            {process.env.NEXT_PUBLIC_EMAIL}
          </a>
          .
        </p>
      </Section>
    </>
  );
}
