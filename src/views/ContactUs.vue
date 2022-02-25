<template>
    <div class="contactUs">
        <Navigation :style="{ backgroundColor: `${bgColor}` }"/>
        <div class="contactUs-content md:flex md:justify-between lg:justify-between px-6 sm:px-6 md:px-10 lg:pl-16 pt-8 lg:pt-16 xl:px-32">
            <div class="hidden md:block">
                <h1 class="font-serif text-black font-semibold text-xs lg:text-sm capitalize">FOLLOW US ON:</h1>
                <MunginNameless class="MunginNameless my-5 md:mt-6 lg:mt-9"/>
                <Twitternameless class="Twitternameless my-5 md:mt-6 lg:mt-9"/>
                <LinkedInNameless class="LinkedInNameless my-5 md:mt-6 lg:mt-9"/>
                <Facebooknameless class="Facebooknameless my-5 md:mt-6 lg:mt-9"/>
                <InstagramNameless class="InstagramNameless my-5 md:mt-6 lg:mt-9"/>
                <TiktokNameless class="TiktokNameless my-5 md:mt-6 lg:mt-9"/>
                <NotionNameless class="NotionNameless my-5 md:mt-6 lg:mt-8"/>
                <WeiboNameless class="WeiboNameless my-5 md:mt-6 lg:mt-8"/>
                <YoutubeNameless class="YoutubeNameless my-5 md:mt-6 lg:mt-8"/>
            </div>
            <div class="line hidden md:block md:mt-10">
            </div>
            <div class="contactUs-header md:mt-0 lg:mt-2 lg:w-8/12">
                <h1 class="text-center font-serif text-black font-semibold lg:font-extrabold capitalize text-2xl lg:text-4xl">Contact Us</h1>   
                <div class="flex justify-center">
                    <p class="font-normal font-serif text-xs lg:text-sm text-center mt-2 lg:w-8/12">Fill the form to make enquiries,report issues or for any other reason.</p>
                </div>
                <form @submit.prevent="handleSubmit" class="flex justify-center flex-col my-4 md:my-5 lg:my-7 sm:ml-20 sm:w-9/12 md:w-full md:-ml-4">
                    <div class="flex items-center">
                        <div class="label-div w-3/12 md:w-3/12 flex justify-start ">
                            <label class=" font-medium font-serif text-sm lg:text-base lg:font-semibold text-black">Email Address:</label>
                        </div>
                        <div class="ml-2 w-full sm:w-8/12 md:w-full lg:w-11/12">
                            <input 
                            v-model="emailAddress"
                            :color="color"
                            :placeholder="placeHolder"
                            class="pr-2 my-3 pl-4 font-serif font-medium text-sm text-black flex justify-start w-full sm:w-11/12 md:w-full lg:w-full xl:w-full h-12 rounded-lg bg-white mb-2 focus:outline-none" type="email"/>
                        </div>
                    </div>
                    <div class="flex items-center">
                        <div class="label-div w-3/12 md:w-3/12 flex justify-start ">
                            <label class=" font-medium font-serif text-sm lg:text-base lg:font-semibold text-black">Text Subject:</label>
                        </div>
                        <div class="ml-2 lg:ml-4 w-full sm:w-8/12 md:w-full">
                            <input 
                            v-model="textSubject"
                            :disabled="validated ? disabled : ''"
                             class="pr-2 my-3 pl-4 font-serif font-medium text-sm flex justify-start w-full sm:w-11/12 md:w-full lg:w-full xl:w-full h-12 rounded-lg bg-white mb-2 focus:outline-none" placeholder="Crop Diversity" type="name"/>
                        </div>
                    </div>
                    <div class="flex">
                        <div class="label-div w-3/12 md:w-3/12  flex justify-start mt-3 ">
                            <label class=" font-medium font-serif text-sm lg:text-base lg:font-semibold text-black">Text Body:</label>
                        </div>
                        <div class="ml-2 lg:ml-4 w-full sm:w-8/12 md:w-full">
                            <textarea v-model="textBody" class="pr-2 my-3 pl-4 py-2 font-serif font-medium text-sm flex justify-start w-full sm:w-11/12 md:w-full lg:w-full xl:w-full h-20 md:h-32 lg:h-40 rounded-lg bg-white mb-2 focus:outline-none" placeholder="I will like to " type="message"/>
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
            color: 'rgba(51, 51, 51, 0.5)',
            textColor: '#333333',
            validated: false,
            emailAddress: '',
            textSubject: '',
            textBody: ''
        }
    },
    computed: {
        placeHolder() {
            return "Email Address";
            // this.placeHolder.style.color = white;
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
    border: 0.5px solid rgba(211, 211, 211, 0.4);
    height: 65vh;
    /* transform: rotate(89.64deg); */
}

@media (min-width: 900px) {
    .contactUs-header {
        width: 60%;
    }
}
 
@media (min-width: 1100px) {
    .YoutubeNameless, 
    .MotionNameless,
    .NotionNameless,
    .Twitternameless,
    .LinkedInNameless,
    .Facebooknameless,
    .InstagramNameless,
    .TiktokNameless,
    .WeiboNameless,
    .YoutubeNameless ,
    .MunginNameless {
        margin-top: 1.735rem;
    }

    form {
        margin-top: 0rem;
    }
} 

@media (min-width: 1200px) {
    .YoutubeNameless, 
    .MotionNameless,
    .NotionNameless,
    .Twitternameless,
    .LinkedInNameless,
    .Facebooknameless,
    .InstagramNameless,
    .TiktokNameless,
    .WeiboNameless,
    .YoutubeNameless ,
    .MunginNameless {
        margin-top: 2.24rem;
    }

    .contactUs-header {
        margin-top: 1rem;
    }

    p {
        width: 55%;
        margin-top: 1rem
    }

    form {
        margin-top: 1.2rem;
    }

    input {
        height: 3.2rem;
    } 

    .label-div {
        width: 20%;
    }
}

@media (min-width: 1300px) {
    .contactUs-header {
        width: 60%;
    }

    .label-div {
        width: 19%;
    }

    .line {
        margin-top: 5rem;
    }
}
</style>