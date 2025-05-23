<!-- src/pages/home/HomePage.vue -->

<template>
  <main class="container">
    <section class="hero">
      <h1 class="title">Bem-vindo ao Nosso E-commerce</h1>
      <p class="description">Explore nossos produtos incríveis!</p>
      <button class="heroButton" @click="handleNavigate">
        Ver Produtos
      </button>
    </section>

    <section class="featuredSection">
      <h2 class="sectionTitle">Produtos em Destaque</h2>
      <ProductList
        :products="products.slice(0, 6)"
        :categories="categories"
        :enableFilterUI="false"
      />
    </section>
  </main>
</template>

<script lang="ts" setup>
import { ref, onMounted, computed } from 'vue';
import { useRouter } from 'vue-router';
import ProductList from '../../components/ProductList.vue';

import { getProducts } from '../../services/productService';
import type { Product } from '../../types/product';

const products = ref<Product[]>([]);
const router = useRouter();

const fetchProducts = async () => {
  try {
    const result = await getProducts();
    console.log('Produtos carregados:', result);
    products.value = result;
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

const handleNavigate = () => {
  router.push('/products');
};
</script>

<style scoped>
.container {
  padding: 2rem 0;
  background-color: #f5f5f5;
}

.hero {
  background-color: #333;
  color: white;
  padding: 4rem 2rem;
  text-align: center;
  border-radius: 8px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.title {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.description {
  font-size: 1.25rem;
  margin-bottom: 2rem;
}

.heroButton {
  background-color: #ff5722;
  color: white;
  font-size: 1.125rem;
  padding: 1rem 2rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.heroButton:hover {
  background-color: #e64a19;
}

.featuredSection {
  max-width: 1200px;
  margin: auto;
  margin-top: 3rem;
  margin-bottom: 3rem;
  padding: 2rem 1rem;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.sectionTitle {
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 2rem;
  text-align: center;
}
</style>
