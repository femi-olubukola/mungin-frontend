<template>
    <div :style="{ backgroundImage: `url(${image})` }" class=" h-40 w-2/12 lg:h-56 lg:w-4/12 bg-cover bg-center flex justify-center items-center">
        <div class="flex flex-col justify-center items-center">
            <img src="../assets/images/Thumb.png" class="mb-4 flex justify-center"/>
            <h1 class="w-1/2 font-serif text-xs lg:text-lg font-bold text-center flex justify-center">congratulations youve been added to the waiting list</h1>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            image: require('../assets/images/PopUp.png')
        }
    }
}
</script>

<style scoped>
h1 {
    color:  #83BF4F;
}
</style>