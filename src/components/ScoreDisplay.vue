<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useScores } from '@/stores/scores'

const { trialCount, pairedCount } = storeToRefs(useScores())
</script>

<template>
  <div class="score-container">
    <p class="score">
      TRY: {{ trialCount }}<br />
      SCORE: {{ pairedCount }}
    </p>
  </div>
</template>

<style scoped>
.score-container {
  background-color: #444;
  padding: 15px 0;
  margin-bottom: 60px;
}

.score {
  color: white;
  font-family: 'Press Start 2P', cursive;
  line-height: 1.8;
  text-align: right;
  margin: 0 auto;
  width: var(--base-width);
}
</style>
