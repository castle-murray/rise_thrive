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

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-2.5 min-w-0" aria-label={`${site.shortName} home`}>
      <LogoMark className="h-12 w-[3.7rem] shrink-0 object-contain" />
      <span className="leading-tight min-w-0">
        <span className={`font-display block text-[1.05rem] ${light ? "text-ivory" : "text-espresso"}`}>
          Rise &amp; Thrive
        </span>
        <span
          className={`hidden sm:block text-[0.58rem] tracking-[0.18em] uppercase ${light ? "text-ivory/70" : "text-muted"}`}
        >
          Support Services
        </span>
      </span>
    </Link>
  );
}
