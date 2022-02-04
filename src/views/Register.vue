<template>
    <div class="forgot-password bg-center bg-no-repeat bg-cover" :style="{ backgroundImage: `url(${image})`}">
        <Navigation :color="color"/>
        <div class="register-content px-6 md:px-10 mt-12 py-6">
            <div class=" text-center mb-6">
                <h1 class="uppercase text-black font-serif text-lg md:text-2xl lg:text-3xl font-bold">Register</h1>
            </div>
            <div class="forgot-password-content w-full sm:w-9/12 md:w-6/12 flex justify-center sm:ml-10 md:ml-7  mr-4  mb-2">
                <h1 class=" font-medium font-serif text-sm lg:text-base text-black">Please note: all fields are required</h1>
            </div>
            <form @submit.prevent="handleSubmit" class="flex justify-center flex-col sm:ml-20 md:ml-24 xl:ml-48 sm:w-9/12 md:w-10/12 xl:w-8/12">
                <div class="w-3/12 flex justify-start ">
                    <label class=" font-medium font-serif text-base text-black">Username</label>
                </div>
                <div>
                    <input v-model="userName" class="pr-1 my-3 pl-4 font-serif font-normal text-sm text-black flex justify-start w-full sm:w-10/12 md:w-11/12 lg:w-10/12 xl:w-full h-10  md:h-14 rounded-lg bg-white border  border-solid mb-2 focus:outline-none" type="name"/>
                </div>
                <div class="w-3/12 mr-2 font-serif flex justify-start ">
                    <label class=" font-medium text-base text-black">Phonenumber</label>
                </div>
                <div>
                    <input v-model="phoneNumber" class="pr-1 my-3 font-serif font-normal text-sm text-black pl-4  flex justify-start  w-full sm:w-10/12 md:w-11/12 lg:w-10/12 xl:w-full  h-10  md:h-14 rounded-lg bg-transparent border border-slate-300 border-solid mb-2 focus:outline-none" type="email"/>
                </div>
                <div class="w-3/12 font-serif">
                    <label class=" font-medium text-base text-black flex justify-start ">Occupation</label>
                </div>
                <div>
                    <input v-model="occupation" class="pr-1 my-3 font-serif font-normal text-sm text-black pl-4 flex justify-start  w-full sm:w-10/12 md:w-11/12 lg:w-10/12  xl:w-full h-10  md:h-14 rounded-lg bg-transparent border border-slate-300 border-solid mb-2 focus:outline-none" type="number"/>
                </div>
                <div class="w-8/12 font-serif">
                    <label class=" font-medium text-base text-black flex justify-start ">Email</label>
                </div>
                <div>
                    <input v-model="email" class="pr-1 my-3 font-serif font-normal text-sm text-black pl-4 flex justify-start  w-full 12 sm:w-10/12 md:w-11/12 lg:w-10/12 xl:w-full h-10  md:h-14 rounded-lg bg-transparent border border-slate-300 border-solid mb-2 focus:outline-none" type="name"/>
                </div>
                <div class="w-8/12 font-serif">
                    <label class=" font-medium text-base text-black flex justify-start ">Region</label>
                </div>
                <div  class="relative">
                    <input v-model="region" class="pr-1 my-3 font-serif font-normal text-sm text-black pl-4 flex justify-start w-full  sm:w-10/12 md:w-11/12 lg:w-10/12 xl:w-full h-10  md:h-14 rounded-lg bg-transparent border border-slate-300 border-solid mb-2 focus:outline-none" type="name"/>
                    <DropDown class="dropdown absolute right-1 sm:right-20 md:right-14 lg:right-36 top-3 md:top-5 "/>
                </div>
                <div class="w-8/12 font-serif">
                    <label class=" font-medium text-base text-black flex justify-start ">State</label>
                </div>
                <div>
                    <input v-model="state" class="pr-1 my-3 font-serif font-normal text-sm text-black pl-4 flex justify-start w-full  sm:w-10/12 md:w-11/12 lg:w-10/12 xl:w-full h-10  md:h-14 rounded-lg bg-transparent border border-slate-300 border-solid mb-2 focus:outline-none" type="name"/>
                </div>
                <div class="w-8/12 font-serif">
                    <label class=" font-medium text-base text-black flex justify-start ">Password</label>
                </div>
                <div>
                    <input v-model="password" class="pr-1 my-3 font-serif font-normal text-sm text-black pl-4 flex justify-start w-full  sm:w-10/12 md:w-11/12 lg:w-10/12 xl:w-full h-10  md:h-14 rounded-lg bg-transparent border border-slate-300 border-solid mb-2 focus:outline-none" type="name"/>
                </div>
                <div class="w-full sm:w-10/12 md:w-11/12 lg:w-10/12 xl:w-8/12 flex justify-start mb-8">
                    <h1 class=" font-medium font-serif text-sm text-black">At least 8 characters (and up to 100 characters),5 or more unique characters and must contain at least 3 of the following: uppercase,lowercase,numeric, or special characters. The allowed special characters are ~ ! @ # $ % ^ * - _ = + : , . ?  [no spaces allowed</h1>
                </div>
                <div class="flex relative mb-4">
                    <button style="background-color: #17233C;" class="font-medium w-full 12  sm:w-10/12 md:w-11/12 h-10 md:h-14 lg:w-10/12 xl:w-full rounded-xl text-white font-serif mt-2">Submit</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import Navigation from '../components/Navigation.vue'
import DropDown from '../components/DropDown.vue'
export default {
    data() {
        return {
            image: require('../assets/images/Registerbg.png'),
            color: '525252',
            userName: '',
            phoneNumber: '',
            occupation: '',
            email: '',
            region: '',
            state: '',
            password: ''
        }
    },
    components: {
        Navigation,
        DropDown
    },
    methods: {
        handleSubmit() {
            let data = {
                Username: this.userName,
                Phonenumber: this.phoneNumber,
                Occupation: this.occupation,
                Email: this.email,
                Region: this.region,
                State: this.state,
                password: this.password,
            };
            console.log(data)
            this.userName = '';
            this.phoneNumber = '';
            this.occupation = '';
            this.email = '';
            this.region = '';
            this.state = '';
            this.password = '';
        }
    }        
}
</script>

<style  scoped>
input {
        box-shadow: -5px 1px 20px rgba(0, 0, 0, 0.35);
    }

    @media (min-width: 1200px) {
        form {
            margin-left: 11.75rem;
        }

        .dropdown {
            position: absolute;
            right: 11rem;
        }
    }
    @media (min-width: 1250px) {
        form {
            margin-left: 12.5rem;
        }
    }

    @media (min-width: 1280px) {
        form {
            margin-left: 13rem;
        }

        .dropdown {
            position: absolute;
            right: 2rem;
        }
    }

    @media (min-width: 1300px) {
        form {
            margin-left: 13.5rem;
        }
    }

    @media (min-width: 1350px) {
        form {
            margin-left: 14.3rem;
        }
    }

    @media (min-width: 1380px) {
        form {
            margin-left: 14.65rem;
        }
    }

    @media (min-width: 1400px) {
        form {
            margin-left: 14.8rem;
        }
    }
</style>