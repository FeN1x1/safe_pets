<template>
  <div
    class="
      py-4
      text-4xl
      font-extrabold
      uppercase
      sm:py-8
      lg:mb-8
      title
      text-brown-primary
      md:mx-auto
      sm:text-5xl sm:text-center
      line-height
    "
  >
    <h2 v-if="isSmallThanLg" class="relative">
      {{ title }}
    </h2>
    <h3 v-else class="relative underline-decoration inline">
      {{ title }}
    </h3>
  </div>
</template>

<script>
import Person from '~/components/our-team/Person'
export default {
  name: 'Title',
  components: { Person },
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
div {
  max-width: 48rem;
}
h2:before {
  content: '';
  display: block;
  width: 160px;
  background-image: linear-gradient(to left, var(--tw-gradient-stops));
  --tw-gradient-from: #00b3b7;
  --tw-gradient-stops: var(--tw-gradient-from),
    var(--tw-gradient-to, rgba(0, 179, 183, 0));
  --tw-gradient-to: #0ce2af;
  height: 3px;
  left: -100px;
  top: 50%;
  position: absolute;
}
h2:after {
  content: '';
  background-image: linear-gradient(to right, var(--tw-gradient-stops));
  --tw-gradient-from: #00b3b7;
  --tw-gradient-stops: var(--tw-gradient-from),
    var(--tw-gradient-to, rgba(0, 179, 183, 0));
  --tw-gradient-to: #0ce2af;
  display: block;
  width: 160px;
  height: 3px;
  right: -100px;
  top: 50%;
  position: absolute;
}

.underline-decoration {
  --tw-gradient-to: #00b3b7;
  --tw-gradient-stops: var(--tw-gradient-from),
    var(--tw-gradient-to, rgba(0, 179, 183, 0));
  --tw-gradient-from: #0ce2af;
  background-image: linear-gradient(to right, var(--tw-gradient-stops));
  background-size: 100% 6px;
  background-repeat: no-repeat;
  background-position: left bottom;
}
</style>
