<template>
  <div>
    <Nav />
    <Nuxt />
    <Footer />
    <transition name='fade' mode='out-in'>
     <nuxt-img v-if='position[1] > 1000' src='button_up.png' class='sticky-btn h-12 w-12 fixed bottom-6 right-6 sm:bottom-12 sm:right-12 rotate-180 scale-200 cursor-pointer' v-scroll-to="'#navbar'" />
    </transition>
  </div>
</template>

<script>
import windowScrollPosition from '~/utils/scrollPosition.js'

export default {
  mixins: [windowScrollPosition('position')]
}
</script>
