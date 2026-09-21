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
  compact = false,
  imagePosition = "object-center",
}: {
  eyebrow?: string;
  title: ReactNode;
  lede?: string;
  image: string;
  imageAlt: string;
  children?: ReactNode;
  compact?: boolean;
  imagePosition?: string;
}) {
  return (
    <section
      className={cn(
        "relative isolate overflow-hidden bg-forest-deep text-cream",
        compact ? "min-h-[46svh] sm:min-h-[52svh]" : "min-h-[70svh] sm:min-h-[78svh]",
      )}
    >
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className={cn("object-cover kenburns", imagePosition)}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/80 via-forest-deep/35 to-black/20" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 pt-28 sm:pt-36 pb-12 sm:pb-16">
        {eyebrow && <p className="eyebrow text-gold rise-in">{eyebrow}</p>}
        <h1 className="font-display mt-3 text-4xl sm:text-5xl md:text-6xl leading-[1.05] max-w-3xl rise-in [animation-delay:80ms]">
          {title}
        </h1>
        {lede && (
          <p className="mt-5 max-w-xl text-lg text-cream/85 leading-relaxed rise-in [animation-delay:160ms]">
            {lede}
          </p>
        )}
        {children && <div className="mt-8 rise-in [animation-delay:240ms]">{children}</div>}
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
    <section id={id} className={cn("mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-24", className)}>
      {children}
    </section>
  );
}
