import ScrollingBanner from "../components/ScrollingBanner";
import HeroBanner from "../components/HeroBanner";
import FeaturedProducts from "../components/FeaturedProducts";
import StyleGallery from "../components/StyleGallery";
import ProductCard from "../components/ProductCard";
import { fetchProducts } from "../lib/api";
import type { Product } from "../lib/types";
import React from "react";

export default async function Home() {
  const products: Product[] = await fetchProducts();

  return (
    <main className="max-w-7xl mx-auto px-4">
      <ScrollingBanner />
      <HeroBanner />
      <FeaturedProducts />
      <StyleGallery />
      <section id="productos" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 my-16">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </main>
  );
}
