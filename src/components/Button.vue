<template>
    <div class="button-div flex justify-end   sm:w-10/12 md:w-full lg:w-full relative mt-4 sm:ml-6 md:ml-1 lg:ml-0 lg:mt-6">
        <button class="mr-1 sm:mr-0 text-white w-9/12 md:w-9/12  h-12 font-serif font-bold text-sm lg:text-base">Submit</button>
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

@media (min-width: 640px) {
    button {
        width: 74%;
    }
}

@media (min-width: 768px) {
    button {
        width: 79%;
    }
}

@media (min-width: 1024px) {
    button {
        width: 78%;
    }
}

@media (min-width: 1200px) {
    .button-div {
       margin-top: 1.7rem;
    }

    button {
        height: 3.2rem;
        width: 81%;
    }
}

@media (min-width: 1300px) {
    button {
        width: 82%;
    }
}
</style>