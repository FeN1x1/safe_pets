<template>
  <div id='navbar' class='bg-brown-bg'>
    <div
      class='px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-16 lg:px-16'
    >
      <div class='relative flex items-center justify-between'>
        <nuxt-link :to="localePath('/')">
          <nuxt-img src='logo.png' alt='logo' class='sm:h-20 h-16' />
        </nuxt-link>
        <template v-if='isXl'>
          <ul class='flex items-center space-x-8 lg:flex'>
            <NavButton :name="$t('header.navigation.tokenomics')" to='tokenomics' />
            <NavButton :name="$t('header.navigation.charity')" to='charity' />
            <NavButton :name="$t('header.navigation.roadmap')" to='roadmap' />
            <NavButton :name="$t('header.navigation.faq')" to='faq' />
            <NavButton :name="$t('header.navigation.ourTeam')" to='ourTeam' />
            <NavButton :name="$t('header.navigation.contact')" to='contactUs' />
            <li>
              <div class='button' v-scroll-to="'#howToBuy'">
                {{ this.$t('header.navigation.buyNow') }}
              </div>
            </li>
            <AppLanguageDropdown />
          </ul>
        </template>
        <template v-else>
          <AppLanguageDropdown />
        </template>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    isXl() {
      return this.$breakpoints.xl
    }
  }
}
</script>