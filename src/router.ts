import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './pages/home/HomePage.vue';
import ProductsPage from './pages/products/ProductsPage.vue';
import SearchPage from './pages/search/SearchPage.vue';
import FilterPage from './pages/filter/FilterPage.vue';

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/products', name: 'Products', component: ProductsPage },
  { path: '/search', name: 'Search', component: SearchPage },
  { path: '/filter', name: 'Filter', component: FilterPage },
  { path: '/:pathMatch(.*)*', redirect: '/' },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
