<script setup lang="ts">
import type { Card } from "@/types/card";

const props = defineProps<Card>();
const imagePath = new URL(`../assets/images/cat-${props.number}.png`, import.meta.url).href;
</script>

<template>
  <div class="card-wrapper">
    <transition>
      <div
        v-if="!isTurned"
        class="card-inner card-back"
      ></div>
      <img
        v-else
        alt="cat image"
        :src="imagePath"
        class="card-inner"
      />
    </transition>
  </div>
</template>

<style scoped>
.card-wrapper {
  height: 175px;
  position: relative;
  width: 100px;
}

.card-inner {
  border-radius: 5px;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.5);
  height: 175px;
  left: 0;
  position: absolute;
  user-select: none;
  top: 0;
  transition: transform 0.1s, opacity 0.1s;
  width: 100px;
}

.card-back {
  background: repeating-linear-gradient(
    90deg,
    #f00,
    #f00 5px,
    #f66 0,
    #f66 6px
  );
}

.v-enter-from,
.v-leave-to {
  transform: rotateY(0deg);
  opacity: 0;
}
.v-enter-to,
.v-leave-from {
  transform: rotateY(90deg);
  opacity: 1;
}
</style>