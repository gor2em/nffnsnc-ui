<script setup>

import Categories from "../components/Categories.vue";
import LatestBlogs from "../components/LatestBlogs.vue";
import PopularBlogs from "../components/PopularBlogs.vue";
import UserListItem from "../components/UserListItem.vue";

import categories from "../data/categories";
import popularBlogs from "../data/popularBlogs"
import latestBlogs from "../data/latestBlogs";
import popularUsers from "../data/followers";
</script>
<template>
    <div>
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
</template>
<style scoped></style>