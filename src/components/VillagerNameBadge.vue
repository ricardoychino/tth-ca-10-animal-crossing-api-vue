<script setup lang="ts">
const props = defineProps<{
  titleColor?: string,
  badgeColor?: string
}>()
</script>

<template>
  <span class="name-badge"
    :style="{
      color: titleColor ? `#${titleColor}` : 'var(--primary-text)',
      backgroundColor: badgeColor ? `#${badgeColor}` : 'var(--primary-background)'
    }"
  >
    <slot></slot>
  </span>
</template>

<style scoped>
.name-badge {
  display: inline-block;
  position: absolute;
  top: -10px;
  left: 15px;
  padding: 5px 25px;
  border-radius: 50px;
  font-weight: 500;
  color: var(--primary-text);
  background-color: var(--primary-background);
  box-shadow: 0 0 15px -5px #00000080;
  transform: rotate(-7.5deg);
}
/* For mobile view */
@media (max-width: 450px) {
  .name-badge {
    font-size: 13px;
    padding: 5px 10px;
  }
}
</style>