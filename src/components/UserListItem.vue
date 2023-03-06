<script setup>

import { computed } from "vue"

import UserCard from "./UserCard.vue";
import SectionContent from "./utils/SectionContent.vue"
import UserPoint from "./UserPoint.vue"
import UserFollow from "./UserFollow.vue";
const props = defineProps({
    users: Array,
    listType: {
        type: String,
        default: "normal"
    },
    pointActive: {
        type: Boolean,
        default: false,
    },
    title: {
        type: String,
        required: true
    }
});



</script>
<template>
    <SectionContent :title="title">
        <div class="flex flex-col space-y-1.5">
            <div class="flex items-center justify-between border border-theme-primaryBorder rounded-xl py-2 px-2"
                v-for="user in users" :key="user.username">

                <UserCard :username="user.username" :alt="user.username" :profile_image="user.profile_image"
                    :gradients-active="listType === 'popular' ? true : false" />
                <UserPoint v-if="pointActive" />
                <UserFollow v-else />
            </div>
        </div>
    </SectionContent>
</template>
<style scoped></style>