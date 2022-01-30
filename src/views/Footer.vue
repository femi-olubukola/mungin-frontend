<template>
    <div class="fixed footer">
        <div class="footer-content w-screen flex md:grid flex-col  justify-start gap-y-6 pt-4 px-6 lg:px-16 py-6">
            <div class="flex flex-col">
                <div @click="reloadPage" class="image-div cursor-pointer flex items-center h-16 mb-2 lg:mb-0 xl:mb-4">
                    <img class="image md:w-32 lg:w-36 xl:w-40" src="../assets/images/FooterLogo.png"/>
                </div> 
                <div class="w-1/2 mr-1 my-2 flex justify-start">
                    <h1 class="font-serif text-white font-semibold text-sm lg:text-base">About Us</h1>
                </div>  
                <div class="flex justify-start mb-6 md:pr-2 lg:pr-5 xl:pr-9">
                    <p class="paragraph font-serif font-light text-sm text-white lg:w-11/12">We are one of the leading companies that has made automation of We are one of the leading companies</p>
                </div>      
                <div class="w-full flex justify-start font-serif font-light text-sm text-white">
                    <p>© 2021 Name + Name. All rights reserved</p>    
                </div> 
            </div>      
            <div class="flex flex-col md:justify-center md:items-center md:pt-12 xl:pt-20 lg:w-6/12">
                <div class="w-1/2 md:w-full ml-1 my-2 flex justify-start">
                    <h1 class="font-serif text-white font-semibold text-sm lg:text-base">Quick Access</h1>
                </div>  
                <div class="w-full flex justify-start mb-6">
                    <ul class="flex flex-col items-center justify-start">
                        <li class="text-white font-serif font-normal text-sm pl-1 mb-1"><router-link to="/">Working Process</router-link><SeedSvg class="" v-if="homeLink"/></li>
                        <li class="text-white font-serif font-normal text-sm pr-6 mb-1"><router-link to="process">Our Mission</router-link><SeedSvg v-if="homeLink"/></li>
                        <li class="text-white font-serif font-normal text-sm"><router-link to="our-mission">News & Articles</router-link><SeedSvg v-if="homeLink"/></li>
                    </ul>
                </div> 
            </div>   
            <div class="flex flex-col lg:justify-center lg:pt-0 xl:pt-10">
                <div class="w-1/2 ml-1 my-2 flex justify-start">
                    <h1 class="font-serif text-white font-semibold text-sm lg:text-base">Newsletter</h1>
                </div> 
                <form class="relative">
                    <div class="ml-1 ">
                        <input v-model="email" placeholder="Email Address" class="font-serif font-normal text-sm text-black pl-4 flex justify-start  w-10/12 12 sm:w-7/12 md:w-11/12 lg:w-10/12 xl:w-9/12 h-10 lg:h-12 rounded-lg bg-white border border-slate-300 border-solid mb-2 focus:outline-none" type="name"/>
                    </div>
                    <Arrow class="absolute right-11 sm:right-56 md:right-2 lg:right-11 xl:right-24 top-0"/>
                </form>
            </div>     
        </div>
    </div>
</template>

<script>
import Arrow from '../components/Arrow.vue'
export default {
    components: {
        Arrow
    }
}
</script>

<style>
    .footer {
        background-color: #333333;
    }

    input {
        border-radius: 0px 4px 4px 0px;
    }

    @media (min-width: 375px) {
        .paragraph {
            width: 80%;
            display: flex;
            justify-content: flex-start;
        }
    }

    @media (min-width: 425px) {
        .paragraph {
            width: 70%;
            display: flex;
            justify-content: flex-start;
        }
    }

    @media (min-width: 768px) {
        .footer-content {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
            gap: 2rem;
        }  
    }
</style>