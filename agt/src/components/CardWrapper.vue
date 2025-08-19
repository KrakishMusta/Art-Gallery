<script setup lang="ts">
import Card from './Card.vue';
</script>
<template>
  <div class="card-wrapper">
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
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

  &__card {
    --span: var(--column-span);
    grid-column: span var(--span);
    background-color: red;
    aspect-ratio: calc(392 / 260);
  }
}
</style>
