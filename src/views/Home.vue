<template>
    <div>
        <div class="home h-screen join-waiting-list bg-center bg-cover " :style="{ backgroundImage: `url(${image})` }">
            <Navigation :color="color"/>
                <div class="mt-36 xl:mt-40 px-6 md:px-10 lg:px-16 xl:px-32 sm:w-7/12 md:w-9/12 lg:w-7/12 xl:w-9/12">
                <div class="text-xl sm:text-3xl md:text-3xl xl:text-4xl font-medium sm:font-semibold lg:font-bold  font-serif">Growing <span class="relative" :style="{color: `${textColor}`}">Crop<LandingPageSvg class="absolute -top-5 right-2 sm:right-5 xl:right-6 xl:-top-4"/></span> data for</div>  
                <div class="text-xl sm:text-3xl md:text-3xl  xl:text-4xl font-medium sm:font-semibold lg:font-bold font-serif mr-6 sm:mr-10">immediate impact.</div>  
                <div class="text-sm md:text-base font-normal sm:font-medium font-serif  sm:w-full mt-4 md:w-10/12 lg:w-10/12 xl:w-8/12">At Mungin we transform data to actionable insights that power decision making across the agricultural value chain.Delivering innovative Agtech Solutions to improve agricultural productivity in Nigeria is our ethos</div>
                <div class="flex  md:justify-start buttons gap-x-2 md:gap-x-4 mt-4">
                    <button class="firstButton font-serif font-medium text-sm md:text-base text-white flex justify-center items-center h-10 w-32 md:w-40 lg:w-52 rounded-lg">Search Our Database</button>
                      <router-link to="join-waiting-list">
                        <button class="secButton font-serif flex justify-center items-center font-medium text-sm md:text-base h-10 w-32 md:w-40 lg:w-52 rounded-lg">
                          Join Waiting List
                        </button>
                      </router-link>
                </div>  
                <router-link to="login">
                    <button class="firstButton mt-2 font-serif font-medium text-sm md:text-base text-white flex justify-center items-center h-10 w-32 md:w-40 lg:w-52 rounded-lg">
                        Login
                    </button>
                </router-link>   
                </div>
        </div>   
        <WorkingProcess/>
        <OurMission/>
        <Articles/>
        <Partners/>
        <Footer/>
    </div>
</template>

<script>
import Navigation from '../components/Navigation.vue'
import LandingPageSvg from '../components/LandingPageSvg.vue'
import WorkingProcess from '../components/WorkingProcess.vue'
import OurMission from '../components/OurMission.vue'
import Articles from '../components/Articles.vue'
import Partners from '../components/Partners.vue'
import Footer from '../components/Footer.vue'


export default {
    data() {
      return {
        image: require('../assets/images/Component.png'),
        color: 'white',
        textColor: '#83BF4F'
      }
    },
    components: {
      Navigation,   
      LandingPageSvg,
      WorkingProcess,
      OurMission,
      Articles,
      Partners,
      Footer
    }
}
</script>

<style scoped>
.firstButton {
    background-color: rgb(18, 18, 92);
}

.secButton {
    border: 1px solid rgb(18, 18, 92);
    color: rgb(18, 18, 92);

}

</style>