<script setup lang="ts">
import type { RequestError } from '@/types/RequestError'

import Balloon from '@/interfaces/Balloon.vue'

const props = defineProps<{
  errorData: RequestError | null
}>()
</script>

<template>
  <div id="error-panel">
    <Balloon>
      <h2>Oops!</h2>
      <h4>{{ errorData?.title }}</h4>
      <p>{{ errorData?.details }}</p>
    </Balloon>
  </div>
</template>

<style scoped>
</style>