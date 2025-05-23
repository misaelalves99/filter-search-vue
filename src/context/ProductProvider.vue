<!-- src/context/ProductProvider.vue -->
<template>
  <slot />
</template>

<script lang="ts" setup>
import { provideProductContext } from './ProductContext';

provideProductContext();
</script>
