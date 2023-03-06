<script setup>
import { LanguageIcon, SunIcon } from '@heroicons/vue/24/outline';
import { ref } from 'vue';
import Heading3 from '../Heading3.vue';



const isDark = ref(false);
const emit = defineEmits(["update"]);

const toggleTheme = () => {
    emit("update", isDark.value = !isDark.value);
}

</script>
<template>
    <div
        class="MainRoute mb-4 h-12 flex items-center justify-between text-center bg-theme-backdropMain backdrop-blur-sm sticky top-0 z-50 px-4 border-b border-theme-primaryBorder">
        <Heading3 title="#anasayfa" :has-margin=false />
        <div class="flex space-x-4 text-theme-primaryIconActive">
            <SunIcon class="w-5 h-5 cursor-pointer" @click="toggleTheme" />
            <LanguageIcon class="w-5 h-5" />
        </div>
    </div>
</template>
<style scoped></style>