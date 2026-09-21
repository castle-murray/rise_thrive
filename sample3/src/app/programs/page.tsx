import { Button } from "@/components/Button";
import { PageHero, Section } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { programs } from "@/lib/site";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = { title: "Programs" };

export default function ProgramsPage() {
  return (
    <>
      <PageHero
        eyebrow="Programs"
        title="Trauma-informed care. Daily structure. Individualized support."
        lede="Emotional support, academic encouragement, healthy social interaction, and skill-building for the long term."
        image="/images/youth-homework.jpg"
        imageAlt="A teen working on homework with a counselor"
      />
      {programs.map((p, i) => (
        <section key={p.title} className={i % 2 ? "bg-champagne" : "bg-ivory"}>
          <Section className="grid md:grid-cols-2 gap-10 items-center">
            <Reveal className={i % 2 ? "md:order-2" : undefined}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.8rem]">
                <Image src={p.image} alt="" fill className="object-cover" sizes="50vw" />
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="eyebrow">0{i + 1}</p>
              <h2 className="font-display mt-3 text-3xl text-espresso">{p.title}</h2>
              <p className="mt-4 text-lg text-ink/80 leading-relaxed">{p.body}</p>
            </Reveal>
          </Section>
        </section>
      ))}
      <Section className="text-center">
        <Reveal>
          <h2 className="font-display text-3xl text-espresso">Licensing details will land here.</h2>
          <p className="mt-3 text-muted max-w-xl mx-auto">
            Ages 10–17. Capacity and referral pathways are being finalized.
          </p>
          <Button href="/contact" className="mt-8">
            Start a conversation
          </Button>
        </Reveal>
      </Section>
    </>
  );
}
