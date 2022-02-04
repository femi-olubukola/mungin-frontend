<template>
    <div>
        <div class="partners"  :style="{ backgroundColor: `${bgColor}` }">
            <div class="partners-content px-6 md:px-10 lg:px-16 xl:px-32 py-10">
                <div class="">
                    <div class="firstpartners flex justify-center items-center lg:mx-8">
                        <div class="grid gap-x-6 grid-cols-2 sm:grid-cols-4 sm:gap-x-6  lg:flex lg:justify-center items-center  lg:w-full">
                            <GoogleLogoSvg class="pb-2"/>
                            <AirBnbLogoSvg class="pb-2"/>
                            <WalmartLogoSvg class="pb-2"/>
                            <AmazonLogoSvg class="pb-2"/>
                            <MicrosoftLogo class="pb-2"/>
                        </div>
                    </div>
                    <div class="flex justify-center items-center">
                        <div class="grid gap-x-6 grid-cols-2 mt-4 sm:grid-cols-4 sm:gap-x-6">
                            <BookMyShowLogo class="pb-2"/>
                            <OYoLogoSvg class="pb-2"/>
                            <OlaLogoSvg class="pb-2"/>
                            <HubspotLogoSvg class="pb-2"/>
                        </div>
                    </div>
                <LoyalPartnersSvg class="flex justify-center items-center"/>   
                </div>
            </div>
        </div>
        <!-- <Footer/> -->
    </div>
</template>

<script>
import GoogleLogoSvg from '../components/GoogleLogoSvg.vue'
import AirBnbLogoSvg from './AirBnbLogoSvg.vue'
import WalmartLogoSvg from '../components/WalmartLogoSvg.vue'
import AmazonLogoSvg from '../components/AmazonLogoSvg.vue'
import MicrosoftLogo from '../components/MicrosoftLogo.vue'
import BookMyShowLogo from '../components/BookMyShowLogo.vue'
import OYoLogoSvg from '../components/OYoLogoSvg.vue'
import OlaLogoSvg from '../components/OlaLogoSvg.vue'
import HubspotLogoSvg from '../components/HubspotLogoSvg.vue'
import LoyalPartnersSvg from '../components/LoyalPartnersSvg.vue'
// import Footer from '../components/Footer.vue'

export default {
    data() {
        return {
            bgColor: '#f8f8f8',
        }
    },
    components: {
        GoogleLogoSvg,
        AirBnbLogoSvg,
        WalmartLogoSvg,
        AmazonLogoSvg,
        MicrosoftLogo,
        BookMyShowLogo,
        OYoLogoSvg,
        OlaLogoSvg,
        HubspotLogoSvg,
        LoyalPartnersSvg,
        // Footer     
    }
}
</script>

<style scoped>

</style>