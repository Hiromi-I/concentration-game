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
    <div
      v-for="n in 20"
      :key="n"
      class="card"
    ></div>
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

.card {
  background: repeating-linear-gradient(
    90deg,
    #f00,
    #f00 5px,
    #f66 0,
    #f66 6px
  );
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7);
  height: 175px;
  position: relative;
  width: 100px;
}
</style>
