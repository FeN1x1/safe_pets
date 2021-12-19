<template>
  <div
    class="py-8 title max-w-3xl mb-8 font-extrabold uppercase text-white md:mx-auto sm:text-center"
  >
    <h2
      class="relative"
    >
      {{ title }}
    </h2>
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

h2 {
  font-weight: 800;
  font-size: 2.7rem;
  line-height: 10px;
}
</style>
