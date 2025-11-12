"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import PageTitle from "@/components/PageTitle";
import SectionTitle from "@/components/SectionTitle";
import ProductGrid from "@/components/ProductGrid";
import { products } from "@/data/products";
import { collections } from "@/data/collections";

export default function ProductsPage() {
  return (
    <main className="relative pt-[6.5rem] pb-20">
      <PageTitle
        title="All SheBreak Straps"
        subtitle="Browse our complete line-up of sustainably crafted straps. Each piece is designed for comfort, longevity, and an elevated wrist presence."
      />

      <motion.section
        className="bg-white py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="max-content-width">
          <SectionTitle
            eyebrow="All Products"
            title="Select your next signature strap"
            subtitle="Filter by collection via quick links or dive straight into the grid."
            align="left"
          />
          <div className="mt-10 flex flex-wrap gap-3">
            {collections.map((collection) => (
              <Link
                key={collection.id}
                href={`/collections/${collection.id}`}
                className="inline-flex items-center gap-2 rounded-full border border-brand/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand transition duration-300 hover:border-brand hover:bg-brand/10"
              >
                {collection.title}
              </Link>
            ))}
          </div>
          <ProductGrid
            items={products.filter(
              (product) => product.collection === "premium-leather"
            )}
          />
        </div>
      </motion.section>
    </main>
  );
}
