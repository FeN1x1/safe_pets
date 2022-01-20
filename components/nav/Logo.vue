<template>
  <nuxt-link to="/">
    <nuxt-img
      sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
      src="/logo.png"
      alt="logo"
      class="w-24"
    />
    <span class="ml-4 text-2xl font-bold tracking-wide text-gray-100"
      >Safe Pets</span
    >
  </nuxt-link>
</template>

<script>
export default {
  name: 'Logo',
}
</script>
