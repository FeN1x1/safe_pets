<template>
  <div>
    <Nav />
    <Nuxt />
    <Footer />
    <NavScrollButton />
  </div>
</template>

<style>
::-webkit-scrollbar {
  width: 16px;
}

::-webkit-scrollbar-thumb {
  --tw-gradient-to: #00b3b7;
  --tw-gradient-stops: var(--tw-gradient-from),
  var(--tw-gradient-to, rgba(0, 179, 183, 0));
  --tw-gradient-from: #0ce2af;
  background-image: linear-gradient(to bottom, var(--tw-gradient-stops));
  border-radius: 100px;
}

</style>

