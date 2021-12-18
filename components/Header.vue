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
      class='px-4 mx-auto pb-14 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'
    >
      <div class='flex flex-col items-center justify-between lg:flex-row'>
        <div class='mb- lg:max-w-lg lg:pr-5 lg:mb-0'>
          <div class='max-w-xl mb-6'>
            <div>
              <p
                class='inline-block px-16 py-2 mb-4 text-3xl font-extrabold tracking-wide text-white uppercase rounded-full bg-gradient-to-r from-green-primary to-green-secondary'
              >
                Brand new token
              </p>
            </div>
            <h2
              class='max-w-lg mb-6 text-3xl font-bold tracking-tight text-white sm:text-3xl sm:leading-none'
            >
              World's Community coin created for helping
              <span class='inline-block text-green text-green-primary'
              >innocent pets</span
              >
            </h2>
            <p class='text-base font-medium text-gray-100 md:text-lg'>
              We're proud to be the first crypto currency creators who have just
              one purpose, help shelter for pets around the World. Safe Pets
              provides static reflections, every purchase automatically added to
              charity wallet 2% of transaction what will be provided to chosen
              shelters for pets.
            </p>
          </div>
          <div class='flex flex-col items-center md:flex-row'>
            <div class='flex items-center space-x-4'>
              <button
                class='px-32 uppercase text-right py-2 font-bold text-black bg-white rounded-full'
              >
                Coming soon...
              </button>
              <button class='button-wider'>Copy</button>
            </div>
          </div>
        </div>
        <div class='mb-32 lg:w-1/2'>
          <img
            class='object-cover w-full h-56 rounded sm:h-96'
            src='~/assets/dog_cat.png'
            alt='dog'
          />
        </div>
        <div class='flex flex-col text-green-secondary space-y-6 my-auto'>
          <div>
            <a target='_blank' href='https://twitter.com/safepets_token'>
              <SocialTwitter />
            </a>
          </div>
          <div>
            <a target='_blank' href='https://discord.gg/Q9yqvDbM'>
              <SocialDiscord />
            </a>
          </div>
          <div>
            <a target='_blank' href='https://t.me/Safepets_Official'>
              <SocialTelegram />
            </a>
          </div>
        </div>
      </div>
      <ButtonsDownButton />
    </div>
  </div>
</template>
