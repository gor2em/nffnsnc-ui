<script setup>
import { CogIcon, HomeIcon } from '@heroicons/vue/24/outline';


</script>
<template>
    <nav class="text-theme-primaryNav">
        <ul class="flex flex-col space-y-2 mt-2">
            <li class="flex items-center gap-4 py-2.5 px-2 rounded-3xl bg-theme-secondaryBg">
                <HomeIcon class="w-6 h-6" />
                <a href="" class="font-bold text-sm">Anasayfa</a>
            </li>
            <li
                class="flex items-center gap-4 py-2.5 px-2 rounded-3xl hover:bg-theme-secondaryBg transition-all duration-150">
                <CogIcon class="w-6 h-6" />
                <a href="" class="text-sm">Ayarlar</a>
            </li>
        </ul>
    </nav>
</template>
<style scoped></style>