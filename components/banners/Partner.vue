<template>
  <div>
    <div
      v-if='link === ""'
      class="
      text-center
      transition
      duration-300
      transform
      my-auto
      sm:px-4
    "
    >
      <nuxt-img
        class='w-64 h-64'
        sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
        :src="`charity-partner/${image}.png`"
        :alt="image"
      />
    </div>
    <a v-else class="
      text-center
      cursor-pointer
      transition
      duration-300
      transform
      my-auto
      sm:px-4
    " :href='link' target='_blank'>
      <nuxt-img
        class='w-64 h-64'
        sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
        :src="`charity-partner/${image}.png`"
        :alt="image"
      />
    </a>
  </div>

</template>

<script>
export default {
  name: 'Partner',
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
