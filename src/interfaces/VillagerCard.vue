<script setup lang="ts">
</script>

<template>
  <div class="villager-card">
    <slot></slot>
  </div>
</template>

<style scoped>
.villager-card {
  display: flex;
  flex-direction: column;
  position: relative;
  max-width: 100%;
  width: 432px;
  height: 691px;
  margin: auto;
  margin-bottom: 50px;
  padding: 30px 15px 290px;
  border-radius: 15px;
  box-shadow: 0 5px 15px #00000080;
  background-image: url('@/assets/animal-crossing-wood-bg.png');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}
@media (max-width: 450px) {
  .villager-card {
    width: calc(100vw - 40px);
    height: calc(1.6 * (100vw - 40px));
  }
}
</style>