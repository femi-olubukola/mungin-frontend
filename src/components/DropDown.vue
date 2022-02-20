<template>
    <div  class="relative">
        <input 
            :value="selectedItem.region"  
            class="pr-1 my-3 font-serif font-normal text-base text-black pl-4 flex justify-start w-full  sm:w-10/12 md:w-11/12 lg:w-10/12 xl:w-full h-10  md:h-14 rounded-lg bg-transparent border border-slate-300 border-solid mb-2 focus:outline-none" type="name"/>
            <ChevronDownIcon 
            @click="isVisible = !isVisible"
            :class=" isVisible ? 'dropdown-icon' : ' dropup-icon'" 
            class="cursor-pointer absolute w-5 h-5 ml-2 xl:right-10 xl:top-8"/>
        <div 
        :class="isVisible ? 'visible' : 'invisible'" 
        class="options absolute sm:right-20 md:right-14 lg:right-36 xl:-right-28 top-3 md:top-5 xl:top-10  w-56 lg:w-72 mt-2 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <ul class="px-2.5 lg:px-4 xl:px-6 py-12 md:py-11">
                <li 
                v-for="(user, index) in userArray"
                :key="index
                "
                @click="selectItem(user)"
                class="pb-2 lg:pb-3 cursor-pointer font-serif font-normal flex rounded-md items-center w-full text-sm lg:text-base" style="color: #fafafa">
                <Seed class="w-5 h-5 flex items-center mr-2 text-violet-400" aria-hidden="true"/>
                {{ user.region }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import Seed from '../components/Seed.vue'
import ChevronDownIcon from '../components/ChevronDownIcon.vue'

export default {
    components: {
        Seed,
        ChevronDownIcon
    },
    data() {
        return {
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
    methods: {
        selectItem(user) {
            this.selectedItem = user;
            this.isVisible = false;
        }
    },
    // mounted() {
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //         .then((res) => res.json())
    //         .then((json) => {
    //             this.userArray = json;
    //         })
    // },
    // computed: {
    //     filteredUser() {
    //         const query = this.searchQuery.toLowerCase();
    //         if(this.searchQuery === "") {
    //             return this.userArray;
    //         }
    //         return this.userArray.filter((user) => {
    //             return Object.values(user).some((word) =>
    //              String(word).toLowerCase().includes(query) 
    //         );
    //         })
    //     }
    // },
   
}
</script>

<style scoped>
    input {
        box-shadow: -5px 1px 20px rgba(0, 0, 0, 0.35);
    }
    
    .options {
        background-color: rgba(131, 191, 79, 1);
        overflow-y: scroll;
        visibility: hidden;
        transition: all 0.5s linear;
        overflow: hidden;
        /* max-height: 0px; */
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
</style>