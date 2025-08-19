<script setup lang="ts"></script>
<template>
  <div class="card-tablet">
    <!-- <img src="" alt="" /> -->
    <div class="card-tablet__overlay">
      <div class="card-tablet__info-wrapper">
        <span class="card-tablet__line"></span>
        <div class="card-tablet__info card-tablet__info--default">
          <p class="top-text">cascate di tivoli</p>
          <p class="top-bottom">1761</p>
        </div>
        <div class="card-tablet__info card-tablet__info--hover">
          <p class="top-text">Artist</p>
          <p class="top-bottom">Location</p>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.card-tablet {
  --span: var(--column-span);
  --bgColor: var(--page-bg-color);
  overflow: hidden;
  position: relative;
  grid-column: span var(--span);
  background-color: var(--accent-red);
  aspect-ratio: calc(392 / 260);
  &:hover {
    .card-tablet__info--default {
      transform: translateY(100%);
      opacity: 0;
    }
    .card-tablet__info--hover {
      transform: translateX(calc(0% + 4px));
      opacity: 1;
    }
  }
  &:not(:hover) {
    .card-tablet__info--default {
      transform: translateY(0%);
      opacity: 1;
      transition:
        transform 0.5s ease 0.1s,
        opacity 0.5s ease 0.1s; // возвращается сразу
    }
    .card-tablet__info--hover {
      transform: translateX(-100%);
      opacity: 0;
      transition:
        transform 0.5s ease 0.1s,
        opacity 0.5s ease 0.1s; // уезжает с задержкой
    }
  }

  &__info--default {
    transform: translateY(0%);
    opacity: 1;
    transition:
      transform 0.5s ease 0.1s,
      opacity 0.5s ease 0.1s; // скрытие с задержкой
  }

  &__info--hover {
    position: absolute;
    transform: translateX(-100%);
    opacity: 0;
    transition:
      transform 0.5s ease 0.1s,
      opacity 0.5s ease 0.1s; // въезжает сразу
  }

  &__overlay {
    display: flex;
    align-items: center;
    width: 80%;
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: var(--bgColor);
    aspect-ratio: calc(300 / 66);
  }
  &__info-wrapper {
    display: flex;
    align-items: stretch;
    height: min-content;
  }
  &__line {
    display: block;
    width: 4px;
    background-color: var(--accent-color);
  }
  &__info {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0 20px;
    gap: 8px;
    // transition: transform 0.3s ease-out;
    // transition: transform 0.3s ease;
    .top-text {
      font-weight: 500;
      font-family: 'Cormorant SC';
      color: var(--theme-primary);
    }
    .top-bottom {
      font-weight: 700;
      font-family: 'Inter';
      color: var(--accent-color);
    }
  }
}

@media (min-width: 320px) and (max-width: 767px) {
  .top-text {
    font-size: 12px;
  }
  .top-bottom {
    font-size: 8px;
  }
}
@media (min-width: 767px) {
  .top-text {
    font-size: 16px;
  }
  .top-bottom {
    font-size: 12px;
  }
}
@media (min-width: 320px) and (max-width: 1279px) {
  .card-tablet__line {
    display: none;
  }
}
</style>
