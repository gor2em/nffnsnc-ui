<script setup>
import { computed } from "vue"

const props = defineProps({
    gradientColors: Object,
    gradientActive: {
        type: Boolean,
        default: false,
    }
});

const gradientColor = computed(() => {
    if (props.gradientColors) {
        return `${props.gradientColors.from} ${props.gradientColors.via} ${props.gradientColors.to}`
    }

    return "from-amber-400 via-pink-600 to-cyan-400"
})

</script>
<template>
    <div class="rounded-full py-0.5 px-0.5"
        :class="[gradientColor, gradientActive ? 'bg-gradient-radial gradient-animate' : '']">
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