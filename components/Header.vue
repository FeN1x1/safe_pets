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
      class='px-4 pt-4 mx-auto  pb-14 sm:pt-12 sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-16'
    >
      <div
        class='flex flex-col items-center justify-between sm:mb-16 lg:flex-row'
      >
        <div class='lg:pr-5 lg:mb-0'>
          <div class='mb-4 lg:max-w-xl '>
            <div>
              <div
                class='inline-block px-8 pt-3 pb-2 mb-6 text-xl font-extrabold tracking-wide text-white uppercase rounded-full sm:px-16 sm:text-3xl bg-gradient-to-r from-green-secondary to-green-primary'
              >
                {{ $t('header.brandNewToken') }}
              </div>

              <h2
                class='max-w-lg mb-3 text-xl font-bold tracking-tight text-white title sm:text-3xl sm:leading-none'
              >
                {{ $t('header.title.part1') }}
                <span class='inline-block text-green text-green-secondary'
                >{{ $t('header.title.part2') }}</span
                >
              </h2>
            </div>
            <p
              class='text-base font-medium text-gray-100 light-font md:text-lg'
            >
              {{ $t('header.text') }}
            </p>
          </div>
          <div class='flex flex-col mt-0 lg:mt-12 md:flex-row'>
            <div class='flex space-x-4'>
              <button
                class='px-4 pt-3 pb-2 text-sm text-right uppercase bg-white rounded-full  lg:px-32'
              >
                {{ $t('header.comingSoon') }}
              </button>
              <button class='button-wider'>{{ $t('header.copy') }}</button>
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
        <div
          class='flex flex-row pb-0 pl-0 my-auto  lg:pl-8 lg:flex-col lg:space-y-10 lg:pb-8'
        >
          <div class='px-4 my-auto lg:px-0'>
            <a target='_blank' href='https://twitter.com/safepets_token'>
              <nuxt-img
                class='object-cover w-10'
                src='social/twitter.png'
                alt='twitter'
              />
            </a>
          </div>
          <div class='px-4 my-auto lg:px-0'>
            <a target='_blank' href='https://discord.gg/Q9yqvDbM'>
              <nuxt-img
                class='object-cover w-10'
                src='social/discord.png'
                alt='discord'
              />
            </a>
          </div>
          <div class='px-4 my-auto lg:px-0'>
            <a target='_blank' href='https://t.me/Safepets_Official'>
              <nuxt-img
                class='object-cover w-10'
                src='social/telegram.png'
                alt='telegram'
              />
            </a>
          </div>
          <div class='px-4 my-auto lg:px-0'>
            <a
              target='_blank'
              href='https://www.reddit.com/user/Safe_Pets_Official'
            >
              <nuxt-img
                class='object-cover w-10'
                src='social/reddit.png'
                alt='telegram'
              />
            </a>
          </div>
        </div>
      </div>
      <AppCountdown class='sm:mt-0 mt-10' endtime='Jan 15, 2022 18:00:00' starttime='Nov 5, 2018 15:37:25' trans='{
               "day":"Day",
               "hours":"Hours",
               "minutes":"Minuts",
               "seconds":"Seconds",
               "expired":"Event has been expired.",
               "running":"Till the end of event.",
               "upcoming":"Till start of event.",
               "status": {
                  "expired":"Expired",
                  "running":"Running",
                  "upcoming":"Future"
                 }}' />
      <AppDownButton class='mt-12 -mb-8 sm:mt-0 sm:mb-0' />
    </div>
  </div>
</template>
