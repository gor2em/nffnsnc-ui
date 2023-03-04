<script setup>
import { EyeIcon } from '@heroicons/vue/24/outline';
import BlogContent from './blog/BlogContent.vue';
import SectionContent from './utils/SectionContent.vue';

defineProps({
    blogs: Array
})
</script>
<template>
    <SectionContent title="Son Bloglar">
    <div v-for="blog in blogs" :key="blog.title" class="flex space-x-4 pb-4">

        <div class="w-1/2 relative">
            <!--update-->
            <!-- <div class="BlogDetail absolute w-full py-1 px-2">
                    <div class="flex items-center justify-between space-x-2">
                            <div class="flex items-center space-x-2 bg-theme-primaryBg rounded-sm px-2">
                                <EyeIcon class="w-4 h-4" />
                                <span class="text-xs font-bold ">127</span>
                            </div>
                            <div class="BlogCategory">
                                <span class="text-xs bg-theme-primaryBg px-4 rounded-sm">{{ blog.category }}</span>
                            </div>
                        </div>
                    </div> -->
                <!--update-->
                <img :src="blog.img" :alt="blog.title" class="object-cover w-full max-h-32 rounded-md">
            </div>
            <div class="w-1/2 border-b border-b-theme-primaryBorder">
                <BlogContent :blog="blog" type="start" date-active
                    :gradientColors="{ from: 'from-theme-fromGradient', to: 'to-theme-toGradient', via: 'via-theme-viaGradient' }" />
            </div>
        </div>
    </SectionContent>
</template>
<style scoped></style>