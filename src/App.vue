<script setup>
import { HomeIcon, CogIcon } from "@heroicons/vue/24/outline"
import Categories from "./components/Categories.vue";
import LatestBlogs from "./components/LatestBlogs.vue";
import PopularBlogs from "./components/PopularBlogs.vue";

import categories from "./data/categories";
console.log(categories)
</script>

<template>
  <div class="min-h-screen bg-theme-primaryBackground text-theme-primary">
    <div class="container mx-auto grid grid-cols-12 min-h-screen">

      <div class="col-span-2  px-4 py-4 border-r border-r-theme-secondaryBackground">
        <!--SIDEBAR START-->
        <div class="sticky top-4">
          <!--LOGO-->
          <div class="logo h-12">
            <h5 class="font-thin tracking-widest uppercase text-left text-2xl">nffnsnc</h5>
          </div>
          <!--LOGO END-->

          <!--NAVBAR-->
          <nav>
            <ul class="flex flex-col space-y-4">
              <li class="flex items-center gap-4 bg-theme-secondaryBackground py-2.5 px-2 rounded-3xl">
                <HomeIcon class="w-6 h-6" />
                <a href="" class="font-medium text-sm">Anasayfa</a>
              </li>
              <li
                class="flex items-center gap-4 py-2.5 px-2 rounded-3xl hover:bg-theme-secondaryBackground transition-all duration-150">
                <CogIcon class="w-6 h-6" />
                <a href="" class="text-sm">Ayarlar</a>
              </li>
            </ul>
          </nav>
          <!--NAVBAR END-->
        </div>
        <!--SIDEBAR END-->
      </div>


      <!--MAIN SECTION START-->
      <main class="col-span-7">
        <!--MAIN ROUTE-->
        <div
          class="MainRoute h-12 flex items-center justify-center text-center bg-black/20 backdrop-blur-lg sticky top-0">
          <div class="">
            <h4 class="font-bold">Anasayfa</h4>
          </div>
        </div>
        
        <!--MAIN ROUTE END-->

        <div class="flex flex-col space-y-4 px-4">
          <Categories :categories="categories" />

          <PopularBlogs />

          <LatestBlogs />

        </div>

      </main>
      <!--MAIN SECTION END-->


      <!--RIGHT SECTION START-->
      <div class="col-span-3 px-4 py-4 border-l-theme-secondaryBackground border-l">
        <!--SEARCH-->
        <p>search</p>
        <!--SEARCH END-->

        <!--SPECIAL-->
        <p>special to you</p>
        <!--SPECIAL END-->

        <!--FOOTER-->
        <p>footer</p>
        <!--FOOTER END-->
      </div>
      <!--RIGHT SECTION END-->
    </div>
  </div>

  <!-- opacity-->
  <div class="Banner fixed bottom-0 bg-theme-secondaryBackground text-theme-secondary w-full">
    <div class="container mx-auto py-4 px-4">
      <div class="flex items-center justify-between">
        <div class="flex flex-col space-y-1">
          <h4 class="font-bold">sen de bir iz bırak...</h4>
          <p class="text-xs">üye olarak bir şeyler yazabilirsin.</p>
        </div>
        <div class="flex items-center space-x-4 text-xs">
          <button class="border border-zinc-600 py-1 px-4 rounded-3xl">Giriş Yap</button>
          <button class="bg-zinc-600 py-1 px-4 rounded-3xl">Kaydol</button>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>