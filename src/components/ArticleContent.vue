<template>
    <div class="article-content lg:flex w-9/12 sm:w-3/12  mt-6">
        <div class="">
            <img :src="image" class="w-full sm:w-full"/>
            <div class="article-content-bottom px-3 py-2 w-11/12">
                <p class="text-left text-xs md:text-sm font-normal md:font-medium font-serif mb-1 w-10/12 sm:w-8/12 md:w-8/12 lg:w-full xl:w-full" :style="{color: `${paragraphColor}`}">{{ date }}</p>
                <h3 class="font-serif text-sm md:text-base lg:text-lg  font-semibold md:font-bold mb-4">{{ header }}</h3>
                <p class="ml-0.5 text-left text-xs md:text-sm font-normal md:font-medium font-serif w-full lg:w-full xl:w-11/12" :style="{color: `${paragraphSecColor}`}">{{ description }}</p>
                <div class="flex space-x-1 items-center">
                    <button class="uppercase font-serif mt-4 lg:font-bold" :style="{color: `${buttonColor}`}">{{ button }}</button>
                    <router-link to="path">
                        <ReadMoreButtonSvg class="pt-3"/>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ReadMoreButtonSvg from '../components/ReadmoreButtonSvg.vue'
export default {
    data() {
        return {
            paragraphColor: '#83BF4F',
            paragraphSecColor: '#686666',
            buttonColor: '#83BF4F'
        }
    },
    props: ['image', 'date', 'header', 'description', 'button', 'path'],
    components: {
        ReadMoreButtonSvg
    }
}
</script>

<style scoped>
.article-content {
    filter: 
        drop-shadow(0px -8px 352px rgba(0, 0, 0, 0.05)) 
        drop-shadow(0px -3.34221px 147.057px rgba(0, 0, 0, 0.0359427)) 
        drop-shadow(0px -1.7869px 78.6238px rgba(0, 0, 0, 0.0298054)) 
        drop-shadow(0px -1.00172px 44.0759px rgba(0, 0, 0, 0.025)) 
        drop-shadow(0px -0.532008px 23.4084px rgba(0, 0, 0, 0.0201946)) 
        drop-shadow(0px -0.221381px 9.74074px rgba(0, 0, 0, 0.0140573));
        background: #FAFAFA;
        border-radius: 21.9359px 21.9359px 10.9679px 10.9679px;   
}
</style>