<template>
  <LazyHowToBuyTemplate
    image-alt="trustwallet"
    image-url="trustwallet.png"
    :title4="$t('howToBuy.trustwallet.step4Title')"
    :title3="$t('howToBuy.trustwallet.step3Title')"
    :title2="$t('howToBuy.trustwallet.step2Title')"
    :title1="$t('howToBuy.trustwallet.step1Title')"
  >
    <template slot="section1">
      <div class="light-font font-thin text-xl">
        {{ $t('howToBuy.trustwallet.step1Text') }}
      </div>
    </template>
    <template slot="section2">
      <div class="light-font font-thin text-xl">
        {{ $t('howToBuy.trustwallet.step2Text') }}
      </div>
    </template>
    <template slot="section3">
      <div class="light-font font-thin text-xl">
        {{ $t('howToBuy.trustwallet.step3Text') }}
      </div>
    </template>
    <template slot="section4">
      <div class="light-font font-thin text-xl">
        {{ $t('howToBuy.trustwallet.step4Text') }}
      </div>
    </template>
  </LazyHowToBuyTemplate>
</template>

<script>
import transition from '~/utils/lgNoTransition.js'

export default {
  transition,
}
</script>
