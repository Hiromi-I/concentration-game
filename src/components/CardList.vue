<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useCards } from '@/stores/cards'
import CardItem from './CardItem.vue'

const { turnCard } = useCards()
const { cards } = storeToRefs(useCards())
</script>

<template>
  <ul class="card-container">
    <CardItem v-for="(card, index) in cards" :key="index" v-bind="card" @click="turnCard(index)" />
  </ul>
</template>

<style>
.card-container {
  display: grid;
  column-gap: 15px;
  grid-template-columns: repeat(10, 100px);
  grid-template-rows: repeat(2, 175px);
  row-gap: 15px;
  width: 100%;
}
</style>
