<template>
  <div class='border-b-2'>
    <button type='button' @click='isShown = !isShown'
            class='flex items-center justify-between w-full p-4 focus:outline-none'>
      <p class='text-3xl font-extrabold text-white'>{{ title }}</p>
      <SvgArrow class='fill-green-100' :isShown='isShown' />
    </button>
    <transition name='fade' mode='out-in' @beforeLeave='beforeLeave'
                @enter='enter'
                @afterEnter='afterEnter'>
      <div v-show='isShown' class='p-4 mx-0 md:mx-16 pt-0 mb-4'>
        <p class='text-brown-tertiary text-xl light-font'>
          {{ text }}
        </p>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Section',
  data() {
    return {
      prevHeight: 0,
      isShown: false
    }
  },
  props: {
    title: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  },
  methods: {
    beforeLeave(element) {
      this.prevHeight = getComputedStyle(element).height
    },
    enter(element) {
      const { height } = getComputedStyle(element)

      element.style.height = this.prevHeight

      setTimeout(() => {
        element.style.height = height
      })
    },
    afterEnter(element) {
      element.style.height = 'auto'
    }
  }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: height, opacity;
  transition-timing-function: ease;
  overflow: hidden;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>

