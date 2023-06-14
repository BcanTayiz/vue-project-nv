<template>
    <div class="progress">
        <div class="progress-bar" :style="{ width: progress + '%' }"></div>
    </div>
</template>



<script setup>
import { ref, onMounted } from 'vue';

const progress = ref(0);

const updateProgress = () => {
    const interval = setInterval(() => {
        
        if (progress.value <= 90){
            progress.value += 10
        }
    },100)

};

onMounted(() => {
    updateProgress(); // Bileşen yüklendiğinde ilerlemeyi güncelleme işlevini çağırıyoruz
});
</script>




<style scoped>
.progress-bar {
    width: 100%;
    background-color: #298327;
    height: 20px;
    border-radius: 10px;
}

.progress {
    height: 100%;
    width: 300px;
    background-color: #c5d8c6;
    border-radius: 10px;
    transition: width 0.3s;
}
</style>