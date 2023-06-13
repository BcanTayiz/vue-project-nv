<template>
    <div>
      <header>
        <h1>Marvel Project</h1>
        <div class="favorite">
            <img class="icon" src="../assets/favorite.png">
            <h2>{{ FavoritedIDs.length}}</h2>
        </div>
        
      </header>
      <div class="container">
        <div v-if="comics.length == 0" class="loading-div">
          <h2>Loading...</h2>
          <ProgressBar/>
        </div>
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
  import { ref,computed } from 'vue';
  import axios from 'axios';
  import ComicItem from '../components/ComicItem.vue';
  import ProgressBar from '../components/ProgressBar.vue';
  import store from '../store';

  const FavoritedIDs = computed(() => store.state.favoriteIds);
  
  const comics = ref([]);
  const favoriteNumber = ref(0);
  
  const fetchComics = async () => {
    try {
      const response = await axios.get('https://gateway.marvel.com:443/v1/public/comics?apikey=7bd2b202f4f93eae25c53bfa83525845');
      comics.value = response.data.data.results;
      comics.value.map((comic) => (comic.favorite = false));
    } catch (error) {
      console.error(error);
    }
  };

  const addFavorite = async(id) => {
    store.commit('addFavoriteIds',id)
}

const deleteFavorite = async(id) => { 
    store.commit('deleteFavoriteIds',id)
}
  
  const toggleFavorite = async (comic) => {
    if (comic.favorite) {
        await addFavorite(comic.id)
    } else {
        await deleteFavorite(comic.id)
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

  .favorite{
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  .favorite h2{
    position: absolute;
    top:-20px;
    right: -30px;
  }
  .icon{
    width:35x;
    height: 35px;
  }

  .loading-div{
    text-align: center;
    align-items: center;
    margin: auto;
  }

  .loading-div section{
    background-color: rgb(10, 23, 35);
    width: 100%;
    height: 20px;
  }

  @media only screen and (max-width: 600px) {
    header {
    align-items: center;
    justify-content: center;
    margin: auto;
  }
  header h1{
    font-size: 30px;
    margin-right: 10px;
  }
  nav{
    align-items: center;
    justify-content: center;
    margin: auto;
  }
}
  </style>
  
  