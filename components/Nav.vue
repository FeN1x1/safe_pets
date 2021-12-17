<template>
  <div class="bg-brown-primary">
    <div
      class="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8"
    >
      <div class="relative flex items-center justify-between">
        <a
          href="/"
          aria-label="Company"
          title="Company"
          class="inline-flex items-center"
        >
          <img src="~/assets/safepets.png" alt="logo" class="w-20 h-20" />
          <span class="ml-4 text-2xl font-bold tracking-wide text-gray-100"
            >Safe Pets</span
          >
        </a>
        <ul class="flex items-center space-x-8 lg:flex">
          <NavButton name="Tokenomics" />
          <NavButton name="Charity" />
          <NavButton name="Roadmap" />
          <NavButton name="FAQ" />
          <NavButton name="Our Team" />
          <NavButton name="Contact" />
          <li>
            <div class="button">
              Buy Now!
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>
