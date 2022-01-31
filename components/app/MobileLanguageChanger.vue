<template>
  <div class="flex p-4">
    <nuxt-link :class="isLinkDisabled('en')" :to="switchLocalePath('en')">
      <nuxt-img
        preload
        sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
        :class="getActiveLanguage('en')"
        src="flags/united-kingdom.png"
        alt="flag"
        class="w-10 h-10 mr-4 rounded-full"
      />
    </nuxt-link>

    <nuxt-link
      class="cursor-pointer"
      :class="isLinkDisabled('sk')"
      :to="switchLocalePath('sk')"
    >
      <nuxt-img
        sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
        src="flags/slovakia.png"
        alt="flag"
        class="w-10 h-10 mr-4 rounded-full"
        :class="getActiveLanguage('sk')"
      />
    </nuxt-link>
    <nuxt-link
      class="cursor-pointer"
      :class="isLinkDisabled('cz')"
      :to="switchLocalePath('cz')"
    >
      <nuxt-img
        sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
        src="flags/czech-republic.png"
        alt="flag"
        class="w-10 h-10 rounded-full"
        :class="getActiveLanguage('cz')"
      />
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'MobileLanguageChanger',
  methods: {
    getActiveLanguage(language) {
      switch (language) {
        case 'en':
          return {
            'border-green-secondary border-4 ': this.$i18n.locale === 'en',
          }
        case 'sk':
          return {
            'border-green-secondary border-4': this.$i18n.locale === 'sk',
          }
        case 'cz':
          return {
            'border-green-secondary border-4': this.$i18n.locale === 'cz',
          }
      }
    },
    isLinkDisabled(language) {
      switch (language) {
        case 'en':
          return {
            'pointer-events-none': this.$i18n.locale === 'en',
          }
        case 'sk':
          return {
            'pointer-events-none': this.$i18n.locale === 'sk',
          }
        case 'cz':
          return {
            'pointer-events-none': this.$i18n.locale === 'cz',
          }
      }
    },
  },
}
</script>
