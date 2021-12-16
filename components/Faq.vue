<template>
  <div class='relative bg-brown-primary'>
    <div class='absolute inset-x-0 bottom-0'>
      <svg viewBox='0 0 224 12' fill='currentColor' class='w-full -mb-1 text-white' preserveAspectRatio='none'>
        <path
          d='M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z'></path>
      </svg>
    </div>
    <div
      class='px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 sm:py-16'

    >
      <AppTitleSecondary title='FAQ' />
      <div class='relative max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl sm:text-center'>
        <div class='mb-12 space-y-4'>
          <div class='border-b'>
            <button type='button' aria-label='Open item' title='Open item'
                    class='flex items-center justify-between w-full p-4 focus:outline-none'>
              <p class='text-lg font-medium text-white'>The quick, brown fox jumps over a lazy dog?</p>
              <!-- Add "transform rotate-180" classes on svg, if is open" -->
              <svg viewBox='0 0 24 24' class='w-3 text-gray-600 transition-transform duration-200'>
                <polyline fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round'
                          stroke-miterlimit='10' points='2,7 12,17 22,7' stroke-linejoin='round'></polyline>
              </svg>
            </button>
            <!-- Show content if is open
            <div class="p-4 pt-0"><p class="text-gray-700">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque rem aperiam, eaque ipsa quae.</p></div>
            -->
          </div>
          <div class='border-b'>
            <button type='button' aria-label='Open item' title='Open item'
                    class='flex items-center justify-between w-full p-4 focus:outline-none'>
              <p class='text-lg font-medium text-white'>The first mate and his Skipper too will do?</p>
              <svg viewBox='0 0 24 24' class='w-3 text-gray-600 transition-transform duration-200 transform rotate-180'>
                <polyline fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round'
                          stroke-miterlimit='10' points='2,7 12,17 22,7' stroke-linejoin='round'></polyline>
              </svg>
            </button>
            <div class='p-4 pt-0'><p class='text-gray-700'>Sed ut perspiciatis unde omnis iste natus error sit
              voluptatem accusantium doloremque rem aperiam, eaque ipsa quae.</p></div>
          </div>
          <div class='border-b'>
            <button type='button' aria-label='Open item' title='Open item'
                    class='flex items-center justify-between w-full p-4 focus:outline-none'>
              <p class='text-lg font-medium text-white'>Is the Space Pope reptilian!?</p>
              <svg viewBox='0 0 24 24' class='w-3 text-gray-600 transition-transform duration-200 transform rotate-180'>
                <polyline fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round'
                          stroke-miterlimit='10' points='2,7 12,17 22,7' stroke-linejoin='round'></polyline>
              </svg>
            </button>
            <div class='p-4 pt-0'><p class='text-gray-700'>Sed ut perspiciatis unde omnis iste natus error sit
              voluptatem accusantium doloremque rem aperiam, eaque ipsa quae.</p></div>
          </div>
          <div class='border-b'>
            <button type='button' aria-label='Open item' title='Open item'
                    class='flex items-center justify-between w-full p-4 focus:outline-none'>
              <p class='text-lg font-medium text-white'>How much money you got on you?</p>
              <svg viewBox='0 0 24 24' class='w-3 text-gray-600 transition-transform duration-200 transform rotate-180'>
                <polyline fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round'
                          stroke-miterlimit='10' points='2,7 12,17 22,7' stroke-linejoin='round'></polyline>
              </svg>
            </button>
            <div class='p-4 pt-0'><p class='text-gray-700'>Sed ut perspiciatis unde omnis iste natus error sit
              voluptatem accusantium doloremque rem aperiam, eaque ipsa quae.</p></div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Faq'
}
</script>

<style scoped>

</style>