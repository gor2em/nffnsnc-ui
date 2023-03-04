<script setup>
import Heading3 from './Heading3.vue';
</script>
<template>
    <!--fixed banner update design-->
    <div class="Banner fixed bottom-0 bg-emerald-400/50 backdrop-blur-sm text-theme-secondary w-full">
        <div class="container mx-auto py-4">
            <div class="flex items-center justify-between">
                <div class="flex flex-col space-y-1">
                    <Heading3 title="sen de bir iz bırak." :has-margin=false />
                    <p class="text-xs">non fui fui non sum non curo.</p>
                </div>
                <div class="flex items-center space-x-4 text-xs font-bold">
                    <button class="border rounded-3xl py-1 px-4">Giriş Yap</button>
                    <button class="border rounded-3xl py-1 px-4">Kaydol</button>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped></style>