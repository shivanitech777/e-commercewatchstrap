"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { hoverLift, fadeInUp } from "../lib/motion";

export default function CollectionCard({ collection }) {
  return (
    <motion.article
      variants={fadeInUp}
      className="group"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div
        variants={hoverLift}
        initial="rest"
        whileHover="hover"
        whileTap="tap"
        className="flex h-full flex-col overflow-hidden rounded-card bg-white shadow-soft transition duration-300"
      >
        <div className="relative aspect-[4/3] overflow-hidden bg-sand">
          <Image
            src={collection.image}
            alt={collection.title}
            fill
            className="object-cover transition duration-700 group-hover:scale-105"
            sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
            priority={collection.priority}
          />
        </div>
        <div className="flex flex-1 flex-col gap-4 px-6 py-6">
          <div>
            <h3 className="text-xl font-semibold text-ink">
              {collection.title}
            </h3>
            <p className="mt-2 text-sm text-stone-500">{collection.tagline}</p>
          </div>
          <p className="text-sm text-stone-600 line-clamp-2">
            {collection.description}
          </p>
          <div className="mt-auto">
            <Link
              href={`/collections/${collection.id}`}
              className="inline-flex items-center gap-2 rounded-full border border-brand/20 px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-brand transition duration-300 hover:border-brand hover:bg-brand/10"
            >
              Explore
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </motion.div>
    </motion.article>
  );
}

