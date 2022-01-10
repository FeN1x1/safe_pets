<template>
  <div
    class="
      px-4
      pt-8
      pb-16
      mx-auto
      sm:max-w-xl
      md:max-w-full
      lg:max-w-screen-xl
      md:px-24
      lg:px-8
    "
  >
    <AppTitle title="How To Buy" />
    <nuxt-img
      class="object-contain -mt-8 w-full h-32"
      :src="imageUrl"
      :alt="imageAlt"
    />
    <div class="lg:py-6 lg:pr-16">
      <div class="flex">
        <div class="flex flex-col items-center mr-4">
          <div>
            <div
              class="
                pt-1
                text-2xl text-green-secondary
                flex
                items-center
                justify-center
                w-12
                h-12
                border border-green-primary
                rounded-full
              "
            >
              1
            </div>
          </div>
          <div class="w-px h-full bg-green-primary"></div>
        </div>
        <div class="pt-1 pb-8">
          <p class="mb-2 text-2xl text-green-secondary font-bold">
            {{ title1 }}
          </p>
          <slot name="section1" />
        </div>
      </div>
      <div class="flex">
        <div class="flex flex-col items-center mr-4">
          <div>
            <div
              class="
                pt-1
                text-2xl text-green-secondary
                flex
                items-center
                justify-center
                w-12
                h-12
                border border-green-primary
                rounded-full
              "
            >
              2
            </div>
          </div>
          <div class="w-px h-full bg-green-primary"></div>
        </div>
        <div class="pt-1 pb-8">
          <p class="mb-2 text-2xl text-green-secondary font-bold">
            {{ title2 }}
          </p>
          <slot name="section2" />
        </div>
      </div>
      <div class="flex">
        <div class="flex flex-col items-center mr-4">
          <div>
            <div
              class="
                pt-1
                text-2xl text-green-secondary
                flex
                items-center
                justify-center
                w-12
                h-12
                border border-green-primary
                rounded-full
              "
            >
              3
            </div>
          </div>
          <div class="w-px h-full bg-green-primary"></div>
        </div>
        <div class="pt-1 pb-8">
          <p class="mb-2 text-2xl text-green-secondary font-bold">
            {{ title3 }}
          </p>
          <slot name="section3" />
        </div>
      </div>
      <div class="flex">
        <div class="flex flex-col items-center mr-4">
          <div>
            <div
              class="
                pt-1
                text-2xl text-green-secondary
                flex
                items-center
                justify-center
                w-12
                h-12
                border border-green-primary
                rounded-full
              "
            >
              4
            </div>
          </div>
          <div class="w-px h-full bg-green-primary"></div>
        </div>
        <div class="pt-1 pb-8">
          <p class="mb-2 text-2xl text-green-secondary font-bold">
            {{ title4 }}
          </p>
          <slot name="section4" />
        </div>
      </div>
      <div class="flex">
        <div class="flex flex-col items-center mr-4">
          <div>
            <div
              class="
                text-2xl text-green-secondary
                flex
                items-center
                justify-center
                w-12
                h-12
                border border-green-primary
                rounded-full
              "
            >
              <svg
                class="w-6 text-gray-600 text-green-secondary"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <polyline
                  fill="none"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-miterlimit="10"
                  points="6,12 10,16 18,8"
                ></polyline>
              </svg>
            </div>
          </div>
        </div>
        <div class="pt-1">
          <p class="mb-2 text-2xl text-green-secondary font-bold">Success</p>
          <p class="text-gray-700"></p>
        </div>
      </div>
    </div>
    <transition name="fade" mode="out-in">
      <nuxt-link
        :to="localePath('/')">
        <nuxt-img
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
  name: 'Template',
  props: {
    title1: {
      type: String,
      required: true,
    },
    title2: {
      type: String,
      required: true,
    },
    title3: {
      type: String,
      required: true,
    },
    title4: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    imageAlt: {
      type: String,
      required: true,
    },
  },
}
</script>
