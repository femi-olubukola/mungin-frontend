<template>
    <header :class="{ 'scrolled-nav' : scrolledNav }" class="relative transition duration-500">
    <nav>
        <div class="px-6 sm:px-6 md:px-10 lg:pl-16 lg:py-4 xl:px-32">
            <div class="nav-content flex items-center justify-between">
                <router-link to="/">
                    <div class="image-div cursor-pointer flex items-center h-16">
                        <img class="image md:w-32 lg:w-36" src="../assets/images/MUNGINLogo.png"/>
                    </div>
                </router-link>
                <div class="nav-links w-7/12 hidden xl:block" v-show="!mobile"> 
                <ul class="flex items-center">
                    <li class=" font-serif font-bold text-base mx-6 relative"><router-link to="/">Home</router-link><Seed class="absolute left-2"/></li>
                    <li @click="scrollToProcess" @mouseover="secHover = true" @mouseleave="secHover = false" class=" font-serif  font-bold text-base mx-6 relative">Process<Seed v-if="secHover"  class="absolute left-5"/></li>
                    <li @click="scrollToOurMission" @mouseover="thirdHover = true" @mouseleave="thirdHover = false" class=" font-serif font-bold text-base mx-6 relative">Our mission<Seed v-if="thirdHover" class="absolute left-7"/></li>
                    <li @click="scrollToArticles" @mouseover="fourthHover = true" @mouseleave="fourthHover = false" class=" font-serif font-bold text-base mx-6 relative">News<Seed v-if="fourthHover" class="absolute left-2"/></li>
                    <!-- <li @mouseover="fifthHover = true" @mouseleave="fifthHover = false" class=" font-serif font-bold text-base mx-6 relative" :style="{ color: `${color}` }"><router-link to="join-waiting-list">Join Waiting List</router-link><Seed v-if="fifthHover" class="absolute left-10"/></li> -->
                    </ul>       
                </div>
                <div v-show="!input" class="form hidden xl:block relative">
                        <input placeholder="Search" class="bolo w-56 font-sans bg-transparent pl-6 outline-none delay-75"/>
                        <SecSearchButton class="absolute left-0 top-0"/>
                        <SecCancelBtn @click="toggleInput" class="absolute right-0 top-0.5"/>
                    </div>
                <div v-show="input" class="form hidden xl:block">
                    <SearchBtn class="searchbutton cursor-pointer" 
                    @click="toggleInput"
                    @blur="input = true"
                    />
                    <!-- <transition 
                    enter-active-class="transition duration-100 ease-in-out"
                    enter-from-class="transform scale-95 opacity-0"
                    enter-to-class="transform scale-100 opacity-100"
                    leave-active-class="transition duration-75 ease-in-out"
                    leave-from-class="transform scale-100 opacity-100"
                    leave-to-class="transform scale-95 opacity-0">
                        <Search v-show="input" class="absolute left-0 w-9/12 -bottom-6"/>
                    </transition> -->
                    
                </div>
            </div>
            <div class="icon flex absolute items-center right-6 md:right-10 lg:right-16 top-1/4 sm:top-1/3"> 
                <img @click="toggleMobileNav" v-show="mobile" :class="{ 'icon-active': mobileNav}" class=" img w-8"   src="https://img.icons8.com/material/50/000000/menu--v1.png"/>
            </div>
            <transition name="mobile-nav">
            <ul v-show="mobileNav" class="dropdown-nav absolute w-1/2 h-screen top-0 right-0  py-4 flex flex-col gap-y-4">  
                <div class="ml-2 md:mt-1 lg:mt-3">
                <CancelSvg @click="toggleIsSelected" :class="{ 'selected' : isSelected }"/>
                </div>    
                <li class="mt-20 pl-4 font-serif font-medium text-base text-white md:text-lg lg:text-xl hover:font-bold active:font-bold hover:cursor-pointer active:cursor-pointer hover:active:ease-in-out active:ease-in-out duration-1000"><router-link to="/">Home</router-link></li>
                <li class="pl-4 font-serif font-medium text-base text-white md:text-lg lg:text-xl hover:font-bold active:font-bold active:ease-in-out hover:active:ease-in-out hover:cursor-pointer active:cursor-pointer duration-1000">Process</li>
                <li class="pl-4 font-serif font-medium text-base text-white md:text-lg lg:text-xl hover:font-bold active:font-bold active:ease-in-out hover:active:ease-in-out hover:cursor-pointer active:cursor-pointer duration-1000">Our mission</li>
                <li class="pl-4 font-serif font-medium text-base text-white md:text-lg lg:text-xl hover:font-bold active:font-bold active:ease-in-out hover:active:ease-in-out hover:cursor-pointer active:cursor-pointer duration-1000">News</li>
                <!-- <li class="font-serif font-medium text-base text-white md:text-lg lg:text-xl hover:font-bold active:font-bold active:ease-in-out hover:active:ease-in-out hover:cursor-pointer active:cursor-pointer duration-1000"><router-link to="join-waiting-list">Join Waiting List</router-link></li> -->
            </ul>
            </transition>
        </div>
    </nav>
    </header>
