<template>
  <div id='faq' class='relative bg-brown-bg'>
    <div class='absolute inset-x-0 bottom-0'>
      <svg viewBox='0 0 224 12' fill='currentColor' class='w-full -mb-1 text-white' preserveAspectRa1tio='none'>
        <path
          d='M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z'></path>
      </svg>
    </div>
    <div class='mx-auto px-4 py-8 sm:max-w-xl md:max-w-full md:px-24 lg:pb-32 lg:pt-16'>
      <div class='max-w-screen-lg sm:mx-auto'>
        <AppTitleSecondary class='max-w-screen-md' :title='$t("faq.title")' />
        <div class='mb-12 space-y-4'>
          <FaqSection v-for='faq in $t("faq.questions")' :key='faq.question' :title='faq.question' :text='faq.answer'/>
        </div>
      </div>
    </div>
    <div>
<!--      <nuxt-img src='dog-question.png' class='dog absolute w-1/5' alt='dog' />-->
    </div>
  </div>
</template>

<script>
export default {
  name: 'Faq'
}
</script>

<style scoped>
.dog {
  right: 4rem;
  top: 33rem;
}
</style>