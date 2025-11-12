export const collections = [
  {
    id: "everyday-classics",
    title: "Everyday Classics",
    tagline: "Heritage silhouettes for daily wear.",
    description:
      "Timeless leather essentials crafted for effortless rotation and a dependable fit.",
    image: "/watch.jpg",
    featuredProducts: ["copper-canyon", "verdant-heritage", "cognac-heritage", "emerald-ridge"],
  },
  {
    id: "sport-editions",
    title: "Sport Editions",
    tagline: "Built for movement and performance.",
    description:
      "Lightweight, breathable straps engineered with modern, durable textiles.",
    image: "/k.jpg",
    featuredProducts: ["sapphire-aero", "slate-ridge", "alpine-ridge", "emerald-ridge"],
  },
  {
    id: "premium-leather",
    title: "Premium Leather",
    tagline: "Luxurious finishes with mindful sourcing.",
    description:
      "Vegetable-tanned and vegan alternatives crafted to age beautifully.",
    image: "/brown.jpg",
    featuredProducts: ["emerald-ridge", "midnight-current", "noir-classic" , "honeycomb-weave"],
  },
  {
    id: "eco-linen",
    title: "Eco Linen",
    tagline: "Plant-based textures with a soft hand feel.",
    description:
      "Organic cottons, recycled fibers, and upcycled textiles for conscious collectors.",
    image: "/straps.jpg",
    featuredProducts: ["honeycomb-weave", "cloudline-eco", "desert-dune","verdant-heritage"],
  },
];

export const getCollectionById = (id) =>
  collections.find((collection) => collection.id === id);
