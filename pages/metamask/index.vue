<template>
  <LazyHowToBuyTemplate image-alt='metamask' image-url='metamask.png' :title4='$t("howToBuy.metamask.step4Title")'
                        :title3='$t("howToBuy.metamask.step3Title")' :title2='$t("howToBuy.metamask.step2Title")'
                        :title1='$t("howToBuy.metamask.step1Title")'>
    <template slot='section1'>
      {{ $t('howToBuy.metamask.step1Text') }}
    </template>
    <template slot='section2'>
      {{ $t('howToBuy.metamask.step2Text1') }}
      <div v-html="$t('howToBuy.metamask.step2Text2')" class='text-brown-secondary text-lg font-semibold py-6'>
      </div>
      {{ $t('howToBuy.metamask.step2Text3') }}
    </template>
    <template slot='section3'>
      {{ $t('howToBuy.metamask.step3Text') }}
    </template>
    <template slot='section4'>
      {{ $t('howToBuy.metamask.step4Text') }}
    </template>
  </LazyHowToBuyTemplate>
</template>

<script>
import transition from '~/utils/lgNoTransition.js'

export default {
  transition
}
</script>
