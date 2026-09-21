import { cn } from "@/lib/cn";
import Image from "next/image";
import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  lede,
  image,
  imageAlt,
  imagePosition = "object-[center_28%]",
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  lede?: string;
  image: string;
  imageAlt: string;
  /** Tailwind object-position class; default biases toward faces in the upper frame. */
  imagePosition?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative isolate min-h-[70svh] sm:min-h-[78svh] overflow-hidden text-champagne">
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className={cn("object-cover kenburns", imagePosition)}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-emerald-deep via-emerald-deep/55 to-emerald-deep/20" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 pt-28 sm:pt-36 pb-12 sm:pb-16">
        {eyebrow && <p className="eyebrow rise-in">{eyebrow}</p>}
        <h1 className="font-display mt-3 text-4xl sm:text-5xl md:text-6xl leading-[1.12] max-w-3xl rise-in [animation-delay:80ms]">
          {title}
        </h1>
        <div className="mt-6 h-px w-28 bg-gold rule-draw" />
        {lede && (
          <p className="mt-6 max-w-xl text-lg text-champagne/85 leading-relaxed rise-in [animation-delay:160ms]">
            {lede}
          </p>
        )}
        {children && <div className="mt-8 rise-in [animation-delay:220ms]">{children}</div>}
      </div>
    </section>
  );
}

export function Section({
  children,
  className,
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={cn("mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-20", className)}>
      {children}
    </section>
  );
}
