<script setup>
import axios from "axios";
import requests from "../Requests/requests";
import { ref } from "vue";
import { StarIcon } from "@heroicons/vue/solid";
import Loading from "../components/Loading.vue";
const game = ref([]);
const loading = ref(false);
const fetchGames = async () => {
    loading.value = true;
    const response = await axios.get(requests.fetchAction);
    game.value = response.data.results[Math.floor(Math.random() * response.data.results.length - 1)];
    loading.value = false;
};
fetchGames();

function truncate(string, n) {
    return string?.length > n ? string.substring(0, n-1 ) + "....": string;
}
</script>
<template>
<div class="mt-2 xl:w-full w-[300px]">
    <div v-if="loading" class="grid place-items-center">
   <Loading/>
   </div>

   <div v-else>
     <div class="xl:ml-6 ml-2">
    <img :src="game.background_image" :alt="game.name" class="h-96 xl:w-full w-[300px]">
    </div>
    <div class="xl:ml-6 ml-3 mt-2 flex justify-between items-center">
        <h4 class="font-bold text-xl">{{truncate(game.name, 20)}}</h4>
         <div class="xl:flex flex justify-center items-center">
            <h3 :class="[ game.rating > 4 ? 'text-green-500' : 'text-red-500']"><StarIcon class="h-5 w-5 mr-1"/></h3>
        <h5>{{game.rating}}</h5>
        </div>
    </div>
   </div>
</div>
</template>