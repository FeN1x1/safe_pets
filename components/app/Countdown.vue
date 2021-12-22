<template>
  <div class='mb-8 text-white'>
    <h1 class='text-3xl text-center mb-3 font-extralight'>When will Safe Pets Token Launch?*</h1>
    <div class='text-6xl text-center flex w-full items-center justify-center'>
      <div class='text-2xl mr-1 font-extralight'>in</div>
      <div class='w-24 mx-1 p-2 bg-white text-brown-primary rounded-lg'>
        <div class='font-mono leading-none'>{{ times[0].time }}</div>
        <div class='font-mono uppercase text-sm leading-none'>Days</div>
      </div>
      <div class='w-24 mx-1 p-2 bg-white text-brown-primary rounded-lg'>
        <div class='font-mono leading-none'>00</div>
        <div class='font-mono uppercase text-sm leading-none'>Hours</div>
      </div>
      <div class='w-24 mx-1 p-2 bg-white text-brown-primary rounded-lg'>
        <div class='font-mono leading-none'>00</div>
        <div class='font-mono uppercase text-sm leading-none'>Minutes</div>
      </div>
      <div class='text-2xl mx-1 font-extralight'>and</div>
      <div class='w-24 mx-1 p-2 bg-white text-brown-primary rounded-lg'>
        <div class='font-mono leading-none'>00</div>
        <div class='font-mono uppercase text-sm leading-none'>Seconds</div>
      </div>
    </div>
    <p class='text-sm text-center mt-3'>*Time is only approximate and subject to change if necessary</p>
  </div>
</template>

<script>
export default {
  name: 'Countdown',
  data() {
    return {
      startTime: 'July 7, 2017 12:03:00',
      endTime: 'January 9, 2021 14:55:00',
      times: [
        { id: 0, text: 'Days', time: 1 },
        { id: 1, text: 'Hours', time: 1 },
        { id: 2, text: 'Minutes', time: 1 },
        { id: 3, text: 'Seconds', time: 1 }
      ],
      progress: 100,
      // isActive: false,
      timeinterval: undefined
    }
  },
  methods: {
    updateTimer: function() {
      if (
        this.times[3].time > 0 ||
        this.times[2].time > 0 ||
        this.times[1].time > 0 ||
        this.times[0].time > 0
      ) {
        this.getTimeRemaining()
        this.updateProgressBar()
      } else {
        clearTimeout(this.timeinterval)
        // this.times[3].time = this.times[2].time = this.times[1].time = this.times[0].time = 0;
        this.progress = 0
      }
    },
    getTimeRemaining: function() {
      let t = Date.parse(new Date(this.endTime)) - Date.parse(new Date())
      if (t >= 0) {
        this.times[3].time = Math.floor(t / 1000 % 60) //seconds
        this.times[2].time = Math.floor(t / 1000 / 60 % 60) //minutes
        this.times[1].time = Math.floor(t / (1000 * 60 * 60) % 24) //hours
        this.times[0].time = Math.floor(t / (1000 * 60 * 60 * 24)) //days
      } else {
        this.times[3].time = this.times[2].time = this.times[1].time = this.times[0].time = 0
        this.progress = 0
      }
    },
    updateProgressBar: function() {
      let startTime = Date.parse(new Date(this.startTime))
      let currentTime = Date.parse(new Date())
      let endTime = Date.parse(new Date(this.endTime))
      let interval = parseFloat(
        (currentTime - startTime) / (endTime - startTime) * 100
      ).toFixed(2)
      this.progress = 100 - interval
    }
  },
  created: function() {
    this.updateTimer()
    this.timeinterval = setInterval(this.updateTimer, 1000)
  }
}
</script>
