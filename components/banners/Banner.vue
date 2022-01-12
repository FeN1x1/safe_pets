<template>
<!--  <a target='_blank' event='' :href='link' class='text-center my-auto sm:px-4'>-->
<!--    <nuxt-img :src='`partners/${image}.png`' :alt='image' />-->
<!--  </a>-->
  <div v-tooltip.top-center="msg" class='text-center cursor-not-allowed hover-blur transition duration-300 transform my-auto sm:px-4'>
    <nuxt-img :src='`partners/${image}.png`' :alt='image' />
  </div>
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
