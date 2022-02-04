<template>
  <div v-swiper="swiperOption">
    <div class="swiper-wrapper mb-16 pt-1 sm:pt-0 sm:mb-24">
      <RoadmapPhase
        class="swiper-slide"
        v-for="(phase, index) in $t('roadmap.phases')"
        :key="index + 1"
        :phases="phase.phases"
        :phase="index + 1"
      />
    </div>
    <div class="swiper-pagination" slot="pagination"></div>
    <div class="lg:flex hidden">
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
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
  computed: {
    isLg() {
      return this.$breakpoints.lLg
    },
  },
}
</script>
