<template>
  <nuxt-link
    :to="localePath(link)"
    tabindex="0"
    class="
      cursor-pointer
      focus:outline-none
      border-2
    "
    aria-label="card 2"
  >
    <nuxt-img
      class="focus:outline-none w-full h-56 object-cover"
      :src="`news/${image}.png`"
      :alt="image"
    />
    <div class="py-2 px-4 w-full bg-green-primary">
      <div class="mt-1 flex justify-between">
        <p
          tabindex="0"
          class="
            focus:outline-none
            text-sm text-white
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
            text-sm text-white
            font-semibold
            tracking-wide
          "
        >
          {{ date }}
        </p>
      </div>
    </div>
    <div class="bg-white px-4 lg:px-6 py-4 rounded-bl-3xl rounded-br-3xl">
      <h1
        tabindex="0"
        class="
          focus:outline-none
          text-xl text-brown-primary
          font-semibold
          tracking-wider
        "
      >
        {{ title }}
      </h1>
      <p
        tabindex="0"
        class="
          focus:outline-none
          light-font
          font-bold
          text-base
          text-black
          leading-6
          pr-4
          mt-2
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
  name: 'Section.vue',
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
