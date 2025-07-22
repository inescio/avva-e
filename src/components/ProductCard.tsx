import React from 'react';
import type { Product } from '../lib/types';
import Link from 'next/link';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => (
  <div className="bg-white rounded-lg shadow hover:shadow-lg transition p-4 flex flex-col items-center">
    <Link href={`/product/${product.id}`} className="w-full flex flex-col items-center">
      <img src={product.image} alt={product.name} className="w-40 h-40 object-cover rounded mb-4" />
      <h3 className="font-semibold text-lg mb-2 text-center hover:underline">{product.name}</h3>
    </Link>
    <p className="text-gray-500 text-sm mb-2 text-center">{product.description}</p>
    <span className="font-bold text-blue-700 text-lg mb-4">${product.price.toFixed(2)}</span>
    <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">Agregar al carrito</button>
  </div>
);

export default ProductCard; 