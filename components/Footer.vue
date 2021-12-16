<template>
  <div class="bg-theme-dark-brown">
    <div class="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div class="grid row-gap-10 mb-8 lg:grid-cols-6">
        <div class="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4">
          <div>
            <p class="font-medium tracking-wide text-gray-300">Category</p>
            <ul class="mt-2 space-y-2">
              <li>
                <a href="/" class="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200">News</a>
              </li>
              <li>
                <a href="/" class="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200">World</a>
              </li>
              <li>
                <a href="/" class="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200">Games</a>
              </li>
              <li>
                <a href="/" class="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200">References</a>
              </li>
            </ul>
          </div>
          <div>
            <p class="font-medium tracking-wide text-gray-300">Apples</p>
            <ul class="mt-2 space-y-2">
              <li>
                <a href="/" class="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200">Web</a>
              </li>
              <li>
                <a href="/" class="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200">eCommerce</a>
              </li>
              <li>
                <a href="/" class="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200">Business</a>
              </li>
              <li>
                <a href="/" class="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200">Entertainment</a>
              </li>
              <li>
                <a href="/" class="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200">Portfolio</a>
              </li>
            </ul>
          </div>
          <div>
            <p class="font-medium tracking-wide text-gray-300">Cherry</p>
            <ul class="mt-2 space-y-2">
              <li>
                <a href="/" class="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200">Media</a>
              </li>
              <li>
                <a href="/" class="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200">Brochure</a>
              </li>
              <li>
                <a href="/" class="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200">Nonprofit</a>
              </li>
              <li>
                <a href="/" class="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200">Educational</a>
              </li>
              <li>
                <a href="/" class="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200">Projects</a>
              </li>
            </ul>
          </div>
          <div>
            <p class="font-medium tracking-wide text-gray-300">Business</p>
            <ul class="mt-2 space-y-2">
              <li>
                <a href="/" class="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200">Infopreneur</a>
              </li>
              <li>
                <a href="/" class="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200">Personal</a>
              </li>
              <li>
                <a href="/" class="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200">Wiki</a>
              </li>
              <li>
                <a href="/" class="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200">Forum</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="md:max-w-md lg:col-span-2">
          <span class="text-base font-medium tracking-wide text-gray-300">Subscribe for updates</span>
          <form class="flex flex-col mt-4 md:flex-row">
            <input
              placeholder="Email"
              required=""
              type="text"
              class="flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none md:mr-2 md:mb-0 focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
            />
            <button
              type="submit"
              class="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
            >
              Subscribe
            </button>
          </form>
          <p class="mt-4 text-sm text-gray-500">
            Bacon ipsum dolor amet short ribs pig sausage prosciuto chicken spare ribs salami.
          </p>
        </div>
      </div>
      <div class="flex flex-col justify-between pt-5 pb-10 border-t border-gray-800 sm:flex-row">
        <p class="text-sm text-center text-gray-500">
          Copyright © 2021 Safe Pets. All Rights Reserved - Privacy Policy - Terms and Conditions Safe Pets is not an investment and, like DogeCoin, was created as a meme parody. Safe Pets makes no promises and is not responsible for any losses or errors.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>

</style>