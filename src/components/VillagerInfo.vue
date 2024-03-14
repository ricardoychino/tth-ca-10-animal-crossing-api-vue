<script setup lang="ts">
import CharacteristicIcon from '@/components/CharacteristicIcon.vue';

export interface Props {
  type: string,
  subtype?: string,
  isDefined?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  subtype: '',
  isDefined: true
})
</script>

<template>
  <div class="item" :data-type="type">
    <label>{{ type }}</label>
    <div class="response">
      <CharacteristicIcon :type="type !== 'hobby' ? type : subtype" />
      <span :class="{'unavailable': !isDefined}">
        <slot></slot>
      </span> 
    </div>
  </div>
</template>

<style scoped>
.item {
  --species-background: #ffa500;
  --personality-background: #107896;
  --hobby-background: #9a2617;
  --birthday-background: #829356;
}
.item {
  display: flex;
  align-items: center;
  background-color: var(--primary-background); /* Default */
  margin-bottom: 10px;
  border: 5px solid #00000026;
  border-radius: 10px;
}
label {
  color: #FFFFFF;
  margin-left: 15px;
  font-size: 0.9375em;
  font-weight: 200;
  text-transform: capitalize;
}
.response {
  flex-basis: 60%;
  margin-left: auto;
  padding: 5px;
  display: flex;
  align-items: center;
  font-weight: 500;
  text-transform: capitalize;
  border-radius: 5px;
  box-shadow: -2.5px 0 15px -2.5px #00000080;
  background-color: var(--primary-background);
}
.response .unavailable {
  font-size: 0.85em;
  font-weight: 200;
  font-style: italic;
}

/* Response background color */
.item[data-type="species"] {
  background-color: #ffa500;
}
.item[data-type="personality"] {
  background-color: #107896;
}
.item[data-type="hobby"] {
  background-color: #9a2617;
}
.item[data-type="birthday"] {
  background-color: #829356;
}
</style>