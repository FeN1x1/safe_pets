<template>
  <div
    class="
      py-4
      text-4xl
      font-extrabold
      uppercase
      sm:pb-8
      lg:mb-8
      title
      text-white
      md:mx-auto
      sm:text-5xl sm:text-center
    "
  >
    <h2 class="relative" v-if="isSmallThanLg">
      {{ title }}
    </h2>
    <h3 class="relative underline-decoration inline" v-else>
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
    },
  },
}
</script>

<style scoped>
h2:before {
  content: '';
  background-image: linear-gradient(to left, var(--tw-gradient-stops));
  --tw-gradient-from: #ff1d6f;
  --tw-gradient-stops: var(--tw-gradient-from),
    var(--tw-gradient-to, rgba(255, 29, 111, 0));
  --tw-gradient-to: #ffc5df;
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
  --tw-gradient-from: #ff1d6f;
  --tw-gradient-stops: var(--tw-gradient-from),
    var(--tw-gradient-to, rgba(255, 29, 111, 0));
  --tw-gradient-to: #ffc5df;
  display: block;
  width: 160px;
  height: 3px;
  right: 0;
  top: 50%;
  position: absolute;
}

.underline-decoration {
  --tw-gradient-to: #ff1d6f;
  --tw-gradient-stops: var(--tw-gradient-from),
    var(--tw-gradient-to, rgba(255, 29, 111, 0));
  --tw-gradient-from: #ffc5df;
  background-image: linear-gradient(to right, var(--tw-gradient-stops));
  background-size: 100% 6px;
  background-repeat: no-repeat;
  background-position: left bottom;
}
</style>
