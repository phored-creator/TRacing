<template>
  <div class="py-8 px-4 max-w-5xl mx-auto">
    
    <!-- Фильтры -->
    <div class="flex flex-col sm:flex-row gap-4 justify-between items-center mb-8 bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
      <input 
        v-model="searchQuery"
        type="text" 
        placeholder="Поиск по названию..." 
        class="w-full sm:w-64 px-4 py-2 rounded-xl bg-gray-50 border border-gray-200 text-sm focus:outline-none focus:border-red-500 transition"
      />

      <select 
        v-model="selectedSeason" 
        class="w-full sm:w-48 p-2 rounded-xl bg-gray-50 border border-gray-200 text-sm focus:outline-none focus:border-red-500 cursor-pointer font-medium"
      >
        <option value="all">Все сезоны</option>
        <option value="Летние">☀️ Летние шины</option>
        <option value="Зимние">❄️ Зимние шины</option>
      </select>
    </div>

    <!-- Сетка карточек -->
    <div v-if="filteredProducts.length === 0" class="text-center text-gray-400 py-8">
      Ничего не найдено...
    </div>

    <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div 
        v-for="product in filteredProducts" 
        :key="product.id" 
        class="bg-transparent rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col justify-between group hover:shadow-md transition"
      >
        <!-- БЛОК С ФОТОГРАФИЕЙ ШИНЫ -->
        <!-- h-48 ограничивает высоту, object-contain аккуратно вписывает колесо в размеры без искажений -->
        <div class="bg-gray-50 h-48 w-full flex items-center justify-center p-4 relative overflow-hidden">
          <img 
            :src="product.image" 
            :alt="product.name" 
            class="h-full object-contain mix-blend-multiply group-hover:scale-110 transition duration-300"
          />
          <!-- Абсолютный бейдж сезона поверх картинки -->
          <span class="absolute top-3 right-3 text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded bg-black text-white">
            {{ product.season }}
          </span>
        </div>

        <!-- Инфо блока -->
        <div class="p-5 flex-grow flex flex-col justify-between">
          <h3 class="font-bold text-white leading-tight group-hover:text-red-500 transition text-base">
            {{ product.name }}
          </h3>

          <div class="flex items-center justify-between mt-6 pt-4 border-t border-gray-50">
            <span class="text-lg font-black text-white">{{ product.price.toLocaleString() }} ₽</span>
            <button @click="goToOrder" class="bg-red-600 hover:bg-red-700 text-white font-bold text-xs px-4 py-2.5 rounded-xl transition">
              Купить
            </button>
          </div>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
import productsData from './products.json' // Поменяйте путь в зависимости от расположения

export default {
  name: 'Catalog',
  data() {
    return {
      searchQuery: '',
      selectedSeason: 'all',
      products: productsData 
    }
  },
  methods: {
    goToOrder() {
        this.$router.push('/order')
    }
  },
  computed: {
    filteredProducts() {
      return this.products.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(this.searchQuery.toLowerCase())
        const matchesSeason = this.selectedSeason === 'all' || product.season === this.selectedSeason
        
        return matchesSearch && matchesSeason
      })
    }
  }
}
</script>
