<script setup>
defineProps({
    title: String
})
</script>
<template>
    <div class="BlogTitle">
        <h4 class="font-bold capitalize text-base">
            {{ title }}
        </h4>
    </div>
</template>