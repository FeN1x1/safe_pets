<template>
  <li>
    <div v-scroll-to="`#${to}`" class="cursor-pointer nav-item">{{ this.name }}</div>
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
    }
  },
}
</script>
