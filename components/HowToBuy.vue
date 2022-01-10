<template>
  <article id='howToBuy' class='px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
    <AppTitle :title='$t("howToBuy.title")' />
    <div class='grid gap-8 row-gap-5 md:grid-cols-3 sm:max-w-screen-lg mx-auto'>
      <div
        class='relative p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl'>
        <nuxt-link
          :to="localePath('/trustwallet')">
          <div
            class='absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-gradient-to-r from-green-secondary to-green-primary group-hover:scale-x-100'></div>
          <div
            class='absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-gradient-to-r from-green-secondary to-green-primary group-hover:scale-y-100'></div>
          <div
            class='absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-gradient-to-l from-green-secondary to-green-primary group-hover:scale-x-100'></div>
          <div
            class='absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-gradient-to-l from-green-secondary to-green-primary group-hover:scale-y-100'></div>
          <div class='text-center my-auto py-auto p-4 lg:p-8 sm:mt-1'>
            <nuxt-img
              class='object-fill w-full'
              src='trustwallet.png'
              alt='trustwallet'
            />
          </div>
        </nuxt-link>
      </div>
      <div
        class='relative p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl'>
        <nuxt-link
          :to="localePath('/metamask')">
          <div
            class='absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-gradient-to-r from-green-secondary to-green-primary group-hover:scale-x-100'></div>
          <div
            class='absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-gradient-to-r from-green-secondary to-green-primary group-hover:scale-y-100'></div>
          <div
            class='absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-gradient-to-l from-green-secondary to-green-primary group-hover:scale-x-100'></div>
          <div
            class='absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-gradient-to-l from-green-secondary to-green-primary group-hover:scale-y-100'></div>
          <div class='text-center my-auto py-auto p-4 lg:p-8'>
            <nuxt-img
              class='object-contain my-auto'
              src='metamask.png'
              alt='metamask'
            />
          </div>
        </nuxt-link>
      </div>
      <div
        class='relative p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl'>
        <a target='_blank' href='https://pancakeswap.finance/swap'>
          <div
            class='absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-gradient-to-r from-green-secondary to-green-primary group-hover:scale-x-100'></div>
          <div
            class='absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-gradient-to-r from-green-secondary to-green-primary group-hover:scale-y-100'></div>
          <div
            class='absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-gradient-to-l from-green-secondary to-green-primary group-hover:scale-x-100'></div>
          <div
            class='absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-gradient-to-l from-green-secondary to-green-primary group-hover:scale-y-100'></div>
          <div class='text-center my-auto py-auto p-4 lg:p-8 sm:mt-1'>
            <nuxt-img
              class='object-contain my-auto'
              src='pancake-swap.png'
              alt='pancake-swap'
            />
          </div>
        </a>
      </div>
    </div>
    <AppTitleSmaller :title='$t("howToBuy.exchanges.title")' class='-pb-4' />
    <div class='grid grid-cols-2 row-gap-8 md:grid-cols-4'>
      <BannersBanner v-for='banner in banners' :key='banner.image' :link='banner.link' :image='banner.image' />
    </div>
  </article>
</template>

<script>
export default {
  name: 'HowToBuy',
  data() {
    return {
      banners: [
        { image: 'bscscan', link: 'https://pancakeswap.finance/swap' },
        { image: 'dextools', link: 'https://www.dextools.io/' },
        { image: 'binance-smart-chain', link: 'https://www.binance.com/' },
        { image: 'poocoin', link: 'https://poocoin.app/' }
      ]
    }
  }
}
</script>

<style scoped>

</style>