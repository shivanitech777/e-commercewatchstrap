"use client";


import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp, hoverLift } from "../lib/motion";
import { formatCurrencyINR } from "../lib/utils";
import { useRouter } from "next/navigation";

export default function ProductCard({ product }) {
  const route = useRouter()
  return (
    <motion.article variants={fadeInUp} className="group">
      <motion.div
        variants={hoverLift}
        initial="rest"
        whileHover="hover"
        whileTap="tap"
        onClick={()=> route.push(`/product/${product.id}`)}
        className="flex h-full flex-col overflow-hidden cursor-pointer  bg-white p-3 shadow-soft transition duration-300 "
      >
        <div className="block">
          <div className="relative aspect-[4/5] overflow-hidden  bg-sand ">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover transition duration-700 group-hover:scale-105"
              sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 20vw"
            />
          </div>
        </div>
        <div className="flex flex-1 flex-col justify-between gap-4 pt-4 sm:pt-6">
          <div className="space-y-2">
            <h3 className="text-base font-semibold text-ink sm:text-lg">
              <span
                
                className="transition duration-200 hover:text-brand"
              >
                {product.name}
              </span>
            </h3>
            <p className="text-xs text-stone-500 sm:text-sm">
              {product.subtitle}
            </p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold text-brand sm:text-base">
              {formatCurrencyINR(product.price)}
            </p>
            <motion.button
              type="button"
              className=" border border-brand/20 px-3 py-1.5 text-[0.65rem] font-semibold uppercase  text-brand transition duration-300 hover:border-brand hover:bg-brand/10 sm:px-4 sm:py-2 sm:text-xs"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              aria-label={`Add ${product.name} to cart`}
            >
              <span className="hidden sm:block">Add to Cart</span>
              <span className="block sm:hidden">Add</span>
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.article>
  );
}
