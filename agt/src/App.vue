<script setup lang="ts">
import { onMounted } from 'vue';
import MasterHead from './components/MasterHead.vue';
import GalleryPage from './pages/GalleryPage.vue';
import api from './services/api.ts';
import { useGalleryStore } from '@/stores/gallery.ts';

const gallery = useGalleryStore();

onMounted(async () => {
  const authorsResponse = await api.get('/authors');
  await gallery.setAuthors(authorsResponse.data);

  const locationsResponse = await api.get('/locations');
  await gallery.setLocations(locationsResponse.data);
});
</script>

<template>
  <MasterHead />
  <GalleryPage />
</template>

<style scoped></style>
