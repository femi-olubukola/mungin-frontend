<template>
    <div class="forgot-password h-screen bg-center bg-no-repeat bg-cover" :style="{ backgroundImage: `url(${image})`}">
        <Navigation/>
        <div class="forgot-password-content px-6 sm:px-6 lg:px-16  xl:px-20 flex flex-col justify-start lg:ml-16 xl:ml-12 mt-20">
            <form @submit.prevent="handleSubmit">
                <div class="w-10/12 flex justify-start">
                    <label class=" font-medium font-serif text-base md:text-lg text-black">Create new password</label>
                </div>
                <div class="py-4 relative">
                    <input 
                    :type="visibility" 
                    v-model="createPassword" class="font-serif font-normal text-sm text-black pl-4 pr-10 sm:pr-8 md:pr-10 lg:pr-16 flex justify-start w-10/12 12 sm:w-8/12 lg:w-7/12  xl:w-5/12 h-10  md:h-14 rounded-lg bg-transparent border border-slate-300 border-solid mb-2 focus:outline-none"/>
                    <span class="flex justify-start items-center w-1/3">
                        <EyeVisibleNo class="no" @click="showPassword"/>
                        <EyeVisibleYes class="no" v-show="show"  @click="hidePassword"/>
                    </span>
                </div>  
                <div class="w-10/12 flex justify-start">
                    <label class=" font-medium font-serif text-base md:text-lg text-black">Confirm new password</label>
                </div>
                <div class="py-4 relative">
                    <input 
                    :type="visibility" 
                    v-model="newPassword" class="font-serif font-normal text-sm text-black pl-4 pr-10 sm:pr-8 md:pr-10 lg:pr-16 flex justify-start w-10/12 12 sm:w-8/12 lg:w-7/12  xl:w-5/12 h-10  md:h-14 rounded-lg bg-transparent border border-slate-300 border-solid mb-2 focus:outline-none"/>
                    <span class="flex justify-start items-center w-1/3">
                        <EyeVisibleNo class="no" @click="showPassword"/>
                        <EyeVisibleYes v-show="show" class="no"  @click="hidePassword"/>
                    </span>
                </div>  
                <div class="flex justify-start">
                    <button style="background-color: #17233C;" class="font-medium w-10/12 12 sm:w-8/12 h-10 md:h-14 lg:w-7/12  xl:w-5/12 rounded-xl text-white font-serif mt-2">Submit</button>
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
            image: require('../assets/images/Component.png'),
            createPassword: '',
            newPassword: '',
            visibility: 'password',
            show: false
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
        border: 1.13792px solid rgba(0, 0, 0, 0.72);
    }
    .no {
        position: absolute;
        right: 20%;
        top: 1.75rem;
    }  
    
    @media (min-width: 640px)  {
    .no {
        position: absolute;
        right: 35%;
        top: 1.75rem;
    }    
    } 
    @media (min-width: 768px)  {
    .no {
        position: absolute;
        right: 35%;
        top: 2.125rem;
    }    
    } 
    @media (min-width: 1024px)  {
    .no {
        position: absolute;
        right: 45%;
        top: 2.125rem;
    }    
    } 
    @media (min-width: 1300px)  {
        .no {
            position: absolute;
            right: 60%;
            top: 2.125rem;
        }    
    } 
</style>