import { Button } from "@/components/Button";
import { LogoLockup } from "@/components/Logo";
import { PageHero, Section } from "@/components/PageHero";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { site, values } from "@/lib/site";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About",
  description: `Who we are, what we believe, and how ${site.shortName} is starting.`,
};

const approach = [
  {
    title: "Family-style, not institutional",
    body: "Small numbers. Shared meals. Adults who live the day with the youth, not at a desk down the hall.",
  },
  {
    title: "Trauma-informed",
    body: "Behavior is communication. We slow down, stay consistent, and never use humiliation as a tool.",
  },
  {
    title: "Youth-centered plans",
    body: "Goals are written with the young person, not for them. School, family, work, and wellness all sit at the same table.",
  },
  {
    title: "Community around the house",
    body: "Mentors, congregations, neighbors, and professionals — a village that doesn't vanish at shift change.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="A new house with an old idea: belonging."
        lede="We don't have a fifty-year archive. We have a name, a table, and a standard of care we intend to keep."
        image="/images/porch.jpg"
        imageAlt="A porch at dusk with the door open and warm light spilling out"
      />

      <Section className="grid lg:grid-cols-2 gap-12 items-center">
        <Reveal>
          <p className="eyebrow">The story, so far</p>
          <h2 className="font-display mt-3 text-3xl sm:text-4xl text-forest">
            Rise &amp; Thrive is a startup with a serious calling.
          </h2>
          <div className="prose-warm mt-5 text-lg text-ink/80 leading-relaxed">
            <p>
              {site.name} is being built as a residential group home for youth — a live-in,
              family-style setting for young people who need a safe place to grow. The logo you
              already know is the brief: hands around a living thing.
            </p>
            <p>
              The longer origin story will come from the people founding this house. Until that
              conversation is on the record, we won&apos;t invent one. What we will say is the
              work: shelter that feels like home, skills that travel, and hope you can practice.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <LogoLockup />
        </Reveal>
      </Section>

      <section className="bg-forest text-cream">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-20">
          <Reveal>
            <p className="eyebrow text-gold">Values</p>
            <h2 className="font-display mt-3 text-3xl sm:text-5xl max-w-xl">
              The house rules for how we treat people.
            </h2>
          </Reveal>
          <Stagger className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((v) => (
              <StaggerItem key={v.title}>
                <h3 className="font-display text-2xl">{v.title}</h3>
                <p className="mt-2 text-cream/75 leading-relaxed">{v.body}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <Section>
        <Reveal>
          <p className="eyebrow">How we work</p>
          <h2 className="font-display mt-3 text-3xl sm:text-4xl text-forest max-w-2xl">
            Care that looks like a Tuesday.
          </h2>
        </Reveal>
        <Stagger className="mt-10 grid sm:grid-cols-2 gap-6">
          {approach.map((a) => (
            <StaggerItem
              key={a.title}
              className="rounded-[1.6rem] border border-forest/10 bg-paper p-6 sm:p-8"
            >
              <h3 className="font-display text-2xl text-forest">{a.title}</h3>
              <p className="mt-3 text-muted leading-relaxed">{a.body}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <Section className="grid md:grid-cols-2 gap-8 items-center pt-0">
        <Reveal className="relative aspect-[4/3] overflow-hidden rounded-[2rem]">
          <Image
            src="/images/garden.jpg"
            alt="Adult volunteers planting a community garden together"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </Reveal>
        <Reveal delay={0.1}>
          <p className="eyebrow">People</p>
          <h2 className="font-display mt-3 text-3xl text-forest">Leadership is on the Staff page.</h2>
          <p className="mt-4 text-lg text-ink/80 leading-relaxed">
            Meet Latrecia Russell and Randall Jones — the owners who keep the house
            running — with roles and photos on our Staff page. House parents, clinicians,
            and partners will join them as the team grows.
          </p>
          <div className="mt-7 flex flex-col sm:flex-row gap-3">
            <Button href="/staff">Meet the staff</Button>
            <Button href="/get-involved" variant="ghost" className="text-forest">
              Get involved
            </Button>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
