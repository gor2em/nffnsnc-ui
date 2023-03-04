<script setup>
defineProps({
    date: String
})
</script>
<template>
    <div class="BlogDate">
        <span class="text-xs font-medium text-theme-primaryTextDark inline-flex">{{ date }} tarihinde yayınlandı.</span>
    </div>
</template>
<style scoped></style>