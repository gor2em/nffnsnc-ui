<script setup>
import Heading3 from './Heading3.vue';
</script>
<template>
    <!--fixed banner update design-->
    <div
        class="Banner fixed bottom-0 px-4 bg-gradient-to-r z-50 from-cyan-400/20 to-amber-400/20 via-emerald-400/50 backdrop-blur-sm text-theme-secondary w-full">
        <div class="container mx-auto py-4">
            <div class="flex items-center justify-between">
                <div class="flex flex-col space-y-1">
                    <Heading3 title="sen de bir iz bırak." :has-margin=false />
                    <p class="text-xs">non fui fui non sum non curo.</p>
                </div>
                <div class="flex items-center space-x-2 text-xs font-bold">
                    <button class="py-1 px-2">Giriş Yap</button>
                    <button class="py-1 px-2">Kaydol</button>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped></style>