<template>
    <div class="cropProfile">
        <Navigation class="nav"/>
        <!-- <div class="cropProfile-content px-6 pt-4 sm:px-6 md:pt-6 lg:pt-8 md:px-10 lg:px-16 lg:py-4 xl:px-32"> -->
        <div class="cropProfile-content w-screen relative">
            <div class="flex w-screen overscroll-x-none">    
                <aside class="w-52 lg:h-screen hidden lg:block relative" v-show="showcropProfile">
                    <ShowCropProfileText @click="togglecropProfile" class="absolute -right-4 top-7"/>
                    <div class="py-4 lg:py-8 px-4 bg-black dark:bg-gray-800">
                        <ul class="space-y-2 lg:space-y-3">
                            <li>
                                <div class="flex px-2 items-center text-base font-normal text-gray-900 rounded-lg dark:hover:bg-gray-700">
                                    <img src="../assets/svg/seed-outline.svg"/>
                                        <span class="ml-2 text-white font-normal font-sans">Crop Data</span>
                                </div>
                            </li>
                            <li>
                                <div class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <img src="../assets/svg/house-2.svg"/>
                                        <span class="text-white ml-3 font-medium font-sans">Home</span>
                                </div>
                            </li>
                            <li>
                                <div class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <img src="../assets/svg/setting-2.svg"/>
                                        <span class="text-white ml-3 font-medium font-sans">Source</span>
                                </div>
                            </li>
                            <li>
                                <div class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <img src="../assets/svg/background.svg"/>
                                        <span class="text-white ml-3 font-medium font-sans">Crop/Settings</span>
                                </div>
                            </li>
                            <li>
                                <div class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <img src="../assets/svg/flag-2.svg"/>
                                        <span class="text-white ml-3 font-medium">Background</span>
                                </div>
                            </li>
                            <li>
                                <div class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <img src="../assets/svg/people.svg"/>
                                        <span class="text-white flex-1 ml-3 whitespace-nowrap">Workers Activities</span>
                                </div>
                            </li>
                            <li>
                                <div class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <img src="../assets/svg/book.svg"/>
                                        <span class="text-white flex-1 ml-3 whitespace-nowrap">Production Practice</span>
                                </div>
                            </li>
                            <li>
                                <div class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <img src="../assets/svg/global-search.svg"/>
                                        <span class="text-white flex-1 ml-3 whitespace-nowrap">Production Countries</span>
                                </div>
                            </li>
                            <li>
                                <div class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <img src="../assets/svg/judge.svg"/>
                                        <span class="text-white flex-1 ml-3 whitespace-nowrap">Production Facts</span>
                                </div>
                            </li>
                            <li>
                                <div class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <img src="../assets/svg/pet.svg"/>
                                        <span class="text-white flex-1 ml-3 whitespace-nowrap">Pests</span>
                                </div>
                            </li>
                            <li>
                                <div class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <img src="../assets/svg/milk.svg"/>
                                        <span class="text-white flex-1 ml-3 whitespace-nowrap">Biological Controls</span>
                                </div>
                            </li>
                            <li>
                                <div class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <img src="../assets/svg/signpost.svg"/>
                                        <span class="text-white flex-1 ml-3 whitespace-nowrap">Cultural Controls</span>
                                </div>
                            </li>
                            <li>
                                <div class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <img src="../assets/svg/like.svg"/>
                                        <span class="text-white flex-1 ml-3 whitespace-nowrap">Physical Controls</span>
                                </div>
                            </li>
                            <li>
                                <div class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <img src="../assets/svg/filter-search.svg"/>
                                        <span class="text-white flex-1 ml-3 whitespace-nowrap">Chemical Controls</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </aside>
                <aside  v-show="cropProfile" class="w-20 absolute left-0" >
                    <HideCropProfileText @click="togglecropProfile" class="absolute -right-4 top-7"/>
                    <div class="py-4 lg:py-8 bg-black dark:bg-gray-800">
                        <ul class="space-y-2 lg:space-y-3">
                            <li>
                                <div class=" text-base font-normal text-gray-900 rounded-lg dark:hover:bg-gray-700">
                                    <img src="../assets/svg/seed-outline.svg"/>
                                </div>
                            </li>
                            <li>
                                <div class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <img src="../assets/svg/house-2.svg"/>
                                </div>
                            </li>
                            <li>
                                <div class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <img src="../assets/svg/setting-2.svg"/>
                                </div>
                            </li>
                            <li>
                                <div class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <img src="../assets/svg/background.svg"/>
                                </div>
                            </li>
                            <li>
                                <div class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <img src="../assets/svg/flag-2.svg"/>
                                </div>
                            </li>
                            <li>
                                <div class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <img src="../assets/svg/people.svg"/>
                                </div>
                            </li>
                            <li>
                                <div class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <img src="../assets/svg/book.svg"/>
                                </div>
                            </li>
                            <li>
                                <div class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <img src="../assets/svg/global-search.svg"/>
                                </div>
                            </li>
                            <li>
                                <div class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <img src="../assets/svg/judge.svg"/>
                                </div>
                            </li>
                            <li>
                                <div class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <img src="../assets/svg/pet.svg"/>
                                </div>
                            </li>
                            <li>
                                <div class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <img src="../assets/svg/milk.svg"/>
                                </div>
                            </li>
                            <li>
                                <div class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <img src="../assets/svg/signpost.svg"/>
                                </div>
                            </li>
                            <li>
                                <div class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <img src="../assets/svg/like.svg"/>
                                </div>
                            </li>
                            <li>
                                <div class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <img src="../assets/svg/filter-search.svg"/>
                                </div>
                            </li>
                        </ul>
                    </div>
                </aside>
                <!-- <div class="px-6 pt-4 sm:py-4 pl-4"> -->
                <div class="w-full px-6  pt-4 sm:py-4">
                    <div class="h1 w-11/12">
                        <h1 class="font-semibold lg:font-bold text-sm lg:text-base xl:text-lg font-sans">Crop Profile for Blackberry in North Carolina</h1>
                    </div>
                    <div class="sourcesDiv sm:w-full mt-2 sm:mt-4 md:mt-6 px-2 flex items-center text-white font-sans font-medium md:font-semibold lg:font-extrabold h-8 md:h-10 lg:h-12">Sources</div>
                    <div class="flex flex-col mt-2 lg:mt-4" >
                        <div 
                            class="flex items-center space-x-2 sm:space-x-6"
                            v-for="title in content"
                            :key="title.id"
                            :label="title.label"
                            :content="title.content">
                            <div class="mt-1 sm:mt-2 w-3/12 md:w-2/12">
                                <label :style="{  color: `${labelColor}`}" class=" p-0.5 font-semibold font-sans text-sm lg:text-base">{{ title.label }}</label>
                            </div>
                            <div class="mt-1 sm:mt-2 w-9/12">
                                <p :style="{  color: `${color}`}" class="text-sm p-0.5 font-sans font-normal lg:text-base">{{ title.content }}</p>
                            </div>
                        </div>
                    </div>
                    <div class="sourcesDiv2 sm:w-full mt-2 sm:mt-4 md:mt-6 px-2 flex items-center text-white font-sans font-medium md:font-semibold lg:font-extrabold h-8 md:h-10 lg:h-12">Crop Settings</div>
                    <div class="mt-3">
                        <h1 class="font-sans font-semibold text-sm lg:text-base">Description</h1>
                    </div>
                    <div class="w-full xl:w-full pr-4 mt-2 lg:mt-3">
                        <p class="w-full font-sans text-base font-medium lg:font-bold" :style="{  color: `${color}`}">The caneberry industry has undergone significant growth in the southern United States in the past decade. The development of shipping-quality, fresh market blackberry cultivars, along with recognition of the health benefits associated with eating berries, have facilitated the phenomenal increase in the production of blackberries throughout the southern region of the US. Since the early 2000's, the acreage devoted to caneberries has increased throughout the southern United States in all grower categories:

                            small-scale (less than 1acre farms) for local and pick-your-own (PYO) sales
                            medium-scale (between 1-10) for local sales and PYO
                            large-scale (farms with 10 or more acres that produce blackberry for wholesale marketing)
