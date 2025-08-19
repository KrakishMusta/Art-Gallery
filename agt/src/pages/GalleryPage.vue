<script setup lang="ts">
import CardWrapper from '@/components/CardWrapper.vue';
import Search from '@/components/Search.vue';
</script>
<template>
  <div class="page-wrapper">
    <Search />
    <CardWrapper />
  </div>
</template>
<style scoped lang="scss">
.page-wrapper {
  --marginTop: var(--page-margin-top);
  --marginBottom: var(--page-margin-bottom);
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-width: 1240px;
  margin: var(--marginTop) var(--main-margin) var(--marginBottom);
  gap: 20px;
}

@media (min-width: 1441px) {
  .page-wrapper {
    margin: var(--marginTop) auto var(--marginBottom);
  }
}
</style>
