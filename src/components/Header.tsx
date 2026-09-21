"use client";

import { Button } from "@/components/Button";
import { Logo } from "@/components/Logo";
import { cn } from "@/lib/cn";
import { nav, site } from "@/lib/site";
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
    const onScroll = () => setScrolled(window.scrollY > 24);
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
  const tone = inverted ? "cream" : "forest";

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background,box-shadow,backdrop-filter] duration-500",
        inverted
          ? "bg-transparent"
          : "bg-cream/90 backdrop-blur-md shadow-[0_1px_0_rgba(44,90,60,0.08)]",
      )}
    >
      <div className="mx-auto flex h-16 sm:h-[4.5rem] max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
        <span onClick={() => setOpen(false)}>
          <Logo tone={tone} />
        </span>

        <nav className="hidden lg:flex items-center gap-7" aria-label="Primary">
          {nav
            .filter((item) => item.href !== "/donate")
            .map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative text-sm tracking-wide transition-colors",
                  inverted ? "text-cream/85 hover:text-cream" : "text-ink/75 hover:text-forest",
                  active && (inverted ? "text-cream" : "text-forest"),
                )}
              >
                {item.label}
                <span
                  className={cn(
                    "absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 transition-transform duration-300",
                    inverted ? "bg-cream" : "bg-forest",
                    active && "scale-x-100",
                  )}
                />
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <span className="hidden sm:inline-flex">
            <Button
              href="/donate"
              size="sm"
              variant={inverted ? "cream" : "terracotta"}
            >
              Give
            </Button>
          </span>
          <button
            type="button"
            className={cn(
              "lg:hidden grid place-items-center size-11 rounded-full border transition-colors",
              inverted
                ? "border-cream/40 text-cream"
                : "border-forest/20 text-forest",
            )}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">{open ? "Close" : "Menu"}</span>
            <span className="relative block w-5 h-3.5">
              <span
                className={cn(
                  "absolute left-0 top-0 h-[1.5px] w-5 bg-current transition-transform duration-300",
                  open && "translate-y-[6px] rotate-45",
                )}
              />
              <span
                className={cn(
                  "absolute left-0 top-[6px] h-[1.5px] w-5 bg-current transition-opacity duration-200",
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

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-nav"
            className="lg:hidden fixed inset-0 top-16 bg-cream z-40 overflow-y-auto"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.28 }}
          >
            <nav className="flex flex-col px-6 pt-6 pb-24" aria-label="Mobile">
              {nav.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={reduce ? false : { opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.4 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "block py-3.5 font-display text-3xl text-forest border-b border-forest/10",
                      pathname === item.href && "text-leaf",
                    )}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                className="mt-8 flex flex-col gap-3"
                initial={reduce ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                onClick={() => setOpen(false)}
              >
                <Button href="/get-support" size="lg">
                  I need support
                </Button>
                <Button href="/donate" variant="terracotta" size="lg">
                  Give to {site.shortName}
                </Button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
