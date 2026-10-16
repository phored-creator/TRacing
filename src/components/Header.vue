<template>
  <header class="bg-black text-white sticky top-0 z-50 shadow-md">
    <div class="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center gap-4">
      
     
      <div class="flex items-center space-x-2">
        <span class="text-xl font-black tracking-wider uppercase text-red-500">T|Racer</span>
      </div>

      
      <nav class="flex flex-wrap items-center justify-center gap-6">
        <RouterLink to="/" class="text-sm font-bold text-gray-300 hover:text-red-500 transition">
          Каталог
        </RouterLink>
        <RouterLink to="/about" class="text-sm font-bold text-gray-300 hover:text-red-500 transition">
          О нас
        </RouterLink>
      </nav>

    </div>
  </header>
</template>

<script setup>

</script>
