<script setup>
import SidebarLink from './SidebarLink.vue';
</script>
<template>
<div class="hidden sm:flex items-center xl:items-start xl:w-[300px] h-full fixed flex-col ">
    <div class="flex items-center justify-center w-14 h-14 animation-hover p-0 xl:ml-28">
        <img src="../assets/xbox.png" alt="Xbox" class="w-10 h-10">
    </div>
    <div class="space-y-2.5 mt-4 mb-2.5 xl:ml-28">
        <SidebarLink/>
    </div>
</div>
</template>