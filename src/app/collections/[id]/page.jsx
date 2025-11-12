import { notFound } from "next/navigation";
import CollectionDetailClient from "./CollectionDetailClient";
import { getCollectionById } from "@/data/collections";
import { getProductsByIds, products } from "@/data/products";

export default function CollectionDetailPage({ params }) {
  const collection = getCollectionById(params.id);

  if (!collection) {
    notFound();
  }

  const collectionProducts = products.filter(
    (product) => product.collection === collection.id
  );

  const featuredProducts = getProductsByIds(collection.featuredProducts);

  return (
    <CollectionDetailClient
      collection={collection}
      featuredProducts={featuredProducts}
      collectionProducts={collectionProducts}
    />
  );
}

