<!-- src/components/ProductListFilter.vue -->

<template>
  <div class="searchFilterContainer">
    <div class="searchWrapper">
      <input
        type="text"
        placeholder="Buscar produtos..."
        v-model="searchTerm"
        class="searchInput"
      />
    </div>

    <div class="filtersWrapper">
      <div class="filterGroup">
        <label>Categoria</label>
        <select v-model="selectedCategory" class="filterSelect">
          <option value="">Todas as Categorias</option>
          <option
            v-for="category in categories"
            :key="category"
            :value="category"
          >
            {{ capitalize(category) }}
          </option>
        </select>
      </div>

      <div class="filterGroup">
        <label>Faixa de Preço</label>
        <div class="priceRange">
          <input
            type="number"
            placeholder="Preço Mínimo"
            v-model.number="minPrice"
            class="priceInput"
            min="0"
          />
          <input
            type="number"
            placeholder="Preço Máximo"
            v-model.number="maxPrice"
            class="priceInput"
            min="0"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue';

interface Props {
  categories: string[];
}

const props = defineProps<Props>();
const { categories } = props;

const emit = defineEmits<{
  (e: 'search', searchTerm: string): void;
  (e: 'categoryChange', category: string): void;
  (e: 'priceRangeChange', min: number, max: number): void;
}>();

const searchTerm = ref('');
const selectedCategory = ref('');
const minPrice = ref(0);
const maxPrice = ref(1000);

watch(searchTerm, (val) => {
  emit('search', val);
});

watch(selectedCategory, (val) => {
  emit('categoryChange', val);
});

watch([minPrice, maxPrice], ([min, max]) => {
  emit('priceRangeChange', min, max);
});

function capitalize(str: string) {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}
</script>

<style scoped>
.searchFilterContainer {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  background-color: #ffffff;
  padding: 1.5rem;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
  max-width: 100%;
  margin-bottom: 2rem;
}

.searchWrapper {
  display: flex;
  flex-direction: column;
}

.searchInput {
  padding: 0.75rem 1rem;
  font-size: 1rem;
  border: 1px solid #dcdcdc;
  border-radius: 12px;
  transition: border-color 0.3s ease;
}

.searchInput:focus {
  border-color: #0070f3;
  outline: none;
}

.filtersWrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: space-between;
}

.filterGroup {
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 220px;
}

.filterGroup label {
  font-size: 0.9rem;
  color: #555;
  margin-bottom: 0.5rem;
  font-weight: 500;
}

.filterSelect {
  padding: 0.7rem;
  font-size: 1rem;
  border: 1px solid #dcdcdc;
  border-radius: 12px;
  background-color: #fff;
  transition: border-color 0.3s ease;
}

.filterSelect:focus {
  border-color: #0070f3;
  outline: none;
}

.priceRange {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.priceInput {
  flex: 1;
  min-width: 100px;
  padding: 0.6rem 0.9rem;
  border: 1px solid #dcdcdc;
  border-radius: 12px;
  font-size: 0.95rem;
  transition: border-color 0.3s ease;
}

.priceInput:focus {
  border-color: #0070f3;
  outline: none;
}

@media (max-width: 600px) {
  .filtersWrapper {
    flex-direction: column;
  }
}
</style>
