<template>
  <div class='py-8 sm:px-4 max-w-screen-lg mx-auto'>
    <div class=" focus:outline-none">
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
      <div
        class="
          bg-white
          sm:px-10
          px-4
          pb-6
          pt-6
        "
      >
        <h1
          tabindex="0"
          class="
            focus:outline-none
            text-3xl sm:text-5xl
             text-brown-primary
            font-semibold
            tracking-wider
            text-left sm:text-center
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
            lg:text-lg
            leading-6
            font-extrabold

            mt-6
            max-lines
            light-font
          "
        >
          {{ text }}
        </p>
        <slot/>
      </div>
    </div>
    <transition name="fade" mode="out-in">
      <nuxt-link :to="localePath('/')">
        <nuxt-img
          sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
          src="button_up.png"
          class="
            h-12
            w-12
            fixed
            bottom-6
            right-6
            sm:bottom-12 sm:right-12
            transform
            duration-300
            rotate-270
            hover:scale-110
            cursor-pointer
          "
        />
      </nuxt-link>
    </transition>
  </div>
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
  },
}
</script>
