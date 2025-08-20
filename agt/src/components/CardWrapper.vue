<script setup lang="ts">
import { computed } from 'vue';
import Card from './Card.vue';
import type { CardStructure } from '@/types/tapes.ts';

const props = defineProps<{
  paintings: CardStructure[];
  query: string;
}>();

const isHasCards = computed(() => props.paintings.length > 0);
</script>
<template>
  <div class="cards" v-if="isHasCards">
    <Card :key="card.id" v-for="card in props.paintings" :painting="card" />
  </div>

  <div class="no-result" v-else>
    <div class="no-result__message">
      <p class="no-result__details">
        No matches for <span class="no-result__query">{{ query }}</span>
      </p>
      <p class="no-result__instructions">
        Please try again with a different spelling or keywords.
      </p>
    </div>
  </div>
</template>
<style scoped lang="scss">
.cards {
  --columnsCount: var(--columns-count);
  --gap: var(--columns-gutter);
  display: grid;
  grid-template-columns: repeat(var(--columnsCount), 1fr);
  gap: var(--gap);
  max-width: 1440px;
}

.no-result {
  --columnsCount: var(--columns-count);
  --gap: var(--columns-gutter);
  display: grid;
  grid-template-columns: repeat(var(--columnsCount), 1fr);
  gap: var(--gap);
  max-width: 1440px;

  &__message {
    font-family: 'Inter', sans-serif;
    display: flex;
    flex-direction: column;
    gap: 12px;
    --span: var(--column-span);
    grid-column: span var(--span);
    text-align: start;
    line-height: 140%;
    letter-spacing: 0;
  }

  &__details {
    color: var(--primary-gray);
    font-size: 16px;
    font-weight: 300;
  }

  &__query {
    font-weight: 500;
  }

  &__instructions {
    font-size: 14px;
    color: var(--secondary-gray);
  }
}
</style>
