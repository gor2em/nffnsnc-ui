<script setup>
import Heading3 from './Heading3.vue';

import latestBlogs from "../data/latestBlogs";
import { EyeIcon } from '@heroicons/vue/24/outline';
import Gradient from './utils/Gradient.vue';

</script>
<template>
    <div class="LatestBlogs col-span-5">
        <Heading3 title="Son Bloglar" />

        <div v-for="blog in latestBlogs" :key="blog.img" class="flex space-x-4 pb-4">

            <div class="w-1/2 relative">
                <div class="BlogDetail absolute w-full py-1 px-2">
                    <div class="flex items-center justify-between space-x-2">
                        <div class="flex items-center space-x-2 bg-black/20 rounded-sm px-2">
                            <EyeIcon class="w-4 h-4" />
                            <span class="text-xs font-bold ">127</span>
                        </div>
                        <div class="BlogCategory">
                            <span class="text-xs bg-black/30 px-4 rounded-sm">{{ blog.category }}</span>
                        </div>
                    </div>
                </div>
                <img :src="blog.img" :alt="blog.title" class="object-cover w-full h-32 rounded-md">
            </div>
            <div class="w-1/2">
                <div class="flex flex-col justify-start items-start h-full space-y-2">
                    <h4 class="font-bold capitalize text-base">
                        {{ blog.title }}
                    </h4>
                    <div class="flex flex-col space-y-2">
                        <div class="flex items-center space-x-2">
                            <Gradient>
                                <img :src="blog.user.profile_image" :alt="blog.user.name" class="w-7 h-7 rounded-full">
                            </Gradient>
                            <span class="text-xs shadow-2xl font-medium">{{ blog.user.name }}</span>
                        </div>
                        <div>
                            <span class="text-xs font-medium text-zinc-600">Tarih: 28 Şubat 2023 22:09</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
<style scoped></style>