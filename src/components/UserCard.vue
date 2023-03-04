<script setup>
import Gradient from './utils/Gradient.vue';

defineProps({
    profile_image: String,
    username: String,
    gradientColors: Object,
})
</script>
<template>
    <div class="UserCard flex items-center space-x-2">
        <Gradient :gradient-colors="gradientColors">
            <img :src="profile_image" :alt="username" class="w-7 h-7 rounded-full">
        </Gradient>
        <span class="text-xs shadow-2xl font-medium">{{ username }}</span>
    </div>
</template>
<style scoped></style>