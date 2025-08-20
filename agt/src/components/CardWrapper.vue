<script setup lang="ts">
import Card from './Card.vue';
import type { CardStructure } from '@/types/tapes.ts';

const props = defineProps<{
  paintings: CardStructure[];
}>();
</script>
<template>
  <div class="card-wrapper">
    <Card :key="card.id" v-for="card in paintings" :painting="card" />
  </div>
</template>
<style scoped lang="scss">
.card-wrapper {
  --columnsCount: var(--columns-count);
  --gap: var(--columns-gutter);
  display: grid;
  grid-template-columns: repeat(var(--columnsCount), 1fr);
  gap: var(--gap);
  max-width: 1440px;
}
</style>
