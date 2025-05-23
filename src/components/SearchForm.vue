<!-- src/components/SearchForm.vue -->

<template>
  <input
    type="text"
    placeholder="Buscar produtos..."
    v-model="query"
    @input="onInput"
    class="input"
  />
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue';

interface Props {
  query: string;
}

const props = defineProps<Props>();
const emit = defineEmits<{
  (e: 'update:query', query: string): void;
  (e: 'search', query: string): void;
}>();

const query = ref(props.query);

watch(() => props.query, (newVal) => {
  query.value = newVal;
});

function onInput() {
  emit('update:query', query.value);
  emit('search', query.value);
}
</script>

<style scoped>
.searchForm {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem;
  background-color: #ffffff;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  max-width: 100%;
  flex-wrap: wrap;
}

.input {
  flex: 1;
  min-width: 200px;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  border: 1px solid #dcdcdc;
  border-radius: 12px;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.input:focus {
  border-color: #0070f3;
  box-shadow: 0 0 0 2px rgba(0, 112, 243, 0.15);
  outline: none;
}

.button {
  padding: 0.75rem 1.25rem;
  background-color: #0070f3;
  color: white;
  font-size: 1rem;
  font-weight: 500;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.button:hover {
  background-color: #0059c1;
}

@media (max-width: 500px) {
  .searchForm {
    flex-direction: column;
    align-items: stretch;
  }

  .button {
    width: 100%;
  }
}
</style>
