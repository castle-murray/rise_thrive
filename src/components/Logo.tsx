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
export function Logo({
  compact = false,
  href = "/",
  halo = true,
}: {
  compact?: boolean;
  href?: string;
  halo?: boolean;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "relative flex items-center gap-2.5 min-w-0 group",
        compact ? "px-2 py-1" : "px-2.5 py-1.5",
      )}
      aria-label={`${site.shortName} home`}
    >
      {/* Glow sits larger than the lockup so the fade is never clipped to a pill. */}
      <span
        aria-hidden
        className={cn(
          "pointer-events-none absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-500",
          compact ? "h-[6.25rem] w-[13.5rem]" : "h-[7.25rem] w-[18.5rem] sm:h-[7.75rem] sm:w-[20rem]",
          halo ? "opacity-100" : "opacity-0",
        )}
        style={{
          background:
            "radial-gradient(ellipse 68% 54% at 50% 50%, rgba(14,61,44,0.94) 0%, rgba(14,61,44,0.82) 38%, rgba(14,61,44,0.5) 58%, rgba(14,61,44,0.18) 76%, transparent 92%)",
        }}
      />
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
