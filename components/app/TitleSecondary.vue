<template>
  <div
    class="py-4 text-4xl font-extrabold uppercase sm:py-8 lg:mb-8 title text-white md:mx-auto sm:text-5xl sm:text-center"
  >
    <h2
      class="relative" v-if='isSmallThanLg'
    >
      {{ title }}
    </h2>
    <h3
      class="relative underline-decoration"
      v-else
    >
      {{ title }}
    </h3>
  </div>
</template>

<script>
export default {
  name: 'Title',
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  computed: {
    isSmallThanLg() {
      return this.$breakpoints.lLg
    }
  }
}
</script>

<style scoped>

h2:before {
  content: '';
  background-image: linear-gradient(to left, var(--tw-gradient-stops));
  --tw-gradient-from: #FF1D6F;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(255, 29, 111, 0));
  --tw-gradient-to: #FFC5DF;
  display: block;
  width: 160px;
  height: 3px;
  left: 0;
  top: 50%;
  position: absolute;
}
h2:after {
  content: '';
  background-image: linear-gradient(to right, var(--tw-gradient-stops));
  --tw-gradient-from: #FF1D6F;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(255, 29, 111, 0));
  --tw-gradient-to: #FFC5DF;
  display: block;
  width: 160px;
  height: 3px;
  right: 0;
  top: 50%;
  position: absolute;
}

.underline-decoration {
  text-decoration: underline;
  text-underline-offset: 10px;
  text-decoration-color: #FF1D6F;
}
</style>
