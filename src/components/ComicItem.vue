<template>
    <div class="container">
        <div v-for="comic in comics" :key="comic.id"
            :class="{ 'comic-container': true, 'borderStyle': comic.favorite, 'filterStyle': !comic.favorite }">
            <div class="material-container">
                <section class="header-section">
                    <h2>{{ comic.title }}</h2>
                    <h3 @click="toggleFavorite(comic)">
                        {{ comic.favorite ? "Unfavorite" : "Favorite" }}
                    </h3>
                </section>
                <div class="content-container">
                    <p>{{ comic.description }}</p>
                    <img :src="comic.thumbnail.path + '.' + comic.thumbnail.extension" alt="" class="thumbnail-img">
                    <div>
                        <section>
                            <h2>Creators</h2>
                        </section>
                        <div class="creators-container">

                            <div v-for="creator in comic.creators.items" class="creators">
                                <p>{{ creator.name }}</p>
                                <p>{{ creator.role }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script setup>
import { defineProps } from 'vue';
const { comics, favoriteNumber,toggleFavorite } = defineProps(['comics', 'favoriteNumber','toggleFavorite'])

console.log(comics)

</script>



<style scoped>
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
    overflow: auto;
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
    overflow: auto;
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
    width: 300px;
    height: 300px;
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
</style>