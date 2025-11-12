"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "../lib/motion";

export default function PageTitle({ title, subtitle }) {
  return (
    <motion.header
      className="max-content-width py-16 text-center"
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
    >
      <h1 className="text-balance text-4xl font-semibold text-ink sm:text-5xl Libre uppercase tracking-wider">
        {title}
      </h1>
      {subtitle ? (
        <p className="mx-auto mt-4 max-w-3xl text-base text-stone-500 sm:text-lg">
          {subtitle}
        </p>
      ) : null}
    </motion.header>
  );
}
