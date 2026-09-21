import { cn } from "@/lib/cn";
import { site } from "@/lib/site";
import Link from "next/link";

type Tone = "forest" | "cream";

export function LogoMark({
  className,
  tone = "forest",
}: {
  className?: string;
  tone?: Tone;
}) {
  const stroke = tone === "cream" ? "#F6F0E6" : "#2C5A3C";
  const leafDark = tone === "cream" ? "#E8DCC8" : "#3D6B45";
  const leafMid = tone === "cream" ? "#C9D4B8" : "#6B8F4A";
  const leafLight = tone === "cream" ? "#F6F0E6" : "#8FAE78";
  const stem = tone === "cream" ? "#D5DEC4" : "#5C8A4A";

  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      className={className}
      aria-hidden
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="leaf-sway">
        <path
          d="M32 42.5C32 42.5 31.4 28 32 20.5"
          stroke={stem}
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path
          d="M31.8 36.2C28.2 35.4 25.4 32.6 24.6 29.2C27.8 28.6 31.2 30.6 32.2 33.8"
          fill={leafDark}
          stroke={stroke}
          strokeWidth="1.15"
          strokeLinejoin="round"
        />
        <path
          d="M32.2 36C35.8 35.2 38.6 32.4 39.4 29C36.2 28.4 32.8 30.4 31.8 33.6"
          fill={leafMid}
          stroke={stroke}
          strokeWidth="1.15"
          strokeLinejoin="round"
        />
        <path
          d="M32 30.6C29.2 28.4 27.8 24.8 28.6 21.6C31.6 22.6 33.4 25.8 33 29.2"
          fill={leafLight}
          stroke={stroke}
          strokeWidth="1.15"
          strokeLinejoin="round"
        />
        <path
          d="M32 30.2C35 28.2 36.4 24.6 35.6 21.4C32.6 22.4 30.8 25.6 31.2 29"
          fill={leafMid}
          stroke={stroke}
          strokeWidth="1.15"
          strokeLinejoin="round"
        />
        <path
          d="M32 26.2C31.2 23.2 32 20.2 34.2 18.4C35.2 21.4 34.4 24.6 32.4 26.4"
          fill={leafDark}
          stroke={stroke}
          strokeWidth="1.15"
          strokeLinejoin="round"
        />
      </g>
      <path
        d="M31.2 52.6C24.8 52.2 18.6 47.8 18.2 40.8C18 37.2 20.4 34.4 23.6 33.6C24.8 37.8 28.2 41.2 32 42.2"
        stroke={stroke}
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M32.8 52.6C39.2 52.2 45.4 47.8 45.8 40.8C46 37.2 43.6 34.4 40.4 33.6C39.2 37.8 35.8 41.2 32 42.2"
        stroke={stroke}
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22.4 38.8C21.2 39.2 20.6 40.6 21.2 41.8"
        stroke={stroke}
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M41.6 38.8C42.8 39.2 43.4 40.6 42.8 41.8"
        stroke={stroke}
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Logo({
  tone = "forest",
  compact = false,
  href = "/",
}: {
  tone?: Tone;
  compact?: boolean;
  href?: string;
}) {
  const word = tone === "cream" ? "text-cream" : "text-forest";
  const sub = tone === "cream" ? "text-cream/70" : "text-muted";

  return (
    <Link
      href={href}
      className="group flex items-center gap-2.5 min-w-0"
      aria-label={`${site.shortName} home`}
    >
      <span
        className={cn(
          "grid place-items-center rounded-full border shrink-0 transition-transform duration-500 group-hover:scale-[1.04]",
          tone === "cream" ? "border-cream/40" : "border-forest/20 bg-cream",
          compact ? "size-10" : "size-11",
        )}
      >
        <LogoMark className={compact ? "size-8" : "size-9"} tone={tone} />
      </span>
      <span className="min-w-0 leading-tight">
        <span className={cn("font-display block text-[1.05rem] sm:text-[1.15rem] tracking-tight", word)}>
          Rise <span className="opacity-70">&</span> Thrive
        </span>
        {!compact && (
          <span className={cn("hidden sm:block text-[0.62rem] tracking-[0.18em] uppercase", sub)}>
            Support Services
          </span>
        )}
      </span>
    </Link>
  );
}

export function LogoLockup({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative aspect-square w-full max-w-md mx-auto rounded-full border-[3px] border-forest bg-cream text-forest text-center flex flex-col items-center justify-center px-8 py-10 shadow-[0_20px_60px_-28px_rgba(44,90,60,0.45)]",
        className,
      )}
    >
      <p className="font-display text-[clamp(1.6rem,6vw,2.35rem)] leading-none tracking-tight">
        Rise &amp; Thrive
      </p>
      <p className="mt-3 flex items-center gap-3 text-[0.62rem] tracking-[0.22em] uppercase text-muted">
        <span className="h-px w-8 bg-forest/30" />
        Support Services, LLC
        <span className="h-px w-8 bg-forest/30" />
      </p>
      <p className="mt-3 font-display text-[0.95rem] sm:text-base">
        {site.tagline}
      </p>
      <p className="mt-1 text-[0.7rem] sm:text-xs tracking-wide text-ink/80">
        {site.descriptor}
      </p>
      <LogoMark className="mt-4 size-20" />
    </div>
  );
}
