<template>
  <div
    id='contact'
    class='relative flex flex-col-reverse px-4 py-16 mx-auto lg:block lg:flex-col md:px-8 sm:max-w-xl md:max-w-full'>
    <div
      class='z-0 flex justify-center h-full -mx-4 overflow-hidden lg:pt-24 lg:pb-16 lg:pr-8 xl:pr-0 lg:w-1/2 lg:absolute lg:justify-end lg:bottom-0 lg:left-0 lg:items-center'>
      <nuxt-img src='notebook-safepets.png'
           class='absolute object-cover notebook' alt='' />
    </div>
    <div class=' flex justify-end max-w-xl mx-auto lg:max-w-screen-xl'>
      <div class='mb-16 lg:pr-5 lg:max-w-lg lg:mb-0'>
        <div class='max-w-xl mb-6'>
          <p class='text-xl light-font text-brown-primary md:text-lg text-left'>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam no nummy nibh euismod tincidunt ut
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
              class='flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-green-secondary rounded-lg shadow-lg appearance-none md:mr-2 focus:border-black focus:outline-none focus:shadow-outline'
            />
            <input
              placeholder='Your Email'
              required=''
              type='text'
              class='flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-white border border-green-secondary rounded-lg shadow-lg appearance-none md:mb-0 focus:border-green-primary focus:outline-none focus:shadow-outline'
            />
          </div>
          <div>
            <div class="mt-1">
              <textarea id="about" name="about" rows="3"
                        class='flex-grow w-full p-4 transition duration-200 bg-white border border-green-secondary rounded-lg shadow-lg appearance-none md:mb-0 focus:border-green-primary focus:outline-none focus:shadow-outline'
                        placeholder="Your message"></textarea>
            </div>
          </div>
          <div class='py-2'>
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
.notebook {
  bottom: 10rem;
  left: 5rem;
}
</style>

