<template>
  <div class="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
    <div class="grid grid-cols-2 row-gap-8 md:grid-cols-4">
      <BannersBanner v-for='banner in banners' :key='banner.image' :link='banner.link' :image='banner.image' />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Banners',
  data() {
    return {
      banners: [
        { image: 'pancake-swap', link: 'https://pancakeswap.finance/swap'},
        { image: 'bscscan', link: 'https://pancakeswap.finance/swap'},
        { image: 'dextools', link: 'https://www.dextools.io/'},
        { image: 'binance-smart-chain', link: 'https://www.binance.com/'},
      ]
    }
  }
}
</script>

<style scoped>

</style>