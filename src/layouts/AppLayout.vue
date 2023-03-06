<script setup>
import { ref } from "vue"

import FixedBanner from "../components/FixedBanner.vue"
import MainRoute from "../components/shared/MainRoute.vue";

import popularUsers from "../data/followers";

import UserListItem from "../components/UserListItem.vue";
import BaseFooter from "../components/shared/BaseFooter.vue";
import Search from "../components/form/Search.vue";
import Sidebar from "../components/shared/sidebar/Sidebar.vue";

const isDark = ref(false);

</script>
<template>
    <div class="min-h-screen bg-theme-primaryBg text-theme-primaryText" :class="{ 'light-theme': isDark }">

        <div class="absolute w-full h-96 opacity-30">
            <div
                class="bg-[url('https://tailwindcss.com/_next/static/media/docs@tinypng.d9e4dcdc.png')] w-full h-full bg-no-repeat bg-contain bg-right-top">
            </div>
        </div>

        <div class="container mx-auto grid grid-cols-12 min-h-screen">

            <div class="hidden lg:block col-span-2 px-4 border-r border-r-theme-primaryBorder">
                <Sidebar />
            </div>

            <main class="col-span-12 lg:col-span-7 z-10">
                <MainRoute @update="(value) => isDark = value" />

                <div class="px-4">
                    <router-view />
                </div>

            </main>


            <div class="col-span-12 lg:col-span-3 px-4 border-l-theme-primaryBorder border-l">
                <div class="sticky top-0">

                    <Search />

                    <div class="py-4">
                        <UserListItem title="Sana Özel Öneriler" :users="popularUsers" />
                    </div>

                    <BaseFooter />

                </div>

            </div>
        </div>

        <FixedBanner />
    </div>
</template>
<style scoped></style>