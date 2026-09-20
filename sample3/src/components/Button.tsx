import { cn } from "@/lib/cn";
import Link from "next/link";
import type { ComponentProps } from "react";

const variants = {
  gold: "bg-gold text-espresso hover:bg-gold-bright",
  dark: "bg-espresso text-ivory hover:bg-[#3a2e22]",
  ghost: "bg-transparent text-ivory border border-ivory/60 hover:bg-ivory/10",
  outline: "bg-transparent text-espresso border border-espresso/20 hover:border-gold",
} as const;

const base =
  "inline-flex items-center justify-center rounded-full font-semibold tracking-wide transition-all duration-300 active:scale-[0.98] disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold";

export function Button({
  className,
  variant = "gold",
  href,
  ...props
}: ComponentProps<"button"> & { variant?: keyof typeof variants; href?: string }) {
  const cls = cn(base, "h-12 px-6 text-[0.95rem]", variants[variant], className);
  if (href) {
    return (
      <Link href={href} className={cls} onClick={props.onClick as never}>
        {props.children}
      </Link>
    );
  }
  return <button className={cls} {...props} />;
}
