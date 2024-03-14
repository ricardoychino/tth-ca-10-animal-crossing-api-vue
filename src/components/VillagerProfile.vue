<script setup lang="ts">
import Balloon from '@/interfaces/Balloon.vue'
import VillagerImage from '@/components/VillagerImage.vue';
import VillagerNameBadge from '@/components/VillagerNameBadge.vue';
import VillagerInfo from '@/components/VillagerInfo.vue';

import type { Villager } from '@/types/Villager'

const props = defineProps<{
  data: Villager | null
}>()
</script>

<template>
  <div id="content">
    <div class="profile">
      <VillagerImage
        :gender="data?.gender"
        :image-url="(data?.nh_details?.icon_url ?? data?.image_url)"
        :alt-text="`${data?.name}'s photo'`"
        :has-nh-image="typeof data?.nh_details?.icon_url !== 'undefined'"
      />
      <Balloon>
        <VillagerNameBadge
          :title-color="data?.title_color"
          :badge-color="data?.text_color"
        >
          {{ data?.name }}
        </VillagerNameBadge>
        <p class="quote">
          {{ data?.quote }}
          <em v-show="data?.phrase"> "{{ data?.phrase }}"</em>
        </p>
      </Balloon>
    </div>
    <div class="characteristics">
      <!-- Species -->
      <VillagerInfo type="species">
        {{ data?.species }}
      </VillagerInfo>

      <!-- Personality -->
      <VillagerInfo type="personality">
        {{ data?.personality }}
      </VillagerInfo>

      <!-- Hobby -->
      <VillagerInfo
        type="hobby"
        :subtype="data?.nh_details?.hobby"
        :is-defined="typeof data?.nh_details?.hobby !== 'undefined'"
      >
        {{ data?.nh_details?.hobby ?? 'Not specified' }}
      </VillagerInfo>

      <!-- Birthday -->
      <VillagerInfo
        type="birthday"
        :is-defined="data?.birthday_month !== '' && data?.birthday_day !== ''"
      >
        {{ data?.birthday_month && data?.birthday_day ? `${data.birthday_month} ${data.birthday_day}` : 'Unknown' }}
      </VillagerInfo>
    </div>
  </div>
</template>

<style scoped>
.profile {
  position: relative;
  margin-bottom: 20px;
}
.quote {
  margin: 0;
  font-size: 1.125em;
  font-weight: 700;
  background-color: var(--primary-background);
}
</style>