<!-- src/components/CategoryList.vue -->

<template>
  <div class="categoryListContainer">
    <button
      v-for="category in categories"
      :key="category"
      :class="['categoryButton', { selected: category === selectedCategory }]"
      @click="handleClick(category)"
    >
      {{ capitalize(category) }}
    </button>
  </div>
</template>

<script lang="ts" setup>
import { defineEmits } from 'vue';

interface Props {
  categories: string[];
  selectedCategory: string;
}

defineProps<Props>();

const emit = defineEmits<{
  (e: 'categorySelect', category: string): void;
}>();

function handleClick(category: string) {
  emit('categorySelect', category);
}

function capitalize(str: string) {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}
</script>

<style scoped>
.categoryListContainer {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
}

.categoryButton {
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 500;
  background-color: #f5f5f5;
  border: 1px solid #dcdcdc;
  border-radius: 12px;
  color: #333;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
  text-transform: capitalize;
}

.categoryButton:hover {
  background-color: #0070f3;
  color: white;
  transform: translateY(-2px);
}

.categoryButton:active {
  transform: translateY(0);
}

.categoryButton:focus {
  outline: none;
  box-shadow: 0 0 0 2px rgba(0, 112, 243, 0.4);
}

.selected {
  background-color: #0070f3;
  color: white;
}

@media (max-width: 600px) {
  .categoryListContainer {
    justify-content: flex-start;
    gap: 0.5rem;
  }

  .categoryButton {
    padding: 0.5rem 1rem;
  }
}
</style>
