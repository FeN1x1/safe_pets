<template>
  <div class="max-w-md sm:mx-auto sm:text-center">
    <div
      class="flex items-center justify-center w-16 h-16 mb-12 ml-5 transform scale-150 rounded-full bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24"
      :class="classes"
    >
      <slot></slot>
    </div>
    <h6 class="mb-6 text-2xl font-extrabold leading-5 text-green-secondary">
      {{ title }}
    </h6>
    <p class="mb-3 text-xl tracking-wide text-brown-secondary">
      {{ text }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'Section',
  props: {
    title: {
      type: String,
      require: true,
    },
    text: {
      type: String,
      require: true,
    },
    classes: {
      type: Array,
      require: false,
    },
  },
}
</script>
