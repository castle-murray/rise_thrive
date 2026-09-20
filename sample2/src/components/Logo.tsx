import { cn } from "@/lib/cn";
import { site } from "@/lib/site";
import Image from "next/image";
import Link from "next/link";

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

export function Logo({ compact = false, href = "/" }: { compact?: boolean; href?: string }) {
  return (
    <Link href={href} className="flex items-center gap-2.5 min-w-0 group" aria-label={`${site.shortName} home`}>
      <LogoMark className={cn("shrink-0 object-contain", compact ? "h-10 w-12" : "h-12 w-[3.7rem]")} />
      <span className="min-w-0 leading-tight">
        <span className="font-display block text-[0.95rem] sm:text-[1.05rem] text-gold-bright tracking-wide">
          Rise &amp; Thrive
        </span>
        {!compact && (
          <span className="hidden sm:block text-[0.58rem] tracking-[0.22em] uppercase text-champagne/70">
            Support Services
          </span>
        )}
      </span>
    </Link>
  );
}
