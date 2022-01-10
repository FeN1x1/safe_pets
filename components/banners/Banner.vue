<template>
  <a target='_blank' :href='link' class='text-center my-auto sm:px-4'>
    <nuxt-img :src='`partners/${image}.png`' :alt='image' />
  </a>
</template>

<script>
export default {
  name: 'Banner',
  props: {
    image: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    }
  }
}
</script>
