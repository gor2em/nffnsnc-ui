<script setup>
import { HomeIcon, CogIcon, SunIcon, PuzzlePieceIcon, StarIcon, LanguageIcon, MagnifyingGlassIcon, UserPlusIcon } from "@heroicons/vue/24/outline"
import Categories from "./components/Categories.vue";
import Heading3 from "./components/Heading3.vue";
import LatestBlogs from "./components/LatestBlogs.vue";
import PopularBlogs from "./components/PopularBlogs.vue";
import Gradient from "./components/utils/Gradient.vue";

import categories from "./data/categories";

import followers from "./data/followers";

</script>

<template>
  <div class="min-h-screen bg-theme-primaryBackground text-theme-primary">
    <div class="container mx-auto grid grid-cols-12 min-h-screen">

      <div class="col-span-2 px-4 border-r border-r-theme-secondaryBackground">
        <!--SIDEBAR START-->
        <div class="sticky top-0">
          <!--LOGO-->
          <div class="logo h-12 flex items-center">
            <h5 class="font-thin tracking-widest uppercase text-left text-xl">nffnsnc</h5>
          </div>
          <!--LOGO END-->

          <!--NAVBAR-->
          <nav>
            <ul class="flex flex-col space-y-4 mt-4">
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
          class="MainRoute mb-4 h-12 flex items-center justify-between text-center bg-black/20 backdrop-blur-sm sticky top-0 z-50 px-4 border-b border-theme-secondaryBackground">
          <Heading3 title="#anasayfa" :has-margin=false />
          <div class="flex space-x-4 text-zinc-400">
            <SunIcon class="w-5 h-5" />
            <LanguageIcon class="w-5 h-5" />
          </div>
        </div>

        <!--MAIN ROUTE END-->

        <div class="flex flex-col space-y-4 px-4">
          <Categories :categories="categories" />

          <PopularBlogs />

          <div class="grid grid-cols-8 gap-4">
            <LatestBlogs />

            <!--POPULAR USERS-->
            <div class="PopularUsers col-span-3">
              <Heading3 title="Popüler Üyeler" />

              <div class="FollowCard flex flex-col space-y-5">
                <div class="flex items-center justify-between bg-theme-secondaryBackground rounded-xl py-1 px-2"
                  v-for="(follow, index) in followers" :key="follow.username">
                  <div class="flex items-center space-x-3">
                    <Gradient>
                      <img :src="follow.profile_image" :alt="follow.username" class="w-7 h-7 rounded-full">
                    </Gradient>
                    <span class="text-xs text-zinc-500">{{ index + 1 }} . {{ follow.username }}</span>
                  </div>
                  <div class="bg-theme-primaryBackground rounded-full flex items-center space-x-2 w-12">
                    <StarIcon class="w-4 h-4 text-emerald-500 ml-2" />
                    <span class="text-xs">{{ Math.floor(Math.random() * 10).toFixed() }}</span>
                  </div>
                </div>
              </div>
            </div>
            <!--POPULAR USERS END-->
          </div>

        </div>

      </main>
      <!--MAIN SECTION END-->


      <!--RIGHT SECTION START-->
      <div class="col-span-3 px-4 border-l-theme-secondaryBackground border-l">
        <div class="sticky top-0">

          <!--SEARCH-->
          <div class="SearchInput h-12 flex items-center group ">
            <MagnifyingGlassIcon
              class="w-5 h-5 absolute ml-2.5 text-zinc-400 group-focus-within:text-purple-600 group-focus-within:animate-pulse" />
            <input type="text" placeholder="bir şeyler ara..."
              class="w-full py-2 indent-8 px-2 text-xs rounded-3xl bg-theme-secondaryBackground group-focus-within:text-purple-600">
          </div>
          <!--SEARCH END-->

          <!--FOLLOW-->
          <div class="Follow py-4">
            <Heading3 title="Takipleş" />

            <div class="FollowCard flex flex-col space-y-3">
              <div class="flex items-center justify-between bg-theme-secondaryBackground rounded-xl py-1 px-2"
                v-for="follow in followers" :key="follow.username">
                <div class="flex items-center space-x-3">
                  <Gradient>
                    <img :src="follow.profile_image" :alt="follow.username" class="w-7 h-7 rounded-full">
                  </Gradient>
                  <span class="text-xs text-zinc-500">{{ follow.username }}</span>
                </div>
                <div class="bg-theme-primaryBackground rounded-full p-1">
                  <UserPlusIcon class="w-5 h-5 text-zinc-500" />
                </div>
              </div>
            </div>
          </div>

          <!--FOLLOW END-->


          <!--FOOTER-->
          <footer class="text-zinc-600 text-xs font-medium">
            <div class="flex flex-wrap space-x-3 divide-x divide-zinc-800 mb-1">
              <a href="#" class="text-xs font-medium">nffnsnc nedir?</a>
              <a href="#" class="text-xs font-medium pl-2">S.S.S</a>
              <a href="#" class="text-xs font-medium pl-2">bize ulaş</a>
            </div>
            <p>
              non fui fui non sum non curo
              <span class="text-zinc-600">
                © <strong>nffnsnc</strong>
                2023</span>
            </p>
          </footer>
          <!--FOOTER-->



          <!--FOOTER-->
          <!-- <p>footer</p> -->
          <!--FOOTER END-->
        </div>
        <!--RIGHT SECTION END-->
      </div>
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