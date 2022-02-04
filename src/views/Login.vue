<template>
    <div class="login relative h-screen bg-center bg-no-repeat bg-cover" :style="{ backgroundImage: `url(${image})` }">
        <Navigation  :color="color"/>
        <div class=" px-6 sm:px-6 md:px-10 lg:pl-32 mt-16">
            <form @submit.prevent="handleSubmit" class="flex justify-start flex-col xl:-ml-4">
                <div class="w-3/12 flex justify-start mb-4 pl-4">
                    <label class=" font-medium font-serif text-base text-black">Username/Email</label>
                </div>
                <div class="pl-4">
                    <input v-model="userName" class="pl-4 font-serif font-normal text-sm text-black flex justify-start w-10/12 sm:w-8/12 lg:w-7/12 xl:w-5/12 h-10  md:h-14 rounded-lg bg-transparent border border-slate-300 border-solid mb-2 focus:outline-none" type="name/email"/>
                </div>
                <div class="w-3/12 font-serif flex justify-start mb-4 pl-4">
                    <label class=" font-medium text-base text-black">Password</label>
                </div>
                <div class="mb-4 pl-4 relative">
                    <input :type="visibility" v-model="password" class="font-serif font-normal text-sm text-black pl-4 pr-10 sm:pr-8 md:pr-10 lg:pr-16 flex justify-start w-10/12 12 sm:w-8/12 lg:w-7/12  xl:w-5/12 h-10  md:h-14 rounded-lg bg-transparent border border-slate-300 border-solid mb-2 focus:outline-none"/>
                    <span class="flex justify-start items-center w-1/3">
                        <!-- <EyeVisibleNo class="no absolute right-16 sm:right-52 md:right-60 lg:right-96 xl:right-2/4 lg:top-5 md:top-4 top-2.5" @click="showPassword"/> -->
                        <EyeVisibleNo class="no" @click="showPassword"/>
                        <EyeVisibleYes v-show="show" class="no"  @click="hidePassword"/>
                    </span>
                </div>  
                <div class="flex justify-start mb-2 pl-4">
                    <router-link to="forgot-password">
                        <h1 class="font-serif font-normal lg:font-medium text-base lg:text-lg">
                            Forgot Password?    
                        </h1>                   
                    </router-link>    
                </div>     
                <!-- <div class=""> -->
                    <button style="background-color: #17233C;" class="ml-4 font-medium w-10/12 12 sm:w-8/12 h-10 md:h-14 lg:w-7/12  xl:w-5/12 rounded-xl text-white font-serif mt-2">Login</button>        
                <!-- </div> -->
                </form>
            <div class="flex justify-start mt-2">
                <h2 class="font-serif font-normal text-base lg:text-lg">
                    Don't have an account? <router-link to="register"><span class="font-serif font-medium text-base lg:text-lg"> Sign Up</span></router-link>
                </h2>
            </div>
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
            userName: '',
            password: '',
            visibility: 'password',
            show: false,
            color: 'white'
        }
    },
    components: {
        Navigation,
        EyeVisibleNo,        
        EyeVisibleYes        
    },
    methods: {
        handleSubmit() {
            let data = {
                Username: this.userName,
                password: this.password,
            };
            console.log(data)
            this.userName = '';
            this.password = '';
        },
        showPassword() {
            this.visibility = 'text';
            this.show = !this.show;  
        },
        hidePassword() {
            this.visibility = 'password';
            this.show = !this.show;  
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
        top: 0.65rem;
    }  
    
    @media (min-width: 640px)  {
    .no {
        position: absolute;
        right: 34.5%;
        top: 0.6rem;
    }    
    } 
    @media (min-width: 768px)  {
    .no {
        position: absolute;
        right: 35%;
        top: 1.15rem;
    }    
    } 
    @media (min-width: 1024px)  {
    .no {
        position: absolute;
        right: 43%;
        top: 1.2rem;
    }    
    } 
    @media (min-width: 1300px)  {
        .no {
            position: absolute;
            right: 60%;
            top: 1.2rem;
        }    
    } 

</style>