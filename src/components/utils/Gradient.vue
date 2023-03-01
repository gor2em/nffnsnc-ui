<script setup>
defineProps({
    gradientColors: Object,
});
</script>
<template>
    <div class="rounded-full py-0.5 px-0.5 bg-gradient-radial from-amber-400 via-pink-600 to-cyan-400 gradient-animate">
        <slot />
    </div>
</template>
<style scoped>
.gradient-animate {
    background-size: 50%;
    animation: gradient 2s ease infinite;
    -webkit-animation: gradient 2s ease infinite;
    -moz-animation: gradient 2s ease infinite
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