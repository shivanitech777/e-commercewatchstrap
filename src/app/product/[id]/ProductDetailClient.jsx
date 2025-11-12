"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionTitle from "@/components/SectionTitle";
import ProductGrid from "@/components/ProductGrid";
import { formatCurrencyINR, titleCase } from "@/lib/utils";
import { fadeInUp, slideInRight, staggerChildren } from "@/lib/motion";

export default function ProductDetailClient({ product, relatedProducts }) {
  return (
    <main className="relative pt-[6.5rem] pb-20">
      <motion.section
        className="bg-white py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="max-content-width grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            variants={slideInRight}
            className="relative aspect-[4/5] overflow-hidden rounded-[40px] bg-ivory shadow-lift"
          >
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              priority
            />
          </motion.div>
          <motion.div
            variants={staggerChildren(0.12)}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            <motion.div variants={fadeInUp} className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand/80">
                {titleCase(product.collection.replace("-", " "))}
              </p>
              <h1 className="text-4xl font-semibold text-ink sm:text-5xl">
                {product.name}
              </h1>
              <p className="text-sm text-stone-500">{product.subtitle}</p>
            </motion.div>
            <motion.p
              variants={fadeInUp}
              className="text-xl font-semibold text-brand"
            >
              {formatCurrencyINR(product.price)}
            </motion.p>
            <motion.p variants={fadeInUp} className="text-base text-stone-600">
              {product.description}
            </motion.p>
            <motion.div
              variants={fadeInUp}
              className="flex flex-col gap-4 pt-4 sm:flex-row"
            >
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                type="button"
                className="inline-flex items-center justify-center rounded-full bg-brand px-8 py-3 text-sm font-semibold text-white shadow-soft transition duration-300 hover:bg-brand-light hover:shadow-lift"
              >
                Add to Cart
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                type="button"
                className="inline-flex items-center justify-center rounded-full border border-brand/20 px-8 py-3 text-sm font-semibold text-brand transition duration-300 hover:border-brand hover:bg-brand/10"
              >
                Buy Now
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {relatedProducts.length ? (
        <section className="bg-sand py-16">
          <div className="max-content-width">
            <SectionTitle
              eyebrow="You may also like"
              title="Related straps"
              subtitle="Curated options from the same collection to complete your wardrobe."
            />
            <ProductGrid items={relatedProducts} />
          </div>
        </section>
      ) : null}
    </main>
  );
}
