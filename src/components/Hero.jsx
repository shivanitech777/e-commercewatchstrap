"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp, slideInRight, staggerChildren } from "../lib/motion";

const stats = [
  { label: "Artisan Crafted", value: "Handmade in Italy" },
  { label: "Materials", value: "Vegetable-Tanned Leather" },
  { label: "Sustainability", value: "Certified Carbon Neutral" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-ivory">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-ivory to-sand opacity-80" />
        <div className="absolute left-[-12rem] top-[-6rem] h-[480px] w-[480px] rounded-full bg-brand/10 blur-3xl md:left-[-16rem]" />
        <div className="absolute -right-56 bottom-[-16rem] h-[560px] w-[560px] rounded-full bg-brand/20 blur-[180px] lg:-right-44" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(17,83,53,0.08),transparent_60%)]" />
      </div>

      <div className="max-content-width grid items-center gap-10 pt-[2.1rem] lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerChildren(0.14)}
          className="space-y-8"
        >
          <motion.span
            variants={fadeInUp}
            className="inline-flex items-center gap-2 rounded-full border border-brand/15 bg-white px-4 py-2 text-xs font-medium uppercase tracking-[0.35em] text-brand"
          >
            SheBreak
          </motion.span>
          <motion.h1
            variants={fadeInUp}
            className=" text-4xl Libre text-ink sm:text-5xl tracking-wider"
          >
            Watch Straps That Honour Your Timepiece And The Planet.
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="max-w-xl text-base text-stone-600 sm:text-lg font-serif  "
          >
            Discover elevated straps crafted from conscious materials, tuned for
            comfort, and finished with artisan detail. SheBreak brings premium
            craftsmanship to every watch you love.
          </motion.p>
          <motion.div
            variants={fadeInUp}
            className="flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <Link
              href="/products"
              className="inline-flex items-center justify-center  bg-brand px-7 py-3 text-sm font-semibold text-white shadow-soft transition duration-300 hover:bg-brand-light hover:shadow-lift"
            >
              Shop Now
            </Link>
            <Link
              href="#collections"
              className="inline-flex items-center justify-center border border-brand/20 px-7 py-3 text-sm font-semibold text-brand transition duration-300 hover:border-brand hover:bg-brand/10"
            >
              Explore Collections
            </Link>
          </motion.div>
          <motion.dl
            variants={fadeInUp}
            className="grid gap-6 border-t border-stone-200 pt-6 sm:grid-cols-3"
          >
            {stats.map((item) => (
              <div key={item.label} className="space-y-1.5">
                <dt className="text-xs font-semibold uppercase tracking-[0.3em] text-stone-500">
                  {item.label}
                </dt>
                <dd className="text-sm font-semibold text-ink">{item.value}</dd>
              </div>
            ))}
          </motion.dl>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={slideInRight}
          className="relative mx-auto w-full max-w-xl"
        >
          <div className="relative aspect-[3/4] overflow-hidden  bg-white shadow-lift">
            <Image
              src="/watch.jpg"
              alt="SheBreak premium watch strap displayed on a wooden surface"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 90vw, 40vw"
            />
          </div>
          <motion.div
            className="absolute -bottom-10 left-1/3 w-[85%] -translate-x-1/2  border border-white/60 bg-white/90 p-6 shadow-soft backdrop-blur"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
          >
            <p className="text-sm font-semibold text-ink">
              Crafted with certified vegetable-tanned leather and recycled
              stainless steel hardware.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
