<template>
  <div class='bg-brown-bg'>
    <div
      class='px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'
    >
      <div class='relative flex items-center justify-between'>
        <nuxt-link to='/'>
          <nuxt-img src='logo.png' alt='logo' class='sm:h-20 h-16' />
        </nuxt-link>
        <ul v-if='isSmallThanLg' class='flex items-center space-x-8 lg:flex'>
          <NavButton name='Tokenomics' to='tokenomics' />
          <NavButton name='Charity' to='charity' />
          <NavButton name='Roadmap' to='roadmap' />
          <NavButton name='FAQ' to='faq' />
          <NavButton name='Our Team' to='ourTeam' />
          <NavButton name='Contact' to='contact' />
          <li>
            <div class='button' v-scroll-to="'#howToBuy'">
              Buy Now!
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    isMdOrSm () { return this.$breakpoints.md || this.$breakpoints.sm },
    isLargeThanSm() {
      return this.$breakpoints.lSm // Is Large than sm include sm
    },
    isSmallThanLg() {
      return this.$breakpoints.lLg // Is Small than md include md
    }
    // ... etc lSm lMd lLg, and sSm sMd sLg
  }
}
</script>