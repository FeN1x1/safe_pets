<template>
  <div class='px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pb-16'>
    <div class='max-w-xl md:mx-auto sm:text-center lg:max-w-2xl mb-16'>
      <AppTitle title='Roadmap' titleColor='text-gray-900' />
      <p class='text-2xl text-brown-primary'>
        Etiam purus neque, tempus sed efficitur ut, iaculis vel dui. Quisque vestibulum mauris at posuere tempus. Ut
        vitae auctor ante, sed suscipit massa. Morbi commodo erat vel tellus lobortis, et luctus neque commodo. In sit
        amet facilisis lorem.
      </p>
    </div>
    <div class='grid max-w-screen-lg mx-auto space-y-6 lg:grid-cols-2 lg:space-y-0'>
      <div class='space-y-6 sm:px-8'>
        <RoadmapPhase v-for='item in phasesPart1' :key='item.phaseNumber' :text='item.phase' :phase='item.phaseNumber' />
      </div>
      <div class="space-y-6 sm:px-8">
        <RoadmapPhase v-for='item in phasesPart2' :key='item.phaseNumber' :text='item.phase' :phase='item.phaseNumber' />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Roadmap',
  data() {
    return {
      phasesPart1: [
        {
          phase: ' - Etiam purus neque, tempus sed efficitur ut <br> - In sit amet facilisis lorem. <br> - Ut vitae auctor ante, sed suscipit massa. <br> - Quisque vestibulum mauris',
          phaseNumber: 1
        },
        {
          phase: ' - Etiam purus neque, tempus sed efficitur ut <br> - In sit amet facilisis lorem. <br> - Ut vitae auctor ante, sed suscipit massa. <br> - Quisque vestibulum mauris',
          phaseNumber: 2
        },
        {
          phase: ' - Etiam purus neque, tempus sed efficitur ut <br> - In sit amet facilisis lorem. <br> - Ut vitae auctor ante, sed suscipit massa. <br> - Quisque vestibulum mauris',
          phaseNumber: 3
        }
      ],
      phasesPart2: [
        {
          phase: ' - Etiam purus neque, tempus sed efficitur ut <br> - In sit amet facilisis lorem. <br> - Ut vitae auctor ante, sed suscipit massa. <br> - Quisque vestibulum mauris',
          phaseNumber: 4
        },
        {
          phase: ' - Etiam purus neque, tempus sed efficitur ut <br> - In sit amet facilisis lorem. <br> - Ut vitae auctor ante, sed suscipit massa. <br> - Quisque vestibulum mauris',
          phaseNumber: 5
        },
        {
          phase: ' - Etiam purus neque, tempus sed efficitur ut <br> - In sit amet facilisis lorem. <br> - Ut vitae auctor ante, sed suscipit massa. <br> - Quisque vestibulum mauris',
          phaseNumber: 6
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>