import { cn } from "@/lib/cn";
import Image from "next/image";
import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  lede,
  image,
  imageAlt,
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  lede?: string;
  image: string;
  imageAlt: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative isolate min-h-[58svh] sm:min-h-[64svh] overflow-hidden text-ivory">
      <Image src={image} alt={imageAlt} fill priority sizes="100vw" className="object-cover kenburns" />
      <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/50 to-espresso/20" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 pt-28 sm:pt-36 pb-12 sm:pb-16">
        {eyebrow && <p className="eyebrow text-gold-bright rise-in">{eyebrow}</p>}
        <h1 className="font-display mt-3 text-4xl sm:text-5xl md:text-6xl leading-[1.08] max-w-3xl rise-in [animation-delay:80ms]">
          {title}
        </h1>
        {lede && (
          <p className="mt-5 max-w-xl text-lg text-ivory/85 leading-relaxed rise-in [animation-delay:160ms]">
            {lede}
          </p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}

export function Section({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-20", className)}>
      {children}
    </section>
  );
}
