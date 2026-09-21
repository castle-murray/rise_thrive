"use client";

import { Button } from "@/components/Button";
import { Logo } from "@/components/Logo";
import { cn } from "@/lib/cn";
import { nav } from "@/lib/site";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect, useState } from "react";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  useLayoutEffect(() => {
    if (window.location.hash) return;
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    setScrolled(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const inverted = !scrolled && !open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-500",
        inverted ? "bg-transparent" : "bg-ivory/95 backdrop-blur-md shadow-[0_1px_0_rgba(197,160,53,0.25)]",
      )}
    >
      <div className="mx-auto flex h-16 sm:h-[4.4rem] max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
        <span onClick={() => setOpen(false)}>
          <Logo light={inverted} />
        </span>
        <nav className="hidden lg:flex items-center gap-7" aria-label="Primary">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm tracking-wide",
                  inverted ? "text-ivory/85 hover:text-ivory" : "text-ink/70 hover:text-espresso",
                  active && (inverted ? "text-gold-bright" : "text-gold-deep"),
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-2">
          <span className="hidden sm:inline-flex">
            <Button href="/contact" className={inverted ? "" : ""}>
              Contact
            </Button>
          </span>
          <button
            type="button"
            className={cn(
              "lg:hidden grid place-items-center size-11 rounded-full border",
              inverted ? "border-ivory/40 text-ivory" : "border-espresso/20 text-espresso",
            )}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="relative block w-5 h-3.5">
              <span className={cn("absolute left-0 top-0 h-[1.5px] w-5 bg-current transition-transform", open && "translate-y-[6px] rotate-45")} />
              <span className={cn("absolute left-0 top-[6px] h-[1.5px] w-5 bg-current", open && "opacity-0")} />
              <span className={cn("absolute left-0 top-[12px] h-[1.5px] w-5 bg-current transition-transform", open && "-translate-y-[6px] -rotate-45")} />
            </span>
          </button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav
            className="lg:hidden fixed inset-0 top-16 bg-ivory z-40 px-6 pt-4 pb-24 overflow-y-auto"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            aria-label="Mobile"
          >
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block py-4 font-display text-3xl text-espresso border-b border-gold/20"
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-8" onClick={() => setOpen(false)}>
              <Button href="/contact" className="w-full">
                Contact us
              </Button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
