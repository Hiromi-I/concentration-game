<script setup lang="ts">
import { computed } from 'vue'
import { useCardStore } from '@/stores/cards'
import { useScoreStore } from '@/stores/scores'

const cardStore = useCardStore()
const scoreStore = useScoreStore()

const isVisible = computed(() => scoreStore._pairedCount === 10)
const reset = () => {
  cardStore.$reset()
  scoreStore.$reset()
}
</script>

<template>
  <div v-if="isVisible" class="overlay">
    <div class="card">
      <h3 class="card-title">Game Clear</h3>
      <img
        src="@/assets/images/congratulations.gif"
        width="320"
        height="300"
        class="congratulations-image"
      />
      <button @click="reset" class="reset-button">Replay</button>
    </div>
  </div>
</template>

<style scoped>
.overlay {
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  height: 100vh;
  left: 0;
  top: 0;
  position: fixed;
  width: 100vw;
}
.card {
  background-color: #fff;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  padding: 15px;
  text-align: center;
  width: 400px;
}
.card-title {
  font-size: 30px;
  font-weight: bold;
  padding: 30px 0;
}
.congratulations-image {
  display: block;
  margin: 0 auto;
}
.reset-button {
  background-color: black;
  color: white;
  cursor: pointer;
  margin: auto auto 10px;
  line-height: 40px;
  width: 150px;
}
</style>
