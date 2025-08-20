import { defineStore } from 'pinia';
import api from '@/services/api.ts';

export interface Author {
  id: number;
  name: string;
}

export interface Location {
  id: number;
  location: string;
}

export interface Query {
  paintingName: string;
}

export const useGalleryStore = defineStore('gallery', {
  state: () => ({
    // пагинация
    paintings: [] as any[],

    currentPage: 1 as number,
    totalCount: 0 as number,

    // справочники
    authorsDictionary: {} as Record<number, string>,
    locationsDictionary: {} as Record<number, string>,

    // запрос
    query: {
      paintingName: '',
    } as Query,

    // лимит для пагинации
    limit: 6 as number,
  }),

  actions: {
    setPage(page: number) {
      if (page >= 1 && page <= this.totalCount) {
        this.currentPage = page;
      }
    },

    setTotalCount(total: number) {
      this.totalCount = total;
    },

    setAuthors(authors: Author[]) {
      this.authorsDictionary = Object.fromEntries(
        authors.map((a) => [a.id, a.name])
      );
    },

    setLocations(locations: Location[]) {
      this.locationsDictionary = Object.fromEntries(
        locations.map((l) => [l.id, l.location])
      );
    },

    setQuery(name: string) {
      this.query.paintingName = name;
      this.currentPage = 1;
    },

    async fetchPaintings() {
      console.log('Fetching', this.currentPage);
      const response = await api.get('/paintings', {
        params: {
          _limit: this.limit,
          _page: this.currentPage,
          q: this.query.paintingName,
        },
      });
      console.log(response.data);
      this.paintings = response.data;
      this.totalCount = Number(response.headers['x-total-count']);
    },
  },
});
