<script setup>
import { computed } from "vue"

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

const contentType = computed(() => {
    if (props.type === "start") {
        return "justify-start items-start"
    }

    return "justify-center items-center"

})
</script>
<template>
    <div class="flex flex-col h-full space-y-2" :class="contentType">

        <BlogTitle :title="blog.title" />
        <div class="flex flex-col space-y-2">

            <UserCard :username="blog.user.name" :profile_image="blog.user.profile_image"
                :gradient-colors="gradientColors" />

            <BlogCategory :category="blog.category" v-if="categoryActive" />

            <BlogDate date="2 Mart 2023 22:02" v-if="dateActive" />

        </div>

    </div>
</template>
<style scoped></style>