<script setup>
defineProps({
    title: {
        type: String,
        required: true
    },
    hasMargin: {
        type: Boolean,
        default: true
    }
})
</script>
<template>
    <h3 class="font-bold text-lg" :class="hasMargin ? 'mb-2' : ''">{{ title }}</h3>
</template>
<style scoped></style>