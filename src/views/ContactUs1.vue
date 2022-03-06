<template>
    <div>
        <Navigation class="nav" :style="{ backgroundColor: `${bgColor}` }"/>
        <div class="contactUs1 px-6 pt-4 sm:px-6 md:pt-6 lg:pt-8 md:px-10 lg:px-16 lg:py-4 xl:px-32">
            <div class="flex flex-row justify-between items-start">
                    <div class="flex flex-col lg:flex-row lg:items-center lg:space-x-2">
                        <div class="flex" v-if="amount">
                            <div class="resultNumber font-serif bg-white flex justify-center items-center text-xs sm:text-base h-12 w-14 lg:w-16">Show</div>
                            <div class="resultNumber font-serif bg-white flex justify-center items-center text-xs sm:text-base lg:text-lg lg:font-bold w-14 relative">10
                                <ResultNumberDropDownSvg
                                @click="isVisible = !isVisible"
                                :class=" isVisible ? 'dropdown-icon' : ' dropup-icon'" 
                                class="cursor-pointer absolute w-5 h-5 ml-2 top-6 right-3 sm:right-24 md:right-20 lg:right-40 md:top-9 xl:-right-1 xl:top-5"/>
                                <div
                                :class="isVisible ? 'visible' : 'invisible'" 
                                class="options absolute -right-4 top-8 sm:right-0 md:-right-8 lg:right-3 xl:-right-28 md:top-11 xl:top-10  sm:w-56 lg:w-72 mt-2 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    <ul class="py-8 sm:py-12 px-2.5 lg:px-4 xl:px-6 xl:py-12 md:py-11">
                                        <li 
                                        v-for="(user, index) in userArray"
                                        :key="index"
                                        @click="selectItem(user)"
                                        class="pb-2 lg:pb-3 text-black cursor-pointer font-serif font-normal flex rounded-md items-center w-full text-xs sm:text-sm lg:text-base" style="color: #fafafa">
                                        <Seed class="w-5 h-5 flex items-center mr-2 text-violet-400" aria-hidden="true"/>
                                        {{ user.number }}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div v-show="input" class="relative">
                            <input class="w-44 h-10 font-serif px-3 outline-none border-none text-xs lg:text-sm" type="text" placeholder="Search Crop State..."/>
                            <CropSearchSvg class="absolute w-2 right-9 top-3" />
                        </div>
                        <div class="functions flex mt-2 lg:mt-0 h-12 px-1 md:px-2">
                            <div 
                                class="relative flex justify-center items-center cursor-pointer" 
                                @mouseover="firsthoveredElement = true" @mouseleave="firsthoveredElement = false">
                                    <p style="color: rgba(131, 191, 79, 1);" class="font-serif font-medium lg:font-bold text-xs lg:text-sm">Export
                                    </p>
                                <ExportComponent class="absolute -left-2" v-show="firsthoveredElement"/>
                            </div>
                            <div
                                class="relative flex justify-center items-center cursor-pointer"
                                @mouseover="secondhoveredElement = true" @mouseleave="secondhoveredElement = false">
                                    <p style="color: rgba(131, 191, 79, 1);" class="font-serif font-medium lg:font-bold text-xs lg:text-sm pl-1 md:pl-2 lg:pl-3 xl:pl-4">
                                    Copy
                                    </p>
                                <CopyComponent class="absolute left-1" v-show="secondhoveredElement"/>
                            </div>
                            <div 
                            class="relative flex justify-center items-center cursor-pointer"
                                @mouseover="thirdhoveredElement = true" @mouseleave="thirdhoveredElement = false">
                                    <p style="color: rgba(131, 191, 79, 1);" class="font-serif font-medium lg:font-bold text-xs lg:text-sm pl-1 md:pl-2 lg:pl-3 xl:pl-4">
                                    Excel
                                    </p>
                                <ExcelComponent class="absolute left-2" v-show="thirdhoveredElement"/>
                            </div>
                            <div
                            class="relative flex justify-center items-center cursor-pointer"
                                @mouseover="fourthhoveredElement = true" @mouseleave="fourthhoveredElement = false">
                                    <p style="color: rgba(131, 191, 79, 1);" class="font-serif font-medium lg:font-bold text-xs lg:text-sm pl-1 md:pl-2 lg:pl-3 xl:pl-4">
                                    CSV
                                    </p>
                                <CSVComponent class="absolute left-2" v-show="fourthhoveredElement"/>
                            </div>
                            <div
                            class="relative flex justify-center items-center cursor-pointer"
                                @mouseover="fifthhoveredElement = true" @mouseleave="fifthhoveredElement = false">
                                    <p style="color: rgba(131, 191, 79, 1);" class="font-serif font-medium lg:font-bold text-xs lg:text-sm pl-1 md:pl-2 lg:pl-3 xl:pl-4">
                                    PDF
                                    </p>
                                <PDFComponent class="absolute left-2" v-show="fifthhoveredElement"/>
                            </div>
                            <div
                            class="relative flex justify-center items-center cursor-pointer"
                                @mouseover="sixthhoveredElement = true" @mouseleave="sixthhoveredElement = false">
                                    <p style="color: rgba(131, 191, 79, 1);" class="font-serif font-medium lg:font-bold text-xs lg:text-sm pl-1 md:pl-2 lg:pl-3 xl:pl-4">
                                    Print
                                    </p>
                                <PrintComponent class="absolute left-3" v-show="sixthhoveredElement"/>
                            </div>
                        </div>
                    </div>
                    <div class="relative search">
                        <SearchBtn @click="toggleInput" class="sm:hidden"/>
                        <input class="hidden outline-none sm:block w-44 sm:w-60 md:w-64 lg:w-72 xl:w-80 h-10 sm:h-12 font-serif px-3 border-none text-xs lg:text-sm" type="text" placeholder="Search Crop State..."/>
                         <CropSearchSvg class="hidden sm:block absolute w-2 right-5 top-4" />
                    </div>
            </div>
            <div class="flex items-center space-x-1">
                <h1 class="font-serif font-bold text-xl lg:text-2xl text-black">10</h1>
                <p class="mt-1 md:mt-1.5 font-serif text-xs font-medium text-black">Search result</p>
            </div>
            <div class="flex flex-col mt-4">
                <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div class="inline-block py-2 min-w-full sm:px-6 lg:px-8">
                        <div class="overflow-hidden">
                            <table class="min-w-full">
                                <thead class="">
                                    <tr class="">
                                        <th scope="col" class="flex items-center py-3 px-6 text-xs font-medium tracking-wider text-left text-black font-serif uppercase dark:text-gray-400">
                                        CROP/SETTINGS
                                        <img class="pl-1" src="../assets/svg/settingsArrow.svg"/>
                                        </th>
                                        <th scope="col" class="py-3 px-7 text-xs font-medium tracking-wider text-left text-black font-serif uppercase dark:text-gray-400">
                                        States  
                                        <img class="" src="../assets/svg/typeArrow.svg"/>
                                        </th>
                                        <th scope="col" class="flex py-3 px-6 text-xs font-medium tracking-wider text-left text-black font-serif uppercase dark:text-gray-400">
                                        Region
                                        <img class="pl-1" src="../assets/svg/typeArrow.svg"/>
                                        </th>
                                        <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-black font-serif uppercase dark:text-gray-400">
                                        Type
                                        <img class="pl-1" src="../assets/svg/typeArrow.svg"/>
                                        </th>
                                        <th scope="col" class="flex py-3 px-6 text-xs font-medium tracking-wider text-left text-black font-serif uppercase dark:text-gray-400">
                                        Year
                                        <img class="pl-1" src="../assets/svg/typeArrow.svg"/>
                                        </th>
                                        <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-black font-serif uppercase dark:text-gray-400">
                                        Version
                                        <img class="pl-1" src="../assets/svg/typeArrow.svg"/>
                                        </th>
                                        <th scope="col" class="flex py-3 px-6 text-xs font-medium tracking-wider text-left text-black font-serif uppercase dark:text-gray-400">
                                        Document
                                        <img class="pl-1" src="../assets/svg/typeArrow.svg"/>
                                        </th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr style="background-color: #fafafa;" class="h-2 -pt-2">
                                            <td style="color: #fafafa" class="hey h-1" >.</td>
                                        </tr>
                                        <tr class=" bg-white rounded-2xl even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700 dark:border-gray-600">
                                        <td style="color: rgba(131, 191, 79, 1);" class="py-4 px-6 text-sm font-serif font-bold whitespace-nowrap dark:text-white">
                                        Black Berry
                                        </td>
                                        <td class="py-4 font-serif font-semibold px-6 text-sm text-black whitespace-nowrap dark:text-gray-400">
                                        Kogi
                                        </td>
                                        <td class="py-4 px-6 font-serif font-semibold text-sm text-black whitespace-nowrap dark:text-gray-400">
                                        North Central
                                        </td>
                                        <td class="py-4 px-6 font-serif font-semibold text-sm text-blackwhitespace-nowrap dark:text-gray-400">
                                        Crop Profile
                                        </td>
                                        <td class="py-4 px-6 font-serif font-semibold text-sm text-black whitespace-nowrap dark:text-gray-400">
                                        2021
                                        </td>
                                        <td class="py-4 px-6 font-serif font-semibold text-sm text-black whitespace-nowrap dark:text-gray-400">
                                        Original
                                        </td>
                                        <td style="color: rgba(131, 191, 79, 1);" class="py-4 px-6 font-serif font-medium text-sm whitespace-nowrap dark:text-gray-400">
                                        Crop Profile For blackberry<br> In Nigeria
                                        </td>
                                        <td class="pr-2">
                                            <img src="../assets/svg/moreOption.svg"/>
                                        </td>
                                        </tr>
                                        <tr style="background-color: #fafafa;" class="h-2 -pt-2">
                                            <td style="color: #fafafa" class="hey h-1" >.</td>
                                        </tr>
                                        <tr class="bg-white rounded-2xl even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700 dark:border-gray-600">
                                        <td style="color: rgba(131, 191, 79, 1);" class="py-4 px-6 text-sm font-serif font-bold whitespace-nowrap dark:text-white">
                                        Sorghum, Grain
                                        </td>
                                        <td class="py-4 font-serif font-semibold px-6 text-sm text-black whitespace-nowrap dark:text-gray-400">
                                        Ibadan
                                        </td>
                                        <td class="py-4 font-serif font-semibold px-6 text-sm text-black whitespace-nowrap dark:text-gray-400">
                                        Northern
                                        </td>
                                        <td class="py-4 font-serif font-semibold px-6 text-sm text-black whitespace-nowrap dark:text-gray-400">
                                        Crop Profile
                                        </td>
                                        <td class="py-4 font-serif font-semibold px-6 text-sm text-black whitespace-nowrap dark:text-gray-400">
                                        2020
                                        </td>
                                        <td class="py-4 font-serif font-semibold px-6 text-sm text-black whitespace-nowrap dark:text-gray-400">
                                        Revision
                                        </td>
                                        <td style="color: rgba(131, 191, 79, 1);" class="py-4 px-6 font-serif font-medium text-sm whitespace-nowrap dark:text-gray-400">
                                            Crop Profile For blackberry<br> In Nigeria
                                        </td>
                                        <td class="pr-2">
                                            <img src="../assets/svg/moreOption.svg"/>
                                        </td>
                                        </tr>
                                        <tr style="background-color: #fafafa;" class="h-2 -pt-2">
                                            <td style="color: #fafafa" class="hey h-1" >.</td>
                                        </tr>
                                        <tr class="bg-white rounded-2xl even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700 dark:border-gray-600">
                                        <td style="color: rgba(131, 191, 79, 1);" class="py-4 px-6 text-sm font-serif font-bold whitespace-nowrap dark:text-white">
                                        Sorghum, Grain
                                        </td>
                                        <td class="py-4 font-serif font-semibold px-6 text-sm text-black whitespace-nowrap dark:text-gray-400">
                                        Ibadan
                                        </td>
                                        <td class="py-4 font-serif font-semibold px-6 text-sm text-black whitespace-nowrap dark:text-gray-400">
                                        Northern
                                        </td>
                                        <td class="py-4 font-serif font-semibold px-6 text-sm text-black whitespace-nowrap dark:text-gray-400">
                                        Crop Profile
                                        </td>
                                        <td class="py-4 font-serif font-semibold px-6 text-sm text-black whitespace-nowrap dark:text-gray-400">
                                        2020
                                        </td>
                                        <td class="py-4 font-serif font-semibold px-6 text-sm text-black whitespace-nowrap dark:text-gray-400">
                                        Revision
                                        </td>
                                        <td style="color: rgba(131, 191, 79, 1);" class="py-4 px-6 font-serif font-medium text-sm whitespace-nowrap dark:text-gray-400">
                                            Crop Profile For blackberry<br> In Nigeria
                                        </td>
                                        <td class="pr-2">
                                            <img src="../assets/svg/moreOption.svg"/>
                                        </td>
                                        </tr>
                                        <tr style="background-color: #fafafa;" class="h-2 -pt-2">
                                            <td style="color: #fafafa" class="hey h-1" >.</td>
                                        </tr>
                                        <tr class="bg-white rounded-2xl even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700 dark:border-gray-600">
                                        <td style="color: rgba(131, 191, 79, 1);" class="py-4 px-6 text-sm font-serif font-bold whitespace-nowrap dark:text-white">
                                        Sorghum, Grain
                                        </td>
                                        <td class="py-4 font-serif font-semibold px-6 text-sm text-black whitespace-nowrap dark:text-gray-400">
                                        Ibadan
                                        </td>
                                        <td class="py-4 font-serif font-semibold px-6 text-sm text-black whitespace-nowrap dark:text-gray-400">
                                        Northern
                                        </td>
                                        <td class="py-4 font-serif font-semibold px-6 text-sm text-black whitespace-nowrap dark:text-gray-400">
                                        Crop Profile
                                        </td>
                                        <td class="py-4 font-serif font-semibold px-6 text-sm text-black whitespace-nowrap dark:text-gray-400">
                                        2020
                                        </td>
                                        <td class="py-4 font-serif font-semibold px-6 text-sm text-black whitespace-nowrap dark:text-gray-400">
                                        Revision
                                        </td>
                                        <td style="color: rgba(131, 191, 79, 1);" class="py-4 px-6 font-serif font-medium text-sm whitespace-nowrap dark:text-gray-400">
                                            Crop Profile For blackberry<br> In Nigeria
                                        </td>
                                        <td class="pr-2">
                                            <img src="../assets/svg/moreOption.svg"/>
                                        </td>
                                        </tr>
                                        <tr style="background-color: #fafafa;" class="h-2 -pt-2">
                                            <td style="color: #fafafa" class="hey h-1" >.</td>
                                        </tr>
                                        <tr class="bg-white rounded-2xl even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700 dark:border-gray-600">
                                        <td style="color: rgba(131, 191, 79, 1);" class="py-4 px-6 text-sm font-serif font-bold whitespace-nowrap dark:text-white">
                                        Sorghum, Grain
                                        </td>
                                        <td class="py-4 font-serif font-semibold px-6 text-sm text-black whitespace-nowrap dark:text-gray-400">
                                        Ibadan
                                        </td>
                                        <td class="py-4 font-serif font-semibold px-6 text-sm text-black whitespace-nowrap dark:text-gray-400">
                                        Northern
                                        </td>
                                        <td class="py-4 font-serif font-semibold px-6 text-sm text-black whitespace-nowrap dark:text-gray-400">
                                        Crop Profile
                                        </td>
                                        <td class="py-4 font-serif font-semibold px-6 text-sm text-black whitespace-nowrap dark:text-gray-400">
                                        2020
                                        </td>
                                        <td class="py-4 font-serif font-semibold px-6 text-sm text-black whitespace-nowrap dark:text-gray-400">
                                        Revision
                                        </td>
                                        <td style="color: rgba(131, 191, 79, 1);" class="py-4 px-6 font-serif font-medium text-sm whitespace-nowrap dark:text-gray-400">
                                            Crop Profile For blackberry<br> In Nigeria
                                        </td>
                                        <td class="pr-2">
                                            <img src="../assets/svg/moreOption.svg"/>
                                        </td>
                                        </tr>
                                        <tr style="background-color: #fafafa;" class="h-2 -pt-2">
                                            <td style="color: #fafafa" class="hey h-1" >.</td>
                                        </tr>
                                        <tr class="bg-white rounded-2xl even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700 dark:border-gray-600">
                                        <td style="color: rgba(131, 191, 79, 1);" class="py-4 px-6 text-sm font-serif font-bold whitespace-nowrap dark:text-white">
                                        Sorghum, Grain
                                        </td>
                                        <td class="py-4 font-serif font-semibold px-6 text-sm text-black whitespace-nowrap dark:text-gray-400">
                                        Ibadan
                                        </td>
                                        <td class="py-4 font-serif font-semibold px-6 text-sm text-black whitespace-nowrap dark:text-gray-400">
                                        Northern
                                        </td>
                                        <td class="py-4 font-serif font-semibold px-6 text-sm text-black whitespace-nowrap dark:text-gray-400">
                                        Crop Profile
                                        </td>
                                        <td class="py-4 font-serif font-semibold px-6 text-sm text-black whitespace-nowrap dark:text-gray-400">
                                        2020
                                        </td>
                                        <td class="py-4 font-serif font-semibold px-6 text-sm text-black whitespace-nowrap dark:text-gray-400">
                                        Revision
                                        </td>
                                        <td style="color: rgba(131, 191, 79, 1);" class="py-4 px-6 font-serif font-medium text-sm whitespace-nowrap dark:text-gray-400">
                                            Crop Profile For blackberry<br> In Nigeria
                                        </td>
                                        <td class="pr-2">
                                            <img src="../assets/svg/moreOption.svg"/>
                                        </td>
                                        </tr>
                                    </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="flex justify-end items-center space-x-5">
                <h1 style="color: #B5B5B5;" class=" flex flex-row items-center font-serif font-medium"><img class="pr-1" src="../assets/svg/arrow-left.svg"/> Prev</h1>
                <div class="relative">
                    <h1 @mouseover="firstNumber = true" @mouseleave="firstNumber = false" class="font-serif text-base -mt-0.5 font-bold ">1</h1>
                    <div v-show="firstNumber" style="background-color: #B5b5b5; border: 0.3px solid rgba(211, 211, 211, 0.3); box-sizing: border-box; border-radius: 6px;" class="font-serif text-base font-bold  w-5 absolute -left-2 -top-0.5 flex justify-center items-center">1</div>
                </div>
                <div class="relative">
                    <h1 @mouseover="secondNumber = true" @mouseleave="secondNumber = false" class="font-serif text-base -mt-0.5 font-bold ">2</h1>
                    <div v-show="secondNumber" style="background-color: #B5b5b5; border: 0.3px solid rgba(211, 211, 211, 0.3); box-sizing: border-box; border-radius: 6px;" class="font-serif text-base font-bold  w-5 absolute -left-2 -top-0.5 flex justify-center items-center">2</div>
                </div>
                <div class="relative">
                    <h1 @mouseover="thirdNumber = true" @mouseleave="thirdNumber = false" class="font-serif text-base -mt-0.5 font-bold ">3</h1>
                    <div v-show="thirdNumber" style="background-color: #B5b5b5; border: 0.3px solid rgba(211, 211, 211, 0.3); box-sizing: border-box; border-radius: 6px;" class="font-serif text-base font-bold  w-5 absolute -left-2 -top-0.5 flex justify-center items-center">3</div>
                </div>
                <h1 class="flex flex-row items-center font-serif font-semibold">Next<img class="pl-1" src="../assets/svg/arrow-right.svg"/></h1>
            </div>
            </div>    
            
        </div>
    </div>
