<template>
  <section class="relative bg-brown-bg">
    <div class="absolute inset-x-0 bottom-0">
      <svg
        viewBox="0 0 224 12"
        fill="currentColor"
        class="w-full -mb-1 text-white"
        preserveAspectRatio="none"
      >
        <path
          d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z"
        ></path>
      </svg>
    </div>
    <div
      class="
        px-4
        pt-4
        mx-auto
        pb-8
        sm:pb-14 sm:pt-12 sm:max-w-xl
        md:max-w-full
        lg:max-w-screen-2xl
        md:px-16
      "
    >
      <div
        class="flex flex-col items-center justify-between sm:mb-16 lg:flex-row"
      >
        <section class="lg:mb-0">
          <div class="mb-4 lg:max-w-xl">
            <div>
              <h1
                class="
                  max-w-lg
                  mb-3
                  text-2xl
                  font-bold
                  tracking-tight
                  text-white
                  title
                  sm:text-4xl sm:leading-none
                "
              >
                {{ $t('charity.partner.titlePart1') }}
                <span class="text-green-secondary">{{
                  $t('charity.partner.titlePart2')
                }}</span>
              </h1>
            </div>
            <p
              class="text-base font-medium text-gray-100 light-font md:text-lg"
            >
              {{ $t('charity.partner.text') }}
            </p>
          </div>
        </section>
        <div class="lg:w-2/5">
          <nuxt-img
            sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
            class="object-cover m-auto w-2/3 py-12 lg:py-0"
            src="tokenomics/rewards.png"
            alt="charity partner"
          />
        </div>
        <AppHeaderSocials />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Header',
  computed: {
    isLsm() {
      return this.$breakpoints.lSm
    },
  },
}
</script>
