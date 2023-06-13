<template>
  <div>
    <header>
      <h1>Marvel Project</h1>
      <h2>Favorites {{ favoriteNumber }}</h2>
    </header>
    <div class="container">
      <ComicItem
        :comics="comics"
        :favoriteNumber="favoriteNumber"
        :toggleFavorite="toggleFavorite"
      />
    </div>
    <main></main>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import ComicItem from './components/ComicItem.vue'

const comics = ref([]);
const favoriteNumber = ref(0)

const fetchComics = async () => {
  try {
    const response = await axios.get('https://gateway.marvel.com:443/v1/public/comics?apikey=7bd2b202f4f93eae25c53bfa83525845', {
    });
    console.log(response)
    comics.value = response.data.data.results;
    comics.value.map(comic => comic['favorite'] = false)
  } catch (error) {
    console.error(error);
  }
};

const toggleFavorite = (comic) => {
  if (comic.favorite) {
    favoriteNumber.value -= 1;
  } else {
    favoriteNumber.value += 1;
  }
  comic.favorite = !comic.favorite;
};



fetchComics();

</script>


<style scoped>
header {
  margin-top: 100px;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: space-around;
}

header h1 {
  font-size: 50px;
}

.container {
  display: flex;
  flex-wrap: wrap;
}
</style>

