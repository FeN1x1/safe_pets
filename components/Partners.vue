<template>
  <div class="relative bg-brown-bg">
    <div class="absolute inset-x-0 bottom-0">
      <svg
        viewBox="0 0 224 12"
        fill="currentColor"
        class="w-full -mb-1 text-white"
        preserveAspectRatio="none"
      >
        <path
          d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z"
        ></path>
      </svg>
    </div>
    <div
      id="partners"
      class="
        px-4
        pb-8
        pt-4
        sm:pb-14 sm:pt-8
        mx-auto
        max-w-full
        md:max-w-screen-xl
        lg:px-8
      "
    >
      <AppTitleSecondary
        :title="$t('charity.partnerTitle')"
        class="max-w-screen-lg line-height"
      />
      <div v-swiper="swiperOption">
        <div class="swiper-wrapper flex -mt-8 mb-16 pt-1 sm:pt-0 sm:mb-20">
          <PartnersPartner
            v-for="(partner, index) in $t('charity.partner.partners')"
            :key="partner.title"
            :image="partner.image"
            :title="partner.title"
            :text="partner.text"
            :link="partner.link"
            class="swiper-slide"
          />
        </div>
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="lg:flex hidden">
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { directive } from 'vue-awesome-swiper'

export default {
  name: 'Partners',
  directives: {
    swiper: directive,
  },
  data() {
    return {
      swiperOption: {
        centeredSlides: true,
        slidesPerView: 1,
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
