<script setup>
import { MagnifyingGlassIcon } from '@heroicons/vue/24/outline';


</script>
<template>
    <div class="SearchInput h-12 flex items-center group ">
        <MagnifyingGlassIcon class="w-5 h-5 absolute ml-2.5 text-theme-primaryText" />
        <!--base input-->
        <input type="text" placeholder="bir şeyler ara..."
            class="w-full py-2 indent-8 px-2 text-xs rounded-3xl bg-theme-secondaryBg">
    </div>
</template>
<style scoped></style>