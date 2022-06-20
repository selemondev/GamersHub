<script setup>
import { HomeIcon } from "@heroicons/vue/solid";
import {
FireIcon,
HeartIcon,
BellIcon,
CashIcon,
DownloadIcon,
LogoutIcon
} from "@heroicons/vue/outline";
const sidebarMenu = [
    {
        href: "/", label: "Home", Icon: HomeIcon,
    },
        {
        href: "#", label: "Trending", Icon: FireIcon,
    },
        {
        href: "#", label: "Favorites", Icon: HeartIcon,
    },
        {
        href: "#", label: "Notifications", Icon: BellIcon,
    },
        {
        href: "#", label: "Purchases", Icon: CashIcon,
    },
       {
        href: "#", label: "Downloads", Icon: DownloadIcon,
    },
     {
        href: "#", label: "LogOut", Icon: LogoutIcon,
    },


]
</script>
<template>
<div>
    <div v-for="link in sidebarMenu" :key="link.label" class="flex items-center justify-center xl:justify-start text-xl space-x-3 animation-hover">
    <component :is="link.Icon" class="h-7"/>
    <h3 class="font-bold hidden xl:inline"><router-link :to="link.href">{{link.label}}</router-link></h3>
    </div>
</div>
</template>
