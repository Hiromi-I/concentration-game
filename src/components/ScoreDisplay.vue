<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useScoreStore } from '@/stores/scores'

const { trialCount, pairedCount } = storeToRefs(useScoreStore())
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
  line-height: 1.8;
  text-align: right;
  margin: 0 auto;
  width: var(--base-width);
}
</style>
