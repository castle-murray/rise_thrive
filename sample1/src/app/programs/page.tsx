import { Button } from "@/components/Button";
import { PageHero, Section } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { programs } from "@/lib/site";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Programs",
  description:
    "Residential living, life skills, education support, wellness, family engagement, and transition to independence.",
};

export default function ProgramsPage() {
  return (
    <>
      <PageHero
        eyebrow="Programs"
        title="The whole day, held with care."
        lede="A group home is more than a bed. It's the hours between — meals, homework, hard conversations, and the practice of becoming someone."
        image="/images/living-room.jpg"
        imageAlt="A calm living room with morning light"
        imagePosition="object-[center_40%]"
      />

      {programs.map((p, i) => (
        <section
          id={p.slug}
          key={p.slug}
          className={i % 2 === 1 ? "bg-paper" : "bg-cream"}
        >
          <Section className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <Reveal className={i % 2 === 1 ? "md:order-2" : undefined}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem]">
                <Image
                  src={p.image}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={0.08} className={i % 2 === 1 ? "md:order-1" : undefined}>
              <p className="eyebrow">0{i + 1}</p>
              <h2 className="font-display mt-3 text-3xl sm:text-4xl text-forest">{p.title}</h2>
              <p className="mt-4 text-lg text-ink/80 leading-relaxed">{p.details}</p>
            </Reveal>
          </Section>
        </section>
      ))}

      <Section className="text-center max-w-2xl">
        <Reveal>
          <h2 className="font-display text-3xl sm:text-4xl text-forest">
            Licensing and program details will land here.
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            Capacity, ages served, and referral pathways are being finalized. If you need
            placement now, start a conversation — we&apos;ll be honest about what we can offer.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Button href="/get-support">Get support</Button>
            <Button href="/contact" variant="ghost" className="text-forest">
              Ask a question
            </Button>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
