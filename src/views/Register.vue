<template>
    <div class="forgot-password bg-center bg-no-repeat bg-cover" :style="{ backgroundImage: `url(${image})`}">
        <Navigation :color="color"/>
        <div class="register-content px-6 md:px-10 mt-12 py-6">
            <div class=" text-center mb-6">
                <h1 class="uppercase text-black font-serif text-lg md:text-2xl lg:text-3xl font-bold">Register</h1>
            </div>
            <div class="forgot-password-content w-full sm:w-6/12 md:w-6/12 lg:w-6/12 xl:w-2/4 flex justify-start sm:justify-center sm:ml-11 md:ml-9 lg:-ml-3 xl:ml-9 mb-2">
                <h1 class=" font-medium font-serif text-sm lg:text-base text-black">Please note: all fields are required</h1>
            </div>
            <form @submit.prevent="handleSubmit" class="flex justify-center flex-col sm:ml-20 md:ml-24 xl:ml-48 sm:w-9/12 md:w-10/12 xl:w-8/12">
                <div class="w-3/12 flex justify-start ">
                    <label class=" font-medium font-serif text-base text-black">Username</label>
                </div>
                <div>
                    <input v-model="userName" class="pr-1 my-3 pl-4 font-serif font-normal text-base text-black flex justify-start w-full sm:w-10/12 md:w-11/12 lg:w-10/12 xl:w-full h-10  md:h-14 rounded-lg bg-white border  border-solid mb-2 focus:outline-none" type="name"/>
                </div>
                <div class="w-3/12 mr-2 font-serif flex justify-start ">
                    <label class=" font-medium text-base text-black">Phonenumber</label>
                </div>
                <div>
                    <input v-model="phoneNumber" class="pr-1 my-3 font-serif font-normal text-base text-black pl-4  flex justify-start  w-full sm:w-10/12 md:w-11/12 lg:w-10/12 xl:w-full  h-10  md:h-14 rounded-lg bg-transparent border border-slate-300 border-solid mb-2 focus:outline-none" type="tel"/>
                </div>
                <div class="w-3/12 font-serif">
                    <label class=" font-medium text-base text-black flex justify-start ">Occupation</label>
                </div>
                <div>
                    <input v-model="occupation" class="pr-1 my-3 font-serif font-normal text-base text-black pl-4 flex justify-start  w-full sm:w-10/12 md:w-11/12 lg:w-10/12  xl:w-full h-10  md:h-14 rounded-lg bg-transparent border border-slate-300 border-solid mb-2 focus:outline-none" type="text"/>
                </div>
                <div class="w-8/12 font-serif">
                    <label class=" font-medium text-base text-black flex justify-start ">Email</label>
                </div>
                <div>
                    <input v-model="email" class="pr-1 my-3 font-serif font-normal text-base text-black pl-4 flex justify-start  w-full 12 sm:w-10/12 md:w-11/12 lg:w-10/12 xl:w-full h-10  md:h-14 rounded-lg bg-transparent border border-slate-300 border-solid mb-2 focus:outline-none" type="name"/>
                </div>
                <div class="w-8/12 font-serif">
                    <label class=" font-medium text-base text-black flex justify-start ">Region</label>
                </div>
                <div  class="relative">
                    <input 
                        v-model="selectedItem.region"  
                        :disabled="validated ? disabled : ''"
                        class="pr-1 my-3 font-serif font-normal text-sm lg:text-base text-black pl-4 flex justify-start w-full  sm:w-10/12 md:w-11/12 lg:w-10/12 xl:w-full h-10  md:h-14 rounded-lg bg-transparent border border-slate-300 border-solid mb-2 focus:outline-none" type="name"/>
                    <ChevronDownIcon 
                        @click="isVisible = !isVisible"
                        :class=" isVisible ? 'dropdown-icon' : ' dropup-icon'" 
                        class="cursor-pointer absolute w-5 h-5 ml-2 top-6 right-3 sm:right-24 md:right-20 lg:right-40 md:top-9 xl:right-9 xl:top-8"/>
                    <div 
                        :style="{ backgroundImage: `url(${dropdownBg})` }"
                        :class="isVisible ? 'visible' : 'invisible'" 
                        class="options absolute bg-transparent -right-4 top-8 sm:right-0 md:-right-8 lg:right-3 xl:-right-28 md:top-11 xl:top-10  sm:w-56 lg:w-72 mt-2 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <ul class="py-8 sm:py-12 px-2.5 lg:px-4 xl:px-6 xl:py-12 md:py-11">
                            <li 
                            v-for="(user, index) in userArray"
                            :key="index"
                            @click="selectItem(user)"
                            class="pb-2 lg:pb-3 text-white cursor-pointer font-serif font-normal flex rounded-md items-center w-full text-xs sm:text-sm lg:text-base" style="color: #fafafa">
                            <Seed class="w-5 h-5 flex items-center mr-2 text-violet-400" aria-hidden="true"/>
                            {{ user.region }}
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="w-8/12 font-serif">
                    <label class=" font-medium text-base text-black flex justify-start ">State</label>
                </div>
                <div>
                    <input v-model="state" class="pr-1 my-3 font-serif font-normal text-base text-black pl-4 flex justify-start w-full  sm:w-10/12 md:w-11/12 lg:w-10/12 xl:w-full h-10  md:h-14 rounded-lg bg-transparent border border-slate-300 border-solid mb-2 focus:outline-none" type="text"/>
                </div>
                <div class="w-8/12 font-serif">
                    <label class=" font-medium text-base text-black flex justify-start ">Password</label>
                </div>
                <div>
                    <input v-model="password" class="pr-1 my-3 font-serif font-normal text-base text-black pl-4 flex justify-start w-full  sm:w-10/12 md:w-11/12 lg:w-10/12 xl:w-full h-10  md:h-14 rounded-lg bg-transparent border border-slate-300 border-solid mb-2 focus:outline-none" type="password"/>
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
import Seed from '../components/Seed.vue'
import ChevronDownIcon from '../components/ChevronDownIcon.vue'

