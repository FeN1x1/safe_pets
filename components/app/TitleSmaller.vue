<template>
  <div
    class="text-3xl font-extrabold uppercase pb-4 pt-8 title text-brown-primary md:mx-auto sm:text-4xl sm:text-center"
  >
    <h2 v-if='isSmallThanLg'
        class="relative"
    >
      {{ title }}
    </h2>
    <h3 v-else
        class="relative underline-decoration inline"
    >
      {{ title }}
    </h3>
  </div>
</template>

<script>
export default {
  name: 'TitleSmaller',
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
div {
  max-width: 48rem;
}
h2:before {
  content: '';
  display: block;
  width: 100px;
  background-image: linear-gradient(to left, var(--tw-gradient-stops));
  --tw-gradient-from: #00b3b7;
  --tw-gradient-stops: var(--tw-gradient-from),
  var(--tw-gradient-to, rgba(0, 179, 183, 0));
  --tw-gradient-to: #0ce2af;
  height: 2px;
  left: 70px;
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
  width: 100px;
  height: 2px;
  right: 70px;
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
