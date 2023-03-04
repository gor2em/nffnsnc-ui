<script setup>
defineProps({
    date: String
})
</script>
<template>
    <div class="BlogDate">
        <span class="text-xs font-medium text-zinc-600">Tarih :{{ date }}</span>
    </div>
</template>
<style scoped></style>