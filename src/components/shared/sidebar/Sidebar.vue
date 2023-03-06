<script setup>
import UserCard from '../../UserCard.vue';
import MenuItems from './MenuItems.vue';
</script>
<template>
    <div class="sticky top-0">
        <div class="logo h-12 flex flex-col items-start justify-center text-theme-primaryText">
            <h5 class="font-extrabold lowercase text-4xl">nffnsnc</h5>
        </div>
        <MenuItems class="pb-4" />

        <!--user card-->
        <div class="pt-4 border-t border-t-theme-primaryBorder">
            <UserCard profile_image="https://pbs.twimg.com/profile_images/1629180967842725892/o-JlwSj9_400x400.jpg"
                username="glory" gradients-active />
        </div>
    </div>
</template>
<style scoped></style>