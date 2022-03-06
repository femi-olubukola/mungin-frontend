<template>
    <div :style="{ backgroundImage: `url(${image})` }" class="h-screen pb-4 join-waiting-list bg-cover bg-center">
        <Navigation :color="color"/>
        <div class="content px-6 sm:px-6 md:px-10 lg:px-16 xl:px-32 flex flex-col justify-start">
            <div class="mt-10 xl:mt-2 mb-4 xl:mb-2">
                <div class="text-black font-medium font-serif text-base flex justify-start sm:w-1/2 lg:w-5/12 xl:w-4/12">
                    Please note: all fields are required.
                </div>
            </div>
        <!-- <form class="mx-auto" style="width: 80%;"> -->
        <form @submit.prevent="handleSubmit" class="flex justify-start flex-col">
                <div class="w-3/12 flex justify-start ">
                    <label class=" font-medium font-serif text-base text-black">Fullname</label>
                </div>
                <div>
                    <input v-model="fullName" class="pl-4 font-serif font-normal text-sm text-black flex justify-start w-11/12 sm:w-8/12 lg:w-7/12 xl:w-5/12 h-10  md:h-14 rounded-lg bg-transparent border border-slate-300 border-solid mb-2 focus:outline-none required" type="name"/>
                </div>
                <div class="w-3/12 mr-2 font-serif flex justify-start ">
                    <label class=" font-medium text-base text-black">Email</label>
                </div>
                <div>
                    <input v-model="email" class=" font-serif font-normal text-sm text-black pl-4 flex justify-start w-11/12 12 sm:w-8/12 lg:w-7/12  xl:w-5/12 h-10  md:h-14 rounded-lg bg-transparent border border-slate-300 border-solid mb-2 focus:outline-none required" type="email"/>
                </div>
                <div class="w-3/12 font-serif">
                    <label class=" font-medium text-base text-black flex justify-start ">Phone</label>
                </div>
                <div>
                    <input v-model="phoneNumber" class=" font-serif font-normal text-sm text-black pl-4 flex justify-start w-11/12 12 sm:w-8/12 lg:w-7/12  xl:w-5/12 h-10  md:h-14 rounded-lg bg-transparent border border-slate-300 border-solid mb-2 focus:outline-none required" type="number"/>
                </div>
                <div class="w-8/12 font-serif">
                    <label class=" font-medium text-base text-black flex justify-start ">Home/Office Address</label>
                </div>
                <div>
                    <input v-model="address" class=" font-serif font-normal text-sm text-black pl-4 flex justify-start w-11/12 12 sm:w-8/12 lg:w-7/12  xl:w-5/12 h-10  md:h-14 rounded-lg bg-transparent border border-slate-300 border-solid mb-2 focus:outline-none required" type="name"/>
                </div>
                <div class="flex relative">
                    <button @click="togglePopUp" style="background-color: #17233C;" class="font-medium w-11/12 12 sm:w-8/12 h-10 md:h-14 lg:w-7/12  xl:w-5/12 rounded-xl text-white font-serif mt-2">Submit</button>
                    <PopUp v-show="submitPopUp" class="absolute w-8/12 sm:w-6/12 md:w-5/12 right-2 sm:-right-4 md:-right-10 lg:w-5/12 lg:right-0 xl:right-1/4 xl:w-4/12  lg:bottom-2 bottom-0"/>
                    <!-- <SubmitPopUp class="flex items-start"/> -->
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import Navigation from '../components/Navigation.vue'
import PopUp from '../components/PopUp.vue'
export default {
    components: {
        Navigation,
        PopUp
    },
    data (){
        return {
            image: require('../assets/images/Component.png'),
            submitPopUp: false,
            fullname: '',
            email: '',
            phoneNumber: '',
            address: '',
            color: 'white'
            // bgHeight: '100vh',

        }
    },
    methods: {
        togglePopUp() {
            this.submitPopUp = !this.submitPopUp;
        },
        handleSubmit() {
            let data = {
                Email: this.email,
                FullName: this.fullName,
                PhoneNumber: this.phoneNumber,
                HomeAddress: this.address,
            };
            console.log(data)
            this.email = '';
            this.fullName = '';
            this.phoneNumber = '';
            this.address = '';
        }
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Raleway:wght@100;200;300;400;500;600;700;800;900&display=swap');
body{
    font-family: 'Raleway'; 
}

input {
    border: 1.13792px solid rgba(0, 0, 0, 0.72);
}

button {
    background-color: #17233C;
}
</style>