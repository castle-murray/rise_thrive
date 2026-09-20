import { PageHero, Section } from "@/components/PageHero";
import { site } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Privacy" };

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
          {site.name} collects only what you send through our forms. We use it to respond. We do
          not sell it.
        </p>
        <p>
          Referral information about a young person is confidential and shared only with people
          who need it to provide care, or when the law requires.
        </p>
      </Section>
    </>
  );
}
