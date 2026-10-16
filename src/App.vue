<template>
  <div class="flex flex-col min-h-screen">
    <Header />

    <main class="max-w-7xl mx-auto p-4 ">
      <RouterView /> 
    </main>

    <Footer />
  </div>
</template>

<script>
// Импортируем шапку. В синтаксисе script setup она регистрируется САМА!
import Header from './components/Header.vue'
import Footer from './components/Footer.vue';

export default {
    components: { Header, Footer }
}
</script>

