"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { fadeInUp } from "../lib/motion";

const footerLinks = [
  {
    title: "Explore",
    links: [
      { label: "Products", href: "/products" },
      { label: "Collections", href: "/collections" },
      { label: "Our Story", href: "/our-story" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Shipping & Returns", href: "#" },
      { label: "Care Guide", href: "#" },
      { label: "Warranty", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Sustainability", href: "/our-story#sustainability" },
      { label: "Press Enquiries", href: "mailto:press@ecocet.com" },
      { label: "Bespoke Studio", href: "/contact" },
    ],
  },
];

const socials = [
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: <FaInstagram />,
  },
  {
    label: "YouTube",
    href: "https://youtube.com",
    icon: <FaYoutube />,
  },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="max-content-width py-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr_1fr]"
        >
          <div className="space-y-6">
            <Link href="/" className="inline-flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-white/10 text-lg font-semibold">
                EC
              </span>
              <div className="leading-tight">
                <p className="font-display text-2xl">SheBreak</p>
                <p className="text-sm uppercase tracking-[0.4em] text-white/60">
                  Premium Straps
                </p>
              </div>
            </Link>
            <p className="max-w-xs text-sm text-white/70">
             SheBreak craftsmanship and refined design combine to create
              watch straps that age gracefully with every wear.
            </p>
            <div className="flex items-center gap-4">
              {socials.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/20 text-white transition duration-300 hover:border-brand hover:bg-brand"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold uppercase  text-brand/75">
                {section.title}
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-white/70">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="transition duration-200 hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

        <div className="mt-14 flex flex-col gap-6 border-t border-white/10 pt-8 text-xs text-white/50 sm:flex-row sm:justify-between sm:text-sm">
          <p>© {new Date().getFullYear()} SheBreak. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms</Link>
            <Link href="#">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

