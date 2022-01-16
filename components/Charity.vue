<template>
  <section id='charity' class='relative bg-brown-bg'>
    <div class='absolute inset-x-0 bottom-0'>
      <svg
        viewBox='0 0 224 12'
        fill='currentColor'
        class='w-full -mb-1 text-white'
        preserveAspectRatio='none'
      >
        <path
          d='M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z'
        ></path>
      </svg>
    </div>
    <section class='mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl'>
      <div v-if='isSmallThanLg' class='flex'>
        <div>
          <nuxt-img
            src='cat-with-wool.png'
            class='relative transform scale-125 cat-position'
            alt='cat'
          />
        </div>
        <div class='w-4/5 px-8 sm:m-auto sm:text-center'>
          <AppTitleSecondary :title='$t("charity.title")' class='-pb-4' />
          <p
            class='mb-10 text-2xl tracking-wider -mt-8 light-font title text-purple-primary'
          >
            {{ $t("charity.donationDescribtion") }}
          </p>
          <p class='mb-12 text-2xl tracking-wider text-white light-font'>
            {{ $t("charity.donationText") }}
          </p>
        </div>
      </div>
      <div v-else>
        <div class='max-w-screen-md py-8 px-4 sm:m-auto sm:text-center'>
          <AppTitleSecondary :title='$t("charity.title")' class='mb-4' />
          <p
            class='lg:mb-10 py-4 text-xl sm:text-2xl tracking-wider -mt-6 light-font title text-purple-primary'
          >
            {{ $t("charity.donationDescribtion") }}
          </p>
          <p class='sm:mb-12 mb-4 text-lg sm:text-2xl tracking-wider text-white light-font'>
            {{ $t("charity.donationText") }}
          </p>
          <nuxt-img
            src='cat-with-wool.png'
            class='w-ful'
            alt='cat-with-wool'
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
    }
  }
}
</script>

<style scoped>
.cat-position {
  bottom: 10rem;
  left: 5rem;
}
</style>