</p>
                    </div>
                </div>
            </div>    
        </div>
    </div>
</template>

<script>
import Navigation from '../components/Navigation.vue'
import ShowCropProfileText from '../components/ShowCropProfileText.vue'
import HideCropProfileText from '../components/HideCropProfileText.vue'

export default {
    components: {
        Navigation,
        ShowCropProfileText,
        HideCropProfileText
    },
    data() {
        return {
            color: '#333333',
            labelColor: '#444444',
            cropProfile: false,
            showcropProfile: true,
            content: [
                {
                    id: 0,
                    label: 'Title:',
                    content: 'Crop profile for blackberry in north carolina'
                },
                {
                    id: 1,
                    label: 'Report URL:',
                    content: '-'
                },
                {
                    id: 2,
                    label: 'Type:',
                    content: 'Crop Profile'
                },
                {
                    id: 3,
                    label: 'Source Date:',
                    content: '03/11/2021'
                },
                {
                    id: 4,
                    label: 'Settings:',
                    content: 'Blackberry'
                },
                {
                    id: 5,
                    label: 'Region:',
                    content: 'North Central'
                },
                {
                    id: 6,
                    label: 'States:',
                    content: 'Kogi'
                },
                {
                    id: 7,
                    label: 'Contacts:',
                    content: 'Gina dele, North kogi State University, gina_fernandez@ncsu.edu, (+234) 513-7416'
                }
            ]
        }
    },
    methods: {
        togglecropProfile() {
            this.cropProfile = !this.cropProfile;
            this.showcropProfile = !this.showcropProfile;
        }
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&display=swap');
body, html, span {
    font-family: 'Lato';
}

.nav {
    background: #FAFAFA;
    border: 0.5px solid rgba(211, 211, 211, 0.3);
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.03);
}

.sourcesDiv,
.sourcesDiv2 {
    background: linear-gradient(187.54deg, #6EA93E 84.27%, rgba(110, 169, 62, 0) 168.1%);
    opacity: 0.9;
    filter: drop-shadow(0px 2px 6px rgba(0, 0, 0, 0.1));
    border-radius: 4px;
}

label {
    background: #E5F5E6;
    /* border: 0.2px solid rgba(211, 211, 211, 0.3); */
    box-sizing: border-box;
    border-radius: 1px;
}

.line {
    border-bottom:  0.2px solid rgba(211, 211, 211, 0.3);
}
</style>