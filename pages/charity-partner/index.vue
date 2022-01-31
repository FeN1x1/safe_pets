<template>
  <div>
    <AppHeader title='charity.partner.titlePart1' subTitle='charity.partner.titlePart2' text='charity.partner.text' image='tokenomics/rewards.png'/>
    <CharityPartnerSteps/>
    <CharityPartnerContact/>
  </div>
</template>

<script>
import transition from '~/utils/lgNoTransition.js'

export default {
  transition,
  head({ $seo }) {
    return $seo({
      title: this.$t('seo.charityPartner.title'),
      description: this.$t('seo.charityPartner.description'),
      keywords: this.$t('seo.charityPartner.keywords'),
    })
  },
}
</script>
