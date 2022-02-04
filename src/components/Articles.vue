<template>
    <div class="article">
        <div class="article-content px-6 md:px-10 lg:px-16 xl:px-32 py-10">
            <h2 class="text-left text-xl sm:text-3xl md:text-3xl xl:text-4xl font-medium sm:font-semibold lg:font-bold  font-serif">Latest News & Articles</h2>
            <div class="flex items-center justify-between">
                <div>
                    <p class="text-left text-xs md:text-sm font-normal md:font-medium font-serif w-full sm:w-8/12 md:w-10/12 lg:w-10/12 xl:w-8/12 py-2" :style="{color: `${paragraphColor}`}">Lorem ipsum dolor sit amet, consectetur adipiscing elit.consectetur adipiscing eli</p>
                </div>
                <div class="flex space-x-2 justify-between">
                    <ArrowLeft/>
                    <ArrowRight/>
                </div>
            </div>
            <div class="lg:flex space-x-8 xl:space-x-24">
                <ArticleContent
                class="flex flex-col mx-auto sm:mx-8 sm:w-6/12 lg:w-4/12"
                v-for="articleContent in articles" 
                :key="articleContent.id"
                :image="articleContent.articleImage" 
                :date="articleContent.articleDate"
                :header="articleContent.articleHeader"
                :description="articleContent.articleDescription"
                :button="articleContent.articleReadMore"
                />
            </div>
        </div>
    </div>
</template>

<script>
import ArrowLeft from '../components/ArrowLeft.vue'
import ArrowRight from '../components/ArrowRight.vue'
import ArticleContent from '../components/ArticleContent.vue'

export default {
    data() {
        return {
            paragraphColor: '#979797',
            articles: [
                {
                    id: 0,
                    articleImage: require('../assets/images/ArticleLogo.png'),
                    articleDate: '23 July 2021',
                    articleHeader: 'Crop Launching in Nigeria',
                    articleDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.consectetur adipiscing elit consectetur adipiscing consectetur adipiscing elit consectetur',
                    articleReadMore: 'Read More'
                },
                {
                    id: 1,
                    articleImage: require('../assets/images/ArticleLogo.png'),
                    articleDate: '23 July 2021',
                    articleHeader: 'Crop Launching in Nigeria',
                    articleDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.consectetur adipiscing elit consectetur adipiscing consectetur adipiscing elit consectetur',
                    articleReadMore: 'Read More'
                },
                {
                    id: 2,
                    articleImage: require('../assets/images/ArticleLogo.png'),
                    articleDate: '23 July 2021',
                    articleHeader: 'Crop Launching in Nigeria',
                    articleDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.consectetur adipiscing elit consectetur adipiscing consectetur adipiscing elit consectetur',
                    articleReadMore: 'Read More'
                }
            ]
        }
    },
    components: {
        ArrowLeft,
        ArrowRight,
        ArticleContent
    }
}
</script>

<style>

</style>