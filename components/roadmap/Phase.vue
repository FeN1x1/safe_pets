<template>
  <div class='flex mt-16 flex-col sm:flex-row'>
    <div class='mr-4'>
      <div class='flex items-center justify-center w-20 h-20 rounded-full'>
        <nuxt-img
          src='paw.png'
          class='w-14'
        />
      </div>
    </div>
    <div class='mt-4'>
      <h6 class='mb-6 ml-2 text-3xl title font-extrabold text-green-primary uppercase'>Phase {{ this.phase }}</h6>
      <p v-html='this.text' class='text-xl light-font text-brown-secondary'>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Phase',
  props: {
    phase: {
      type: Number,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  }
}
</script>