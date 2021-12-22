<template>
  <div id='roadmap' class='px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pb-32 lg:pt-16'>
    <div class='max-w-xl md:mx-auto sm:text-center lg:max-w-6xl mb-16'>
      <AppTitle title='Roadmap' titleColor='text-gray-900' />
      <p class='text-2xl light-font  text-brown-primary'>
        Etiam purus neque, tempus sed efficitur ut, iaculis vel dui. Quisque vestibulum mauris at posuere tempus. Ut
        vitae auctor ante, sed suscipit massa. Morbi commodo erat vel tellus lobortis, et luctus neque commodo. In sit
        amet facilisis lorem.
      </p>
    </div>
    <div class='grid mx-auto space-y-6 lg:grid-cols-2 lg:space-y-0'>
      <div class='space-y-6 '>
        <RoadmapPhase v-for='item in phasesPart1' :key='item.phaseNumber' :text='item.phase' :phase='item.phaseNumber' />
      </div>
      <div class="space-y-6 ">
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
          phase: ' - Website launch <br> - Pre sale <br> - Token Launch <br> - Launching a token on social media networks <br> - Launch charity & marketing wallet',
          phaseNumber: 1
        },
        {
          phase: ' - <span class="font-bold">~500</span> holders <br> - <span class="font-bold">~1 000</span> telegram members <br> - Marketing push to spread awareness <br> - New Partnerships with international organizations and universities <br> - First charity donation ',
          phaseNumber: 2
        },
        {
          phase: ' - <span class="font-bold">~1 000</span> holders <br> - <span class="font-bold">~2 000</span> telegram members <br> - Listing on Coinmarketcap and Coingecko <br> - NFT Gallery <br> - Second charity donation',
          phaseNumber: 3
        },
        {
          phase: ' - <span class="font-bold">~2 500</span> holders <br> - <span class="font-bold">~5 000</span> telegram members <br> - NFT Trading programme <br> - Customer service management <br> - Third donation to charity',
          phaseNumber: 4
        }
      ],
      phasesPart2: [
        {
          phase: ' - <span class="font-bold">~5 000</span> holders <br> - <span class="font-bold">~10 000</span> telegram members <br> - Listing on bigger CEXs <br> - Safe Pets app for android/iOS <br> - Fourth charity donation <br> - Opening our first office in Bratislava',
          phaseNumber: 5
        },
        {
          phase: ' - <span class="font-bold">~10 000</span> holders <br> - <span class="font-bold">~25 000</span> telegram members <br> - Safe Pets Swap <br> - TV and Radio interview. <br> - Fifth charity donation',
          phaseNumber: 6
        },
        {
          phase: ' - <span class="font-bold">~20 000+</span> holders <br> - <span class="font-bold">~50 000</span> telegram members <br> - NFT game <br> - Listing on more exchanges <br> - Sixth charity donation',
          phaseNumber: 7
        },
        {
          phase: ' - <span class="font-bold">~50 000+</span> holders <br> - <span class="font-bold">~80 000</span> telegram members <br> - New partnerships <br> - Massive internet campaign <br> - Building own pet shelter',
          phaseNumber: 8
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>