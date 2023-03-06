<script setup>
import { ChatBubbleBottomCenterIcon, EyeIcon, HeartIcon } from '@heroicons/vue/24/solid';
import BlogContent from './blog/BlogContent.vue';
import SectionContent from './utils/SectionContent.vue';

defineProps({
    blogs: Array
})
</script>
<template>
    <SectionContent title="Son Bloglar">
        <div v-for="blog in blogs" :key="blog.title"
            class="flex justify-center flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 pb-4">

            <div class="w-full lg:w-1/2 relative cursor-pointer">

                <div class="absolute w-full z-20">

                    <div class="flex items-start px-2 py-2 w-full">
                        <div class="text-xs px-2 rounded-sm bg-theme-primaryBg/90 border backdrop-blur-sm text-zinc-50">
                            <span>{{ blog.category }}</span>
                        </div>
                    </div>
                </div>
                <img :src="blog.img" :alt="blog.title" class="object-cover w-full max-h-32 rounded-md">

            </div>
            <div class="w-full lg:w-1/2 lg:border-none border-b border-b-theme-primaryBorder">
                <BlogContent :blog="blog" type="start" date-active
                    :gradientColors="{ from: 'from-theme-fromGradient', to: 'to-theme-toGradient', via: 'via-theme-viaGradient' }" />
            </div>
        </div>
    </SectionContent>
</template>
<style scoped></style>