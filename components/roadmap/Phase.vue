<template>
  <div class='flex flex-col max-w-md sm:flex-row'>
    <div class='mr-4'>
      <div class='flex items-center justify-center w-20 h-20 rounded-full'>
        <nuxt-img
          src='paw.png'
        />
      </div>
    </div>
    <div class='mt-4'>
      <h6 class='mb-6 text-2xl title font-extrabold text-green-secondary uppercase'>Phase {{ this.phase }}</h6>
      <p v-html='this.text' class='text-base text-brown-secondary'>
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