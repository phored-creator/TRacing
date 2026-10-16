import { createRouter, createWebHistory } from 'vue-router'
import About from './components/About.vue'
import Catalog from './components/Catalog.vue'
import Order from './components/Order.vue'
import Finish from './components/Finish.vue'

// Временный микро-компонент прямо здесь, чтобы не создавать лишний файл
const HomePlaceholder = { 
  template: '<div class="p-8 text-xl font-bold bg-white rounded-2xl shadow-sm mt-4 text-center">🛞 Здесь скоро будет красивый каталог шин!</div>' 
}

const routes = [
  { path: '/', component: Catalog }, // Главная страница
  { path: '/about', component: About },
  { path: '/order', component: Order },
  { path: '/finish', component: Finish}      // Страница "О нас"
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
