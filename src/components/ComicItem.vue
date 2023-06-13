<template>
    <div class="container">
        <div v-for="comic in comics" :key="comic.id"
            :class="{ 'comic-container': true, 'borderStyle': FavoritedIDs.includes(comic.id), 'filterStyle': !FavoritedIDs.includes(comic.id) }">
            <div class="material-container">
                <section class="header-section">
                    <h2>{{ comic.title }}</h2>
                    <h3 @click="toggleFavorite(comic)">
                        <img v-if="FavoritedIDs.includes(comic.id)" src="../assets/dislike.png"/>
                        <img v-else src="../assets/like.png"/>
                    </h3>
                </section>
                <div class="content-container">
                    <p>{{ comic.description }}</p>
                    <img :src="comic.thumbnail.path + '.' + comic.thumbnail.extension" alt="" class="thumbnail-img">
                    <div>
                        <section v-if="comic.creators.available != 0">
                            <h2>Creators</h2>
                        </section>
                        <div class="creators-container" v-if="comic.creators.available != 0">

                            <div v-for="creator in comic.creators.items" class="creators">
                                <p>{{ creator.name }}</p>
                                <p>{{ creator.role }}</p>
                            </div>
                        </div>

                        <section class="details-section" @click="handleDetail(comic)">
                            <h2>Details</h2>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script setup>
import { defineProps, watch } from 'vue';
import router from '../router/index'
import store from '../store';
import { ref,computed } from 'vue';

const { comics, favoriteNumber,toggleFavorite} = defineProps(['comics', 'favoriteNumber','toggleFavorite'])

const storeCommit = async(comic) => {
    store.commit('loadComic',comic)
}

const handleDetail = async (comic) => {
    await storeCommit(comic)
    console.log(comic)
    console.log(comic.id)
    router.push(`/details/${comic.id}`)
    
}

const FavoritedIDs = computed(() => store.state.favoriteIds);
console.log(FavoritedIDs)

</script>



<style scoped>

.container{
    height: -webkit-fit-content;
    height: -moz-fit-content;
    height: fit-content;
}
.comic-container {
    width: 30vw;
    border: 2px solid black;
    transition: border 0.5s ease;
    margin: 10px;
    margin-left: 30px;
    text-align: center;
    align-items: center;
    flex: 0 0 calc(30% - 20px);
    /* Sütunlarda 3 öğe olsun, boşlukları da hesaplamak için flex değeri ayarlandı */
    background-color: rgb(0, 0, 0);
    border-radius: 20px;
    color: white;
    height: -webkit-fit-content;
    height: -moz-fit-content;
    height: fit-content;
}

.borderStyle {
    width: 30vw;
    height: 100%;
    border: 2px solid black;
    transition: border 0.5s ease;
    margin: 10px;
    margin-left: 30px;
    text-align: center;
    align-items: center;
    flex: 0 0 calc(30% - 20px);
    /* Sütunlarda 3 öğe olsun, boşlukları da hesaplamak için flex değeri ayarlandı */
    background-color: rgb(0, 0, 0);
    border-radius: 20px;
    color: white;
    height: -webkit-fit-content;
    height: -moz-fit-content;
    height: fit-content;
}

.filterStyle {
    border: 10px solid orange;
}

.material-container {
    height: 100%;
}

.material-container .header-section {
    display: flex;
    justify-content: space-between;
    padding: 20px;
}

.material-container h3 {
    cursor: pointer;
}

.thumbnail-img {
    width: 18vw;
    height: 30vh;
}


.creators-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
}

.creators {
    text-align: center;
    align-items: center;
    background-color: rgb(60, 95, 126);
    border: 3px solid white;
    border-radius: 15px;
    margin: 10px;
    padding: 20px;
    color: black;
    font-size: 10px;
    font-weight: bold;
}

.borderStyle {
    border-color: red;
    transition: border-color 0.5s ease;
}

.filterStyle {
    filter: grayscale(100%);
    transition: filter 0.5s ease;
}

.details-section{
    cursor: pointer;
    background-color: orange;
    width: 10vw;
    margin: auto;
    border-radius: 20px;
}

.header-section h3 img{
    width: 5vw;
    height: 8vh;
    background-color: aliceblue;
    border: 2px solid orange;
    border-radius: 20px;
}

@media only screen and (max-width: 600px) {
    
    .container{
        font-size: 8px;
    }
    .header-section{
        font-size: 7px;
        text-align: center;
    }

    .creators{
        font-size: 7px !important;
    }

    .details-section{
        padding: 5px;
        margin-top: 2px;
        margin-bottom: 2px;
    }

    .header-section h3 img{
    width: 40px;
    height: 30px;
    margin-left: 10px;
    background-color: aliceblue;
    border: 2px solid orange;
    border-radius: 20px;
}
  
}

</style>