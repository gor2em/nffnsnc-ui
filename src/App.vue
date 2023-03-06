<script setup>
import { ref } from "vue"

import Categories from "./components/Categories.vue";
import LatestBlogs from "./components/LatestBlogs.vue";
import PopularBlogs from "./components/PopularBlogs.vue";
import FixedBanner from "./components/FixedBanner.vue"
import MainRoute from "./components/shared/MainRoute.vue";

import categories from "./data/categories";
import popularBlogs from "./data/popularBlogs"
import latestBlogs from "./data/latestBlogs";
import popularUsers from "./data/followers";

import UserListItem from "./components/UserListItem.vue";
import BaseFooter from "./components/shared/BaseFooter.vue";
import Search from "./components/form/Search.vue";
import Sidebar from "./components/shared/sidebar/Sidebar.vue";

const isDark = ref(false);

</script>

<template>
  <div class="min-h-screen bg-theme-primaryBg text-theme-primaryText" :class="{ 'light-theme': isDark }">

    <div class="absolute w-full h-96 opacity-60">
      <div
        class="bg-[url('https://tailwindcss.com/_next/static/media/docs@tinypng.d9e4dcdc.png')] w-full h-full bg-no-repeat bg-contain bg-right-top">
      </div>
    </div>

    <div class="container mx-auto grid grid-cols-12 min-h-screen z-50">

      <div class="hidden lg:block col-span-2 px-4 border-r border-r-theme-primaryBorder">
        <Sidebar />
      </div>

      <main class="col-span-12 lg:col-span-7">
        <MainRoute @update="(value) => isDark = value" />

        <div class="flex flex-col space-y-8 px-4 mb-40">
          <Categories :categories="categories" />

          <PopularBlogs :blogs="popularBlogs" />

          <div class="grid grid-cols-8 gap-10">

            <div class="col-span-8 lg:col-span-5">
              <LatestBlogs :blogs="latestBlogs" />
            </div>


            <div class="col-span-8 lg:col-span-3">

              <UserListItem title="Popüler Üyeler" :users="popularUsers" point-active list-type="popular" />

            </div>

          </div>

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