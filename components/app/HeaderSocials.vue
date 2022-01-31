<template>
  <div
    class="
      flex flex-row
      pb-0
      pl-0
      my-auto
      lg:pl-8 lg:flex-col lg:space-y-10 lg:pb-8
    "
  >
    <div class="px-4 my-auto lg:px-0">
      <a target="_blank" href="https://www.facebook.com/SafePets-102695672332868/">
        <nuxt-img
          sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
          class="object-cover w-10"
          src="social/facebook.png"
          alt="facebook"
        />
      </a>
    </div>
    <div class="px-4 my-auto lg:px-0">
      <a target="_blank" href="https://twitter.com/safepets_token">
        <nuxt-img
          sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
          class="object-cover w-10"
          src="social/twitter.png"
          alt="twitter"
        />
      </a>
    </div>
    <div class="px-4 my-auto lg:px-0">
      <a target="_blank" href="https://discord.gg/pxYauvhFmV">
        <nuxt-img
          sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
          class="object-cover w-10"
          src="social/discord.png"
          alt="discord"
        />
      </a>
    </div>
    <div class="px-4 my-auto lg:px-0">
      <a target="_blank" :href="telegramLink">
        <nuxt-img
          sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
          class="object-cover w-10"
          src="social/telegram.png"
          alt="telegram"
        />
      </a>
    </div>
    <div class="px-4 my-auto lg:px-0">
      <a target="_blank" href="https://www.reddit.com/user/Safe_Pets_Official">
        <nuxt-img
          sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
          class="object-cover w-10"
          src="social/reddit.png"
          alt="telegram"
        />
      </a>
    </div>
    <div class="px-4 my-auto lg:px-0">
      <a target="_blank" href="mailto:contact@safepetstoken.com">
        <nuxt-img
          sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
          class="object-cover w-10"
          src="social/email.png"
          alt="email"
        />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    telegramLink() {
      return this.$i18n.locale === 'en' ? 'https://t.me/Safepets_Official' : 'https://t.me/SafePets_CZ_SK'
    }
  }
}
</script>
