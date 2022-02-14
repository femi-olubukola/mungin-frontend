<template>
    <div class="our-mission" :style="{ backgroundColor: `${bgColor}` }">
        <div class="our-mission-content px-6 md:px-10 lg:px-16 xl:px-32 py-10 lg:py-20 xl:py-24">
            <div class="flex justify-center items-center mb-4">
                <img src="../assets/images/OurMission.png"/>
            </div>
            <div class="sm:flex sm:justify-center">
                <p :style="{color: `${paragraphColor}`}" class="text-center font-serif font-normal text-xs md:text-sm sm:w-8/12 lg:w-6/12 xl:w-5/12">Lorem ipsum dolor sit amet, consectetur adipiscing elit.consectetur adipiscing elit consectetur adipiscing elit.</p>
            </div>
            <div class="our-mission-main-content relative flex flex-col justify-center items-center sm:mt-6 lg:mt-10">
                <TreeSvg class="TreeSvg absolute left-1/3 top-12 hidden lg:block"/>
                <div class="lg:flex lg:flex-row lg:space-x-72"> 
                    <div class="">
                        <div class="relative flex lg:block flex-col justify-center lg:justify-start items-center md:pb-1 lg:pb-0">
                            <img @mouseover="upHere = true" @mouseleave="upHere = false" src="../assets/images/OurMissionLogo.png"/>
                            <img v-show="upHere" class="absolute -top-2.5 -left-0.5" src="../assets/images/Munji.png"/>
                            <FirstMissionSvg class="absolute hidden lg:block -right-16 top-10"/>
                        </div>
                        <div class="flex lg:block flex-col justify-center lg:justify-start items-center pb-2 lg:pb-0 md:-pt-1 lg:ml-7">    
                            <h3 class="font-serif text-sm md:text-base  font-semibold md:font-bold">Digital Field Trials</h3>
                        </div>
                        <div class="flex lg:block flex-col justify-center items-center  md:pt-1.5 lg:pt-0 lg:pl-7 xl:pl-7">       
                            <p class="text-center lg:text-left text-xs md:text-sm font-normal md:font-medium font-serif w-10/12 sm:w-8/12 md:w-8/12 lg:w-full xl:w-full" :style="{color: `${paragraphColor}`}">Digitizing agronomic research and field trials including planning, governance, data collection, analysis, and more.</p>
                        </div>
                    </div>
                    <div class="">
                        <div class="relative flex lg:block flex-col justify-center items-center md:pb-1 lg:pb-0 lg:pr-2">
                            <img @mouseover="upFirstHere = true" @mouseleave="upFirstHere = false" src="../assets/images/OurMissionLogo.png"/>
                            <img v-show="upFirstHere" class="absolute -top-2.5 -left-0.5" src="../assets/images/Munji.png"/>
                            <SecondMissionSvg class="absolute hidden lg:block -left-9 top-8"/>
                        </div>
                        <div class="flex lg:block flex-col justify-center items-center pb-2 lg:pb-0 lg:ml-7">    
                            <h3 class="font-serif text-sm md:text-base font-semibold md:font-bold">Data Insights and Predictive Models</h3>
                        </div>
                        <div class="flex lg:block flex-col justify-center items-center md:pt-1.5 lg:pt-0 lg:pl-7">       
                            <p class="text-center lg:text-left text-xs md:text-sm font-normal md:font-medium font-serif w-10/12 sm:w-8/12 md:w-8/12 lg:w-full xl:w-11/12" :style="{color: `${paragraphColor}`}">Leveraging Axiom with deep agronomical knowledge and advanced data science for high-quality, credible data, and agriculture predictive modeling.</p>
                        </div>
                    </div>
                </div>
                <div class="lg:flex flex-row lg:space-x-52 lg:mt-6">
                    <div class="">
                        <div class="relative flex lg:block flex-col justify-center items-center md:pb-1 lg:pb-0">
                            <img @mouseover="upSecHere = true" @mouseleave="upSecHere = false" src="../assets/images/OurMissionLogo.png"/>
                            <img v-show="upSecHere" class="absolute -top-2.5 -left-0.5" src="../assets/images/Munji.png"/>
                            <ThirdMissionSvg class="absolute hidden lg:block -right-1 top-0"/>
                        </div>
                        <div class="flex lg:block flex-col justify-center items-center pb-2 lg:pb-0 md:-pt-1 lg:pt-0 lg:ml-7">    
                            <h3 class="font-serif text-sm md:text-base font-semibold md:font-bold">Crop nutrition digital platform</h3>
                        </div>
                        <div class="flex lg:block flex-col justify-center items-center md:pt-1.5 lg:pt-0 lg:pl-7">       
                            <p class="text-center lg:text-left text-xs md:text-sm font-normal md:font-medium font-serif w-10/12 sm:w-8/12 md:w-8/12 lg:w-full xl:w-11/12" :style="{color: `${paragraphColor}`}">Creating clear sustainable impact by leveraging Axiom’s core technology and data insights to lead the crop nutrition revolution with a digital support system that drives nutrition optimization.</p>
                        </div>
                    </div>
                    <div class="">
                        <div class="relative flex lg:block flex-col justify-center items-center md:pb-1 lg:pb-0">
                            <img @mouseover="upThirdHere = true" @mouseleave="upThirdHere = false" src="../assets/images/OurMissionLogo.png"/>
                            <img v-show="upThirdHere" class="absolute -top-2.5 -left-0.5" src="../assets/images/Munji.png"/>
                            <FourthMissionSvg class="absolute hidden lg:block -left-7 top-10"/>
                        </div>
                        <div class="flex lg:block flex-col justify-center items-center pb-2 lg:pb-0 md:-pt-1 lg:-pt-0 lg:ml-6 xl:ml-8">    
                            <h3 class="font-serif text-sm md:text-base font-semibold md:font-bold">Axiom Open</h3>
                        </div>
                        <div class="flex lg:block flex-col justify-center items-center md:pt-1.5 lg:pt-0 lg:ml-6 xl:ml-8">       
                            <p class="text-center lg:text-left text-xs md:text-sm font-normal md:font-medium font-serif w-10/12 sm:w-8/12 md:w-8/12 lg:w-full xl:w-11/12" :style="{color: `${paragraphColor}`}">An open platform with untapped high quality agronomic standardized data which is uploaded by our partners and openly shared with Ag professionals worldwide to promote research using more accurate data.</p>
                        </div>
                    </div>
                </div>
                <div class="lg:flex flex-row lg:space-x-56  lg:mt-6">
                    <div class="">
                        <div class="relative flex lg:block flex-col justify-center items-center md:pb-1 lg:pb-0">
                            <img @mouseover="upFourthHere = true" @mouseleave="upFourthHere = false" src="../assets/images/OurMissionLogo.png"/>
                            <img v-show="upFourthHere" class="absolute -top-2.5 -left-0.5" src="../assets/images/Munji.png"/>
                            <FifthMissionSvg class="absolute hidden lg:block -right-3 top-0"/>
                        </div>
                        <div class="flex lg:block flex-col justify-center items-center pb-2 lg:pb-0 md:-pt-1 lg:pt-0 lg:ml-7">    
                            <h3 class="font-serif text-sm md:text-base font-semibold md:font-bold">Crop nutrition digital platform</h3>
                        </div>
                        <div class="flex lg:block flex-col justify-center items-center md:pt-1.5 lg:pt-0 lg:pl-7">       
                            <p class="text-center lg:text-left text-xs md:text-sm font-normal md:font-medium font-serif w-10/12 sm:w-8/12 md:w-8/12 lg:w-full xl:w-11/12" :style="{color: `${paragraphColor}`}">Creating clear sustainable impact by leveraging Axiom’s core technology and data insights to lead the crop nutrition revolution with a digital support system that drives nutrition optimization.</p>
                        </div>
                    </div>
                    <div class="">
                        <div class="flex relative lg:block flex-col justify-center items-center md:pb-1 lg:pb-0">
                            <img @mouseover="upFifthHere = true" @mouseleave="upFifthHere = false" src="../assets/images/OurMissionLogo.png"/>
                            <img v-show="upFifthHere" class="absolute -top-2.5 -left-0.5" src="../assets/images/Munji.png"/>
                            <SixthMissionSvg class="absolute hidden lg:block -left-9 top-0"/>
                        </div>
                        <div class="flex lg:block flex-col justify-center items-center pb-2 lg:pb-0 md:-pt-1 lg:-pt-0 lg:ml-5 xl:ml-7">    
                            <h3 class="font-serif text-sm md:text-base font-semibold md:font-bold">Axiom Open</h3>
                        </div>
                        <div class="flex lg:block flex-col justify-center items-center md:pt-1.5 lg:pt-0 lg:ml-5 xl:ml-7">       
                            <p class="text-center lg:text-left text-xs md:text-sm font-normal md:font-medium font-serif w-10/12 sm:w-8/12 md:w-8/12 lg:w-full xl:w-11/12" :style="{color: `${paragraphColor}`}">An open platform with untapped high quality agronomic standardized data which is uploaded by our partners and openly shared with Ag professionals worldwide to promote research using more accurate data.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import TreeSvg from '../components/TreeSvg.vue'
import FirstMissionSvg from '../components/FirstMissionSvg.vue'
import SecondMissionSvg from '../components/SecondMissionSvg.vue'
import ThirdMissionSvg from '../components/ThirdMissionSvg.vue'
import FourthMissionSvg from '../components/FourthMissionSvg.vue'
import FifthMissionSvg from '../components/FifthMissionSvg.vue'
import SixthMissionSvg from '../components/SixthMissionSvg.vue'
export default {
    data() {
        return {
            bgColor: '#f8f8f8',
            paragraphColor: '#7D7D7D',
            upHere: false,
            upFirstHere: false,
            upSecHere: false,
            upThirdHere: false,
            upFourthHere: false,
            upFifthHere: false,

        }
    },
    components: {
        TreeSvg,
        FirstMissionSvg,
        SecondMissionSvg,
        ThirdMissionSvg,
        FourthMissionSvg,
        FifthMissionSvg,
        SixthMissionSvg
    }
}
</script>

<style scoped>
@media (min-width: 1200px) {
        .TreeSvg {
            position: absolute;
            left: 35%;
        }  
}
</style>