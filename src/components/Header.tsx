"use client";

import { Button } from "@/components/Button";
import { Logo } from "@/components/Logo";
import { cn } from "@/lib/cn";
import { nav } from "@/lib/site";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect, useState } from "react";
import { createPortal } from "react-dom";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    setMounted(true);
  }, []);

  useLayoutEffect(() => {
    if (window.location.hash) return;
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    setScrolled(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
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

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-500",
        // Never use backdrop-blur while the menu is open: backdrop-filter makes
        // position:fixed descendants resolve against the header (~64px), which
        // clipped the mobile nav. Portal the overlay to document.body instead.
        scrolled || open
          ? open
            ? "bg-emerald-deep shadow-[0_1px_0_rgba(201,162,39,0.25)]"
            : "bg-emerald-deep/95 backdrop-blur-md shadow-[0_1px_0_rgba(201,162,39,0.25)]"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-[4.25rem] sm:h-[4.75rem] max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
        <span onClick={() => setOpen(false)}>
          <Logo halo={!scrolled && !open} />
        </span>

        <nav className="hidden lg:flex items-center gap-7" aria-label="Primary">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative text-[0.8rem] tracking-[0.16em] uppercase text-champagne/80 hover:text-gold-bright transition-colors",
                  active && "text-gold-bright",
                )}
              >
                {item.label}
                <span
                  className={cn(
                    "absolute -bottom-1 left-0 h-px w-full bg-gold origin-left scale-x-0 transition-transform",
                    active && "scale-x-100",
                  )}
                />
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <span className="hidden sm:inline-flex">
            <Button href="/contact" size="sm">
              Contact
            </Button>
          </span>
          <button
            type="button"
            className="lg:hidden grid place-items-center size-11 border border-gold/40 text-gold-bright"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="relative block w-5 h-3.5">
              <span
                className={cn(
                  "absolute left-0 top-0 h-[1.5px] w-5 bg-current transition-transform duration-300",
                  open && "translate-y-[6px] rotate-45",
                )}
              />
              <span
                className={cn(
                  "absolute left-0 top-[6px] h-[1.5px] w-5 bg-current transition-opacity",
                  open && "opacity-0",
                )}
              />
              <span
                className={cn(
                  "absolute left-0 top-[12px] h-[1.5px] w-5 bg-current transition-transform duration-300",
                  open && "-translate-y-[6px] -rotate-45",
                )}
              />
            </span>
          </button>
        </div>
      </div>

      {mounted &&
        createPortal(
          <AnimatePresence>
            {open && (
              <motion.div
                id="mobile-nav"
                className="lg:hidden fixed inset-0 top-16 bg-emerald-deep z-[60] overflow-y-auto"
                initial={reduce ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <nav className="flex flex-col px-6 pt-6 pb-24" aria-label="Mobile">
                  {nav.map((item, i) => (
                    <motion.div
                      key={item.href}
                      initial={reduce ? false : { opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.05 * i }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className={cn(
                          "block py-4 font-display text-3xl text-champagne border-b border-gold/20",
                          pathname === item.href && "text-gold-bright",
                        )}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                  <div className="mt-8" onClick={() => setOpen(false)}>
                    <Button href="/contact" size="lg" className="w-full">
                      Contact us
                    </Button>
                  </div>
                </nav>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body,
        )}
    </header>
  );
}
