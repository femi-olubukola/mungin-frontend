<template>
    <div class="readMore bg-white">
        <Navigation class="nav" :style="{ backgroundColor: `${bgColor}` }"/>
        <div class="readMore-content px-6 py-6 sm:px-6 md:px-10 lg:px-16 lg:py-10 xl:px-32">
            <div class="flex flex-col lg:flex-row lg:justify-between" :style="{ backgroundColor: `${bgColor}` }">
                <div class="lg:w-4/12">
                    <h1 class="font-serif font-semibold text-base lg:text-lg xl:text-xl capitalize" :style="{ color: `${color}` }">News</h1>
                    <h2 class="-mt-1 md:mt-0 lg:mt-1 font-serif text-black font-semibold lg:font-bold text-lg md:text-2xl lg:text-3xl lg:w-10/12 xl:w-8/12">Crop Launching In Nigeria</h2>
                    <h3 class="md:mt-1 lg:mt-2 xl:mt-4 font-serif font-medium lg:font-semibold capitalize text-black text-xs">BY: nameless Agriculture</h3>
                    <p class="font-serif font-medium lg:font-semibold capitalize text-gray-400">23 October 2021.</p>
                    <div class="flex space-x-4 items-end h-3/5 mt-2 xl:-mt-2">
                        <h4 class="font-serif font-normal capitalize text-gray-500 text-xs">Share via</h4>
                        <div class="flex space-x-2">
                            <AntDesignLogo/>
                            <TwitterLogo/>
                            <LinkedInLogo/>
                        </div>
                    </div>
                </div>
                <div class="mt-4 lg:-mt-4 lg:w-8/12">
                    <img class="" src="../assets/images/ReadMorePic.png"/>
                    <h5 class="mt-2 font-serif font-normal text-gray-500 text-xs md:w-11/12 lg:w-10/12">This picture represents the grains Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra nisl, ut neque lectus risus senectus cursus. </h5>
                </div>
            </div>
        </div>
        <div class="bg-white px-6 py-4 lg:py-8 md:px-10 lg:px-16 xl:px-32 lg:flex lg:justify-end ">
                <p class="font-serif lg:w-2/3 xl:w-8/12" >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra nisl, ut neque lectus risus senectus cursus. Viverra sagittis in lorem magna diam vitae potenti. Lorem sagittis, adipiscing ipsum ipsum ante ac tristique et facilisis. Nunc sed montes, eget massa placerat vestibulum. Ut non aliquam mattis varius lorem.
                    <br><br>

                    Blandit sit morbi interdum sed iaculis placerat aliquam nam dictum. Morbi ullamcorper cras interdum amet, odio ut volutpat egestas. Eget urna, netus quis cras adipiscing faucibus neque. Dictumst venenatis, adipiscing at tellus. Sit vitae bibendum et, interdum augue lacus felis a a.
                    <br><br>
                    A lorem vel eu a. Ac eleifend ornare suscipit egestas. Etiam urna, natoque risus, mauris. Sollicitudin sed natoque risus pellentesque neque, sem turpis feugiat. Sapien vitae massa, aliquam sit risus nibh ullamcorper. Euismod phasellus sagittis convallis cras. Elementum nunc amet, vel justo, ut aliquam velit id. Fermentum cras at pulvinar diam pellentesque ullamcorper cursus. At orci condimentum sit justo arcu eros posuere. Pellentesque sit vel urna, et velit. Enim, convallis in semper at interdum.
                    <br><br>
                    A sagittis, felis, nisi, pellentesque. At tortor, quisque orci quis eu id faucibus feugiat dis. Sapien, odio id scelerisque sed eget pellentesque mattis elementum pulvinar. Erat aliquet nullam proin egestas in.
                    <br><br>
                    Massa proin orci mollis egestas a netus. Blandit nunc molestie elit, augue. Magnis ut turpis ullamcorper neque, sed. In eget odio sit lectus vel neque tellus id. Diam nunc porttitor vestibulum sit duis ut lectus sed. Morbi vitae sed turpis convallis tincidunt risus scelerisque tristique malesuada. 
                </p>
            </div>
        <Articles/>
        <Footer/>
    </div>
</template>

<script>
import Navigation from '../components/Navigation.vue'
import AntDesignLogo from '../components/AntDesignLogo.vue'
import TwitterLogo from '../components/TwitterLogo.vue'
import LinkedInLogo from '../components/LinkedInLogo.vue'
import Articles from '../components/Articles.vue'
import Footer from '../components/Footer.vue'
export default {
     components: {
        Navigation,
        AntDesignLogo,
        TwitterLogo,
        LinkedInLogo,
        Footer,
        Articles

    },
    data() {
        return {
            bgColor: '#fafafa',
            color: '#83bf4f'
        }
    },
    mounted() {
         window.scrollTo(0, 0)
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800&display=swap');
.readMore {
    background-color: #fafafa;
}
.nav {
    background: #FFFFFF;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.03);
}
p {
    font-family: 'Montserrat';
}
</style>