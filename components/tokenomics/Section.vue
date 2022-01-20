<template>
  <div class="max-w-md sm:mx-auto sm:text-center">
    <div
      class="
        flex
        items-center
        justify-center
        h-32
        w-32
        mb-6
        ml-5
        transform
        scale-150
        sm:mx-auto
      "
    >
      <nuxt-img
        sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
        :src="image"
        :class="imageClass"
        :alt="image"
      />
    </div>
    <h4
      class="
        sm:my-8
        my-4
        title
        text-2xl
        sm:text-3xl
        font-extrabold
        leading-5
        text-green-primary
      "
    >
      {{ title }}
    </h4>
    <p
      class="
        mb-3
        text-xl
        sm:text-2xl
        light-font
        tracking-wide
        text-brown-secondary
      "
    >
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
    imageClass: {
      type: String,
      require: false,
    },
    image: {
      type: String,
      require: true,
    }
  },
  computed: {
    isSm() {
      return this.$breakpoints.sSm
    },
  },
}
</script>
