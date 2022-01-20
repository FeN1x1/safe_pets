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
        <section class="lg:pr-5 lg:mb-0">
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
                {{ $t('header.title.part1') }}
                <span class="text-green-secondary">{{
                  $t('header.title.part2')
                }}</span>
              </h1>
            </div>
            <p
              class="text-base font-medium text-gray-100 light-font md:text-lg"
            >
              {{ $t('header.text') }}
            </p>
          </div>
          <div class="flex flex-col mt-0 lg:mt-6 md:flex-row">
            <div class="">
              <h2
                class="
                  max-w-lg
                  mb-4
                  text-xl
                  font-bold
                  tracking-tight
                  text-white
                  title
                  sm:text-3xl sm:leading-none
                "
              >
                {{ $t('tokenomics.transferAddressTitle') }}
              </h2>
              <a
                v-if='isLsm'
                target="_blank"
                href="https://bscscan.com/address/0x16Fb5D7e4e68D788De1A16C5172AB1577d934915"
                class="
                  inline-block
                  px-4
                  pt-3
                  pb-2
                  mb-6
                  text-base
                  font-extrabold
                  tracking-wide
                  text-white
                  uppercase
                  rounded-xl
                  bg-gradient-to-r
                  from-green-secondary
                  to-green-primary
                "
              >
                {{ $t('tokenomics.transferAddress') }}
              </a>
              <a
                v-else
                target="_blank"
                href="https://bscscan.com/address/0x16Fb5D7e4e68D788De1A16C5172AB1577d934915"
                class="
                  inline-block
                  px-4
                  pt-3
                  pb-2
                  mb-6
                  text-base
                  font-extrabold
                  tracking-wide
                  text-white
                  uppercase
                  rounded-xl
                  bg-gradient-to-r
                  from-green-secondary
                  to-green-primary
                "
              >
                {{ $t('tokenomics.transferAddressMobile') }}
              </a>
            </div>
          </div>
        </section>
        <div class="lg:w-2/5">
          <nuxt-img
            sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
            class="object-cover w-full py-12 lg:py-0"
            src="dog-cat.png"
            alt="safe pets"
          />
        </div>
        <AppHeaderSocials/>
      </div>
      <AppCountdown
        class="sm:mt-0 mt-10"
        endtime="Jan 29, 2022 20:00:00"
        starttime="Nov 5, 2018 15:37:25"
        trans='{
               "day":"Day",
               "hours":"Hours",
               "minutes":"Minuts",
               "seconds":"Seconds",
               "expired":"Event has been expired.",
               "running":"Till the end of event.",
               "upcoming":"Till start of event.",
               "status": {
                  "expired":"Expired",
                  "running":"Running",
                  "upcoming":"Future"
                 }}'
      />
      <nuxt-img
        sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
        v-scroll-to="'#tokenomics'"
        src="button_up.png"
        alt="up"
        class="
          flex
          cursor-pointer
          items-center
          justify-center
          w-12
          h-12
          mx-auto
          text-white
          duration-300
          transform
          rotate-180
          hover:-green-primary hover:scale-110
        "
      />
    </div>
  </section>
</template>

<script>
export default {
  name: 'Header',
  computed: {
    isLsm() {
      return this.$breakpoints.lSm
    }
  }
}
</script>