<!-- src/App.vue -->

<template>
  <ProductProvider>
    <Navbar />
    <main>
      <router-view />
    </main>
    <Footer />
  </ProductProvider>
</template>

<script lang="ts" setup>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import ProductProvider from './context/ProductProvider.vue';
</script>
