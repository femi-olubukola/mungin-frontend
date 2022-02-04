<template>
    <div class="workingProcess bg-white">
        <div class="workingProcessContent px-6 md:px-10 lg:px-16 xl:px-32 py-10 lg:py-12">
            <h1 class="font-serif font-bold text-xs text-center" :style="{color: `${textColor}`}">HOW IT WORKS</h1>
            <h2 class="text-center text-xl sm:text-3xl md:text-3xl xl:text-4xl font-medium sm:font-semibold lg:font-bold  font-serif">Working Process</h2>
            <div class=" workingProcessSecContent flex flex-col justify-center items-center mt-6">
                <div class="lg:-mt-1 xl:-mt-5 relative">
                    <div class="flex flex-col justify-center items-center md:pb-1 lg:pb-0">
                        <img class="" src="../assets/images/FieldTrial.png"/>
                    </div>
                    <FirstLine class="absolute left-64 top-7 hidden xl:block"/>
                    <div class="flex flex-col justify-center items-center lg:mt-5">
                        <h3 class="font-serif text-sm md:text-base font-medium md:font-semibold pb-2">Digital field trials</h3>
                    </div>
                    <div class="flex flex-col justify-center items-center md:pt-1.5">  
                        <p class="text-center text-xs md:text-sm font-normal md:font-medium font-serif w-10/12 sm:w-8/12 md:w-10/12 lg:w-10/12 xl:w-8/12" :style="{color: `${paragraphColor}`}">Lorem ipsum dolor sit amet, consectetur adipiscing elit.consectetur adipiscing eli</p>
                    </div>
                </div>
                <div class="md:-mt-5 lg:-mt-0 xl:-mt-3 relative xl:full">
                    <div class="flex flex-col justify-center items-center">
                        <img src="../assets/images/Munji.png"/>
                    </div>
                    <SecondLine class="absolute hidden -right-32 top-10 xl:block"/>
                    <div class="flex flex-col justify-center items-center pb-2 md:-pt-1">    
                        <h3 class="font-serif text-sm md:text-base font-semibold md:font-bold">Munji</h3>
                    </div>
                    <div class="flex flex-col justify-center items-center">   
                        <p class=" text-xs md:text-sm font-normal md:font-medium font-serif w-10/12 sm:w-8/12 md:w-10/12 lg:w-full xl:w-10/12" :style="{color: `${paragraphMidColor}`}">Lorem ipsum dolor sit amet, consectetur adipiscing elit.consectetur adipiscing eliL orem ipsum dolor sit amet, cons ectetur adipiscing elit.consectetur adipiscing eli</p>
                    </div>
                </div>
                <div class="lg:-mt-1 xl:-mt-5">
                    <div class="flex flex-col justify-center items-center md:pb-1">
                        <img src="../assets/images/SecondFieldTrial.png"/>
                    </div>
                    <div class="flex flex-col justify-center items-center pb-2 md:pb-0 lg:mt-5">      
                        <h3 class="font-serif text-sm md:text-base font-medium md:font-semibold pb-2">Digital field trials</h3>
                    </div>
                    <div class="flex flex-col justify-center items-center md:pt-1.5">       
                        <p class="text-center text-xs md:text-sm font-normal md:font-medium font-serif w-10/12 sm:w-8/12 md:w-10/12 xl:w-8/12" :style="{color: `${paragraphColor}`}">Lorem ipsum dolor sit amet, consectetur adipiscing elit.consectetur adipiscing eli</p>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
</template>

<script>
import FirstLine from '../components/FirstLine.vue'
import SecondLine from '../components/SecondLine.vue'
export default {
    data() {
        return {
            textColor: '#b8b8b8',
            paragraphColor: '#979797',
            paragraphMidColor: '#5B5B5B'
        }
    },
    components: {
        FirstLine,
        SecondLine
    }
}
</script>

<style scoped>
@media (min-width: 768px) {
        .workingProcessSecContent {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
            gap: 2rem;
        }  
    }
</style>