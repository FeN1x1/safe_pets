<template>
  <footer class="bg-brown-bg">
    <div
      class="
        px-4
        mx-auto
        sm:max-w-xl
        md:max-w-full
        lg:max-w-screen-xl
        md:px-24
        lg:px-8
      "
    >
      <p
        class="
          text-xs
          light-font
          font-light
          sm:py-5
          py-3
          sm:text-center
          text-left text-white
        "
      >
        {{ $t('footer.text') }}
      </p>
    </div>
    <div class="text-green-tertiary text-purple-tertiary hidden"></div>
    <client-only placeholder="Načitáva...">
      <Cookie :buttonText="$t('cookies.button')">
        <div slot="message" class="md:pl-4">
          {{ $t('cookies.text') }}
        </div>
      </Cookie></client-only
    >
  </footer>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style>
.Cookie--base {
  padding: 1rem !important;
  background: #362b26 !important;
  color: white !important;
}

.Cookie--base .Cookie__button {
  --tw-gradient-to: #00b3b7;
  --tw-gradient-stops: var(--tw-gradient-from),
    var(--tw-gradient-to, rgba(0, 179, 183, 0));
  --tw-gradient-from: #0ce2af;
  background-image: linear-gradient(
    to right,
    var(--tw-gradient-stops)
  ) !important;
  border-radius: 9999px !important;
}

.Cookie > * {
  margin: 2px !important;
}
</style>
