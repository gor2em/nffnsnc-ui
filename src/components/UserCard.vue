<script setup>
import Gradient from './utils/Gradient.vue';

defineProps({
    profile_image: String,
    username: String,
    gradientColors: Object,
    popularBlogsActive: {
        type: Boolean,
        default: false,
    },
    gradientsActive: {
        type: Boolean,
        required: true
    }
});


</script>
<template>
    <div class="UserCard flex items-center" :class="popularBlogsActive ? 'justify-center' : ' space-x-2'">
        <Gradient :gradient-colors="gradientColors" :gradient-active="gradientsActive">
            <img :src="profile_image || `https://i.pinimg.com/564x/0c/40/58/0c4058f0fd4c5a5a321192e7df59453c.jpg`"
                :alt="username" class="w-7 h-7 rounded-full">
        </Gradient>
        <span class="text-xs shadow-2xl font-medium" v-if="!popularBlogsActive">{{ username }}</span>
    </div>
</template>
<style scoped></style>