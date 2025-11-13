"use client";

import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import ProductGrid from "@/components/ProductGrid";
import CollectionsGrid from "@/components/CollectionsGrid";
import {
  bestSellerProducts,
  newStrapProducts,
  newlyLaunchProducts,
  trendingProducts,
} from "@/data/products";
import { collections } from "@/data/collections";
import { fadeInUp } from "@/lib/motion";

const showcaseSections = [
  {
    id: "new-strap",
    title: "New Strap Arrivals",
    subtitle:
      "Freshly crafted pieces featuring this season’s most sustainable silhouettes.",
    background: "bg-white",
    items: newStrapProducts,
  },
  {
    id: "trending",
    title: "Trending Now",
    subtitle:
      "Sought-after favourites with vibrant textures and artisan-led detailing.",
    background: "bg-sand",
    items: trendingProducts,
  },
  {
    id: "best-seller",
    title: "Best Sellers",
    subtitle:
      "Enduring classics adored by collectors for their balance of comfort and style.",
    background: "bg-white",
    items: bestSellerProducts,
  },
  {
    id: "newly-launch",
    title: "Newly Launch",
    subtitle:
      "Limited releases celebrating experimental craftsmanship and eco-forward materials.",
    background: "bg-sand",
    items: newlyLaunchProducts,
  },
];

export default function Page() {
  return (
    <main className="relative ">
      <Hero />

     

      {showcaseSections.map((section) => (
        <motion.section
          key={section.id}
          id={section.id}
          className={section.background}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <div className="max-content-width">
            <SectionTitle
              eyebrow="Featured Straps"
              title={section.title}
              subtitle={section.subtitle}
            />
            <ProductGrid items={section.items} />
          </div>
        </motion.section>
      ))}
       <section id="collections" className="bg-white">
        <div className="max-content-width py-3">
          <SectionTitle
            eyebrow="Curated Collections"
            title="Straps for every story you wear"
            subtitle="Explore tailored line-ups that balance craft and conscience. Each collection is a mood, a moment, and a material story."
            align="center"
          />
          <CollectionsGrid items={collections} />
        </div>
      </section>

      <motion.section
        id="materials"
        className="bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="max-content-width grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div variants={fadeInUp} className="space-y-5">
            <h2 className="text-3xl font-semibold text-ink sm:text-4xl">
              Elevated materials. Ethically sourced.
            </h2>
            <p className="text-base text-stone-500">
              Every SheBreak strap begins with carefully selected materials that
              honour the planet. From vegetable-tanned leathers to recycled
              performance fibres, each piece is engineered for longevity and a
              luxuriously soft hand-feel.
            </p>
            <p className="text-base text-stone-500">
              Our craftsmen collaborate with environmentally certified ateliers,
              blending tradition with innovation to achieve uncompromising
              durability and elegance.
            </p>
          </motion.div>
          <motion.div
            variants={fadeInUp}
            className="rounded-3xl border border-brand/10 bg-ivory p-8 shadow-soft"
          >
            <ul className="space-y-6 text-sm text-stone-600">
              <li className="flex items-start gap-4">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-brand" />
                Vegetable-tanned leathers sourced from certified Tuscan
                tanneries.
              </li>
              <li className="flex items-start gap-4">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-brand" />
                Recycled stainless steel buckles with low-impact finishing.
              </li>
              <li className="flex items-start gap-4">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-brand" />
                Plant-based dyes to achieve depth of colour without harsh
                chemicals.
              </li>
              <li className="flex items-start gap-4">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-brand" />
                Responsibly sourced vegan alternatives with rich, supple
                textures.
              </li>
            </ul>
          </motion.div>
        </div>
      </motion.section>
      

      <motion.section
        id="story"
        className="bg-sand"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="max-content-width grid gap-10 lg:grid-cols-2">
          <motion.div variants={fadeInUp} className="space-y-5">
            <h2 className="text-3xl font-semibold text-ink sm:text-4xl">
              A story of craft and consciousness.
            </h2>
            <p className="text-base text-stone-600">
              SheBreak was born from the desire to merge horological passion with
              environmental stewardship. Our artisans spend over 35 hours on
              every strap, ensuring each stitch reflects a commitment to both
              quality and responsibility.
            </p>
          </motion.div>
          <motion.div variants={fadeInUp} className="space-y-5">
            <p className="text-base text-stone-600">
              We partner with small-batch workshops that champion fair labour,
              invest in renewable energy, and track every material from origin
              to wrist. The result? A collection that looks sharp, wears
              comfortably, and stands for something greater.
            </p>
            <p className="text-base font-semibold text-brand">
              Thoughtfully made for the discerning collector who values lasting
              style and sustainable choices.
            </p>
          </motion.div>
        </div>
      </motion.section>
      

      <motion.section
        id="contact"
        className="bg-white pb-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="max-content-width rounded-3xl bg-ivory px-8 py-12 shadow-soft md:px-12">
          <motion.div variants={fadeInUp} className="space-y-4 text-center">
            <h2 className="text-3xl font-semibold text-ink sm:text-4xl">
              Need a bespoke strap?
            </h2>
            <p className="mx-auto max-w-2xl text-base text-stone-600">
              Our atelier provides personalised consultations to match your
              timepiece with the perfect SheBreak strap. Reach out to collaborate
              on colours, materials, and fit.
            </p>
            <motion.a
              href="mailto:studio@ecocet.com"
              className="inline-flex items-center justify-center rounded bg-brand px-8 py-3 text-sm font-semibold text-white shadow-soft transition duration-300 hover:bg-brand-light hover:shadow-lift"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              studio@ecocet.com
            </motion.a>
          </motion.div>
        </div>
      </motion.section>
      
    </main>
    
  );
}
