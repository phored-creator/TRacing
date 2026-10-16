import './assets/style.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // 1. Импортируем ваш роутер

const app = createApp(App) // 2. Создаем экземпляр приложения

app.use(router) // 3. Подключаем роутер перед монтированием

app.mount('#app') // 4. Монтируем на экран
