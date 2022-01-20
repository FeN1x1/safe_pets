<template>
  <div>
    <client-only>
      <transition name="fade" mode="out-in">
        <nuxt-img
          sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
          v-if="position[1] > 1000"
          src="button_up.png"
          alt="button_up"
          class="
            button-up
            z-40
            sticky-btn
            h-12
            w-12
            fixed
            bottom-6
            right-6
            sm:bottom-12 sm:right-12
            transform
            duration-300
            hover:scale-110
            cursor-pointer
          "
          v-scroll-to="'#navbar'" /></transition
    ></client-only>
  </div>
</template>

<script>
import windowScrollPosition from '~/utils/scrollPosition.js'

export default {
  mixins: [windowScrollPosition('position')],
}
</script>

<style scoped>
.button-up {
  transform: rotate(0deg);
}
</style>
