<template>
  <div class="child sm:p-4 px-4">
    <nuxt-img
      sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
      class="sm:mx-auto mr-auto w-40 md:w-44 lg:w-52"
      :class="{ '-ml-5': !isLargerSm }"
      :src="`our-team/${image}.png`"
      alt="Person"
    />
    <div class="flex flex-col justify-center mt-4">
      <p
        class="
          text-3xl
          title
          text-left
          sm:text-center
          text-brown-primary
          uppercase
          font-extrabold
        "
      >
        {{ title }}
      </p>
      <p
        class="mb-4 text-xl text-left sm:text-center light-font"
        :class="personClass"
      >
        {{ profession }}
      </p>
      <p
        class="
          text-left
          sm:text-center
          tracking-wide
          light-font
          text-gray-800
          sm:text-xl
          text-base
        "
      >
        {{ text }}
      </p>
    </div>
    <div v-if="personLinkedIn !== ''" class="flex">
      <a
        target="_blank"
        :href="personLinkedIn"
        class="mr-auto sm:mx-auto text-center mt-4 text-green-secondary"
      >
        <SocialLinkedIn class="mx-auto" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Person',
  props: {
    title: {
      type: String,
      required: true,
    },
    profession: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      default: 'default',
    },
    personClass: {
      type: String,
      required: true,
    },
    personLinkedIn: {
      type: String,
      required: true,
    },
  },
  computed: {
    isLargerSm() {
      return this.$breakpoints.lSm
    },
  },
}
</script>
