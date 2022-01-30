<template>
    <div class="forgot-password h-screen bg-center bg-no-repeat bg-cover" :style="{ backgroundImage: `url(${image})` }">
        <Navigation :color="color"/>
        <div class=" px-6 sm:px-6 lg:px-16  xl:px-20 flex flex-col justify-start lg:ml-16">
            <div class="forgot-password-content w-11/12 flex justify-start mt-28 mr-4 md:mb-2">
                <h1 class=" font-medium font-serif text-base text-black">Forgot your password? it happens to the best of us.</h1>
            </div>
            <form @submit.prevent="handleSubmit">
                <div class="w-10/12 flex justify-start">
                    <label class=" font-medium font-serif text-base md:text-lg text-black">Enter your valid email please</label>
                </div>
                <div class="py-4">
                    <input v-model="email" class="pl-4 font-serif font-normal text-sm text-black flex justify-start w-10/12 sm:w-8/12 lg:w-7/12 xl:w-5/12 h-10  md:h-14 rounded-lg bg-transparent border border-slate-300 border-solid mb-2 focus:outline-none" type="email"/>
                </div>
                <div class="flex justify-start">
                    <button style="background-color: #17233C;" class="font-medium w-10/12 12 sm:w-8/12 h-10 md:h-14 lg:w-7/12  xl:w-5/12 rounded-xl text-white font-serif mt-2">Submit</button>
                </div>
            </form>
            <div class="forgot-password-content w-11/12 flex justify-start">
                <h1 class=" font-medium font-serif text-base text-black pt-2">Check your mailbox</h1>
            </div>
        </div>
    </div>
</template>

<script>
import Navigation from '../components/Navigation.vue'
export default {
    data() {
        return {
            image: require('../assets/images/Component.png'),
            email: '',
            color: 'white'
        }
    },
    components: {
        Navigation        
    },
    methods: {
        handleSubmit() {
            let data = {
                email: this.email
            };
            console.log(data)
            this.email = '';
            this.password = '';
        },
    }
}
</script>

<style scoped>
input {
    border: 1.13792px solid rgba(0, 0, 0, 0.72);
}
</style>