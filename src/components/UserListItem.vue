<script setup>
import UserCard from "./UserCard.vue";
import SectionContent from "./utils/SectionContent.vue"
import UserPoint from "./UserPoint.vue"
import UserFollow from "./UserFollow.vue";
defineProps({
    users: Array,
    pointActive: {
        type: Boolean,
        default: false,
        required: true
    },
    title: {
        type: String,
        required: true
    }
});
</script>
<template>
    <SectionContent :title="title">
        <div class="flex flex-col space-y-5">
            <div class="flex items-center justify-between bg-theme-secondaryBackground rounded-xl py-1 px-2"
                v-for="user in users" :key="user.username">

                <UserCard :username="user.username" :alt="user.username" :profile_image="user.profile_image" />
                <UserPoint v-if="pointActive" />
                <UserFollow v-else />
            </div>
        </div>
    </SectionContent>
</template>
<style scoped></style>