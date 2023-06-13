<template>
    <header>
        <h1>Details Page</h1>
    </header>

    <nav>
        <router-link to="/" @click="handleHome">Home</router-link>
    </nav>

    <main>
        <div class="container">
        <div :key="comic.id"
            :class="{ 'comic-container': true, 'borderStyle': comic.favorite, 'filterStyle': !comic.favorite }">
            <div class="material-container">
                <section class="title">
                    <h2>{{ comic.title }}</h2>
                </section>
                <section class="header-section">
                    
                    <h3 v-if="comic.issueNumber != ''">İssue Number: {{ comic.issueNumber }}</h3>
                    <h3>Page Count:{{ comic.pageCount }}</h3>
                    <h4 v-if="comic.text">Text: {{ comic.text }}</h4>
                    <h5>Series Name: {{ comic.series.name }}</h5>
                    <h5 v-if="comic.variantDescription != ''">Variant Description: {{ comic.variantDescription }}</h5>
                    <div v-if="comic.prices" v-for="price in comic.prices">
                        <h6>Price Type: {{price.type }}</h6>
                        <h6>Price: {{price.price }}</h6>
                    </div>
                    
                </section>
                <div class="content-container">
                    <p>{{ comic.description }}</p>
                    <section class="img-container">
                        <img :src="comic.thumbnail.path + '.' + comic.thumbnail.extension" alt="" class="thumbnail-img">
                        <div v-if="comic.images" v-for="img in comic.images" class="other-img-container">
                            <img v-if="(img.path + '.' + img.extension) != (comic.thumbnail.path + '.' + comic.thumbnail.extension)" :src="img.path + '.' + img.extension" alt="" class="thumbnail-img">
                        </div>
                    </section>
                    
                    <div>
                        <section  v-if="comic.creators.available != 0">
                            <h2>Creators</h2>
                        </section>
                        <div  v-if="comic.creators.available != 0" class="creators-container">

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
    </main>
</template>


<script setup>
import store from '../store';
import { ref } from 'vue';

const comic = ref([])
comic.value = store.state.comic
console.log(comic.value)

const handleHome = () => {
    store.commit('cleanComic')
}

</script>


<style scoped>
header{
    text-align: center;
    margin-top: 100px;
}
nav{
    margin-left: 200px;
    background-color:orange;
    width: 100px;
    border-radius: 100px;
    text-align: center;
    padding: 20px;
}

main{
    background-color: black;
    color:white;
    text-align: center;
}

.title{
    padding: 20px;
}

.comic-container {
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

.img-container{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
}

.img-container img{
    margin: 20px;
    padding: 5px;
    border-radius: 20px;
    box-shadow: 2px 2px 2px 10px grey ;
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


.details-section{
    cursor: pointer;
    background-color: orange;
    width: 10vw;
    margin: auto;
    border-radius: 20px;
}

@media only screen and (max-width: 600px) {
    header {
    align-items: center;
    justify-content: center;
    margin: auto;
  }
  nav{
    align-items: center;
    justify-content: center;
    margin: auto;
  }
}
</style>