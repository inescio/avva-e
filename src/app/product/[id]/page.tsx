import { fetchProducts } from "../../lib/api";
import type { Product } from "../../lib/types";
import React from "react";
import { notFound } from "next/navigation";

interface ProductPageProps {
  params: { id: string };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const products: Product[] = await fetchProducts();
  const product = products.find((p) => p.id === params.id);

  if (!product) return notFound();

  return (
    <main className="max-w-2xl mx-auto px-4 py-12">
      <img src={product.image} alt={product.name} className="w-full h-80 object-cover rounded mb-6" />
      <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
      <p className="text-gray-600 mb-4">{product.description}</p>
      <span className="block text-blue-700 text-2xl font-bold mb-6">${product.price.toFixed(2)}</span>
      <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">Agregar al carrito</button>
    </main>
  );
} 