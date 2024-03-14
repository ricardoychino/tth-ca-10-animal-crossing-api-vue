<script setup lang="ts">
</script>

<template>
  <div class="balloon">
    <slot></slot>
  </div>
</template>

<style scoped>
.balloon {
  position: relative;
  padding: 30px 40px;
  min-height: 120px;
  background-image: url('@/assets/chat-bubble.png');
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
}
@media (max-width: 450px) {
  .main {
    padding: 25px 30px;
    min-height: 90px;
  }
}
</style>