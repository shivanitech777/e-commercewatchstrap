import { notFound } from "next/navigation";
import ProductDetailClient from "./ProductDetailClient";
import { products } from "@/data/products";

export default function ProductDetailPage({ params }) {
  const product = products.find((item) => item.id === params.id);

  if (!product) {
    notFound();
  }

  const relatedProducts = products
    .filter(
      (item) =>
        item.id !== product.id && item.collection === product.collection
    )
    .slice(0, 4);

  return (
    <ProductDetailClient
      product={product}
      relatedProducts={relatedProducts}
    />
  );
}

