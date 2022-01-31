<template>
  <main>
    <AppHeader :isHomepage='true' />
    <Tokenomics />
    <Charity />
    <Roadmap />
    <Faq />
    <OurTeam />
    <AntiWhaleShield />
    <HowToBuy />
    <Contact />
  </main>
</template>

<script>
import transition from "~/utils/lgNoTransition.js";
export default {
  transition,
  head({ $seo }) {
    return $seo({
      title: this.$t('seo.homepage.title'),
      description: this.$t('seo.homepage.description'),
      keywords: this.$t('seo.homepage.keywords')
    })
  }
}
</script>
