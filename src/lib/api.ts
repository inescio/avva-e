import type { Product } from './types';

// Mock de productos
export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Denim Jacket',
    description: 'Trendy denim jacket for women.',
    price: 59.99,
    image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&h=500&fit=crop',
    category: 'Jackets',
    stock: 10,
  },
  {
    id: '2',
    name: 'High-Waisted Jeans',
    description: 'Classic high-waisted blue jeans.',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=500&fit=crop',
    category: 'Jeans',
    stock: 15,
  },
  {
    id: '3',
    name: 'Denim Skirt',
    description: 'Stylish denim skirt for any occasion.',
    price: 39.99,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=500&fit=crop',
    category: 'Skirts',
    stock: 8,
  },
  {
    id: '4',
    name: 'Oversized Denim Shirt',
    description: 'Comfortable oversized denim shirt.',
    price: 44.99,
    image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=500&fit=crop',
    category: 'Shirts',
    stock: 12,
  },
  {
    id: '5',
    name: 'Ripped Jeans',
    description: 'Trendy ripped jeans for a casual look.',
    price: 54.99,
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=500&fit=crop',
    category: 'Jeans',
    stock: 9,
  },
  {
    id: '6',
    name: 'Denim Shorts',
    description: 'Cool denim shorts for summer.',
    price: 34.99,
    image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&h=500&fit=crop',
    category: 'Shorts',
    stock: 14,
  },
];

export async function fetchProducts(): Promise<Product[]> {
  // Simula una llamada a API
  return new Promise((resolve) => setTimeout(() => resolve(mockProducts), 300));
} 