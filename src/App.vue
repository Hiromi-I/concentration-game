<script setup lang="ts">
import ScoreDisplay from '@/components/ScoreDisplay.vue'
import CardList from '@/components/CardList.vue'
import GameClear from '@/components/GameClear.vue'
</script>

<template>
  <header>
    <div class="logo-container">
      <h1 class="logo">Concentration Game</h1>
    </div>
    <ScoreDisplay />
  </header>

  <main class="main-container">
    <CardList />
  </main>
  <GameClear />
</template>

<style lang="css">
.logo-container {
  background-color: black;
  padding-bottom: 10px;
}

.logo {
  color: red;
  font-family: 'Monofett', cursive;
  font-size: 60px;
  margin: 0 auto;
  width: var(--base-width);
}

.main-container {
  margin: 0 auto;
  width: var(--base-width);
}
</style>
