<script setup lang="ts">
import { onMounted, computed, ref } from 'vue'
import axios from 'axios'

import type { Ref } from 'vue'
import type { Villager } from '@/types/Villager'
import { RequestError } from '@/types/RequestError'

import Loading from '@/components/Loading.vue'
import ErrorPanel from '@/components/ErrorPanel.vue'
import VillagerProfile from '@/components/VillagerProfile.vue'
import VillagerCard from '@/interfaces/VillagerCard.vue'

const isLoading: Ref<boolean> = ref(true)
const errorData: Ref<RequestError | null> = ref(null)
const villagers: Ref<Villager[]> = ref([])

const selectedIndex: Ref<number> = ref(0)

const selectedVillager = computed(() => {
  if (!villagers.value || villagers.value.length == 0) return null;

  return villagers.value[selectedIndex.value]
})


const fetchVillagers = () => {
  axios.get('https://api.nookipedia.com/villagers', {
    params: {
      nhdetails: true
    },
    headers: {
      'X-API-KEY': import.meta.env.VITE_NOOKIPEDIA_API_KEY,
      'Content-Type': 'application/json',
      'Accept-Version': '1.0.0'
    }
  })
  .then(resp => {
    villagers.value = resp.data

    selectedIndex.value = Math.floor(Math.random() * (villagers.value.length - 1))
  })
  .catch(err => {
    if (err.response.data) {
      errorData.value = err.response.data
    } else {
      errorData.value = {
        title: '',
        details: `${err.message} (${err.code})`
      }
    }
  })
  .finally(() => {
    isLoading.value = false
  })
}

onMounted(() => {
  fetchVillagers()
})
</script>

<template>
  <main>
    <VillagerCard>
      <!-- Loading -->
      <Loading v-show="isLoading" />

      <!-- Error handler -->
      <ErrorPanel
        :errorData="errorData"
        v-show="errorData"
      />

      <!-- Content -->
      <VillagerProfile
        :data="selectedVillager"
        v-show="selectedVillager"
      />
    </VillagerCard>
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-wrap: wrap;
  padding: 70px 20px 60px;
  min-height: 100vh;
  background-image: url('@/assets/animal-crossing-bg.jpg');
  background-size: cover;
  background-position: bottom right;
  background-repeat: no-repeat;
}
</style>
