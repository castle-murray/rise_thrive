import { Button } from "@/components/Button";
import { PageHero, Section } from "@/components/PageHero";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { admission, safety, site } from "@/lib/site";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Residential Group Home",
  description: `Ages ${site.ages}. Admission, care philosophy, and safety protocols.`,
};

export default function ResidentialPage() {
  return (
    <>
      <PageHero
        eyebrow="The home"
        title={`Youth ages ${site.ages}, in a house that is meant to feel like a house.`}
        lede="A home-like environment that promotes healing and personal growth. Visits by appointment — this is not a storefront."
        image="/images/youth-porch-qsi7n.jpg"
        imageAlt="Youth sitting on the porch of the group home"
      />

      <Section className="grid lg:grid-cols-2 gap-12 items-center">
        <Reveal>
          <p className="eyebrow text-gold-deep">Care philosophy</p>
          <h2 className="font-display mt-3 text-3xl sm:text-4xl text-emerald">
            Respect, safety, and empowerment — every day of the week.
          </h2>
          <p className="mt-5 text-lg text-ink/80 leading-relaxed">
            We integrate trauma-informed care, positive youth development, and individualized
            support. Behavior is communication. Goals are written with the young person, not for
            them. The table is the heart of the house.
          </p>
        </Reveal>
        <Reveal delay={0.08} className="relative aspect-[4/3] overflow-hidden">
          <Image
            src="/images/youth-meal-lovlr.jpg"
            alt="Youth sharing a meal with a house parent"
            fill
            className="object-cover"
            sizes="50vw"
          />
        </Reveal>
      </Section>

      <section className="bg-champagne">
        <Section>
          <Reveal>
            <p className="eyebrow text-gold-deep">Admission</p>
            <h2 className="font-display mt-3 text-3xl text-emerald">How a young person arrives.</h2>
          </Reveal>
          <Stagger className="mt-10 grid sm:grid-cols-2 gap-6">
            {admission.map((a) => (
              <StaggerItem key={a.title} className="bg-ivory border border-emerald/10 p-6">
                <h3 className="font-display text-xl text-emerald">{a.title}</h3>
                <p className="mt-3 text-muted leading-relaxed">{a.body}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </Section>
      </section>

      <Section>
        <Reveal>
          <p className="eyebrow text-gold-deep">Safety protocols</p>
          <h2 className="font-display mt-3 text-3xl text-emerald">Safety is the soil everything else grows in.</h2>
          <ul className="mt-8 space-y-4 max-w-2xl">
            {safety.map((s) => (
              <li key={s} className="flex gap-4 border-l-2 border-gold pl-4 text-ink/80">
                {s}
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm text-muted max-w-2xl">
            Full written protocols will match Virginia licensing. If someone is in immediate
            danger, call 911. For a mental health crisis, call or text 988.
          </p>
          <Button href="/contact" className="mt-8">
            Start a referral
          </Button>
        </Reveal>
      </Section>
    </>
  );
}
