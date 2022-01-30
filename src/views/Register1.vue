<template>
    <div class="forgot-password h-screen bg-center bg-no-repeat bg-cover" :style="{ backgroundImage: `url(${image})`}">
        <Navigation :color="color"/>
        <div class="forgot-password-content mt-10 xl:ml-44">
            <div class=" text-center mb-6">
                <h1 class="uppercase text-black font-serif text-lg md:text-2xl font-bold">Register</h1>
            </div>
            <div class="forgot-password-content w-full flex justify-start sm:ml-32 mr-4 mb-2">
                <h1 class=" font-medium font-serif text-sm text-black">Please note: all fields are required</h1>
            </div>
            <form @submit.prevent="handleSubmit" class="flex justify-start flex-col">
                <div class="w-3/12 flex justify-start ">
                    <label class=" font-medium font-serif text-base text-black">Username</label>
                </div>
                <div>
                    <input v-model="userName" class="my-3 pl-4 font-serif font-normal text-sm text-black flex justify-start w-full sm:w-9/12 lg:w-9/12 xl:w-5/12 h-10  md:h-14 rounded-lg bg-white border  border-solid mb-2 focus:outline-none" type="name"/>
                </div>
                <div class="w-3/12 mr-2 font-serif flex justify-start ">
                    <label class=" font-medium text-base text-black">Phonenumber</label>
                </div>
                <div>
                    <input v-model="phoneNumber" class="my-3 font-serif font-normal text-sm text-black pl-4  flex justify-start  w-full 12 sm:w-9/12 lg:w-9/12  xl:w-5/12 h-10  md:h-14 rounded-lg bg-transparent border border-slate-300 border-solid mb-2 focus:outline-none" type="email"/>
                </div>
                <div class="w-3/12 font-serif">
                    <label class=" font-medium text-base text-black flex justify-start ">Occupation</label>
                </div>
                <div>
                    <input v-model="occupation" class="my-3 font-serif font-normal text-sm text-black pl-4 flex justify-start  w-full 12 sm:w-9/12 lg:w-9/12  xl:w-5/12 h-10  md:h-14 rounded-lg bg-transparent border border-slate-300 border-solid mb-2 focus:outline-none" type="number"/>
                </div>
                <div class="w-8/12 font-serif">
                    <label class=" font-medium text-base text-black flex justify-start ">Email</label>
                </div>
                <div>
                    <input v-model="email" class="my-3 font-serif font-normal text-sm text-black pl-4 flex justify-start  w-full 12 sm:w-9/12 lg:w-9/12  xl:w-5/12 h-10  md:h-14 rounded-lg bg-transparent border border-slate-300 border-solid mb-2 focus:outline-none" type="name"/>
                </div>
                <div class="w-8/12 font-serif">
                    <label class=" font-medium text-base text-black flex justify-start ">Region</label>
                </div>
                <div>
                    <input v-model="region" class="my-3 font-serif font-normal text-sm text-black pl-4 flex justify-start w-full 12 sm:w-9/12 lg:w-9/12  xl:w-5/12 h-10  md:h-14 rounded-lg bg-transparent border border-slate-300 border-solid mb-2 focus:outline-none" type="name"/>
                </div>
                <div class="w-8/12 font-serif">
                    <label class=" font-medium text-base text-black flex justify-start ">State</label>
                </div>
                <div>
                    <input v-model="state" class="my-3 font-serif font-normal text-sm text-black pl-4 flex justify-start w-full 12 sm:w-9/12 lg:w-9/12  xl:w-5/12 h-10  md:h-14 rounded-lg bg-transparent border border-slate-300 border-solid mb-2 focus:outline-none" type="name"/>
                </div>
                <div class="w-8/12 font-serif">
                    <label class=" font-medium text-base text-black flex justify-start ">Password</label>
                </div>
                <div>
                    <input v-model="password" class="my-3 font-serif font-normal text-sm text-black pl-4 flex justify-start w-full 12 sm:w-9/12 lg:w-9/12  xl:w-5/12 h-10  md:h-14 rounded-lg bg-transparent border border-slate-300 border-solid mb-2 focus:outline-none" type="name"/>
                </div>
                <div class="w-full xl:w-1/2 flex justify-start mb-4">
                    <h1 class=" font-medium font-serif text-sm text-black">At least 8 characters (and up to 100 characters),   5 or more unique characters and must contain at least 3 of the following: uppercase, lowercase, numeric, or special characters.  The allowed special characters are ~ ! @ # $ % ^ * - _ = + : , . ?  [no spaces allowed</h1>
                </div>
                <div class="flex relative">
                    <button style="background-color: #17233C;" class="font-medium w-full 12 sm:w-9/12 h-10 md:h-14 lg:w-9/12  xl:w-5/12 rounded-xl text-white font-serif mt-2">Submit</button>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
import Navigation from '../components/Navigation.vue'
import EyeVisibleNo from '../components/EyeVisibleNo.vue'
import EyeVisibleYes from '../components/EyeVisibleYes.vue'
export default {
    data() {
        return {
            // image: require('../assets/images/Registerbg.png'),
            createPassword: '',
            newPassword: '',
            visibility: 'password',
            show: false,
            color: '525252'
        }
    },
    components: {
        Navigation,
        EyeVisibleNo,
        EyeVisibleYes
    },
    methods: {
        showPassword() {
            this.visibility = 'text';
            this.show = !this.show;  
        },
        hidePassword() {
            this.visibility = 'password';
            this.show = !this.show;  
        },
        handleSubmit() {
            let data = {
                NewPassword: this.createPassword,
                ConfirmNewPassword: this.newPassword,
            };
            console.log(data)
            this.createPassword = '';
            this.newPassword = '';
        }
    }
}
</script>

<style scoped>
    input {
        box-shadow: -5px 1px 20px rgba(0, 0, 0, 0.35);
    }
</style>