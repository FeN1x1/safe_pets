<template>
  <LazyHowToBuyTemplate image-alt='trustwallet' image-url='trustwallet.png' :title4='$t("howToBuy.trustwallet.step4Title")'
                        :title3='$t("howToBuy.trustwallet.step3Title")' :title2='$t("howToBuy.trustwallet.step2Title")'
                        :title1='$t("howToBuy.trustwallet.step1Title")'>
    <template slot='section1'>
      {{ $t('howToBuy.trustwallet.step1Text') }}
    </template>
    <template slot='section2'>
      {{ $t('howToBuy.trustwallet.step2Text') }}
    </template>
    <template slot='section3'>
      {{ $t('howToBuy.trustwallet.step3Text') }}
    </template>
    <template slot='section4'>
      {{ $t('howToBuy.trustwallet.step4Text') }}
    </template>
  </LazyHowToBuyTemplate>
</template>

<script>
import transition from '~/utils/lgNoTransition.js'

export default {
  transition
}
</script>