</template>

<script>
import Navigation from '../components/Navigation.vue'
import ResultNumberDropDownSvg from '../components/ResultNumberDropDownSvg.vue'
import CropSearchSvg from '../components/CropSearchSvg.vue'
import SearchBtn from '../components/SearchBtn.vue'
import ExportComponent from '../components/ExportComponent.vue'
import PrintComponent from '../components/PrintComponent.vue'
import ExcelComponent from '../components/ExcelComponent.vue'
import CSVComponent from '../components/CSVComponent.vue'
import CopyComponent from '../components/CopyComponent.vue'
import PDFComponent from '../components/PDFComponent.vue'
export default {
    components: {
        Navigation,
        ResultNumberDropDownSvg,
        SearchBtn,
        CropSearchSvg,
        ExportComponent,
        PDFComponent,
        PrintComponent,
        ExcelComponent,
        CSVComponent,
        CopyComponent
    },
    data() {
        return {
            bgColor: '#fafafa',
            input: null,
            amount: true,
            firsthoveredElement: false,
            secondhoveredElement: false,
            thirdhoveredElement: false,
            fourthhoveredElement: false,
            fifthhoveredElement: false,
            sixthhoveredElement: false,
            firstNumber: false,
            secondNumber: false,
            thirdNumber: false,
            selectedItem: "",
            isVisible: false,
            userArray: [
                {
                    id: 0,
                    number: '1'
                },
                {
                    id: 1,
                    number: '2'
                },
                {
                    id: 2,
                    number: '3'
                },
                {
                    id: 3,
                    number: '4'
                },
                {
                    id: 4,
                    number: '5'
                },
                {
                    id: 5,
                    region: '6'
                },
                {
                    id: 6,
                    number: '7'
                },
                {
                    id: 7,
                    number: '8'
                },
                {
                    id: 8,
                    number: '9'
                },
                {
                    id: 9,
                    number: '10'
                }
            ]
        }
    },
    methods: {
        toggleInput() {
            this.input = !this.input;
            this.amount = !this.amount;
        },
        selectItem(user) {
            this.selectedItem = user;
            this.isVisible = false;
        }
    }
}
</script>

<style scoped>
.hey {
    font-size: 0.1px;
}
.nav {
    /* background: #FAFAFA; */
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.03);
    border-bottom: 0.5px solid rgba(211, 211, 211, 0.3);
}

.contactUs1 {
    background: #fafafa;
} 

.resultNumber {
    border: 0.3px solid rgba(211, 211, 211, 0.6);
    box-sizing: border-box;
    border-radius: 2px;
}
.functions {
    background: #E5F1DA;
    border-radius: 6px 4px 4px 6px;
}

input {
    background: #FFFFFF;
    /* border: 0.4px solid rgba(211, 211, 211, 0.4); */
    box-sizing: border-box;
    border-radius: 6px;
    outline: none;
}

.hoveredElement {
    background: #83BF4F;
    border: 0.6px solid rgba(211, 211, 211, 0.6);
    box-sizing: border-box;
    box-shadow: -4px 4px 7px rgba(131, 191, 79, 0.2);
    border-radius: 3px;
}

.options {
    overflow-y: scroll;
    visibility: hidden;
    transition: all 0.3s linear;
    overflow: hidden;
}

.visible {
    visibility: visible;
}

@media (max-width: 640px) {
    .search {
        display: hidden;
    }
}
</style>