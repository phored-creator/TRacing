<template>
    <div v-if="store.clientName" class="text-white border rounded-2xl text-center">
        <h3 class="text-xl font-bold uppercase px-6 mt-3">🎉 Ваша заявка успешно принята!</h3>
        <p class="p-4">Наш менеджер перезвонит вам в течение 15 минут для уточнения заказа! </p>
    </div>
    <div v-else class="text-white text-center mt-8">
        <h3 class="text-xl font-bold">Вышел отсюда ⛔</h3>
    </div>
</template>

<script>
// Импортируем то же самое хранилище
import { store } from '../store.js'

export default {
    data() {
        return {
            store // Делаем хранилище доступным в template
        }
    },
    // Больше никаких props! Роутер настраивать тоже не нужно.
}
</script> 
