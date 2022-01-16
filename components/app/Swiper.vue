<template>
  <div class="example">
    <div v-swiper="swiperOption">
      <div class="swiper-wrapper mb-16 sm:mb-24">
        <RoadmapPhase
          class="swiper-slide"
          v-for="(phase, index) in $t('roadmap.phases')"
          :key="index + 1"
          :phases="phase.phases"
          :phase="index + 1"
        />
      </div>
      <div class="swiper-pagination" slot="pagination"></div>
      <template v-if="isLg">
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </template>
    </div>
  </div>
</template>

<script>
import { directive } from 'vue-awesome-swiper'

export default {
  name: 'Slider',
  directives: {
    swiper: directive,
  },
  data() {
    return {
      swiperOption: {
        centeredSlides: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          type: 'bullets',
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>'
          },
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        breakpoints: {
          1024: {
            slidesPerView: 3,
            initialSlide: 1,
          },
          640: {
            slidesPerView: 1,
            initialSlide: 0,
          },
        },
      },
    }
  },
}
</script>

<style>
.swiper-button-prev,
.swiper-button-next {
  color: #0ce2af !important;
}
.swiper-pagination-bullet {
  height: 24px !important;
  width: 24px !important;
  padding-top: 1.5px;
}
.swiper-pagination-bullet-active {
  background: #0ce2af !important;
}
</style>
