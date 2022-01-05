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
    <div
      id="howToBuy"
      class="
        px-4
        py-8
        mx-auto
        sm:max-w-xl
        md:max-w-full
        lg:max-w-screen-xl
        md:px-24
        lg:px-8
      "
    >
      <AppTitleSecondary
        :title="$t('howToBuy.antiWhaleShield.title')"
        class="mt-6 max-w-screen-lg"
      />
      <nuxt-img src="antiwhaleshield.png" class="text-center sm:mx-auto h-64" />
      <div
        class="
          sm:text-2xl
          pb-6
          pt-6
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
