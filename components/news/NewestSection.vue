<template>
  <nuxt-link
    :to="localePath(link)"
    tabindex="0"
    class="
      cursor-pointer
      border-t-2
      focus:outline-none
    "
    aria-label="card 1"
  >
    <nuxt-img
      class="focus:outline-none w-full"
      :src="`news/${image}.png`"
      :alt="image"
    />
    <div class="py-4 px-8 w-full my-auto bg-green-primary">
      <div class="mt-1 flex justify-between">
        <p
          tabindex="0"
          class="
            focus:outline-none
            text-base text-white
            font-semibold
            tracking-wide
          "
        >
          {{ author }}
        </p>
        <p
          tabindex="0"
          class="
            focus:outline-none
            text-base text-white
            font-semibold
            tracking-wide

          "
        >
          {{ date }}
        </p>
      </div>
    </div>
    <div class="bg-white sm:px-10 px-4 pb-6 pt-6
      border-b-2 border-l-2 border-r-2">
      <h1
        tabindex="0"
        class="
          focus:outline-none
          text-4xl text-brown-primary
          font-semibold
          tracking-wider
          mt-2
        "
      >
        {{ title }}
      </h1>
      <p
        tabindex="0"
        class="
          focus:outline-none
          text-black text-base
          light-font
          font-bold
          lg:text-lg
          leading-6
          tracking-wide
          mt-6
          max-lines
        "
      >
        {{ text }}
      </p>
      <NewsReadmore />
    </div>
  </nuxt-link>
</template>

<script>
export default {
  name: 'NewestSection',
  props: {
    image: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    text: {
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
