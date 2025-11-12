"use client";

import { motion } from "framer-motion";
import { staggerChildren } from "../lib/motion";
import ProductCard from "./ProductCard";

export default function ProductGrid({ items = [], id, className }) {
  const gridClasses = [
    "mt-12 grid gap-3 md:gap-6 grid-cols-2 md:grid-cols-3 xl:grid-cols-4",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (!items.length) {
    return (
      <p className="mt-12 text-center text-sm text-stone-500">
        No products available right now. Please check back soon.
      </p>
    );
  }

  return (
    <motion.div
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerChildren(0.08)}
      className={gridClasses}
    >
      {items.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </motion.div>
  );
}
