"use client";

import { motion } from "framer-motion";
import { staggerChildren } from "../lib/motion";
import CollectionCard from "./CollectionCard";

export default function CollectionsGrid({ items }) {
  return (
    <motion.div
      className="mt-12 grid gap-8 sm:grid-cols-2 xl:grid-cols-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerChildren(0.1)}
    >
      {items.map((collection) => (
        <CollectionCard key={collection.id} collection={collection} />
      ))}
    </motion.div>
  );
}

