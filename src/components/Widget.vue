<script setup>
import axios from "axios";
import requests from "../Requests/requests";
import { ref } from "vue";
import { StarIcon } from "@heroicons/vue/solid";
const games = ref([]);
const widgetGames = ref([]);
const fetchGames = async () => {
    const response = await axios.get(requests.fetchAction);
        response.data.results.forEach((game) => {
        games.value.push(game);
    });

    widgetGames.value = games.value.splice(0,10);
};
fetchGames();
function truncate(string, n) {
    return string?.length > n ? string.substring(0, n-1 ) + "....": string;
}
</script>
<template>
    <div className="hidden lg:inline ml-8 xl:w-[250px] border-l border-gray-200 py-1 space-y-5">
       <div class="sticky top-0">
    <div v-for="game in widgetGames" :key="game.id">
    <img :src="game.background_image" alt="" class="rounded-lg h-48 w-48 py-2 px-2">
    <div class="flex items-center justify-between p-1 m-2 w-[180px]">
         <h4 class="font-bold">{{truncate(game.name, 10)}}</h4>
        <div class="hidden xl:inline-block text-sm">
            <div class="xl:flex justify-center items-center">
            <h3 :class="[ game.rating > 4 ? 'text-green-500' : 'text-red-500']"><StarIcon class="h-5 w-5 mr-1"/></h3>
            <h5>{{game.rating}}</h5>
            </div>
        </div>
    </div>
    </div>
           </div>
    </div>
</template>