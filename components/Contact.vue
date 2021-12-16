<template>
  <div class="relative flex flex-col-reverse px-4 py-16 mx-auto lg:block lg:flex-col lg:py-32 xl:py-48 md:px-8 sm:max-w-xl md:max-w-full">
    <div class="z-0 flex justify-center h-full -mx-4 overflow-hidden lg:pt-24 lg:pb-16 lg:pr-8 xl:pr-0 lg:w-1/2 lg:absolute lg:justify-end lg:bottom-0 lg:left-0 lg:items-center">
      <img src="https://kitwind.io/assets/kometa/laptop.png" class="object-cover object-right w-full h-auto lg:w-auto lg:h-full" alt="" />
    </div>
    <div class="relative flex justify-end max-w-xl mx-auto xl:pr-32 lg:max-w-screen-xl">
      <div class="mb-16 lg:pr-5 lg:max-w-lg lg:mb-0">
        <div class="max-w-xl mb-6">
          <div class='mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl sm:leading-none'>
            <div class='relative inline-block'>
              <h2>Contact Us</h2>
              <div class='w-full h-3 -mt-3 bg-deep-purple-accent-400'></div>
            </div>
          </div>
          <p class="text-base text-gray-700 md:text-lg">
            Write to our team below, we will get in touch with you as soon as it will be possible
          </p>
        </div>
        <form>
          <div class="flex flex-col md:flex-row">
            <input
              placeholder="Your Name"
              required=""
              type="text"
              class="flex-grow text-center w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none md:mr-2 focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
            />
            <input
              placeholder="Your Email"
              required=""
              type="text"
              class="flex-grow text-center w-full h-12 px-4 mb-3 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none md:mb-0 focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
            />
          </div>
          <input
            placeholder="Your Message"
            required=""
            type="text"
            class="flex-grow text-center w-full h-32 px-4 mb-3 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none md:mb-0 focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
          />
          <div class="flex items-center mt-4">
            <button
              type="submit"
              class="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contact'
}
</script>

<style scoped>

</style>