<script setup lang="ts">
import CardItem from "@/components/CardItem.vue";
import { useCards } from "@/stores/cards";

const { cards, turnCard } = useCards();

const onCardClick = (index: number) => {
  turnCard(index);
};
</script>

<template>
  <header>
    <div class="logo-container">
      <h1 class="logo">Concentration Game</h1>
    </div>
    <div class="score-container">
      <p class="score">
        TRY: 000<br />
        SCORE: 000
      </p>
    </div>
  </header>

  <main class="card-container">
    <CardItem
      v-for="(card, index) in cards"
      :key="index"
      v-bind="card"
      @click="onCardClick(index)"
    />
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

.card-container {
  display: grid;
  column-gap: 15px;
  grid-template-columns: repeat(10, 100px);
  grid-template-rows: repeat(2, 175px);
  margin: 0 auto;
  row-gap: 15px;
  width: var(--base-width);
}
</style>
