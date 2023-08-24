<script setup lang="ts">
import { storeToRefs } from "pinia";
import CardList from "@/components/CardList.vue";
import { useScores } from "@/stores/scores";

const { trialCount, pairedCount } = storeToRefs(useScores());
</script>

<template>
  <header>
    <div class="logo-container">
      <h1 class="logo">Concentration Game</h1>
    </div>
    <div class="score-container">
      <p class="score">
        TRY: {{ trialCount }}<br />
        SCORE: {{ pairedCount }}
      </p>
    </div>
  </header>

  <main class="main-container">
    <CardList />
  </main>
</template>


<style lang="css">
:root {
  --base-width: 1135px;
}

.logo-container {
  background-color: black;
  padding-bottom: 10px;
}

.logo {
  color: red;
  font-family: "Monofett", cursive;
  font-size: 60px;
  margin: 0 auto;
  width: var(--base-width);
}

.score-container {
  background-color: #444;
  padding: 15px 0;
  margin-bottom: 60px;
}

.score {
  color: white;
  font-family: "Press Start 2P", cursive;
  line-height: 1.8;
  text-align: right;
  margin: 0 auto;
  width: var(--base-width);
}

.main-container {
  margin: 0 auto;
  width: var(--base-width);
}
</style>
