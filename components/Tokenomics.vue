<template>
  <section
    id="tokenomics"
    class="
      px-4
      py-4
      mx-auto
      mb-4
      sm:max-w-xl
      md:max-w-full
      lg:max-w-screen-xl
      md:px-24 md:mb-8
      lg:mb-6 lg:px-8 lg:pb-16
    "
  >
    <AppTitle :title="$t('tokenomics.title')" />
    <section class="grid row-gap-12 lg:grid-cols-2 sm:pt-8 pt-4">
      <TokenomicsSection
        image-class="w-28"
        image="tokenomics/marketing.png"
        :title="$t('tokenomics.marketingTitle')"
        :text="$t('tokenomics.marketingText')"
      />
      <TokenomicsSection
        image-class="w-24"
        class="mt-8 lg:mt-0"
        image="tokenomics/rewards.png"
        :title="$t('tokenomics.rewardsTitle')"
        :text="$t('tokenomics.rewardsText')"
      />
    </section>
    <section class="grid row-gap-12 mt-8 lg:mt-16 lg:grid-cols-2">
      <TokenomicsSection
        image-class="w-28"
        image="tokenomics/liquidity.png"
        :title="$t('tokenomics.liquidityTitle')"
        :text="$t('tokenomics.liquidityText')"
      />
      <TokenomicsSection
        class="mt-8 lg:mt-0"
        image="tokenomics/wallet.png"
        :title="$t('tokenomics.charityTitle')"
        :text="$t('tokenomics.charityText')"
        :wallet="true"
      />
    </section>
  </section>
</template>

<script>
export default {
  name: 'Tokenomics',
}
</script>

<style scoped></style>
