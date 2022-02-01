<template>
  <header id="navbar" class="bg-brown-bg">
    <div
      class="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl"
    >
      <div class="relative fixed lg:flex items-center justify-between">
        <nuxt-link :to="localePath('/')">
          <nuxt-img
            sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
            src="logo.png"
            alt="logo"
            class="sm:h-20 h-16"
          />
        </nuxt-link>
        <div v-if="isXl">
          <nav class="flex mt-2 items-center space-x-8 lg:flex">
            <NavButton
              v-if="screen > 1380"
              :name="$t('header.navigation.tokenomics')"
              to="tokenomics"
            />
            <a
              href="/safepets_audit.pdf"
              target="_blank"
              class="cursor-pointer nav-item"
            >
              Audit
            </a>
            <a
              href="https://www.cryptovoxels.com/s/safepetsgallery"
              target="_blank"
              class="cursor-pointer nav-item"
            >
              {{ this.$t('header.navigation.nft-gallery') }}
            </a>
            <NavButton :name="$t('header.navigation.partners')" to="partners" />
            <NavButton :name="$t('header.navigation.charity')" to="charity" />
            <NavButton :name="$t('header.navigation.howToBuy')" to="howToBuy" />
            <AppInfoDropdown />
            <a
              class="button -ml-4"
              href="https://www.pinksale.finance/#/launchpad/0x1bc55F32cE62779632c3E693F2DBAC4Ce412Fdd8?chain=BSC"
              target="_blank"
            >
              {{ this.$t('header.navigation.buyNow') }}
            </a>
            <AppLanguageDropdown />
          </nav>
        </div>
        <div class="flex" v-else>
          <client-only>
            <Slide class="bottom-4" :closeOnNavigation="true" noOverlay right>
              <nav class="flex flex-col">
                <AppMobileLanguageChanger />
                <a
                  href="https://www.pinksale.finance/#/launchpad/0x1bc55F32cE62779632c3E693F2DBAC4Ce412Fdd8?chain=BSC"
                  target="_blank"
                  class="px-4 py-3 text-2xl text-green-secondary cursor-pointer"
                >
                  {{ $t('header.navigation.buyNow') }}
                </a>
                <NavButton
                  :name="$t('header.navigation.tokenomics')"
                  to="tokenomics"
                  :desktop="false"
                />
                <a
                  href="/safepets_audit.pdf"
                  target="_blank"
                  class="px-4 py-3 text-2xl text-green-secondary cursor-pointer"
                >
                  Audit
                </a>
                <a
                  href="https://www.cryptovoxels.com/s/safepetsgallery"
                  target="_blank"
                  class="px-4 py-3 text-2xl text-green-secondary cursor-pointer"
                >
                  {{ this.$t('header.navigation.nft-gallery') }}
                </a>
                <NavButton
                  :name="$t('header.navigation.partners')"
                  to="partners"
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
                  :name="$t('header.navigation.howToBuy')"
                  to="howToBuy"
                  :desktop="false"
                />
                <NavButton
                  :name="$t('header.navigation.contact')"
                  to="contactUs"
                  :desktop="false"
                />
              </nav>
            </Slide></client-only
          >
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
    screen() {
      return this.$screen.width
    },
  },
  methods: {
    toggleToast() {
      if (!this.isToastActive) {
        this.isToastActive = true
        this.$toast.warning(this.$t('contactUs.soon'), {})
        setTimeout(() => {
          this.isToastActive = false
        }, 5000)
      }
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
  right: -1px !important;
  top: 1.2rem !important;
  transform: scale(0.8);
}
.bm-menu {
  padding-top: 10px !important;
}
</style>
