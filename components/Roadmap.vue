<template>
  <section
    id="roadmap"
    class="
      px-4
      pt-4
      pb-4
      sm:pb-8
      mx-auto
      sm:max-w-xl
      md:max-w-full
      lg:max-w-screen-xl
      md:px-24
      lg:px-8
    "
  >
    <div class="max-w-xl md:mx-auto sm:text-center sm:mb-6 lg:max-w-6xl">
      <AppTitle :title="$t('roadmap.title')" title-color="text-gray-900" />
      <p class="sm:text-2xl text-xl light-font text-brown-primary">
        {{ $t('roadmap.text') }}
      </p>
    </div>
    <AppSwiper />
  </section>
</template>

<script>
export default {
  name: 'Roadmap',
}
</script>
