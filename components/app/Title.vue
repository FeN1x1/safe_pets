<template>
  <div class='max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12'>
    <div
      class='max-w-lg mb-6 font-sans text-4xl font-bold leading-none tracking-tight sm:text-5xl md:mx-auto' :class='titleColor'>

      <div class='relative inline-block'>
        <h2>{{ title }}</h2>
        <div class='w-full h-3 -mt-3 bg-deep-purple-accent-200'></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Title',
  props: {
    title: {
      type: String,
      required: true
    },
    titleColor: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>

</style>