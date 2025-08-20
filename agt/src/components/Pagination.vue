<script setup lang="ts">
import { onMounted, computed } from 'vue';

const props = defineProps<{
  currentPage: number;
  totalPages: number;
}>();

const emit = defineEmits<{
  (e: 'page-changed', page: number): void;
}>();

interface PaginationLink {
  isActive: boolean;
  link: number;
}

const links = computed(() => {
  // for (let i = 1; i <= props.totalPages + 1; i += 1)
  // {
  //   if
  // }
  return Array.from({ length: props.totalPages }, (_, i) => ({
    link: i + 1,
    isActive: i + 1 === props.currentPage,
  }));
});

const pagesToShow = computed(() => {
  const pages = [];
  const total = props.totalPages;
  const current = props.currentPage;

  if (total <= 5) {
    // Показываем все страницы
    for (let i = 0; i <= total; i += 1)
      pages.push({
        lable: 1,
        link: i + 1,
        isActive: i + 1 === props.currentPage,
      });
  } else {
    // Всегда первая
    pages.push({
      lable: 1,
      link: 1,
      isActive: props.currentPage === 1,
    });

    // Левая "..."
    if (current > 3)
      pages.push({
        lable: '...',
        link: 0,
        isActive: false,
      });

    // Соседние страницы

    let start = Math.max(2, current - 1);
    let end = Math.min(total - 1, current + 1);
    if (current === 1) {
      end += 1;
    }
    if (current === total) {
      start -= 1;
    }

    for (let i = start; i <= end; i += 1)
      pages.push({
        lable: i,
        link: i,
        isActive: props.currentPage === i,
      });

    // Правая "..."
    if (current < total - 2)
      pages.push({
        lable: '...',
        link: 0,
        isActive: false,
      });

    // Последняя
    pages.push({
      lable: total,
      link: total,
      isActive: props.currentPage === total,
    });
  }

  return pages;
});

const goToPage = (page: number) => {
  console.log('gotopage', page);
  if (page >= 1 && page <= props.totalPages) {
    emit('page-changed', page);
  }
};

onMounted(() => {
  console.log(props.currentPage, props.totalPages);
});
</script>
<template>
  <div class="nav-wrapper">
    <button
      type="button"
      class="nav-wrapper__arrow-button"
      :class="{ active: props.currentPage !== 1 }"
      :disabled="currentPage === 1"
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M13.6877 4.28349C13.5129 4.06977 13.1979 4.03827 12.9841 4.21313L6.38415 9.61313C6.26808 9.7081 6.20077 9.85015 6.20077 10.0001C6.20077 10.1501 6.26808 10.2921 6.38415 10.3871L12.9841 15.7871C13.1979 15.962 13.5129 15.9305 13.6877 15.7167C13.8626 15.503 13.8311 15.188 13.6174 15.0131L7.49036 10.0001L13.6174 4.98709C13.8311 4.81223 13.8626 4.49722 13.6877 4.28349Z"
        />
      </svg>
    </button>
    <nav class="nav-wrapper__pagination">
      <button
        :disabled="page.isActive"
        :class="{ active: page.isActive }"
        class="nav-wrapper__page-button"
        type="button"
        :key="page.link"
        v-for="page in pagesToShow"
        @click="goToPage(page.link)"
      >
        {{ page.lable }}
      </button>
    </nav>
    <button
      type="button"
      class="nav-wrapper__arrow-button"
      :class="{ active: props.currentPage !== props.totalPages }"
      :disabled="currentPage === totalPages"
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M6.31226 4.28337C6.48712 4.06965 6.80213 4.03815 7.01585 4.21301L13.6159 9.61301C13.7319 9.70798 13.7992 9.85002 13.7992 9.99999C13.7992 10.15 13.7319 10.292 13.6159 10.387L7.01585 15.787C6.80213 15.9618 6.48712 15.9303 6.31226 15.7166C6.13739 15.5029 6.16889 15.1879 6.38261 15.013L12.5096 9.99999L6.38261 4.98697C6.16889 4.81211 6.13739 4.49709 6.31226 4.28337Z"
        />
      </svg>
    </button>
  </div>
</template>
<style scoped lang="scss">
.nav-wrapper {
  display: flex;
  margin-top: 12px;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 20px;
  &__pagination {
    display: flex;
    gap: 4px;
  }
  &__page-button {
    position: relative;
    font-family: 'Inter';
    font-weight: 300;
    width: 24px;
    height: 24px;
    border: none;
    color: var(--primary-gray);
    border-radius: 4px;
    background-color: transparent;
    &.active {
      background-color: rgba(var(--button-rgb), var(--button-opacity));
      font-weight: 500;
    }
    &:not(.active):hover {
      font-weight: 500;
      &::after {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        height: 1px;
        background-color: var(--theme-gray);
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        pointer-events: none;
      }
    }
  }
  &__arrow-button {
    display: flex;
    width: fit-content;
    height: fit-content;
    padding: 0;
    background-color: transparent;
    border-radius: 4px;
    border: none;
    svg {
      path {
        fill: var(--primary-gray);
      }
    }
    &.active:hover {
      background-color: rgba(var(--button-rgb), var(--button-opacity));
      svg {
        path {
          fill: var(--primary);
        }
      }
    }
  }
}
@media (min-width: 768px) {
  .nav-wrapper {
    margin-top: 20px;
  }
}
</style>
