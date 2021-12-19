<template>
  <div class='max-w-md sm:mx-auto sm:text-center'>
    <div
      class='flex items-center justify-center h-32 w-32 mb-6 ml-5 transform scale-150 sm:mx-auto '
      :class='classes'
    >
      <nuxt-img
        :src='image'
      />
    </div>
    <h6 class='mb-6 title text-2xl font-extrabold leading-5 text-green-secondary'>
      {{ title }}
    </h6>
    <p class='mb-3 text-xl tracking-wide text-brown-secondary'>
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
    },
    image: {
      type: String,
      require: true
    }
  }
}
</script>
