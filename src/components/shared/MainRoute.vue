<script setup>
import { LanguageIcon, SunIcon } from '@heroicons/vue/24/outline';
import Heading3 from '../Heading3.vue';


</script>
<template>
    <div
        class="MainRoute mb-4 h-12 flex items-center justify-between text-center bg-black/20 backdrop-blur-sm sticky top-0 z-50 px-4 border-b border-theme-secondaryBackground">
        <Heading3 title="#anasayfa" :has-margin=false />
        <div class="flex space-x-4 text-zinc-400">
            <SunIcon class="w-5 h-5" />
            <LanguageIcon class="w-5 h-5" />
        </div>
    </div>
</template>
<style scoped></style>