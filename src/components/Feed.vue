<script setup>
import { SparklesIcon } from '@heroicons/vue/outline';
import requests from '../Requests/requests';
import Row from "../components/Row.vue";
import Banner from "./Banner.vue";
</script>
<template>
<div class="flex-grow border-l border-gray-200 max-w-2xl sm:ml-[73px] xl:ml-[350px]">
    <div class="flex justify-between items-center sticky bg-green-500/10 top-0 py-2 px-2 md:ml-4">
        <img src="../assets/xbox.png" alt="Xbox" class="w-10 h-10">
        <SparklesIcon class="h-7 w-7 text-green-500"/>
    </div>

    <Banner/>
    <div class="pt-5 md:pt-1">
        <Row title="Adventure" :fetchUrl="requests.fetchAdventure"/>
        <Row title="Action" :fetchUrl="requests.fetchAction"/>
        <Row title="Arcade" :fetchUrl="requests.fetchArcade"/>
        <Row title="Shooter" :fetchUrl="requests.fetchShooter"/>
        <Row title="Simulation" :fetchUrl="requests.fetchSimulation"/>
        <Row title="Sports" :fetchUrl="requests.fetchSports"/>
  </div>
</div>
</template>