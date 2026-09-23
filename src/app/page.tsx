import { Button } from "@/components/Button";
import { Section } from "@/components/PageHero";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { houseSkills, mission, programs, site, staff, values } from "@/lib/site";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const featured = values.slice(0, 6);

  return (
    <>
      <section className="relative isolate min-h-[100svh] overflow-hidden text-champagne">
        <Image
          src="/images/youth-porch-qsi7n.jpg"
          alt="Three teenagers sitting on a porch with backpacks, laughing after school"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_30%] kenburns"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-deep via-emerald-deep/50 to-black/20" />
        <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-4 sm:px-8 pb-14 sm:pb-20 pt-28">
          <p className="eyebrow rise-in">{site.descriptor}</p>
          <h1 className="font-display mt-4 text-[2.6rem] sm:text-6xl md:text-7xl leading-[0.95] max-w-3xl rise-in [animation-delay:80ms]">
            A home for youth.
          </h1>
          <p className="mt-5 max-w-lg text-lg sm:text-xl text-champagne/88 rise-in [animation-delay:160ms]">
            {site.tagline} Ages {site.ages} — a stable house, caring adults, and room to grow up.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 rise-in [animation-delay:240ms]">
            <Button href="/about" size="lg">
              Learn more
            </Button>
            <Button href="/contact" variant="ghost" size="lg">
              Contact us
            </Button>
          </div>
        </div>
      </section>

      <Section className="grid lg:grid-cols-2 gap-12 items-center">
        <Reveal>
          <p className="eyebrow text-gold-deep">Mission</p>
          <h2 className="font-display mt-3 text-3xl sm:text-4xl text-emerald">
            Safe enough to grow. Believed in enough to thrive.
          </h2>
          <div className="mt-5 h-px w-24 bg-gold" />
          <p className="mt-5 text-lg text-ink/80 leading-relaxed">{mission}</p>
          <Button href="/programs" variant="outline" className="mt-8">
            Our programs
          </Button>
        </Reveal>
        <Reveal delay={0.08} className="relative aspect-[4/3] overflow-hidden">
          <Image
            src="/images/homepage-car-wash-eqt8j.webp"
            alt="An adult and a youth washing a car together outdoors"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </Reveal>
      </Section>

      <section className="bg-champagne">
        <Section>
          <Reveal>
            <p className="eyebrow text-gold-deep">Life in the house</p>
            <h2 className="font-display mt-3 text-3xl sm:text-4xl text-emerald">
              Skills they practice here.
            </h2>
            <p className="mt-4 max-w-2xl text-ink/75 leading-relaxed">
              School mornings and shared dinners are the frame. Inside it, youth rehearse the ordinary
              work of growing up — one chore, one homework hour, one ask-for-help at a time.
            </p>
          </Reveal>
          <Stagger className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {houseSkills.map((s) => (
              <StaggerItem key={s.title} className="border border-gold/25 bg-champagne-deep/40 p-6 sm:p-7">
                <div className="h-px w-10 bg-gold mb-4" />
                <h3 className="font-display text-xl text-emerald">{s.title}</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">{s.body}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </Section>
      </section>

      <Section>
        <Reveal>
          <p className="eyebrow text-gold-deep">Programs</p>
          <h2 className="font-display mt-3 text-3xl text-emerald">Care that follows the whole day.</h2>
        </Reveal>
        <Stagger className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {programs.map((p) => (
            <StaggerItem key={p.slug} className="group">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={p.image}
                  alt=""
                  fill
                  sizes="25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h3 className="font-display mt-3 text-xl text-emerald">{p.title}</h3>
              <p className="mt-1 text-sm text-muted leading-relaxed">{p.body}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <section className="bg-navy text-champagne">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
          <Reveal>
            <p className="eyebrow">What we hold</p>
            <h2 className="font-display mt-3 text-3xl sm:text-4xl">Values we will not trade.</h2>
          </Reveal>
          <Stagger className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gold/20 border border-gold/20">
            {featured.map((v) => (
              <StaggerItem key={v.title} className="bg-navy p-6 sm:p-8">
                <div className="h-px w-10 bg-gold mb-4" />
                <h3 className="font-display text-xl text-gold-bright">{v.title}</h3>
                <p className="mt-2 text-sm text-champagne/70 leading-relaxed">{v.body}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <Section>
        <div className="flex items-end justify-between gap-4">
          <Reveal>
            <p className="eyebrow text-gold-deep">Our people</p>
            <h2 className="font-display mt-3 text-3xl text-emerald">The team around them.</h2>
          </Reveal>
          <Link href="/staff" className="hidden sm:inline text-sm text-gold-deep hover:underline tracking-[0.12em] uppercase">
            Meet the team →
          </Link>
        </div>
        <Stagger className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {staff.map((s) => (
            <StaggerItem key={s.name}>
              <Link href="/staff" className="block group">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={s.image}
                    alt={`Portrait of ${s.name}`}
                    fill
                    sizes="33vw"
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <p className="font-display mt-3 text-lg text-emerald">{s.name}</p>
                <p className="text-sm text-muted">{s.role}</p>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
        <Link href="/staff" className="sm:hidden inline-block mt-6 text-sm text-gold-deep">
          Meet the team →
        </Link>
      </Section>
    </>
  );
}
