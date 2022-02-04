<template>
  <div class="w-full flex justify-end">
    <div
      class="
        focus:outline-none focus:ring-2
        ring-offset-2
        focus:ring-gray-600
        mt-4
        justify-end
        flex
        items-center
      "
    >
      <span class="text-lg tracking-wide text-green-secondary">{{ $t('news.readMore') }}</span>
      <nuxt-img
        class="w-4 my-auto ml-2 h-4"
        src="arrow-right.png"
        alt="arrow"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Readmore'
}
</script>
