<script setup>
defineProps({
    title: {
        type: String,
        required: true
    }
})
</script>
<template>
    <h3 class="font-bold text-lg mb-2">{{ title }}</h3>
</template>
<style scoped></style>