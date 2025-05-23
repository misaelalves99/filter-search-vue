<!-- src/components/PageHeader.vue -->

<template>
  <header class="header">
    <h1 class="title">{{ title }}</h1>
    <p class="subtitle">{{ subtitle }}</p>
  </header>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';

interface PageHeaderProps {
  title: string;
  subtitle: string;
}

const { title, subtitle } = defineProps<PageHeaderProps>();
</script>

<style scoped>
.header {
  text-align: center;
  margin-bottom: 2rem;
}

.title {
  font-size: 2rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 0.5rem;
}

.subtitle {
  font-size: 1.2rem;
  color: #666;
}
</style>
