<script setup>
defineProps({
    category: String
})
</script>
<template>
    <div class="BlogCategory">
        <span class="text-xs bg-white/20 px-2">{{ category }}</span>
    </div>
</template>
<style scoped></style>