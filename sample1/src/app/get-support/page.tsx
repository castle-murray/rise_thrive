import { InquiryForm } from "@/components/forms/InquiryForm";
import { PageHero, Section } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { publicContact } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get support",
  description: "Start a referral or ask about a place for a young person who needs a home.",
};

const steps = [
  {
    title: "Reach out",
    body: "Use the form, call, or email. Tell us who needs care and how soon.",
  },
  {
    title: "We listen",
    body: "A team member follows up. We'll ask about safety, school, family, and what 'home' needs to mean right now.",
  },
  {
    title: "Next steps",
    body: "If we have an opening and it's a fit, we'll walk through paperwork and a visit. If we don't, we'll try to point you toward someone who might.",
  },
];

export default function GetSupportPage() {
  const contact = publicContact();
  return (
    <>
      <PageHero
        eyebrow="Get support"
        title="If you need a door that opens."
        lede="Youth, families, and case workers are welcome here. You don't have to have the paperwork perfect to start talking."
        image="/images/hands-seedling.jpg"
        imageAlt="Adult hands gently holding a seedling"
      >
        <a
          href={`tel:${contact.phone.replace(/[^\d+]/g, "")}`}
          className="inline-flex text-cream/90 underline-offset-4 hover:underline"
        >
          Call {contact.phone}
        </a>
      </PageHero>

      <Section>
        <div className="grid lg:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08} className="rounded-[1.6rem] bg-paper p-6 border border-forest/10">
              <p className="font-display text-4xl text-gold">{String(i + 1).padStart(2, "0")}</p>
              <h2 className="font-display mt-3 text-2xl text-forest">{s.title}</h2>
              <p className="mt-2 text-muted leading-relaxed">{s.body}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 pt-0">
        <Reveal>
          <p className="eyebrow">Please know</p>
          <h2 className="font-display mt-3 text-3xl text-forest">This is not a crisis line.</h2>
          <p className="mt-4 text-ink/80 leading-relaxed">
            If someone is in immediate danger, call 911. If a young person is in crisis, contact
            local emergency services or the 988 Suicide &amp; Crisis Lifeline.
          </p>
          <p className="mt-4 text-ink/80 leading-relaxed">
            We are a residential group home. Openings are limited. We will never pretend we can
            take someone we cannot keep safe.
          </p>
          <dl className="mt-8 space-y-3 text-sm">
            <div>
              <dt className="text-muted">Phone</dt>
              <dd>
                <a className="text-forest" href={`tel:${contact.phone.replace(/[^\d+]/g, "")}`}>
                  {contact.phone}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-muted">Email</dt>
              <dd>
                <a className="text-forest" href={`mailto:${contact.email}`}>
                  {contact.email}
                </a>
              </dd>
            </div>
          </dl>
        </Reveal>
        <Reveal delay={0.1} className="rounded-[2rem] border border-forest/10 bg-paper p-6 sm:p-8">
          <InquiryForm kind="referral" />
        </Reveal>
      </Section>
    </>
  );
}
