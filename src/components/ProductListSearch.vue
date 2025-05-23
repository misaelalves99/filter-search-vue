<!-- src/components/ProductListSearch.vue -->

<template>
  <div class="container">
    <SearchForm
      :query="searchQuery"
      @search="setSearchQuery"
      @update:query="setSearchQuery"
    />

    <div class="productsGrid">
      <ProductCard
        v-for="product in filteredProducts"
        :key="product.id"
        :product="product"
        :enableBuyNow="enableBuyNow"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, computed } from 'vue';
import { getProducts } from '../services/productService';
import { useProductContext } from '../context/ProductContext';
import type { Product } from '../types/product';

import ProductCard from './ProductCard.vue';
import SearchForm from './SearchForm.vue';

const props = defineProps<{
  enableBuyNow?: boolean;
}>();

const { enableBuyNow } = props;

const { products, setProducts } = useProductContext();

const searchQuery = ref<string>('');

onMounted(async () => {
  try {
    const fetchedProducts: Product[] = await getProducts();
    setProducts(fetchedProducts);
  } catch (error) {
    console.error('Erro ao buscar produtos:', error);
  }
});

const filteredProducts = computed(() =>
  products.value.filter(product =>
    product.name.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
);

function setSearchQuery(query: string) {
  searchQuery.value = query;
}
</script>

<style scoped>
.container {
  padding: 20px;
}

.sectionTitle {
  font-size: 2rem;
  text-align: center;
  color: #333;
  margin-bottom: 20px;
}

.filters {
  margin-bottom: 20px;
}

.categoryWrapper {
  margin-bottom: 20px;
}

.productsGrid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
  margin-top: 20px;
}

.productsGrid > div {
  display: flex;
  justify-content: center;
}

@media (max-width: 1200px) {
  .productsGrid {
    grid-template-columns: repeat(4, 1fr);
  }
}

@media (max-width: 992px) {
  .productsGrid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 768px) {
  .productsGrid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .productsGrid {
    grid-template-columns: 1fr;
  }
}

.loading {
  text-align: center;
  font-size: 1.2rem;
  color: #888;
  margin-top: 50px;
}

.error {
  color: #d9534f;
  font-size: 1.1rem;
  text-align: center;
  margin-top: 50px;
}

.noProductsMessage {
  text-align: center;
  font-size: 1.1rem;
  color: #777;
  margin-top: 50px;
}

.filterContainer {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;
  margin-bottom: 20px;
}

.filterButton {
  background-color: #5bc0de;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  transition: background-color 0.3s ease;
}

.filterButton:hover {
  background-color: #31b0d5;
}

.filterButton:focus {
  outline: none;
}

@media (max-width: 768px) {
  .productsGrid {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }

  .filterContainer {
    flex-direction: column;
    gap: 10px;
  }

  .filterButton {
    width: 100%;
    padding: 12px;
  }
}
</style>
