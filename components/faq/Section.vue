<template>
  <div class="border-b-2">
    <button
      type="button"
      @click="isShown = !isShown"
      class="
        flex
        items-center
        justify-between
        w-full
        sm:p-4
        p-2
        focus:outline-none
      "
    >
      <span class="text-2xl sm:text-3xl font-extrabold text-left text-white">{{
        title
      }}</span>
      <SvgArrow class="fill-green-100 ml-2 sm:ml-0" :isShown="isShown" />
    </button>
    <transition
      name="fade"
      mode="out-in"
      @beforeLeave="beforeLeave"
      @enter="enter"
      @afterEnter="afterEnter"
    >
      <div v-show="isShown" class="p-4 lg:mx-12 mx-0 pt-0 sm:mb-2">
        <p class="text-brown-tertiary text-xl light-font">
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
      isShown: false,
    }
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
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
    },
  },
}
</script>

<style>
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
