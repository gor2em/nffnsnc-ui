<script setup>
import { HomeIcon, CogIcon, SunIcon, LanguageIcon, MagnifyingGlassIcon } from "@heroicons/vue/24/outline"
import Categories from "./components/Categories.vue";
import Heading3 from "./components/Heading3.vue";
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

</script>

<template>
  <div class="min-h-screen bg-theme-primaryBackground text-theme-primary">
    <div class="container mx-auto grid grid-cols-12 min-h-screen">

      <div class="col-span-2 px-4 border-r border-r-theme-secondaryBackground">
        <Sidebar />
      </div>


      <main class="col-span-7">

        <MainRoute />

        <div class="flex flex-col space-y-4 px-4">
          <Categories :categories="categories" />

          <PopularBlogs :blogs="popularBlogs" />

          <div class="grid grid-cols-8 gap-4">

            <div class="col-span-5">
              <LatestBlogs :blogs="latestBlogs" />
            </div>


            <div class="col-span-3">

              <UserListItem title="Popüler Üyeler" :users="popularUsers" point-active />

            </div>

          </div>

        </div>

      </main>


      <div class="col-span-3 px-4 border-l-theme-secondaryBackground border-l">
        <div class="sticky top-0">

          <Search />

          <div class="py-4">
            <UserListItem title="Sana Özel Öneriler" :users="popularUsers" />
          </div>

          <BaseFooter />

        </div>

      </div>
    </div>

  </div>

  <FixedBanner />
</template>