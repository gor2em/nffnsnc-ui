<script setup>
import Heading3 from '../Heading3.vue';
defineProps({
    title: String
});

</script>
<template>
    <div class="SectionContent flex flex-col">
        <Heading3 :title="title" />
        <div>
            <slot />
        </div>
    </div>
</template>