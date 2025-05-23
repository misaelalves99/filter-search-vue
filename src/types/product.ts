// app/types/product.ts

export interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl?: string;
  image?: string;
  images?: string[];
  description?: string;
  category: string;
  stock?: number;
  createdAt?: string;
  updatedAt?: string;
  oldPrice?: number;
};
