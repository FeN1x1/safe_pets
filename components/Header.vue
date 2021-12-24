<template>
  <div class='relative bg-brown-bg'>
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
      class='px-4 mx-auto pb-14 sm:pt-12 pt-4 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-16 lg:px-8'
    >
      <div class='flex sm:mb-16 flex-col items-center justify-between lg:flex-row'>
        <div class='lg:pr-5 lg:mb-0'>
          <div class='lg: max-w-xl mb-4'>
            <div>
              <div
                class='inline-block sm:px-16 px-8 pb-2 pt-3 mb-6 sm:text-3xl text-xl font-extrabold tracking-wide text-white uppercase rounded-full bg-gradient-to-r from-green-secondary to-green-primary'
              >
                Brand new token
              </div>

              <h2
                class='max-w-lg title mb-3 sm:text-3xl text-xl font-bold tracking-tight text-white sm:text-3xl sm:leading-none'
              >
                World's Community coin created for helping
                <span class='inline-block text-green text-green-secondary'
                >innocent pets</span
                >
              </h2>
            </div>
            <p class='text-base font-medium light-font text-gray-100 md:text-lg'>
              We're proud to be the first crypto currency creators who have just
              one purpose, help shelter for pets around the World. Safe Pets
              provides static reflections, every purchase automatically added to
              charity wallet 2% of transaction what will be provided to chosen
              shelters for pets.
            </p>
          </div>
          <div class='flex sm:mt-12 mt-0 flex-col md:flex-row sm:items-center'>
            <div class='flex space-x-4'>
              <button
                class='md:px-32 px-4 uppercase text-sm text-right pb-2 pt-3 bg-white rounded-full'
              >
                Coming soon...
              </button>
              <button class='button-wider'>Copy</button>
            </div>
          </div>
        </div>
        <div class='lg:w-2/5'>
          <nuxt-img
            class='object-cover w-full py-12 lg:py-0'
            src='dog-cat.png'
            alt='safe pets'
          />
        </div>
        <div class='flex lg:pl-8 pl-0 lg:flex-col flex-row lg:space-y-10 my-auto lg:pb-8 pb-0'>
          <div class='my-auto px-4 lg:px-0'>
            <a target='_blank' href='https://twitter.com/safepets_token'>
              <nuxt-img
                class='object-cover w-10'
                src='social/twitter.png'
                alt='twitter'
              />
            </a>
          </div>
          <div class='my-auto px-4 lg:px-0'>
            <a target='_blank' href='https://discord.gg/Q9yqvDbM'>
              <nuxt-img
                class='object-cover w-10'
                src='social/discord.png'
                alt='discord'
              />
            </a>
          </div>
          <div class='my-auto px-4 lg:px-0'>
            <a target='_blank' href='https://t.me/Safepets_Official'>
              <nuxt-img
                class='object-cover w-10'
                src='social/telegram.png'
                alt='telegram'
              />
            </a>
          </div>
          <div class='my-auto px-4 lg:px-0'>
            <a target='_blank' href='https://www.reddit.com/user/Safe_Pets_Official'>
              <nuxt-img
                class='object-cover w-10'
                src='social/reddit.png'
                alt='telegram'
              />
            </a>
          </div>
        </div>
      </div>
<!--      <AppCountdown endtime='Jan 7, 2022 16:37:25' starttime='Nov 5, 2018 15:37:25' trans='{-->
<!--         "day":"Day",-->
<!--         "hours":"Hours",-->
<!--         "minutes":"Minuts",-->
<!--         "seconds":"Seconds",-->
<!--         "expired":"Event has been expired.",-->
<!--         "running":"Till the end of event.",-->
<!--         "upcoming":"Till start of event.",-->
<!--         "status": {-->
<!--            "expired":"Expired",-->
<!--            "running":"Running",-->
<!--            "upcoming":"Future"-->
<!--           }}' />-->
        <ButtonsDownButton class='sm:mt-0 mt-12 -mb-8 sm:mb-0' />
    </div>
  </div>
</template>
