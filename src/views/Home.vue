<template>
    <div class="home h-screen join-waiting-list bg-center bg-cover " :style="{ backgroundImage: `url(${image})` }">
        <Navigation :color="color"/>
        <div class="mt-28 px-4 sm:w-7/12 md:w-9/12 lg:w-7/12 xl:w-6/12">
              <div class="text-xl sm:text-3xl md:text-3xl xl:text-4xl font-medium sm:font-semibold font-serif xl:mr-12">Growing Crop data for</div>  
              <div class="text-xl sm:text-3xl md:text-3xl  xl:text-4xl font-medium sm:font-semibold font-serif mr-6 sm:mr-10 xl:mr-24">immediate impact.</div>  
              <div class="text-sm md:text-base font-normal sm:font-medium font-serif sm:ml-4 sm:w-full md:w-10/12 md:ml-24 lg:w-10/12 lg:ml-32 xl:w-8/12 xl:ml-28">At Mungin we transform data to actionable insights that power decision making across the agricultural value chain.Delivering innovative Agtech Solutions to improve agricultural productivity in Nigeria is our ethos</div>
              <div class="flex justify-center buttons mx-auto gap-x-2 md:gap-x-4 mt-2 md:ml-8 lg:ml-16 xl:-ml-12">
                  <button class="firstButton font-serif font-medium text-sm md:text-base text-white flex justify-center items-center h-10 w-32 md:w-40 lg:w-44 rounded-lg">Search Our Database</button>
                    <router-link to="join-waiting-list">
                      <button class="secButton font-serif flex justify-center items-center font-medium text-sm md:text-base h-10 w-32 md:w-40 lg:w-44 rounded-lg">
                        Join Waiting List
                      </button>
                    </router-link>
              </div>     
        </div>
      
    </div>   
</template>

<script>
import Navigation from '../components/Navigation.vue'
import Footer from './Footer.vue'
export default {
    data() {
      return {
        image: require('../assets/images/Component.png'),
        color: 'white'
      }
    },
    components: {
      Navigation,   
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