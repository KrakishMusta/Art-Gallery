<script setup lang="ts">
import { onMounted, watch } from 'vue';
import CardWrapper from '@/components/CardWrapper.vue';
import Search from '@/components/Search.vue';
import Pagination from '@/components/Pagination.vue';

import { useGalleryStore } from '@/stores/gallery.ts';

const gallery = useGalleryStore();

onMounted(() => gallery.fetchPaintings());

watch(
  () => gallery.currentPage,
  () => gallery.fetchPaintings()
);
watch(
  () => gallery.query.paintingName,
  () => gallery.fetchPaintings()
);
</script>
<template>
  <div class="page-wrapper">
    <Search />
    <CardWrapper :paintings="gallery.paintings" />
    <Pagination
      :currentPage="gallery.currentPage"
      :totalPages="Math.ceil(gallery.totalCount / gallery.limit)"
      @page-changed="gallery.setPage"
    />
  </div>
</template>
<style scoped lang="scss">
.page-wrapper {
  --marginTop: var(--page-margin-top);
  --marginBottom: var(--page-margin-bottom);
  display: flex;
  flex-direction: column;
  max-width: 1240px;
  margin: var(--marginTop) var(--main-margin) 0;
  padding-bottom: var(--marginBottom);
  gap: 20px;
}

@media (min-width: 1441px) {
  .page-wrapper {
    margin: var(--marginTop) auto var(--marginBottom);
  }
}
</style>
