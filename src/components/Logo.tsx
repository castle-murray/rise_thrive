import { cn } from "@/lib/cn";
import { site } from "@/lib/site";
import Image from "next/image";
import Link from "next/link";

/** Gold brand mark — RISE-1 revision restores mark-gold.png (do not use mark-deep as header mark). */
export function LogoMark({ className }: { className?: string }) {
  return (
    <Image
      src="/brand/mark-gold.png"
      alt=""
      width={334}
      height={266}
      className={className}
    />
  );
}

/**
 * RISE-1 revision: gold lockup + soft green backing glow that fades to transparent
 * (readable over busy heroes; glow sized larger per Sean tweak). No hard card, no ring plate, no deep-mark asset.
 */
export function Logo({ compact = false, href = "/" }: { compact?: boolean; href?: string }) {
  return (
    <Link
      href={href}
      className={cn(
        "relative flex items-center gap-2.5 min-w-0 group",
        // Soft radial green glow — falls off to transparent; no hard edges / ring
        "rounded-full",
        // Bigger glow: more padding + larger ellipse + wider falloff
        compact ? "px-3.5 py-2" : "px-5 py-3 sm:px-6 sm:py-3.5",
        "[background:radial-gradient(ellipse_170%_145%_at_center,rgba(14,61,44,0.82)_0%,rgba(8,38,28,0.48)_32%,rgba(8,38,28,0.18)_55%,rgba(8,38,28,0.06)_72%,transparent_92%)]",
      )}
      aria-label={`${site.shortName} home`}
    >
      <LogoMark
        className={cn(
          "shrink-0 object-contain drop-shadow-[0_3px_14px_rgba(8,38,28,0.6)]",
          compact ? "h-11 w-[3.5rem]" : "h-[3.4rem] w-[4.2rem] sm:h-[3.85rem] sm:w-[4.75rem]",
        )}
      />
      <span className="min-w-0 leading-tight">
        <span
          className={cn(
            "font-display block tracking-wide text-gold-bright",
            "drop-shadow-[0_1px_3px_rgba(8,38,28,0.65)]",
            compact ? "text-[1rem] sm:text-[1.08rem]" : "text-[1.05rem] sm:text-[1.15rem]",
          )}
        >
          Rise &amp; Thrive
        </span>
        {!compact && (
          <span className="hidden sm:block text-[0.6rem] tracking-[0.22em] uppercase text-champagne drop-shadow-[0_1px_2px_rgba(8,38,28,0.55)]">
            Support Services
          </span>
        )}
      </span>
    </Link>
  );
}
