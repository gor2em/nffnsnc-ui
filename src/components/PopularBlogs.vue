<script setup>

import "vue3-carousel/dist/carousel.css"
import { Carousel, Slide, Navigation } from "vue3-carousel"

import SectionContent from "./utils/SectionContent.vue";
import BlogContent from "../components/blog/BlogContent.vue"

defineProps({
    blogs: Array,
})

</script>
<template>
    <SectionContent title="Popüler Bloglar">

        <Carousel :items-to-show="2.5" :wrap-around=true class="cursor-pointer" color>
            <Slide v-for="blog in blogs" :key="blog.title" class="max-h-40">

                <img :src="blog.img" :alt="blog.title" class="w-full object-cover brightness-50">

                <div class="carousel__item absolute w-full">
                    <BlogContent :blog="blog" category-active
                        :gradientColors="{ from: 'from-theme-fromGradient', to: 'to-theme-toGradient', via: 'via-theme-viaGradient' }" />
                </div>
            </Slide>

            <template #addons>
                <navigation>
                    <template #next>
                        <span class="text-theme-primaryIconActive text-3xl ml-4"> &gt; </span>
                    </template>
                    <template #prev>
                        <span class="text-theme-primaryIconActive text-3xl mr-4"> &lt; </span>
                    </template>
                </navigation>
            </template>
        </Carousel>
    </SectionContent>
</template>
<style scoped>
/* .carousel__slide {
    padding: 5px;
} */

.carousel__prev,
.carousel__next {
    color: var(--primary-color);
}

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