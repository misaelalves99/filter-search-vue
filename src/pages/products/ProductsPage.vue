<!-- src/pages/products/ProductsPage.vue -->

<template>
  <main class="container">
    <PageHeader
      title="Catálogo de Produtos"
      subtitle="Explore nossa coleção completa de produtos disponíveis."
    />
    <ProductList
      :enableFilterUI="true"
      :enableBuyNow="true"
      :products="products"
      :categories="categories"
      title="Catálogo de Produtos"
    />
  </main>
</template>

<script lang="ts" setup>
import { ref, onMounted, computed } from 'vue';
import PageHeader from '../../components/PageHeader.vue';
import ProductList from '../../components/ProductList.vue';

import { getProducts } from '../../services/productService';

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
}

const products = ref<Product[]>([]);

const fetchProducts = async () => {
  try {
    products.value = await getProducts();
  } catch (error) {
    console.error('Erro ao buscar produtos:', error);
  }
};

onMounted(() => {
  fetchProducts();
});

const categories = computed(() => {
  const cats = new Set(products.value.map(p => p.category));
  return Array.from(cats);
});
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 3rem;
  margin-bottom: 3rem;
  padding: 2rem 1rem;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 1.5rem;
  text-align: center;
}

.loadingMessage {
  font-size: 1.25rem;
  color: #666;
  text-align: center;
}

.errorMessage {
  font-size: 1.25rem;
  color: #f44336;
  text-align: center;
}

.noProductsText {
  font-size: 1.125rem;
  color: #888;
  text-align: center;
}

.productListContainer {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}
</style>
