// src/context/ProductContext.ts

import { ref, provide, inject, type Ref, type InjectionKey } from 'vue';
import type { Product } from '../types/product';

export type ProductContextType = {
  products: Ref<Product[]>;
  setProducts: (newProducts: Product[]) => void;
};

export const ProductSymbol: InjectionKey<ProductContextType> = Symbol('ProductContext');

export function provideProductContext() {
  const products = ref<Product[]>([]);

  function setProducts(newProducts: Product[]) {
    products.value = newProducts;
  }

  const context: ProductContextType = {
    products,
    setProducts,
  };

  provide(ProductSymbol, context);
}

export function useProductContext(): ProductContextType {
  const context = inject(ProductSymbol);
  if (!context) {
    throw new Error('useProductContext must be used within a ProductProvider');
  }
  return context;
}
