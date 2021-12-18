<template>
    <svg viewBox='0 0 24 24' :class='getClassForArrow()' class='w-5 text-purple-primary transition-transform duration-200'>
    <polyline fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round'
              stroke-miterlimit='10' points='2,7 12,17 22,7' stroke-linejoin='round'></polyline>
  </svg>
</template>

<script>
export default {
  name: 'Arrow',
  props: {
    isShown: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    getClassForArrow() {
      return {
        'transition transform rotate-180': this.isShown
      }
    }
  }
}
</script>

<style scoped>
.gradient {
  /*background-image: linear-gradient(to left, var(--tw-gradient-stops));*/
  /*--tw-gradient-from: #FF1D6F;*/
  /*--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(255, 29, 111, 0));*/
  /*--tw-gradient-to: #FFC5DF;*/
  --tw-text-opacity: 1;
  color: rgba(12, 226, 175, var(--tw-text-opacity));
}
</style>
