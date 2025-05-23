<!-- src/components/ProductListFilter.vue -->

<template>
  <div class="pageWrapper">
    <h2 class="sectionTitle">{{ title || 'Produtos' }}</h2>

    <div class="filters" v-if="enableFilterUI">
      <SelectFilter
        :products="products"
        :categories="categories"
        @search="handleSearch"
        @categoryChange="handleCategoryChange"
      />
    </div>

    <div class="categoryWrapper" v-if="enableFilterUI">
      <CategoryList
        :categories="categories"
        :selectedCategory="categoryFilter"
        @categorySelect="handleCategoryChange"
      />
    </div>

    <div v-if="filteredProducts.length" class="productGrid">
      <ProductCard
        v-for="product in filteredProducts"
        :key="product.id"
        :product="product"
        :enableBuyNow="enableBuyNow"
      />
    </div>

    <div v-else class="noProductsMessage">Nenhum produto encontrado.</div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, computed } from 'vue';
import { getProducts } from '../services/productService';
import { useProductContext } from '../context/ProductContext';
import type { Product } from '../types/product';

import ProductCard from './ProductCard.vue';
import SelectFilter from './SelectFilter.vue';
import CategoryList from './CategoryList.vue';

const props = defineProps<{
  enableFilterUI?: boolean;
  enableBuyNow?: boolean;
  title?: string;
}>();

const { enableFilterUI = true, enableBuyNow = false, title } = props;

const { products, setProducts } = useProductContext();
const categoryFilter = ref<string>('');
const categories = ref<string[]>([]);

onMounted(async () => {
  try {
    const fetchedProducts: Product[] = await getProducts();
    setProducts(fetchedProducts);
    categories.value = [...new Set(fetchedProducts.map(p => p.category))];
  } catch (error) {
    console.error('Erro ao buscar produtos:', error);
  }
});

function handleSearch(filtered: Product[]) {
  setProducts(filtered);
}

function handleCategoryChange(selectedCategory: string) {
  categoryFilter.value = selectedCategory === 'todos' ? '' : selectedCategory;
}

const filteredProducts = computed(() =>
  products.value.filter(product =>
    categoryFilter.value ? product.category === categoryFilter.value : true
  )
);
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
</style>
