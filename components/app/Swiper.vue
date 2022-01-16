<template>
  <div class="example">
    <div v-swiper="swiperOption">
      <div class="swiper-wrapper mb-24">
        <RoadmapPhase
          class="swiper-slide"
          v-for="(phase, index) in $t('roadmap.phases')"
          :key="index + 1"
          :phases="phase.phases"
          :phase="index + 1"
        />
      </div>
      <div class="swiper-pagination ml-16" slot="pagination"></div>
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
        slidesPerView: 3,
        initialSlide : 1,
        centeredSlides: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          type: "bullets",
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
          }
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
      swiperSlides: [1, 2, 3, 4, 5],
    }
  },
}
</script>

<style>
.example {
  height: auto;
}
.swiper-button-prev, .swiper-button-next {
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
