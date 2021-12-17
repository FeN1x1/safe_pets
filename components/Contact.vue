<template>
  <div
    class='relative flex flex-col-reverse px-4 py-16 mx-auto lg:block lg:flex-col lg:py-32 xl:py-48 md:px-8 sm:max-w-xl md:max-w-full'>
    <div
      class='z-0 flex justify-center h-full -mx-4 overflow-hidden lg:pt-24 lg:pb-16 lg:pr-8 xl:pr-0 lg:w-1/2 lg:absolute lg:justify-end lg:bottom-0 lg:left-0 lg:items-center'>
      <img src='https://kitwind.io/assets/kometa/laptop.png'
           class='object-cover object-right w-full h-auto lg:w-auto lg:h-full' alt='' />
    </div>
    <div class='relative flex justify-end max-w-xl mx-auto xl:pr-32 lg:max-w-screen-xl'>
      <div class='mb-16 lg:pr-5 lg:max-w-lg lg:mb-0'>
        <div class='max-w-xl mb-6'>
          <p class='text-base text-gray-700 md:text-lg text-center'>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
            laoreet dolore magna aliquam erat
            volutpat. Ut wisi
          </p>
        </div>
        <form>
          <div class='flex flex-col md:flex-row'>
            <input
              placeholder='Your Name'
              required=''
              type='text'
              class='flex-grow w-full h-12 px-4 mb-2 text-center transition duration-200 bg-white border border-green-secondary rounded-lg shadow-lg appearance-none md:mr-2 focus:border-green-primary focus:outline-none focus:shadow-outline'
            />
            <input
              placeholder='Your Email'
              required=''
              type='text'
              class='flex-grow w-full h-12 px-4 mb-3 text-center transition duration-200 bg-white border border-green-secondary rounded-lg shadow-lg appearance-none md:mb-0 focus:border-green-primary focus:outline-none focus:shadow-outline'
            />
          </div>
          <input
            placeholder='Your Message'
            required=''
            type='text'
            class='flex-grow w-full h-32 px-4 mb-3 text-center transition duration-200 bg-white border border-green-secondary rounded-lg shadow-lg appearance-none md:mb-0 focus:border-green-primary focus:outline-none focus:shadow-outline'
          />
          <div class='mx-auto text-center py-4'>
            <button class='button-wider w-32'>Send</button>
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