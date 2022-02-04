<template>
  <section id="charity" class="relative bg-brown-bg">
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
    <section class="px-4 pt-4 pb-8 sm:pb-14 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl">
      <div v-if="isSmallThanLg" class="flex pt-4">
        <div class="z-0">
          <nuxt-img
            src="cat-with-wool.png"
            class="relative transform scale-125 cat-position"
            alt="cat"
          />
        </div>
        <div class="w-4/5 z-10 sm:m-auto sm:text-center">
          <AppTitleSecondary :title="$t('charity.title')" />
          <p
            class="
              mb-8
              text-3xl
              tracking-wider
              font-thin
              -mt-8
              title
              text-purple-primary
            "
          >
            {{ $t('charity.donationDescription') }}
          </p>
          <p class="mb-10 text-2xl tracking-wider text-white light-font">
            {{ $t('charity.donationText') }}
          </p>
          <nuxt-link
            :to="localePath('/charity-partner')"
            class="
              from-purple-tertiary
              to-purple-primary
              inline-block
              px-4
              pt-3
              pb-2
              mb-6
              text-lg
              font-extrabold
              tracking-wide
              text-white
              uppercase
              rounded-xl
              bg-gradient-to-r
            "
          >
            {{ $t('charity.partner.button') }}
          </nuxt-link>
        </div>
      </div>
      <div v-else>
        <div class="max-w-screen-md sm:m-auto sm:text-center">
          <AppTitleSecondary :title="$t('charity.title')" class="mb-4" />
          <p
            class="
              lg:mb-10
              py-4
              text-xl
              sm:text-2xl
              tracking-wider
              -mt-6
              light-font
              title
              text-purple-primary
            "
          >
            {{ $t('charity.donationDescription') }}
          </p>
          <p
            class="
              sm:mb-12
              mb-4
              text-lg
              sm:text-2xl
              tracking-wider
              text-white
              light-font
            "
          >
            {{ $t('charity.donationText') }}
          </p>
          <nuxt-link
            :to="localePath('/charity-partner')"
            class="
              from-purple-tertiary
              to-purple-primary
              inline-block
              px-4
              pt-3
              pb-2
              mb-6
              text-sm text-center text-white
              uppercase
              rounded-xl
              bg-gradient-to-r
            "
          >
            {{ $t('charity.partner.button') }}
          </nuxt-link>
          <nuxt-img
            sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
            src="cat-with-wool.png"
            class="w-full m-auto"
            alt="cat-with-wool"
          />
        </div>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  name: 'Charity',
  computed: {
    isSmallThanLg() {
      return this.$breakpoints.lLg
    },
  },
  data() {
    return {
      partners: [
        {
          image: 'zvieratkovo',
          link: 'https://www.facebook.com/zvieratkovosk',
        },
        // { image: 'anc', link: '' },
        // { image: 'national-park', link: '' },
        // { image: 'parc-naturel', link: '' },
      ],
      isToastActive: false,
    }
  },
}
</script>

<style scoped>
.cat-position {
  bottom: 8rem;
  left: 3rem;
}
</style>
