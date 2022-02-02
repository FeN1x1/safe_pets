<template>
  <a
    target="_blank"
    :href="link"
    class="
      text-center
      cursor-pointer
      transition
      duration-300
      transform
      my-auto
      sm:px-4
    "
  >
    <nuxt-img
      sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
      :src="`partners/${image}.png`"
      :alt="image"
    />
  </a>
</template>

<script>
export default {
  name: 'Banner',
  props: {
    image: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
  },
}
</script>
