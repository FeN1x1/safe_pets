<template>
  <div
    class="
      sm:mx-auto
      text-center
      transition
      duration-300
      transform
      sm:px-4
      mt-4
      sm:mt-8
      flex
    "
  >
    <div class="flex mt-8 sm:mt-0 mx-auto">
      <nuxt-img
        class="sm:w-64 sm:h-64 h-32 w-32 my-auto rounded-full border-12 border-green-secondary"
        sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
        :src="`charity-partner/${image}.png`"
        :alt="image"
      />
      <div class="max-w-sm my-auto px-4">
        <h3 class="text-green-secondary text-2xl sm:text-4xl font-extrabold mb-2">
          {{ title }}
        </h3>
        <p
          class="
            text-green-secondary text-base sm:text-lg
            opacity-60
            mb-4
            tracking-tight
            light-font
          "
        >
          {{ text }}
        </p>
        <a
          class="hover:shadow-2xl hover:opacity-80 transform duration-300 text-green-secondary inline-flex text-base sm:text-xl font-light"
          :href="link"
          target="_blank"
        >
          Viac
          <nuxt-img
            class="w-4 my-auto ml-2 h-4"
            src="arrow-right.png"
            alt="arrow"
          />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Partner',
  props: {
    image: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.border-12 {
  border-width: 12px;
}
</style>
