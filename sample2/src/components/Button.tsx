import { cn } from "@/lib/cn";
import Link from "next/link";
import type { ComponentProps } from "react";

const variants = {
  gold: "bg-gold text-emerald-deep hover:bg-gold-bright shadow-[0_10px_30px_-12px_rgba(201,162,39,0.7)]",
  navy: "bg-navy text-champagne hover:bg-[#15283f] border border-gold/30",
  ghost:
    "bg-transparent text-champagne border border-gold/50 hover:bg-gold/10",
  outline:
    "bg-transparent text-emerald border border-emerald/30 hover:border-gold hover:text-gold-deep",
} as const;

const sizes = {
  sm: "h-10 px-4 text-sm",
  md: "h-12 px-5 text-[0.95rem]",
  lg: "h-14 px-7 text-base",
} as const;

const base =
  "inline-flex items-center justify-center gap-2 rounded-sm font-medium tracking-[0.14em] uppercase transition-all duration-300 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold";

export function Button({
  className,
  variant = "gold",
  size = "md",
  href,
  ...props
}: ComponentProps<"button"> & {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  href?: string;
}) {
  const cls = cn(base, variants[variant], sizes[size], className);
  if (href) {
    return (
      <Link href={href} className={cls} onClick={props.onClick as never}>
        {props.children}
      </Link>
    );
  }
  return <button className={cls} {...props} />;
}
