<script setup lang="ts">
</script>

<template>
<button type="button" id="refresh-btn" @click="$emit('click')">
  <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21 3V8M21 8H16M21 8L18 5.29168C16.4077 3.86656 14.3051 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.2832 21 19.8675 18.008 20.777 14" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
</button>
</template>

<style scoped>
#refresh-btn {
  position: absolute;
  top: 0;
  right: 0;
  height: 42px;
  width: 42px;
  border: none;
  background: none;
  color: var(--tom-nook-color);
  cursor: pointer;
  z-index: 2;
}
#refresh-btn svg {
  stroke: var(--tom-nook-color);
}
</style>