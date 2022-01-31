<template>
  <div class="flex mt-4 sm:mt-12 flex-col sm:flex-row">
    <div class="mr-4">
      <div class="flex items-center justify-center w-20 h-20 rounded-full">
        <nuxt-img
          sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
          src="paw.png"
          class="w-14"
          alt="paw"
        />
      </div>
    </div>
    <div>
      <h3
        class="
          mb-6
          ml-2
          sm:text-3xl
          text-2xl
          title
          font-extrabold
          text-green-primary
          uppercase
        "
      >
        {{ $t('roadmap.phase') }} {{ this.phase }}
      </h3>
      <ul>
        <li
          v-for="phase in phases"
          :key="phase.phase"
          :class='phase.completed ? "checkmark text-green-secondary" : "bullet text-brown-secondary"'
          class="text-xl sm:text-2xl light-font"
        >
          {{ phase.phase }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Phase',
  props: {
    phase: {
      type: Number,
      required: true,
    },
    phases: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style scoped>
ul {
  position: relative;
  list-style: none;
  margin-left: 0;
  padding-left: 1.9rem;
}
ul .bullet:before {
  content: "•";
  font-size: 35px;
  position: absolute;
  left: -5px;
  padding-left: 10px;
}

ul .checkmark:before {
  content: "✓";
  font-size: 25px;
  position: absolute;
  left: -7px;
  padding-left: 10px;
}
</style>
