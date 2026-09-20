import { Button } from "@/components/Button";
import { PageHero, Section } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { faqs } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Common questions about Rise & Thrive, placement, visits, and how to help.",
};

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Questions families and case workers actually ask."
        lede="Honest answers for a new program. If yours is not here, write to us — we would rather talk than guess."
        image="/images/youth-homework.jpg"
        imageAlt="A teen working on homework with a counselor"
      />
      <Section className="max-w-3xl">
        <div className="divide-y divide-gold/30">
          {faqs.map((f) => (
            <details key={f.q} className="group py-5">
              <summary className="cursor-pointer list-none flex items-start justify-between gap-4 font-display text-xl text-emerald">
                {f.q}
                <span className="text-gold text-2xl leading-none transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-muted leading-relaxed pr-8">{f.a}</p>
            </details>
          ))}
        </div>
        <Reveal className="mt-12">
          <p className="text-muted">Still looking for a door that opens?</p>
          <Button href="/contact" className="mt-4">
            Contact us
          </Button>
        </Reveal>
      </Section>
    </>
  );
}
