<script setup>
import { computed, ref } from "vue"

import BlogCategory from './BlogCategory.vue';
import BlogDate from './BlogDate.vue';
import BlogTitle from './BlogTitle.vue';
import UserCard from '../UserCard.vue';

const props = defineProps({
    blog: Object,
    type: {
        type: String,
        required: true
    },
    categoryActive: {
        type: Boolean,
        default: false,
    },
    dateActive: {
        type: Boolean,
        default: false
    },
    gradientColors: Object,
})

const popularBlogsActive = ref(false);

const contentType = computed(() => {
    if (props.type === "start") {
        return "justify-start items-start"
    }

    popularBlogsActive.value = true;
    return "justify-center items-center"

})

</script>
<template>
    <div class="flex flex-col h-full space-y-2" :class="contentType">

        <BlogTitle :title="blog.title" :class="{ 'text-white': popularBlogsActive }" />
        <div class="flex flex-col">

            <UserCard :username="blog.user.name" :profile_image="blog.user.profile_image" :gradient-colors="gradientColors"
                :popular-blogs-active="popularBlogsActive" />

            <BlogCategory :category="blog.category" v-if="categoryActive" />

            <BlogDate date="2 Mart 2023 22:02" v-if="dateActive" />

        </div>

    </div>
</template>
<style scoped></style>