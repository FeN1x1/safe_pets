<template>
  <article id='tokenomics'
       class='px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:mb-24 lg:px-8 lg:pb-16'>
    <AppTitle :title='$t("tokenomics.title")' class='-mt-2' />
    <section class='grid row-gap-12 lg:grid-cols-2 sm:pt-8 pt-4'>
      <TokenomicsSection
        image-class='w-28'
        image='tokenomics/marketing.png'
        :title='$t("tokenomics.marketingTitle")'
        :text='$t("tokenomics.marketingText")'
      />
      <TokenomicsSection
        image-class='w-24'
        class='mt-8 lg:mt-0'
        image='tokenomics/rewards.png'
        :title='$t("tokenomics.rewardsTitle")'
        :text='$t("tokenomics.rewardsText")'
      />
    </section>
    <section class='grid row-gap-12 mt-8 lg:mt-16 lg:grid-cols-2'>
      <TokenomicsSection
        image='tokenomics/wallet.png'
        :title='$t("tokenomics.charityTitle")'
        :text='$t("tokenomics.charityText")'
      />
      <TokenomicsSection
        image-class='w-28'
        class='mt-8 lg:mt-0'
        image='tokenomics/liquidity.png'
        :title='$t("tokenomics.liquidityTitle")'
        :text='$t("tokenomics.liquidityText")'
      />
    </section>
  </article>
</template>

<script>
export default {
  name: 'Tokenomics'
}
</script>

<style scoped></style>
