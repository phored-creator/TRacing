<template>
    <div class="border border-white text-center rounded-2xl px-6 py-2 max-w-md mx-auto mt-8">
        <h3 class="text-red-500 text-xl font-bold uppercase tracking-wider ">
            Заполнение заявки
        </h3>
        <p class="text-white text-sm ">
            Наш менеджер свяжется с вами
        </p>
        <form @submit.prevent="validateForm" class="text-left"> 
            <div class="mt-5">
                <p v-if="error !=''" 
                    class="text-red-500 ml-3">
                    {{ error }}
                </p>
                <input 
                    v-model="firstName" 
                    type="text" 
                    placeholder="Имя" 
                    class="w-full p-2 rounded-xl bg-black text-white border-b"
                >
            </div>
            <div class="mt-4">
                <input 
                    v-model="lastName"
                    type="text" 
                    placeholder="Фамилия" 
                    class="w-full p-2 rounded-xl bg-black text-white border-b"
                >
            </div>
            <div class="mt-4">
                <input 
                    v-model="numberPhone"
                    maxlength="11" 
                    type="tel" 
                    @input="inPhone" 
                    placeholder="Номер телефона" 
                    class="w-full p-2 rounded-xl text-white border-b"
                >
            </div>
            <div class="mt-4">
                <input 
                    v-model="mail"
                    type="email" 
                    placeholder="Email" 
                    class="w-full p-2 rounded-xl text-white border-b"
                >
            </div>
            <label class="text-white/80">
                <input 
                    v-model="agree"
                    class="mt-5" 
                    type="checkbox"> 
                    Я согласен на обработку данных
            </label>
            <button 
                type="submit" 
                :class="agree ? 'cursor-pointer' : 'text-red-500/40 cursor-not-allowed' "
                class="w-full text-red-500 uppercase font-bold mt-5 mb-3 p-2 rounded-2xl border border-white">
                Оставить заявку
            </button>
        </form>
    </div>
</template>

<script>
import { store } from '../store.js' 

export default {
    data() {
        return {
            firstName: '',
            lastName: '',
            numberPhone: '',
            mail: '',
            error: '',
            agree: false
        }
    },
    methods: {
        validateForm() {
            if(this.firstName == '') {
                this.error = 'Введите имя!';
                return;
            } else if (this.lastName == '') {
                this.error = 'Введите фамилию!';
                return;
            } else if (this.numberPhone == '') {
                this.error = 'Введите номер телефона!';
                return;
            } else if (this.mail == '') {
                this.error = 'Введите почту!';
                return;
            } else if (this.agree == false) {
                this.error = 'Чувак, соглашайся на обработку данных!';
                return;
            }

            this.error = '';

            store.clientName = this.firstName;

            this.firstName = '';
            this.lastName = '';
            this.numberPhone = '';
            this.mail = '';
            this.agree = false;

            this.$router.push('/finish')
            
        },
        inPhone(event) {
            let currentText = event.target.value;
            
            if(currentText !== '' && !currentText.startsWith('8')) {
                currentText = '8' + currentText;

                event.target.value = currentText;
            }
            this.numberPhone = currentText;
        }
    }
}
</script>
