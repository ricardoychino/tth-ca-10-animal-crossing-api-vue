<script setup lang="ts">
</script>

<template>
  <div id="loading">
    <!-- Code from https://github.com/n3r4zzurr0/svg-spinners/blob/main/svg-css/3-dots-fade.svg?short_path=f66ee04 -->
    <svg width="80" height="80" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <circle class="dot" cx="4" cy="12" r="3"/>
      <circle class="dot mid" cx="12" cy="12" r="3"/>
      <circle class="dot last" cx="20" cy="12" r="3"/>
    </svg>
  </div>
</template>

<style scoped>
  #loading {
    margin-top: 80px;
    text-align: center;
  }
  /* Code from https://github.com/n3r4zzurr0/svg-spinners/blob/main/svg-css/3-dots-fade.svg?short_path=f66ee04 */
  .dot {
    fill: var(--tom-nook-color);
    animation: fadeAnimation .8s linear infinite;
    animation-delay: -.8s
  }
  .mid {
    animation-delay: -.65s
  }
  .last {
    animation-delay: -.5s
  }
  @keyframes fadeAnimation {
    93.75%,100%{opacity: .2}
  }
</style>