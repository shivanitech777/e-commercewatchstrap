"use client";

import { motion } from "framer-motion";
import PageTitle from "@/components/PageTitle";
import SectionTitle from "@/components/SectionTitle";
import CollectionsGrid from "@/components/CollectionsGrid";
import ProductGrid from "@/components/ProductGrid";
import { collections } from "@/data/collections";
import { getProductsByIds } from "@/data/products";

export default function CollectionsPage() {
  return (
    <main className="relative pt-[6.5rem] pb-20">
      <PageTitle
        title="Curated Collections"
        subtitle="Four distinct collections, designed to complement your timepiece and lifestyle. Explore their character and discover featured straps."
      />

      <motion.section
        className="bg-white py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="max-content-width">
          <CollectionsGrid items={collections} />
        </div>
      </motion.section>

      {collections.map((collection, index) => {
        const featured = getProductsByIds(collection.featuredProducts);
        return (
          <motion.section
            key={collection.id}
            id={collection.id}
            className={index % 2 === 0 ? "bg-sand" : "bg-white"}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            <div className="max-content-width py-12">
              <SectionTitle
                eyebrow="Collection Spotlight"
                title={collection.title}
                subtitle={collection.description}
              />
              <ProductGrid items={featured} />
            </div>
          </motion.section>
        );
      })}
    </main>
  );
}
