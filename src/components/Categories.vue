<script setup>
import Heading3 from './Heading3.vue';

defineProps({
    categories: Array,
})
</script>
<template>
    <div class="Categories">

        <Heading3 title="Kategoriler" />

        <div
            class="rounded-3xl py-0.5 px-0.5 bg-gradient-to-tr from-amber-400 via-pink-600 to-cyan-400 category-background-animate">
            <div class="bg-theme-primaryBackground py-2 px-2 rounded-3xl flex space-x-4 overflow-x-scroll">
                <div v-for="(category, index) in categories" :key="index"
                    class="px-4 text-xs text-zinc-400 whitespace-nowrap overflow-hidden min-w-max">
                    {{ category }}
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
::-webkit-scrollbar {
    display: none;
}

.category-background-animate {
    background-size: 200%;
    animation: gradient 3s ease infinite;
    -webkit-animation: gradient 3s ease infinite;
    -moz-animation: gradient 3s ease infinite
}

@keyframes gradient {

    0%,
    100% {
        background-position: 0 50%;
    }

    50% {
        background-position: 100% 50%;
    }
}
</style>