<template>
    <div>
        <Navigation class="nav" :style="{ backgroundColor: `${bgColor}` }"/>
        <div class="contactUs1 px-6 pt-4 sm:px-6 md:pt-6 md:px-10 lg:px-16 lg:py-4 xl:pl-32">
            <div class="flex flex-row justify-between items-start">
                    <div class="flex flex-col lg:flex-row lg:items-center lg:space-x-2">
                        <div class="flex" v-if="amount">
                            <div class="resultNumber font-serif bg-white flex justify-center items-center text-xs sm:text-base h-12 w-14">Show</div>
                            <div class="resultNumber font-serif bg-white flex justify-center items-center text-xs sm:text-base w-14">10<ResultNumberDropDownSvg/></div>
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
                            class="relative flex justify-center items-center"
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
                        <input class="hidden sm:block w-44 md:w-56 lg:w-64 h-10 sm:h-12 font-serif px-3 outline-none border-none text-xs lg:text-sm" type="text" placeholder="Search Crop State..."/>
                         <CropSearchSvg class="hidden sm:block absolute w-2 right-5 top-4" />
                    </div>
            </div>
            <div class="flex items-center space-x-1">
                <h1 class="font-serif font-bold text-xl lg:text-2xl text-black">10</h1>
                <p class="mt-1 md:mt-1.5 font-serif text-xs font-medium text-black">Search result</p>
            </div>
            <div class="flex flex-col">
                <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div class="inline-block py-2 min-w-full sm:px-6 lg:px-8">
                        <div class="overflow-hidden shadow-md sm:rounded-lg">
                            <table class="min-w-full">
                                <thead class="">
                                    <tr>
                                        <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
CROP/SETTINGS
</th>
<th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
Color
</th>
<th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
Category
</th>
<th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
Price
</th>
<th scope="col" class="relative py-3 px-6">
<span class="sr-only">Edit</span>
</th>
</tr>
</thead>
<tbody>

<tr class="border-b odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700 dark:border-gray-600">
<td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
Apple MacBook Pro 17"
</td>
<td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
Sliver
</td>
<td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
Laptop
</td>
<td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
$2999
</td>
<td class="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
<a href="#" class="text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
</td>
</tr>

<tr class="border-b odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700 dark:border-gray-600">
<td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
Apple Imac 27"
</td>
<td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
White
</td>
<td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
 Desktop Pc
</td>
<td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
$1999
</td>
<td class="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
<a href="#" class="text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
</td>
</tr>

<tr class="border-b odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700 dark:border-gray-600">
<td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
iPhone 13 Pro
</td>
<td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
White
</td>
<td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
Phone
</td>
<td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
$999
</td>
<td class="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
<a href="#" class="text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
</td>
</tr>

<tr class="border-b odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700 dark:border-gray-600">
<td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
Apple Magic Mouse 2
</td>
<td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
White
</td>
<td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
Accessories
</td>
<td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
$99
</td>
<td class="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
<a href="#" class="text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
</td>
</tr>

<tr class="border-b odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700 dark:border-gray-600">
<td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
Apple Watch Series 7
</td>
<td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
Pink
</td>
<td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
Accessories
</td>
<td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
$599
</td>
<td class="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
<a href="#" class="text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
 </td>
</tr>
</tbody>
</table>
</div>
</div>
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
        }
    },
    methods: {
        toggleInput() {
            this.input = !this.input;
            this.amount = !this.amount;
        }
    }
}
</script>

<style scoped>
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
}

.hoveredElement {
    background: #83BF4F;
    border: 0.6px solid rgba(211, 211, 211, 0.6);
    box-sizing: border-box;
    box-shadow: -4px 4px 7px rgba(131, 191, 79, 0.2);
    border-radius: 3px;
}

@media (max-width: 640px) {
    .search {
        display: hidden;
    }
}
</style>