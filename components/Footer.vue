<template>
  <footer class="bg-brown-bg">
    <div
      class="
        px-4
        pt-8
        mx-auto
        sm:max-w-xl
        md:max-w-full
        lg:max-w-screen-xl
        md:px-24
        lg:px-8
      "
    >
      <div class="grid gap-4 md:gap-16 row-gap-10 my-auto mb-8 lg:grid-cols-6">
        <div class="md:max-w-md lg:col-span-2">
          <nuxt-link :to="localePath('/')">
            <nuxt-img
              sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
              src="logo.png"
              alt="logo"
              class="sm:h-20 h-16"
            />
          </nuxt-link>
          <div class="mt-4 lg:max-w-sm">
            <p class="mt-4 text-xs text-white">
              {{ $t('footer.text') }}
            </p>
          </div>
        </div>
        <div
          class="grid grid-cols-1 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4"
        >
          <div>
            <ul class="mt-2 space-y-2">
              <li>
                <NavButton
                  :name="$t('header.navigation.tokenomics')"
                  to="tokenomics"
                />
              </li>
              <li>
                <a
                  href="https://www.cryptovoxels.com/s/safepetsgallery"
                  target="_blank"
                  class="cursor-pointer nav-item"
                >
                  {{ this.$t('header.navigation.nft-gallery') }}
                </a>
              </li>
              <li>
                <NavButton
                  :name="$t('header.navigation.partners')"
                  to="partners"
                />
              </li>
              <li>
                <NavButton
                  :name="$t('header.navigation.charity')"
                  to="charity"
                />
              </li>
              <li>
                <a
                  href="https://pancakeswap.finance/swap?outputCurrency=0x7aa50494c6ce91f346660fd3a113d72b2e909572"
                  target="_blank"
                  class="cursor-pointer nav-item"
                >
                  {{ this.$t('header.navigation.buyNow') }}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <ul class="mt-2 space-y-2">
              <li>
                <NavButton
                  :name="$t('header.navigation.roadmap')"
                  to="roadmap"
                />
              </li>
              <li>
                <NavButton
                  :name="$t('header.navigation.howToBuy')"
                  to="howToBuy"
                />
              </li>
              <li>
                <NavButton :name="$t('header.navigation.faq')" to="faq" />
              </li>
              <li>
                <NavButton
                  :name="$t('header.navigation.ourTeam')"
                  to="ourTeam"
                />
              </li>
              <li>
                <NavButton
                  :name="$t('header.navigation.contact')"
                  to="contact"
                />
              </li>
            </ul>
          </div>
          <div class="mt-2 space-y-2 lg:col-span-2">
            <p class="text-base font-bold tracking-wide text-white">Contacts</p>
            <div class="flex">
              <p class="mr-2 text-white">Email:</p>
              <a
                href="mailto:contact@safepetstoken.com"
                aria-label="Our email"
                title="Our email"
                class="
                  transition-colors
                  duration-300
                  text-green-tertiary
                  hover:text-green-secondary
                "
                >contact@safepetstoken.com</a
              >
            </div>
            <div class="flex">
              <p class="mr-2 text-white">Telegram:</p>
              <a
                :href="telegramLink"
                aria-label="Our telegram"
                title="Our telegram"
                target="_blank"
                class="
                  transition-colors
                  duration-300
                  text-green-tertiary
                  hover:text-green-secondary
                "
                >{{ telegramLink }}</a
              >
            </div>
          </div>
        </div>
      </div>
      <div
        class="flex flex-col justify-between pt-5 pb-10 border-t sm:flex-row"
      >
        <p class="text-sm text-gray-600">
          {{ $t('footer.copyright') }}
        </p>
        <div class="flex items-center mt-4 space-x-4 sm:mt-0">
          <a
            target="_blank"
            href="https://www.facebook.com/SafePets-102695672332868/"
            class="
              text-gray-500
              transition-colors
              duration-300
              hover:text-green-secondary
            "
          >
            <svg viewBox="0 0 24 24" fill="currentColor" class="h-5">
              <path
                d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z"
              ></path>
            </svg>
          </a>
          <a
            target="_blank"
            href="https://twitter.com/safepets_token"
            class="
              text-gray-500
              transition-colors
              duration-300
              hover:text-green-secondary
            "
          >
            <svg viewBox="0 0 24 24" fill="currentColor" class="h-5">
              <path
                d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z"
              ></path>
            </svg>
          </a>
          <a
            target="_blank"
            :href="telegramLink"
            class="
              text-gray-500
              transition-colors
              duration-300
              hover:text-green-secondary
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6"
              viewBox="0 0 50 50"
              fill="currentColor"
            >
              <path
                d="M46.137,6.552c-0.75-0.636-1.928-0.727-3.146-0.238l-0.002,0C41.708,6.828,6.728,21.832,5.304,22.445	c-0.259,0.09-2.521,0.934-2.288,2.814c0.208,1.695,2.026,2.397,2.248,2.478l8.893,3.045c0.59,1.964,2.765,9.21,3.246,10.758	c0.3,0.965,0.789,2.233,1.646,2.494c0.752,0.29,1.5,0.025,1.984-0.355l5.437-5.043l8.777,6.845l0.209,0.125	c0.596,0.264,1.167,0.396,1.712,0.396c0.421,0,0.825-0.079,1.211-0.237c1.315-0.54,1.841-1.793,1.896-1.935l6.556-34.077	C47.231,7.933,46.675,7.007,46.137,6.552z M22,32l-3,8l-3-10l23-17L22,32z"
              ></path>
            </svg>
          </a>
          <a
            target="_blank"
            href="https://discord.gg/pxYauvhFmV"
            class="
              text-gray-500
              transition-colors
              duration-300
              hover:text-green-secondary
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6"
              viewBox="0 0 50 50"
              fill="currentColor"
            >
              <path
                d="M42.298,11.65c-0.676-1.021-1.633-1.802-2.768-2.256c-2.464-0.988-4.583-1.648-6.479-2.02	C31.721,7.114,30.404,7.768,29.771,9l-0.158,0.308c-1.404-0.155-2.895-0.207-4.593-0.164c-1.741-0.042-3.237,0.009-4.643,0.164	L20.22,9c-0.633-1.232-1.952-1.885-3.279-1.625c-1.896,0.371-4.016,1.031-6.479,2.02c-1.134,0.454-2.091,1.234-2.768,2.256	c-4.721,7.131-6.571,14.823-5.655,23.517c0.032,0.305,0.202,0.578,0.461,0.741c3.632,2.29,6.775,3.858,9.891,4.936	c1.303,0.455,2.748-0.054,3.517-1.229l1.371-2.101c-1.092-0.412-2.158-0.9-3.18-1.483c-0.479-0.273-0.646-0.884-0.373-1.363	c0.273-0.481,0.884-0.65,1.364-0.373c3.041,1.734,6.479,2.651,9.942,2.651s6.901-0.917,9.942-2.651	c0.479-0.277,1.09-0.108,1.364,0.373c0.273,0.479,0.106,1.09-0.373,1.363c-1.056,0.603-2.16,1.105-3.291,1.524l1.411,2.102	c0.581,0.865,1.54,1.357,2.528,1.357c0.322,0,0.647-0.053,0.963-0.161c3.125-1.079,6.274-2.649,9.914-4.944	c0.259-0.163,0.429-0.437,0.461-0.741C48.869,26.474,47.019,18.781,42.298,11.65z M18.608,28.983c-1.926,0-3.511-2.029-3.511-4.495	c0-2.466,1.585-4.495,3.511-4.495s3.511,2.029,3.511,4.495C22.119,26.954,20.534,28.983,18.608,28.983z M31.601,28.957	c-1.908,0-3.478-2.041-3.478-4.522s1.57-4.522,3.478-4.522c1.908,0,3.478,2.041,3.478,4.522S33.509,28.957,31.601,28.957z"
              ></path>
            </svg>
          </a>
          <a
            target="_blank"
            href="https://www.reddit.com/user/Safe_Pets_Official"
            class="
              text-gray-500
              transition-colors
              duration-300
              hover:text-green-secondary
            "
          >
            <svg
              class="h-6"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 64 64"
            >
              <path
                d="M 51 2 A 5 5 0 0 0 46.849609 4.2207031 L 36.353516 2.3320312 L 34.636719 2.0214844 L 34.0625 3.8066406 L 29.138672 19.117188 C 22.50601 19.63419 16.640194 21.931493 12.466797 25.316406 A 6.5 6.5 0 0 0 7.5 23 A 6.5 6.5 0 0 0 6.109375 35.841797 C 6.0411703 36.388219 6 36.94093 6 37.5 C 6 47.72 17.64 56 32 56 C 46.36 56 58 47.72 58 37.5 C 58 36.942242 57.958513 36.390874 57.890625 35.845703 A 6.5 6.5 0 0 0 56.5 23 A 6.5 6.5 0 0 0 51.533203 25.316406 C 47.433265 21.991073 41.696699 19.72336 35.207031 19.154297 L 37.591797 6.6171875 L 46.136719 8.15625 A 5 5 0 0 0 51 12 A 5 5 0 0 0 51 2 z M 21.150391 29 C 23.830391 29 26 31.24 26 34 C 26 36.76 23.830391 39 21.150391 39 C 18.480391 39.06 16.300781 36.76 16.300781 34 C 16.300781 31.24 18.480391 29 21.150391 29 z M 42.849609 29 C 45.519609 29 47.699219 31.24 47.699219 34 C 47.699219 36.76 45.519609 39.06 42.849609 39 C 40.169609 39 38 36.76 38 34 C 38 31.24 40.169609 29 42.849609 29 z M 22.199219 43.400391 C 22.229219 43.420391 25.83 46.400391 32 46.400391 C 38.17 46.400391 42.110625 43.859844 42.140625 43.839844 L 44.199219 46.599609 C 44.009219 46.739609 39.58 50 32 50 C 24.42 50 19.990781 46.739609 19.800781 46.599609 L 22.199219 43.400391 z"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
    <div class="text-green-tertiary text-purple-tertiary hidden"></div>
    <client-only placeholder="Načitáva...">
      <Cookie :buttonText="$t('cookies.button')">
        <div slot="message" class="md:pl-4">
          {{ $t('cookies.text') }}
        </div>
      </Cookie></client-only
    >
    <AppPreload />
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  computed: {
    telegramLink() {
      return this.$i18n.locale === 'en'
        ? 'https://t.me/Safepets_Official'
        : 'https://t.me/SafePets_CZ_SK'
    },
  },
}
</script>

<style>
.Cookie--base {
  padding: 1rem !important;
  background: #362b26 !important;
  color: white !important;
}

.Cookie--base .Cookie__button {
  --tw-gradient-to: #00b3b7;
  --tw-gradient-stops: var(--tw-gradient-from),
    var(--tw-gradient-to, rgba(0, 179, 183, 0));
  --tw-gradient-from: #0ce2af;
  background-image: linear-gradient(
    to right,
    var(--tw-gradient-stops)
  ) !important;
  border-radius: 9999px !important;
}

.Cookie > * {
  margin: 2px !important;
}
</style>
