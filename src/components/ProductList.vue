<!-- src/components/ProductList.vue -->

<template>
  <div class="pageWrapper">
    <h2 class="sectionTitle">Lista de Produtos</h2>
    <div v-if="enableFilterUI" class="filters">
      <SearchForm v-model:query="searchQuery" />
      <SearchFilter
        :categories="categories"
        @search="handleSearch"
        @categoryChange="handleCategoryChange"
        @priceRangeChange="handlePriceRangeChange"
      />
      <CategoryList
        :categories="categories"
        :selectedCategory="categoryFilter"
        @categorySelect="handleCategoryChange"
      />
    </div>

    <div class="productGrid">
      <ProductCard
        v-for="product in filteredProducts"
        :key="product.id"
        :product="product"
        :enableBuyNow="true"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';
import SearchForm from './SearchForm.vue';
import SearchFilter from './SearchFilter.vue';
import CategoryList from './CategoryList.vue';
import ProductCard from './ProductCard.vue';
import type { Product } from '../types/product';

const props = defineProps<{
  enableFilterUI: boolean;
  products: Product[];
  categories: string[];
}>();

const searchQuery = ref('');
const categoryFilter = ref('');
const priceRange = ref({ min: 0, max: 1000 });

function handleSearch(query: string) {
  searchQuery.value = query;
}

function handleCategoryChange(category: string) {
  categoryFilter.value = category;
}

function handlePriceRangeChange(min: number, max: number) {
  priceRange.value.min = min;
  priceRange.value.max = max;
}

const filteredProducts = computed(() => {
  return props.products.filter(product => {
    const matchesSearch =
      !searchQuery.value ||
      product.name.toLowerCase().includes(searchQuery.value.toLowerCase());

    const matchesCategory =
      !categoryFilter.value || product.category === categoryFilter.value;

    const matchesPrice =
      product.price >= priceRange.value.min &&
      product.price <= priceRange.value.max;

    return matchesSearch && matchesCategory && matchesPrice;
  });
});
</script>

<style scoped>

.pageWrapper {
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

.productGrid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
  margin-top: 20px;
}

.productGrid > div {
  display: flex;
  justify-content: center;
}

@media (max-width: 1200px) {
  .productGrid {
    grid-template-columns: repeat(4, 1fr);
  }
}

@media (max-width: 992px) {
  .productGrid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 768px) {
  .productGrid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .productGrid {
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
  .productGrid {
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

.card {
  background: #fff;
  padding: 16px;
  border-radius: 12px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.05);
  text-align: center;
}

.image {
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 8px;
}

.name {
  font-size: 1.2rem;
  margin: 12px 0 4px;
  color: #222;
}

.category {
  color: #777;
  font-size: 0.9rem;
  margin-bottom: 8px;
}

.price {
  font-size: 1rem;
  font-weight: bold;
  color: #2c3e50;
}

.buyButton {
  margin-top: 10px;
  padding: 10px 16px;
  background-color: #2ecc71;
  color: white;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.buyButton:hover {
  background-color: #27ae60;
}

</style>
