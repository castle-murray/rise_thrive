import { Button } from "@/components/Button";
import { LogoLockup } from "@/components/Logo";
import { Section } from "@/components/PageHero";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { faqs, programs, site, values } from "@/lib/site";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="relative isolate min-h-[100svh] overflow-hidden bg-forest-deep text-cream">
        <Image
          src="/images/hero-home.jpg"
          alt="A cream craftsman house with a wraparound porch and garden at golden hour"
          fill
          priority
          sizes="100vw"
          className="object-cover kenburns"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-forest-deep/40 to-black/15" />
        <div className="relative flex min-h-[100svh] flex-col justify-end px-4 sm:px-8 pb-14 sm:pb-20 pt-28 max-w-6xl mx-auto">
          <p className="eyebrow text-gold rise-in">{site.descriptor}</p>
          <h1 className="font-display mt-4 text-[2.7rem] sm:text-6xl md:text-7xl leading-[0.95] max-w-3xl rise-in [animation-delay:90ms]">
            Room to rise.
            <br />
            A place to thrive.
          </h1>
          <p className="mt-5 max-w-lg text-lg sm:text-xl text-cream/88 leading-relaxed rise-in [animation-delay:180ms]">
            {site.tagline} A warm home for youth who need somewhere steady to grow.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 rise-in [animation-delay:260ms]">
            <Button href="/get-support" variant="cream" size="lg">
              I need support
            </Button>
            <Button href="/get-involved" variant="ghost" size="lg" className="text-cream">
              Walk with us
            </Button>
          </div>
        </div>
      </section>

      <Section>
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
          <Reveal>
            <p className="eyebrow">A home, first</p>
            <h2 className="font-display mt-3 text-3xl sm:text-5xl text-forest leading-tight">
              We are just beginning — and we are building something that lasts.
            </h2>
            <div className="prose-warm mt-6 text-lg text-ink/80 leading-relaxed max-w-xl">
              <p>
                Rise &amp; Thrive Support Services is a new residential group home. There isn&apos;t a
                long history yet. There is a promise: a house that feels like a house, adults who
                stay, and a table with an extra chair.
              </p>
              <p>
                Youth who need a safe place to land shouldn&apos;t have to earn warmth. They should
                walk into it.
              </p>
            </div>
            <Button href="/about" className="mt-8">
              Our approach
            </Button>
          </Reveal>
          <Reveal delay={0.12}>
            <LogoLockup />
          </Reveal>
        </div>
      </Section>

      <section className="bg-forest text-cream">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-20">
          <Reveal>
            <p className="eyebrow text-gold">What we hold</p>
            <h2 className="font-display mt-3 text-3xl sm:text-5xl max-w-xl">
              Five things a home owes a young person.
            </h2>
          </Reveal>
          <Stagger className="mt-10 grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {values.map((v, i) => (
              <StaggerItem key={v.title}>
                <p className="font-display text-5xl text-gold/80">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="mt-3 font-display text-xl">{v.title}</h3>
                <p className="mt-2 text-sm text-cream/75 leading-relaxed">{v.body}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <Section className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <Reveal className="relative aspect-[4/3] overflow-hidden rounded-[2rem]">
          <Image
            src="/images/dining.jpg"
            alt="A sunlit dining table set for a family-style meal"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-700 hover:scale-105"
          />
        </Reveal>
        <Reveal delay={0.1}>
          <p className="eyebrow">The table is the heart</p>
          <h2 className="font-display mt-3 text-3xl sm:text-4xl text-forest">
            Ordinary days, done with care.
          </h2>
          <p className="mt-4 text-lg text-ink/80 leading-relaxed">
            Breakfast. Backpacks. Chores. A lamp left on. Healing often looks like a week that
            didn&apos;t fall apart. We build a rhythm a young person can trust — then we teach the
            skills that make the next home possible.
          </p>
          <Button href="/programs" className="mt-7">
            See programs
          </Button>
        </Reveal>
      </Section>

      <section className="bg-paper">
        <Section className="py-16 sm:py-20">
          <Reveal>
            <p className="eyebrow">How we help</p>
            <h2 className="font-display mt-3 text-3xl sm:text-5xl text-forest max-w-2xl">
              Care that covers the whole day — and the years after.
            </h2>
          </Reveal>
          <Stagger className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {programs.map((p) => (
              <StaggerItem key={p.slug}>
                <Link
                  href={`/programs#${p.slug}`}
                  className="group block overflow-hidden rounded-[1.6rem] bg-cream border border-forest/10 hover:border-forest/25 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_50px_-28px_rgba(44,90,60,0.45)]"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={p.image}
                      alt=""
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-xl text-forest">{p.title}</h3>
                    <p className="mt-2 text-sm text-muted leading-relaxed">{p.summary}</p>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </Section>
      </section>

      <section className="grid grid-cols-2 md:grid-cols-4 min-h-[50vw] md:min-h-[28rem]">
        {[
          { src: "/images/hands-seedling.jpg", alt: "Hands cupping a seedling" },
          { src: "/images/porch.jpg", alt: "A porch door open with warm light" },
          { src: "/images/living-room.jpg", alt: "A cozy living room in morning light" },
          { src: "/images/plant.jpg", alt: "A plant growing toward sunlight" },
        ].map((img) => (
          <div key={img.src} className="relative min-h-44 md:min-h-full">
            <Image src={img.src} alt={img.alt} fill sizes="25vw" className="object-cover" />
          </div>
        ))}
      </section>

      <Section>
        <div className="grid md:grid-cols-2 gap-6">
          <Reveal className="rounded-[2rem] bg-forest text-cream p-8 sm:p-10 flex flex-col justify-between min-h-72">
            <div>
              <p className="eyebrow text-gold">Need a place</p>
              <h2 className="font-display mt-3 text-3xl sm:text-4xl">If you&apos;re looking for a home.</h2>
              <p className="mt-4 text-cream/80">
                Youth, families, and case workers can start here. We&apos;ll tell you honestly whether
                we have room, and what happens next.
              </p>
            </div>
            <Button href="/get-support" variant="cream" className="mt-8 w-fit">
              Get support
            </Button>
          </Reveal>
          <Reveal
            delay={0.1}
            className="rounded-[2rem] bg-cream-deep text-forest p-8 sm:p-10 flex flex-col justify-between min-h-72"
          >
            <div>
              <p className="eyebrow">Have something to give</p>
              <h2 className="font-display mt-3 text-3xl sm:text-4xl">If you want to walk with us.</h2>
              <p className="mt-4 text-ink/75">
                Time, meals, skills, or a monthly gift. A new home is built by a village that
                shows up.
              </p>
            </div>
            <Button href="/get-involved" className="mt-8 w-fit">
              Get involved
            </Button>
          </Reveal>
        </div>
      </Section>

      <section className="bg-paper">
        <Section className="max-w-3xl">
          <Reveal>
            <p className="eyebrow">Questions</p>
            <h2 className="font-display mt-3 text-3xl sm:text-4xl text-forest">Asked, already.</h2>
          </Reveal>
          <div className="mt-8 divide-y divide-forest/10">
            {faqs.map((f) => (
              <details key={f.q} className="group py-4">
                <summary className="cursor-pointer list-none flex items-center justify-between gap-4 font-display text-xl text-forest">
                  {f.q}
                  <span className="text-sage transition-transform group-open:rotate-45 text-2xl leading-none">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-muted leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </Section>
      </section>

      <section className="relative isolate overflow-hidden min-h-[22rem] text-cream">
        <Image
          src="/images/path-sunrise.jpg"
          alt="A sunlit path through trees at sunrise"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-forest-deep/55" />
        <div className="relative mx-auto max-w-3xl px-4 py-20 text-center">
          <Reveal>
            <h2 className="font-display text-3xl sm:text-5xl">Tomorrow can be different.</h2>
            <p className="mt-4 text-lg text-cream/85">
              Whether you need a door that opens, or you want to hold one open — start a
              conversation.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <Button href="/contact" variant="cream">
                Contact us
              </Button>
              <Button href="/donate" variant="terracotta">
                Give
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
