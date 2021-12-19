<template>
  <div class='max-w-md sm:mx-auto sm:text-center'>
    <div
      class='flex items-center justify-center h-32 w-32 mb-6 ml-5 transform scale-150 sm:mx-auto '
    >
      <nuxt-img
        :src='image'
        :class='imageClass'
      />
    </div>
    <h6 class='my-8 title text-3xl font-extrabold leading-5 text-green-primary'>
      {{ title }}
    </h6>
    <p class='mb-3 text-2xl light-font tracking-wide text-brown-secondary'>
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
    imageClass: {
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
