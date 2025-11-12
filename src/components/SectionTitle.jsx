"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "../lib/motion";

export default function SectionTitle({
  title,
  subtitle,
  align = "left",
  eyebrow = "EcoCet Collection",
}) {
  const alignment =
    align === "center" ? "mx-auto text-center max-w-2xl" : "text-left max-w-xl";

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      variants={fadeInUp}
      className={`space-y-3 ${alignment}`}
    >
      {eyebrow ? (
        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-brand/75">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="text-balance text-3xl font-semibold text-ink sm:text-4xl Libre uppercase tracking-wider">
        {title}
      </h2>
      {subtitle ? <p className="text-base text-stone-500">{subtitle}</p> : null}
    </motion.div>
  );
}
