<template>
    <div class="flex justify-end sm:justify-end sm:w-10/12 relative mt-4 sm:ml-6 md:-ml-5">
        <button class=" text-white w-9/12 sm:w-9/12 h-10 font-serif font-bold text-sm lg:text-base">Submit</button>
        <SubmitArrow class="hidden"/>
    </div>
</template>

<script>
import SubmitArrow from '../components/SubmitArrow.vue'
export default {
    components: {
        SubmitArrow     
    }
}
</script>

<style scoped>
button {
    background: #83BF4F;
    border-radius: 6px;
}
</style>