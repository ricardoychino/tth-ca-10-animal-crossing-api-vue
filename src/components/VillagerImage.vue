<script setup lang="ts">
const props = defineProps<{
  gender?: string,
  imageUrl?: string,
  altText: string,
  hasNhImage: boolean
}>()
</script>

<template>
  <figure :class="gender?.toLocaleLowerCase()">
    <img
      :src="imageUrl"
      :alt="altText"
      :class="{'not-nh': !hasNhImage}"
    />
  </figure>
</template>

<style scoped>
figure {
  position: relative; /* Just to apply z-index */
  height: 6.875rem; /* 110px */
  width: 6.875rem; /* 110px */
  /* padding: 20px; */
  margin: -4.375rem auto -1.25rem; /* -70px auto -20px; */
  border: 3px solid #000000;
  border-radius: 50%;
  overflow: hidden;
  background-color: var(--primary-background);
  box-shadow: 0 0 15px #00000080;
  z-index: 1;
}
figure.male {
  border-color: var(--vilager-border-blue);
}
figure.female {
  border-color: var(--vilager-border-pink);
}
figure img {
  width: 100%;
}
figure img.not-nh {
  padding: 15px;
}
</style>