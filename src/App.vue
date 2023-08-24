<script setup lang="ts">
import ScoreDisplay from '@/components/ScoreDisplay.vue'
import CardList from '@/components/CardList.vue'
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