export default {
    data() {
        return {
            image: require('../assets/images/Registerbg.png'),
            dropdownBg: require('../assets/images/dropdownBg.png'),
            color: '525252',
            userName: '',
            phoneNumber: '',
            occupation: '',
            email: '',
            validated: false,
            state: '',
            password: '',
            selectedItem: "",
            searchQ: "",
            isVisible: false,
            userArray: [
                {
                    id: 0,
                    region: 'Middle Belt (North Central)'
                },
                {
                    id: 1,
                    region: 'North West'
                },
                {
                    id: 2,
                    region: 'North East'
                },
                {
                    id: 3,
                    region: 'South West'
                },
                {
                    id: 4,
                    region: 'South East'
                },
                {
                    id: 5,
                    region: 'South South'
                },

            ]
        }
    },
    components: {
        Navigation,
        DropDown,
        Seed,
        ChevronDownIcon
    },
    methods: {
        handleSubmit() {
            let data = {
                Username: this.userName,
                Phonenumber: this.phoneNumber,
                Occupation: this.occupation,
                Email: this.email,
                Region: this.selectedItem.region,
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
            this.selectedItem = '';
        },
        selectItem(user) {
            this.selectedItem = user;
            this.isVisible = false;
        }
    }        
}
</script>

<style  scoped>
input {
        box-shadow: -5px 1px 20px rgba(0, 0, 0, 0.35);
    }
.options {
        mix-blend-mode: multiply;
        overflow-y: scroll;
        visibility: hidden;
        transition: all 0.3s linear;
        overflow: hidden;
    }

    .visible {
        visibility: visible;
    }

    .dropdown-icon {
        transform: rotate(0deg);
        transition: all 0.5s ease;
    }

    .dropup-icon {
        transform: rotate(180deg);
        transition: all 0.5s ease;
    }

    @media (min-width: 1200px) {
        form {
            margin-left: 11.75rem;
        }

        .dropup-icon,
        .dropdown-icon {
            position: absolute;
            right: 11rem
        }

        .options {
            position: absolute;
            right: 1rem;
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
        .dropup-icon,
        .dropdown-icon {
            position: absolute;
            right: 2rem;
            top: 2rem
        }

        .options {
            position: absolute;
            right: -7rem;
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