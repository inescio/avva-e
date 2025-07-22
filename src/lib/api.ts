import type { Product } from './types';

// Mock de productos
export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Denim Jacket',
    description: 'Trendy denim jacket for women.',
    price: 59.99,
    image: '/denim-jacket.jpg',
    category: 'Jackets',
    stock: 10,
  },
  {
    id: '2',
    name: 'High-Waisted Jeans',
    description: 'Classic high-waisted blue jeans.',
    price: 49.99,
    image: '/high-waisted-jeans.jpg',
    category: 'Jeans',
    stock: 15,
  },
  {
    id: '3',
    name: 'Denim Skirt',
    description: 'Stylish denim skirt for any occasion.',
    price: 39.99,
    image: '/denim-skirt.jpg',
    category: 'Skirts',
    stock: 8,
  },
  {
    id: '4',
    name: 'Oversized Denim Shirt',
    description: 'Comfortable oversized denim shirt.',
    price: 44.99,
    image: '/oversized-denim-shirt.jpg',
    category: 'Shirts',
    stock: 12,
  },
  {
    id: '5',
    name: 'Ripped Jeans',
    description: 'Trendy ripped jeans for a casual look.',
    price: 54.99,
    image: '/ripped-jeans.jpg',
    category: 'Jeans',
    stock: 9,
  },
  {
    id: '6',
    name: 'Denim Shorts',
    description: 'Cool denim shorts for summer.',
    price: 34.99,
    image: '/denim-shorts.jpg',
    category: 'Shorts',
    stock: 14,
  },
];

export async function fetchProducts(): Promise<Product[]> {
  // Simula una llamada a API
  return new Promise((resolve) => setTimeout(() => resolve(mockProducts), 300));
} 