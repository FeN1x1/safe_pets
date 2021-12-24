<template>
  <div id='tokenomics' class='px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:mb-24 lg:px-8 lg:pb-16'>
    <AppTitle title='Tokenomics' class='-mt-2' />
    <div class='grid row-gap-12 lg:grid-cols-2 sm:pt-8 pt-4'>
      <TokenomicsSection
        image-class='w-28'
        title='Huge Marketing'
        text='2% of every transaction is allocated to Marketing. This allows us to fuel our most ambitious projects in
          service of further rewarding our community.' image='tokenomics/marketing.png'
      />
      <TokenomicsSection
        image-class='w-24'
        class='mt-8 lg:mt-0'
        title='Rewards Holding'
        text='2% of each transaction is redistributed to token holders. Thatm eans ou can earn more Safe pets token by just
          holding them in your wallet.' image='tokenomics/rewards.png'
      />
    </div>
    <div class='grid row-gap-12 mt-8 lg:mt-16 lg:grid-cols-2'>
      <TokenomicsSection
        title='Charity Wallet'
        text='We have a designated charity wallet that receivers 2% of each transaction that are used to support our charity partners.'
        image='tokenomics/wallet.png'
      />
      <TokenomicsSection
        image-class='w-28'
        class='mt-8 lg:mt-0'
        title='Growing Liquidity'
        text='2% of each transaction added to locked Pancakeswap liquidity pool.'
        image='tokenomics/liquidity.png'
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tokenomics'
}
</script>

<style scoped></style>
