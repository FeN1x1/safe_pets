<template>
  <header id="navbar" class="bg-brown-bg">
    <div
      class="
        px-4
        py-5
        mx-auto
        sm:max-w-xl
        md:max-w-full
        lg:max-w-screen-2xl
        md:px-16
        lg:px-16
      "
    >
      <div class="relative fixed lg:flex items-center justify-between">
        <nuxt-link :to="localePath('/')">
          <nuxt-img src="logo.png" alt="logo" class="sm:h-20 h-16" />
        </nuxt-link>
        <div v-if="isXl">
          <nav class="flex items-center space-x-8 lg:flex">
            <NavButton
              :name="$t('header.navigation.tokenomics')"
              to="tokenomics"
            />
            <NavButton :name="$t('header.navigation.charity')" to="charity" />
            <NavButton :name="$t('header.navigation.roadmap')" to="roadmap" />
            <NavButton :name="$t('header.navigation.faq')" to="faq" />
            <NavButton :name="$t('header.navigation.ourTeam')" to="ourTeam" />
            <NavButton :name="$t('header.navigation.contact')" to="contactUs" />
            <div class="button" v-scroll-to="'#howToBuy'">
              {{ this.$t('header.navigation.buyNow') }}
            </div>
            <AppLanguageDropdown />
          </nav>
        </div>
        <div class="flex" v-else>
          <client-only>
            <Slide class="bottom-4" :closeOnNavigation="true" noOverlay right>
              <nav class="flex flex-col">
                <AppMobileLanguageChanger />
                <NavButton
                  :name="$t('header.navigation.tokenomics')"
                  to="tokenomics"
                  :desktop="false"
                />
                <NavButton
                  :name="$t('header.navigation.charity')"
                  to="charity"
                  :desktop="false"
                />
                <NavButton
                  :name="$t('header.navigation.roadmap')"
                  to="roadmap"
                  :desktop="false"
                />
                <NavButton
                  :name="$t('header.navigation.faq')"
                  to="faq"
                  :desktop="false"
                />
                <NavButton
                  :name="$t('header.navigation.ourTeam')"
                  to="ourTeam"
                  :desktop="false"
                />
                <NavButton
                  :name="$t('header.navigation.contact')"
                  to="contactUs"
                  :desktop="false"
                />
                <NavButton
                  :name="$t('header.navigation.buyNow')"
                  to="howToBuy"
                  :desktop="false"
                />
              </nav> </Slide
          ></client-only>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Nav',
  computed: {
    isXl() {
      return this.$breakpoints.xl
    },
  },
}
</script>

<style>
.bm-burger-bars {
  background-color: #0ce2af !important;
  border-radius: 0.525rem;
}
.bm-burger-button {
  top: 1.2rem !important;
  right: 0.5rem !important;
  transform: scale(0.80);
}
</style>
