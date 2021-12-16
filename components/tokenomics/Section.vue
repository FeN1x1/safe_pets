<template>
  <div class='max-w-md sm:mx-auto sm:text-center'>
    <div
      class='ml-5 flex scale-150 transform items-center justify-center w-16 h-16 mb-12 rounded-full bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24' :class='classes'>
      <slot></slot>
    </div>
    <h6 class='mb-3 text-xl font-bold leading-5'>{{ title }}</h6>
    <p class='mb-3 text-lg text-gray-900'>
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
      require: true
    },
    text: {
      type: String,
      require: true
    },
    classes: {
      type: Array,
      require: false
    }
  }
}
</script>


<style scoped>

</style>