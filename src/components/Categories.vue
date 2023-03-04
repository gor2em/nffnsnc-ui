<script setup>
import Heading3 from './Heading3.vue';
import Gradient from './utils/Gradient.vue';
import SectionContent from './utils/SectionContent.vue';

defineProps({
    categories: Array,
})
</script>
<template>
    <SectionContent title="Kategoriler">
        <Gradient>
            <div class="bg-theme-primaryBackground rounded-full py-2 flex space-x-4 overflow-x-scroll">
                <div v-for="(category, index) in categories" :key="index"
                    class="px-4 text-xs text-zinc-400 whitespace-nowrap overflow-hidden min-w-max">
                    {{ category }}
                </div>
            </div>
        </Gradient>
    </SectionContent>
</template>
<style scoped>
::-webkit-scrollbar {
    display: none;
}
</style>