<script setup>
import Heading3 from './Heading3.vue';

import "vue3-carousel/dist/carousel.css"
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel"

import popularBlogs from "../data/popularBlogs"

</script>
<template>
    <div class="PopularBlogs">
        <Heading3 title="Popüler Bloglar" />
        <Carousel :items-to-show="2.5" :wrap-around=true class="cursor-pointer">
            <Slide v-for="slide in popularBlogs" :key="slide.img" class="max-h-40">

                <img :src="slide.img" :alt="slide.title" class="w-full object-cover brightness-50">
                <div class="carousel__item absolute w-full">
                    <div class="flex flex-col justify-center items-center h-full space-y-2">
                        <h4 class="font-bold capitalize text-base">
                            {{ slide.title }}
                        </h4>
                        <div class="flex flex-col space-y-2">
                            <div class="flex items-center space-x-2">
                                <img :src="slide.user.profile_image" :alt="slide.user.name" class="w-7 h-7 rounded-full">
                                <span class="text-xs shadow-2xl font-medium">{{ slide.user.name }}</span>
                            </div>
                            <div>
                                <span class="text-xs bg-white/20 px-2">{{ slide.category }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Slide>

            <template #addons>
                <Navigation />
            </template>
        </Carousel>
    </div>
</template>
<style scoped>
/* .carousel__slide {
    padding: 5px;
} */

.carousel__viewport {
    perspective: 2000px;
}

.carousel__track {
    transform-style: preserve-3d;
}

.carousel__slide--sliding {
    transition: 0.5s;
}

.carousel__slide {
    opacity: 0.9;
    transform: rotateY(-20deg) scale(0.9);
}

.carousel__slide--active~.carousel__slide {
    transform: rotateY(20deg) scale(1);

}

.carousel__slide--prev {
    opacity: 0.5;
    transform: rotateY(-10deg) scale(1);
}

.carousel__slide--next {
    opacity: 0.5;
    transform: rotateY(10deg) scale(1);
}

.carousel__slide--active {
    opacity: 1;
    transform: rotateY(0) scale(1.1);
}
</style>