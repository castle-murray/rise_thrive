import { cn } from "@/lib/cn";
import Link from "next/link";
import type { ComponentProps } from "react";

const variants = {
  primary:
    "bg-forest text-cream hover:bg-forest-deep shadow-[0_10px_24px_-12px_rgba(44,90,60,0.7)]",
  gold: "bg-gold text-forest-deep hover:bg-[#d4b56a]",
  cream:
    "bg-cream text-forest hover:bg-paper border border-cream/20",
  ghost:
    "bg-transparent text-inherit border border-current/30 hover:bg-white/10",
  terracotta: "bg-terracotta text-cream hover:bg-[#b85c3e]",
} as const;

const sizes = {
  sm: "h-10 px-4 text-sm",
  md: "h-12 px-5 text-[0.95rem]",
  lg: "h-14 px-6 text-base",
} as const;

type Variant = keyof typeof variants;
type Size = keyof typeof sizes;

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-wide transition-all duration-300 ease-out active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold";

export function Button({
  className,
  variant = "primary",
  size = "md",
  href,
  ...props
}: ComponentProps<"button"> & {
  variant?: Variant;
  size?: Size;
  href?: string;
}) {
  const cls = cn(base, variants[variant], sizes[size], className);
  if (href) {
    return (
      <Link href={href} className={cls}>
        {props.children}
      </Link>
    );
  }
  return <button className={cls} {...props} />;
}
