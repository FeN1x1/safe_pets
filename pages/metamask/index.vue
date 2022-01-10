<template>
  <LazyHowToBuyTemplate
    image-alt="metamask"
    image-url="metamask.png"
    :title4="$t('howToBuy.metamask.step4Title')"
    :title3="$t('howToBuy.metamask.step3Title')"
    :title2="$t('howToBuy.metamask.step2Title')"
    :title1="$t('howToBuy.metamask.step1Title')"
  >
    <template slot="section1">
      <div class="light-font font-thin text-xl">
        {{ $t('howToBuy.metamask.step1Text') }}
      </div>
    </template>
    <template slot="section2">
      <div class="light-font font-thin text-xl">
        {{ $t('howToBuy.metamask.step2Text1') }}
      </div>
      <div
        v-html="$t('howToBuy.metamask.step2Text2')"
        class="text-brown-secondary text-lg font-light py-6"
      ></div>
      <div class="light-font font-thin text-xl">
        {{ $t('howToBuy.metamask.step2Text3') }}
      </div>
    </template>
    <template slot="section3">
      <div class="light-font font-thin text-xl">
        {{ $t('howToBuy.metamask.step3Text') }}
      </div>
    </template>
    <template slot="section4">
      <div class="light-font font-thin text-xl">
        {{ $t('howToBuy.metamask.step4Text') }}
      </div>
    </template>
  </LazyHowToBuyTemplate>
</template>

<script>
import transition from '~/utils/lgNoTransition.js'

export default {
  transition,
  head({ $seo }) {
    return $seo({
      title: this.$t('seo.metamask.title'),
      description: this.$t('seo.metamask.description'),
      keywords: this.$t('seo.metamask.keywords'),
    })
  },
}
</script>
