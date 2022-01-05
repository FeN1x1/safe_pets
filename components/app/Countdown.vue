<template>
  <div class="mb-8 text-white">
    <h1 class="text-3xl text-center mb-3 font-extralight">
      {{ $t('countdown.title') }}<span class="text-green-primary">*</span>
    </h1>
    <div class="text-6xl text-center flex w-full items-center justify-center">
      <div class="hidden sm:flex text-2xl mr-4 font-extralight">
        {{ $t('countdown.in') }}
      </div>
      <div class="w-24 mx-1 p-2 bg-white text-brown-primary rounded-lg">
        <div class="font-bold leading-none mt-1">{{ days }}</div>
        <div class="font-bold uppercase text-base text-green-secondary leading-none">
          {{ $t('countdown.days') }}
        </div>
      </div>
      <div class="w-24 mx-1 p-2 bg-white text-brown-primary rounded-lg">
        <div class="font-bold leading-none mt-1">{{ hours }}</div>
        <div class="font-bold uppercase text-base text-green-secondary leading-none">
          {{ $t('countdown.hours') }}
        </div>
      </div>
      <div class="w-24 mx-1 p-2 bg-white text-brown-primary rounded-lg">
        <div class="font-bold leading-none mt-1">{{ minutes }}</div>
        <div class="font-bold uppercase text-base text-green-secondary leading-none">
          {{ $t('countdown.minutes') }}
        </div>
      </div>
      <div class="hidden sm:flex text-2xl mx-4 font-extralight">
        {{ $t('countdown.and') }}
      </div>
      <div
        class="
          hidden
          sm:block
          w-24
          mx-1
          p-2
          bg-white
          text-brown-primary
          rounded-lg
        "
      >
        <div class="font-bold leading-none mt-1">{{ seconds }}</div>
        <div class="font-bold uppercase text-base text-green-secondary leading-none">
          {{ $t('countdown.seconds') }}
        </div>
      </div>
    </div>
    <p
      class="
        text-sm text-center
        mt-3
        text-transparent
        bg-clip-text bg-gradient-to-r
        from-green-secondary
        to-green-primary
      "
    >
      {{ $t('countdown.text') }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'Countdown',
  props: ['starttime', 'endtime', 'trans'],
  data() {
    return {
      timer: '',
      wordString: {},
      start: '',
      end: '',
      interval: '',
      days: '',
      minutes: '',
      hours: '',
      seconds: '',
      message: '',
      statusType: '',
      statusText: '',
    }
  },
  created: function () {
    this.wordString = JSON.parse(this.trans)
  },
  mounted() {
    this.start = new Date(this.starttime).getTime()
    this.end = new Date(this.endtime).getTime()
    // Update the count down every 1 second
    this.timerCount(this.start, this.end)
    this.interval = setInterval(() => {
      this.timerCount(this.start, this.end)
    }, 1000)
  },
  methods: {
    timerCount: function (start, end) {
      // Get todays date and time
      var now = new Date().getTime()

      // Find the distance between now an the count down date
      var distance = start - now
      var passTime = end - now

      if (distance < 0 && passTime < 0) {
        this.message = this.wordString.expired
        this.statusType = 'expired'
        this.statusText = this.wordString.status.expired
        clearInterval(this.interval)
        return
      } else if (distance < 0 && passTime > 0) {
        this.calcTime(passTime)
        this.message = this.wordString.running
        this.statusType = 'running'
        this.statusText = this.wordString.status.running
      } else if (distance > 0 && passTime > 0) {
        this.calcTime(distance)
        this.message = this.wordString.upcoming
        this.statusType = 'upcoming'
        this.statusText = this.wordString.status.upcoming
      }
    },
    calcTime: function (dist) {
      // Time calculations for days, hours, minutes and seconds
      this.days = Math.floor(dist / (1000 * 60 * 60 * 24))
      this.hours = Math.floor((dist % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      this.minutes = Math.floor((dist % (1000 * 60 * 60)) / (1000 * 60))
      this.seconds = Math.floor((dist % (1000 * 60)) / 1000)
    },
  },
}
</script>
