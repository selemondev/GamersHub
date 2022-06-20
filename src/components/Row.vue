<script setup>
import axios from "axios";
import { ref } from "vue";
import { StarIcon } from "@heroicons/vue/solid";
const props = defineProps({
    title: {
        type: String,
        required: true
    },
    fetchUrl: {
        type: String,
        required: true
    }
});
const games = ref([]);
const fetchGames = async () => {
    const response = await axios.get(props.fetchUrl);
    response.data.results.forEach((game) => {
        games.value.push(game);
    });
};
fetchGames();


function truncate(string, n) {
    return string?.length > n ? string.substring(0, n-1 ) + "....": string;
}
</script>
<template>
<div class="ml-2 xl:w-full w-[300px]">
    <div class="pb-4 pt-1 ml-2 md:mt-10">
        <h2 class="font-bold md:text-2xl text-lg">{{props.title}}</h2>
    </div>
    <div class="flex items-center overflow-x-scroll scrollbar-hide">
    <div v-for="game in games" :key="game.id">
    <img :src="game.background_image" alt="" class="rounded-lg h-48 min-w-[200px] py-2 px-2">
    <div class="flex items-center justify-between p-1 m-2">
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