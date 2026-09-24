import { cn } from "@/lib/cn";
import { site } from "@/lib/site";
import Image from "next/image";
import Link from "next/link";

/** Deepened mark (greens + browns, soft shadow) — RISE-1. Do not overwrite mark-gold.png. */
export function LogoMark({ className }: { className?: string }) {
  return (
    <Image
      src="/brand/mark-deep-86gqk.webp"
      alt=""
      width={390}
      height={322}
      className={className}
    />
  );
}

/**
 * Soft emerald scrim plate behind the lockup so the mark stays readable
 * over busy hero photos (Sean via Celeste: backdrop, not asset-only).
 */
export function Logo({ compact = false, href = "/" }: { compact?: boolean; href?: string }) {
  return (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-3 min-w-0 group rounded-md",
        // Warm emerald glass plate + soft outer shadow — anchors against busy heroes
        "bg-emerald-deep/70 backdrop-blur-[6px]",
        "ring-1 ring-gold/25 shadow-[0_6px_20px_-6px_rgba(8,38,28,0.65)]",
        compact ? "px-2 py-1" : "px-2.5 py-1.5 sm:px-3 sm:py-2",
      )}
      aria-label={`${site.shortName} home`}
    >
      <LogoMark
        className={cn(
          "shrink-0 object-contain drop-shadow-[0_2px_6px_rgba(8,38,28,0.45)]",
          compact ? "h-11 w-[3.5rem]" : "h-[3.55rem] w-[4.4rem] sm:h-16 sm:w-[5rem]",
        )}
      />
      <span className="min-w-0 leading-tight">
        <span
          className={cn(
            "font-display block tracking-wide text-gold",
            "drop-shadow-[0_1px_2px_rgba(8,38,28,0.55)]",
            compact ? "text-[1rem] sm:text-[1.1rem]" : "text-[1.1rem] sm:text-[1.22rem]",
          )}
        >
          Rise &amp; Thrive
        </span>
        {!compact && (
          <span className="hidden sm:block text-[0.62rem] tracking-[0.22em] uppercase text-champagne drop-shadow-[0_1px_1px_rgba(8,38,28,0.4)]">
            Support Services
          </span>
        )}
      </span>
    </Link>
  );
}
