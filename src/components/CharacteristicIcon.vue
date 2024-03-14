<script setup lang="ts">
const props = defineProps<{
  type: string
}>()
</script>

<template>
  <i class="icon" :data-type="type.toLowerCase()"></i>
</template>

<style scoped>
.icon {
  height: 24px;
  width: 24px;
  margin-right: 10px;
  background-size:100% 100%;
  -o-background-size: 100% 100%;
  -webkit-background-size: 100% 100%;
  background-size: cover;
}
/* For mobile view */
@media (max-width: 450px) {
  .icon {
    height: 20px;
    width: 20px;
  }
}
/* Response icons */
[data-type="species"] {     background-image: url('@/assets/paw-print.svg'); }
[data-type="personality"] { background-image: url('@/assets/personality.svg'); }
[data-type="birthday"] {    background-image: url('@/assets/birthday-cake.svg'); }
[data-type="education"] {   background-image: url('@/assets/Education.svg'); }
[data-type="fashion"] {     background-image: url('@/assets/Fashion.svg'); }
[data-type="fitness"] {     background-image: url('@/assets/Fitness.svg'); }
[data-type="music"] {       background-image: url('@/assets/Music.svg'); }
[data-type="nature"] {      background-image: url('@/assets/Nature.svg'); }
[data-type="play"] {        background-image: url('@/assets/Play.svg'); }
</style>