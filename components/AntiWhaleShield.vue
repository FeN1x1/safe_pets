<template>
  <div class="relative bg-brown-bg">
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
    <div class="px-4 py-4 sm:py-8 mx-auto max-w-full md:max-w-screen-xl lg:px-8">
      <AppTitleSecondary
        :title="$t('howToBuy.antiWhaleShield.title')"
        class="max-w-screen-lg line-height"
      />
      <nuxt-img
        sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
        src="antiwhaleshield.png"
        class="text-center -ml-2 sm:mx-auto h-64"
        alt="antiwhaleshield"
      />
      <div
        class="
          sm:text-2xl
          pb-6
          pt-4 sm:pt-6
          sm:pb-12 sm:px-16
          text-xl
          light-font
          text-white
          sm:text-center
        "
      >
        {{ $t('howToBuy.antiWhaleShield.text') }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AntiWhaleShield',
}
</script>

<style>
.line-height {
  line-height: 3rem;
}
</style>
