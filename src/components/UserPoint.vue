<script setup>
import { StarIcon } from "@heroicons/vue/24/outline";
</script>
<template>
    <div class="bg-theme-primaryBg rounded-full flex items-center space-x-2 w-12">
        <StarIcon class="w-4 h-4 text-theme-primaryTextSuccess ml-2" />
        <span class="text-xs">{{ Math.floor(Math.random() * 10).toFixed() }}</span>
    </div>
</template>
<style scoped></style>