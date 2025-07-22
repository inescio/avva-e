// Tipos base para el e-commerce

export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  stock: number;
};

export type User = {
  id: string;
  name: string;
  email: string;
  address?: string;
};

export type Order = {
  id: string;
  userId: string;
  products: Array<{ productId: string; quantity: number }>;
  total: number;
  status: 'pending' | 'paid' | 'shipped' | 'delivered';
  createdAt: string;
}; 