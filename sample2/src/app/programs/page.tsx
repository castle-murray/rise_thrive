import { Button } from "@/components/Button";
import { PageHero, Section } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { daily, goals, programs } from "@/lib/site";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Programs & Services",
  description:
    "Residential care, daily structure, and emotional, behavioral, and academic support.",
};

export default function ProgramsPage() {
  return (
    <>
      <PageHero
        eyebrow="Programs & services"
        title="Trauma-informed care. Positive youth development. Individualized support."
        lede="Daily programming includes emotional support, academic encouragement, healthy social interaction, and skill-building for the long term."
        image="/images/youth-homework.jpg"
        imageAlt="A teen working on homework with a counselor"
      />

      {programs.map((p, i) => (
        <section key={p.slug} className={i % 2 ? "bg-champagne" : "bg-ivory"}>
          <Section className="grid md:grid-cols-2 gap-10 items-center">
            <Reveal className={i % 2 ? "md:order-2" : undefined}>
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image src={p.image} alt="" fill className="object-cover" sizes="50vw" />
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="eyebrow text-gold-deep">0{i + 1}</p>
              <h2 className="font-display mt-3 text-3xl text-emerald">{p.title}</h2>
              <div className="mt-3 h-px w-16 bg-gold" />
              <p className="mt-4 text-lg text-ink/80 leading-relaxed">{p.body}</p>
            </Reveal>
          </Section>
        </section>
      ))}

      <section className="bg-navy text-champagne">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
          <Reveal>
            <p className="eyebrow">A day in the house</p>
            <h2 className="font-display mt-3 text-3xl sm:text-4xl">Daily structure</h2>
          </Reveal>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {daily.map((d) => (
              <div key={d.time} className="border border-gold/25 p-5">
                <h3 className="font-display text-xl text-gold-bright">{d.time}</h3>
                <p className="mt-3 text-sm text-champagne/75 leading-relaxed">{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Section>
        <Reveal>
          <p className="eyebrow text-gold-deep">Program goals</p>
          <h2 className="font-display mt-3 text-3xl text-emerald">What progress looks like.</h2>
          <ul className="mt-8 grid sm:grid-cols-2 gap-3">
            {goals.map((g) => (
              <li key={g} className="flex gap-3 text-ink/80">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-gold" />
                {g}
              </li>
            ))}
          </ul>
          <Button href="/contact" className="mt-10">
            Start a conversation
          </Button>
        </Reveal>
      </Section>
    </>
  );
}
