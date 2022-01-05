<template>
  <div id='roadmap' class='px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
    <div class='max-w-xl md:mx-auto sm:text-center lg:max-w-6xl '>
      <AppTitle :title='$t("roadmap.title")' titleColor='text-gray-900' />
      <p class='sm:text-2xl text-xl light-font  text-brown-primary'>
        {{ $t("roadmap.text") }}
      </p>
    </div>
    <div v-if='!isSmallerThanLg' class='grid sm:pt-12 sm:pb-20 mx-auto grid-cols-2'>
      <div class='sm:pl-8 sm:pr-32'>
        <template v-for='(phase, index) in $t("roadmap.phases")'>
          <RoadmapPhase v-if='(index + 1) % 2 === 1' :key='index + 1' :phases='phase.phases'
                        :phase='index + 1' />
        </template>
      </div>
      <div class='sm:pl-8 sm:pr-16'>
        <template v-for='(phase, index) in $t("roadmap.phases")'>
          <RoadmapPhase v-if='(index) % 2 === 1' :key='index + 1'
                        :phases='phase.phases' :phase='index + 1' class='lg:ml-16' />
        </template>
      </div>
    </div>
    <div v-else class='grid mx-auto space-y-6 grid-cols-1 space-y-0'>
      <RoadmapPhase v-for='(phase, index) in $t("roadmap.phases")' :key='index + 1'
                    :phases='phase.phases' :phase='index + 1' />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Roadmap',
  computed: {
    isSmallerThanLg() {
      return this.$breakpoints.sMd
    }
  }
}
</script>

