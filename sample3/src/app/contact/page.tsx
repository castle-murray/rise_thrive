import { InquiryForm } from "@/components/forms/InquiryForm";
import { PageHero, Section } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { publicContact } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  const contact = publicContact();
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Start with a conversation."
        lede="This is a residential home, not a storefront. We do not publish drop-in hours or a public walk-up."
        image="/images/youth-talk.jpg"
        imageAlt="A counselor and a young person talking in a living room"
      />
      <Section className="grid lg:grid-cols-2 gap-12">
        <Reveal>
          <p className="eyebrow">Reach us</p>
          <h2 className="font-display mt-3 text-3xl text-espresso">We will meet you where you are.</h2>
          <p className="mt-4 text-ink/80 leading-relaxed">
            Families, case workers, and partners can write or call. If a young person needs
            placement, tell us who and how soon. We will be honest about openings.
          </p>
          <address className="mt-8 not-italic space-y-5">
            <p>
              <span className="block text-xs tracking-[0.2em] uppercase text-muted">Phone</span>
              <a className="text-xl text-espresso" href={`tel:${contact.phone.replace(/[^\d+]/g, "")}`}>
                {contact.phone}
              </a>
            </p>
            <p>
              <span className="block text-xs tracking-[0.2em] uppercase text-muted">Email</span>
              <a className="text-xl text-espresso break-all" href={`mailto:${contact.email}`}>
                {contact.email}
              </a>
            </p>
            <p>
              <span className="block text-xs tracking-[0.2em] uppercase text-muted">Region</span>
              <span className="text-xl text-espresso">{contact.region}</span>
            </p>
            <p>
              <span className="block text-xs tracking-[0.2em] uppercase text-muted">Hours</span>
              <span className="text-xl text-espresso">{contact.hours}</span>
            </p>
          </address>
          <p className="mt-8 text-sm text-muted max-w-md">
            Street address is held back on purpose. A group home is still someone&apos;s house.
            Visits are by appointment after we talk.
          </p>
        </Reveal>
        <Reveal delay={0.08} className="rounded-[1.6rem] border border-gold/30 bg-champagne p-6 sm:p-8">
          <InquiryForm />
        </Reveal>
      </Section>
    </>
  );
}
