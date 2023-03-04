<script setup>
import { StarIcon } from "@heroicons/vue/24/outline";
</script>
<template>
    <div class="rounded-full flex items-center justify-center space-x-2">
        <StarIcon class="w-4 h-4 text-theme-primaryTextSuccess" />
        <span class="text-xs font-bold">{{ Math.floor(Math.random() * 1123021).toFixed() }}</span>
    </div>
</template>
<style scoped></style>