"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { fadeInUp } from "../lib/motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/collections", label: "Collections" },
  { href: "/our-story", label: "Our Story" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href) =>
    href === "/"
      ? pathname === href
      : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-stone-200 bg-white/80 backdrop-blur-lg">
      <motion.nav
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="max-content-width flex h-header items-center justify-between gap-6"
        aria-label="Primary navigation"
      >
        <Link href="/" className="flex items-center gap-2">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand/10 text-brand font-display text-lg">
            SB
          </span>
          <div className="flex flex-col leading-tight">
            <span className="font-display text-xl text-ink">SheBreak</span>
            <span className="text-xs uppercase tracking-[0.2em] text-stone-500">
              Premium Straps
            </span>
          </div>
        </Link>

        <div className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition duration-200 ${
                isActive(link.href)
                  ? "text-brand underline underline-offset-8"
                  : "text-stone-700 hover:text-brand"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/products"
            className="rounded-full bg-brand px-5 py-2 text-sm font-semibold text-white shadow-soft transition duration-300 hover:bg-brand-light hover:shadow-lift"
          >
            Shop Straps
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="relative flex h-11 w-11 items-center justify-center rounded-full border border-stone-200 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label="Toggle navigation"
        >
          <span className="sr-only">Toggle menu</span>
          <span
            className={`block h-0.5 w-5 rounded-full bg-ink transition-transform ${
              open ? "translate-y-1.5 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-5 rounded-full bg-ink transition-transform ${
              open ? "-translate-y-1.5 -rotate-45" : "mt-1.5"
            }`}
          />
        </button>
      </motion.nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-nav"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="md:hidden"
          >
            <div className="space-y-4 px-6 pb-6 pt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`block text-base font-medium ${
                    isActive(link.href)
                      ? "text-brand"
                      : "text-stone-700 hover:text-brand"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/products"
                onClick={() => setOpen(false)}
                className="inline-flex rounded-full bg-brand px-5 py-2 text-sm font-semibold text-white shadow-soft"
              >
                Shop Straps
              </Link>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
