"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import PageTitle from "@/components/PageTitle";
import SectionTitle from "@/components/SectionTitle";
import ProductGrid from "@/components/ProductGrid";
import { fadeInUp, slideInRight } from "@/lib/motion";

export default function CollectionDetailClient({
  collection,
  featuredProducts,
  collectionProducts,
}) {
  return (
    <main className="relative">
      <PageTitle
        title={collection.title}
        subtitle={collection.description}
      />

      <motion.section
        className="bg-white py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="max-content-width grid gap-12 lg:grid-cols-[1fr_1.05fr]">
          <motion.div variants={fadeInUp} className="space-y-5">
            <h2 className="text-3xl font-semibold text-ink sm:text-4xl">
              Essence of the collection
            </h2>
            <p className="text-base text-stone-600">
              {collection.description}
            </p>
            <p className="text-base text-stone-600">
              Each assortment is intentionally curated to highlight materials,
              moods, and finishing details that define EcoCet&apos;s craft
              language. Pair these straps with your favourite complications or
              daily drivers.
            </p>
          </motion.div>
          <motion.div
            variants={slideInRight}
            className="relative aspect-[5/4] overflow-hidden rounded-[32px] bg-ivory shadow-soft"
          >
            <Image
              src={collection.image}
              alt={collection.title}
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </div>
      </motion.section>

      <section className="bg-sand py-16">
        <div className="max-content-width">
          <SectionTitle
            eyebrow="Featured Picks"
            title="Must-try straps"
            subtitle="A quick introduction to the textures and stories that define this collection."
          />
          <ProductGrid items={featuredProducts} />
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-content-width">
          <SectionTitle
            eyebrow="Full Collection"
            title="Explore every detail"
            subtitle="Dive into the complete selection and pick the strap that resonates with your timepiece."
          />
          <ProductGrid items={collectionProducts} />
        </div>
      </section>
    </main>
  );
}

