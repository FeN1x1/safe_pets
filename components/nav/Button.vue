<template>
  <li>
    <nuxt-link v-if='scroll' class="cursor-pointer nav-item" :to="localePath('/' + to)" >
      {{ this.name }}
    </nuxt-link>
    <div v-else v-scroll-to="`#${to}`" class="cursor-pointer nav-item">{{ this.name }}</div>
  </li>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
     to: {
      type: String,
      required: true,
    },
    scroll: {
      type: Boolean,
      default: false
    }
  },
}
</script>
