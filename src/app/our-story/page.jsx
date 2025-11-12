"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import PageTitle from "@/components/PageTitle";
import SectionTitle from "@/components/SectionTitle";
import { fadeInUp, slideInRight, staggerChildren } from "@/lib/motion";

const milestones = [
  {
    year: "2018",
    title: "Idea to reality",
    description:
      "EcoCet was founded in Bengaluru with a mission to craft responsible watch straps without compromising luxury.",
  },
  {
    year: "2020",
    title: "Material innovation",
    description:
      "Expanded our atelier partnerships across Italy and Tamil Nadu, introducing cactus leather and Piñatex blends.",
  },
  {
    year: "2023",
    title: "Carbon neutral",
    description:
      "Achieved carbon-neutral certification and launched our take-back initiative for retiring straps responsibly.",
  },
];

export default function OurStoryPage() {
  return (
    <main className="relative pt-[6.5rem] pb-20">
      <PageTitle
        title="Crafted with conscience, worn with pride"
        subtitle="EcoCet blends horological passion with planet-positive materials. We believe luxury feels better when it is mindful."
      />

      <motion.section
        className="bg-white py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="max-content-width grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div variants={fadeInUp} className="space-y-6">
            <h2 className="text-3xl font-semibold text-ink sm:text-4xl">
              Workshop heritage meets modern sustainability.
            </h2>
            <p className="text-base text-stone-600 sm:text-lg">
              Each EcoCet strap is hand-finished by artisans who have studied
              the intricacies of watchmaking and leather craft. We partner with
              family-run tanneries in Tuscany and Tamil Nadu, and collaborate
              with textile cooperatives to source recycled fibres.
            </p>
            <p className="text-base text-stone-600 sm:text-lg">
              From responsibly sourced hides to plant-based alternatives, every
              material is selected for its touch, durability, and environmental
              impact. The result is a strap that develops character with time
              while keeping the planet in focus.
            </p>
          </motion.div>
          <motion.div
            variants={slideInRight}
            className="relative aspect-[5/4] overflow-hidden rounded-[32px] bg-ivory shadow-soft"
          >
            <Image
              src="/all.jpg"
              alt="EcoCet artisans preparing leather straps"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        id="sustainability"
        className="bg-sand py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="max-content-width">
          <SectionTitle
            eyebrow="Sustainability"
            title="Designing for circularity"
            subtitle="Our sustainability playbook celebrates transparency and thoughtful decision-making at every stage."
          />
          <motion.ul
            className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            variants={staggerChildren(0.12)}
          >
            {[
              "Certified vegetable-tanned leathers with low water consumption.",
              "Recycled stainless steel hardware and reclaimed textile fibres.",
              "Bespoke refurbishment and take-back programme for worn straps.",
              "Solar-powered production partners with fair wage commitments.",
              "Minimal packaging using FSC-certified paper and soy inks.",
              "Lifelong repairs and conditioning guidance with every purchase.",
            ].map((item) => (
              <motion.li
                key={item}
                variants={fadeInUp}
                className="rounded-3xl border border-brand/10 bg-white p-6 text-sm text-stone-600 shadow-soft"
              >
                {item}
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </motion.section>

      <motion.section
        className="bg-white py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="max-content-width">
          <SectionTitle
            eyebrow="Timeline"
            title="Milestones on our journey"
            subtitle="Years of experimentation and collaboration have shaped how EcoCet approaches mindful luxury."
            align="center"
          />
          <motion.ol
            className="mt-12 grid gap-8 lg:grid-cols-3"
            variants={staggerChildren(0.15)}
          >
            {milestones.map((milestone) => (
              <motion.li
                key={milestone.year}
                variants={fadeInUp}
                className="rounded-3xl border border-brand/10 bg-ivory p-8 shadow-soft"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.4em] text-brand/80">
                  {milestone.year}
                </p>
                <h3 className="mt-4 text-xl font-semibold text-ink">
                  {milestone.title}
                </h3>
                <p className="mt-3 text-sm text-stone-600">
                  {milestone.description}
                </p>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </motion.section>
    </main>
  );
}
