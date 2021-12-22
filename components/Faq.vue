<template>
  <div id='faq' class='relative bg-brown-bg'>
    <div class='absolute inset-x-0 bottom-0'>
      <svg viewBox='0 0 224 12' fill='currentColor' class='w-full -mb-1 text-white' preserveAspectRa1tio='none'>
        <path
          d='M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z'></path>
      </svg>
    </div>
    <div class='px-4 py-8 sm:max-w-xl md:max-w-full md:px-24 lg:pb-32 lg:pt-16'>
      <div class='max-w-screen-lg sm:mx-auto'>
        <AppTitleSecondary title='FAQ' />
        <div class='mb-12 space-y-4'>
          <FaqSection  v-for='faq in faqs' :key='faq.title' :title='faq.title' :text='faq.text'/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Faq',
  data() {
    return {
      faqs: [
        {title: 'What is Safe pets Token?', text: 'Safe pets token is a decentralised cryptocurrency based on the idea of saving pets and other species from extinction.'},
        {title: 'What do you mean by "decentralised"?', text: 'Safe pets is not run by any individual company or person. Technically speaking, it operates according to rules agreed by consensus, rather than decided upon by some founding or owning entity.'},
        {title: 'Will Safe pets token price go up?', text: 'We believe the project is unique and there is big chance to be succesfull. '},
        {title: 'Does Safe pets token have a future?', text: 'As we have a great team of professionals with that makes everything for it than definitely yes. Stay tuned!'},
        {title: 'What do you mean by "cryptocurrency"?', text: 'A cryptocurrency is a digital currency that is secured by cryptography, in contrast to conventional (fiat) currencies where they are secured by a government or governments.'},
        {title: 'Okay, but what does that mean?', text: 'It means you don\'t have to trust any central organisation or person the way you would a bank, but also that you have to be your own bank. The developers can\'t seize your funds, but they also can\'t return them if you send them to the wrong address.'},
        {title: 'So who does run Safe pets token?', text: 'No-one, or everyone does equally, depending how you look at it. The developers can release new software, but the community have to choose to use that software. That community includes not just the end-users, but miners, exchanges, payment processors, etc. Typically the community does adopt new software we release because we have an established track record, but there\'s no special access we have.'},
        {title: 'How do I use/accept Safe pets token?', text: 'We plan to make a list of acceptors of the token to help indivitual organisations.'},
      ]
    }
  }
}
</script>