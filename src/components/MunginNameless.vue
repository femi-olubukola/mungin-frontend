<template>
    <div class="name flex items-center space-x-2">
        <img src="../assets/images/MunginNameless.png"/>
        <h2 class="capitalize font-bold font-serif text-xs lg:text-sm">Nameless@world.com</h2>
    </div>
</template>

<script>
export default {
    props: {
        nameLess: String,
        image: String
    }
}
</script>

<style scoped>
h2 {
    color: #83bf4f;
}
</style>