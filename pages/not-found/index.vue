<template>
  <div class="my-8 height sm:my-32 flex">
    <div class='m-auto'>
      <h2 class="text-green-secondary text-9xl text-center mb-4">404</h2>
      <div class='text-black text-3xl text-center'>
        <p class='mb-4'>Not Found</p>
        <nuxt-link class='underline' :to="localePath('/')">
          Back to homepage
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'error',
}
</script>

<style scoped>
.height {
  height: 66.5vh;
}
</style>
