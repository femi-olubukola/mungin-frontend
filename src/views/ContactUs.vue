<template>
    <div class="contactUs">
        <Navigation :style="{ backgroundColor: `${bgColor}` }"/>
        <div class="contactUs-content lg:flex lg:justify-around px-6 sm:px-6 md:px-10 lg:pl-16 py-12 lg:py-16 xl:pl-32">
            <div class="hidden lg:block">
                <h1 class="font-serif text-black font-semibold text-xs lg:text-sm">Follow us on:</h1>
                <MunginNameless class="my-7"/>
                <Twitternameless class="my-7"/>
                <LinkedInNameless class="my-7"/>
                <Facebooknameless class="my-7"/>
                <InstagramNameless class="my-7"/>
                <TiktokNameless class="my-7"/>
                <NotionNameless class="my-7"/>
                <WeiboNameless class="my-7"/>
                <YoutubeNameless class="my-7"/>
            </div>
            <div class="line">

            </div>
            <div>
                <h1 class="text-center font-serif text-black font-semibold capitalize text-2xl lg:text-4xl">Contact Us</h1>   
                <p class="font-normal font-serif text-xs lg:text-sm text-center mt-2">Fill the form to make enquiries,report issues or for any other reason.</p>
                <form @submit.prevent="handleSubmit" class="flex justify-center flex-col my-4 sm:ml-20 md:ml-24 xl:ml-48 sm:w-9/12 md:w-10/12 xl:w-8/12">
                    <div class="flex items-center">
                        <div class="w-3/12 md:w-2/12 flex justify-start ">
                            <label class=" font-medium font-serif text-sm lg:text-base text-black">Email Address:</label>
                        </div>
                        <div class="ml-2 w-full sm:w-8/12">
                            <input v-model="emailAddress" :color="color" class="pr-2 my-3 pl-2 font-serif font-medium text-sm text-black flex justify-start w-full sm:w-11/12 md:w-11/12 lg:w-10/12 xl:w-full h-10 rounded-lg bg-white mb-2 focus:outline-none" placeholder="Email Address" type="email"/>
                        </div>
                    </div>
                    <div class="flex items-center">
                        <div class="w-3/12 md:w-2/12 flex justify-start ">
                            <label class=" font-medium font-serif text-sm lg:text-base text-black">Text Subject:</label>
                        </div>
                        <div class="ml-2 w-full sm:w-8/12">
                            <input v-model="textSubject" class="pr-2 my-3 pl-2 font-serif font-medium text-sm flex justify-start w-full sm:w-11/12 md:w-11/12 lg:w-10/12 xl:w-full h-10 rounded-lg bg-white mb-2 focus:outline-none" placeholder="Crop Diversity" type="name"/>
                        </div>
                    </div>
                    <div class="flex">
                        <div class="w-3/12 md:w-2/12 flex justify-start mt-3 ">
                            <label class=" font-medium font-serif text-sm lg:text-base text-black">Text Body:</label>
                        </div>
                        <div class="ml-2 w-full sm:w-8/12">
                            <textarea v-model="textSubject" class="pr-2 my-3 pl-2 py-2 font-serif font-medium text-sm flex justify-start w-full sm:w-11/12 md:w-11/12 lg:w-10/12 xl:w-full h-20 rounded-lg bg-white mb-2 focus:outline-none" placeholder="I will like to " type="message"/>
                        </div>
                    </div>
                    <Button/>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import Navigation from '../components/Navigation.vue'
import Button from '../components/Button.vue'
import MunginNameless from '../components/MunginNameless.vue'
import Twitternameless from '../components/Twitternameless.vue'
import LinkedInNameless from '../components/LinkedInNameless.vue'
import Facebooknameless from '../components/Facebooknameless.vue'
import InstagramNameless from '../components/InstagramNameless.vue'
import TiktokNameless from '../components/TiktokNameless.vue'
import NotionNameless from '../components/NotionNameless.vue'
import WeiboNameless from '../components/WeiboNameless.vue'
import YoutubeNameless from '../components/YoutubeNameless.vue'

export default {
    data() {
        return {
            bgColor: 'rgba(250, 250, 250, 1)',
            // color: 'rgba(51, 51, 51, 0.5)',
            textColor: '#333333'
        }
    },
    components: {
        Navigation,
        Button,
        MunginNameless,
        Twitternameless,
        LinkedInNameless,
        Facebooknameless,
        InstagramNameless,
        TiktokNameless,
        NotionNameless,
        WeiboNameless,
        YoutubeNameless,
    }
}
</script>

<style scoped>
p {
    color: rgba(57, 57, 57, 0.8)
}

input[type=email] {
    background: #FAFAFA;
    border-radius: 6px;
}

input[type=name] {
    background: #E5F1DA;
    border: 1px solid #FFFFFF;
    box-sizing: border-box;
    box-shadow: -2px 2px 6px rgba(0, 0, 0, 0.04), 2px -2px 6px rgba(0, 0, 0, 0.04);
    border-radius: 6px;
    color: #000;
}

::placeholder {
    color: #333333;
    font-weight: 600;
}

textarea {
    background: #FAFAFA;
    border: 0.5px solid #83BF4F;
    box-sizing: border-box;
    box-shadow: -1px 1px 6px rgba(194, 224, 169, 0.7);
    border-radius: 6px;
}

.line {
    border: 0.8px solid rgba(211, 211, 211, 0.4);
    /* transform: rotate(89.64deg); */
}
</style>