</template>

<script>
import CancelSvg from '../components/CancelSvg.vue'
import Seed from '../components/Seed.vue'
import SearchBtn from './SearchBtn.vue'
import Search from '../components/Search.vue'
import SecSearchButton from '../components/SecSearchButton.vue'
import SecCancelBtn from '../components/SecCancelBtn.vue'

export default {
    data() {
      return {
          isSelected: false,
          scrolledNav: null,          
          mobile: false,          
          mobileNav: null,
          windowWidth: null, 
          firstHomeLink: true,
          hover: false,
          secHover: false,
          thirdHover: false,
          fourthHover: false,
          fifthHover: false,
          input: true
        }
    },
    props: ['color'],
    components: {
        CancelSvg,
        Seed,     
        SearchBtn,
        Search,
        SecSearchButton,
        SecCancelBtn
    },
    created() {
            window.addEventListener("resize", this.checkScreen);
            this.checkScreen();
    },
    methods() {
        window.addEventListener( "scroll", this.updateScroll);
    },
     methods: { 
        toggleMobileNav() {
            this.mobileNav = !this.mobileNav;
        },
        toggleIsSelected() {
          this.mobileNav = !this.mobileNav;
        },
        updateScroll() {
            const scrollPosition = window.scrollY;
            if (scrollPosition > 50) {
                this.scrolledNav = true;
                return;
            }
                this.scrolledNav = false;
        },
        checkScreen() {
            this.windowWidth = window.innerWidth
            if (this.windowWidth <= 1280) {
                this.mobile = true;
                return; 
            }
                this.mobile = false;
                this.mobileNav = false;
                return;
        },
        reloadPage() {
            window.location.reload();
        },
        mouseOver() {
            this.homeLink = !this.homeLink;
        },
        toggleInput() {
            this.input = !this.input;
        },
        scrollToProcess() {
            window.scrollTo({
                top: 660,
                behavior: "smooth"
            })
        },
        scrollToOurMission() {
            window.scrollTo({
                top: 1050,
                behavior: "smooth"
            })
        },
        scrollToArticles() {
            window.scrollTo({
                top: 2000,
                behavior: "smooth"
            })
        }
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Raleway:wght@100;200;300;400;500;600;700;800;900&display=swap');
body{
    font-family: 'Raleway'; 
}
header {
    max-width: 100vw;
}
.dropdown-nav {
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.08); 
    background-color: #83BF4F;
}

.nav-content {
    width: 100%;
}

button {
    background-color: #17233C;
}

::placeholder {
    color: #000;
    font-family: 'Lato';
}

li:hover, 
li:active {
  font-weight: 700;
  cursor: pointer;
  transition: 0.5s ease-in-out;
}

input {
    border-bottom: 2px solid #000;
    border-radius: 0;
    
}

.bolo{
    transition: width 0.005s ease-in-out;
} 

@media (min-width: 1024px) {
    .icon { 
        top: 35%;
    }
}
</style>