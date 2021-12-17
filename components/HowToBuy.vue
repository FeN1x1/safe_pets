<template>
  <div class='relative bg-brown-primary'>
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
    <div
      class='px-4 py-8 md:px-24 lg:pb-32'
    >
      <AppTitleSecondary title='How To Buy' />
      <div class='grid gap-8 row-gap-5 md:grid-cols-2 sm:max-w-screen-lg mx-auto'>
        <nuxt-link
          to='/trustwallet' class='relative p-px overflow-hidden transition duration-300 transform rounded-xl cursor-pointer shadow-sm hover:scale-105 group hover:shadow-xl'>
          <img
            class="object-cover w-full h-64"
            src="~/assets/trustwallet.jpg"
            alt="dog"
          />
        </nuxt-link>
        <nuxt-link
          to='/metamask' class='relative p-px overflow-hidden transition duration-300 transform rounded-xl cursor-pointer shadow-sm hover:scale-105 group hover:shadow-xl'>
          <img
            class="object-cover w-full h-64"
            src="~/assets/metamask.jpg"
            alt="dog"
          />
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HowToBuy'
}
</script>
