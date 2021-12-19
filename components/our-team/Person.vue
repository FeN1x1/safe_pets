<template>
  <div>
    <img class='object-cover mx-auto w-44 h-44 rounded-full shadow'
         src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260'
         alt='Person' />
    <div class='flex flex-col justify-center mt-4'>
      <p class='text-3xl title text-center text-brown-primary uppercase font-extrabold'>{{ title }}</p>
      <p class='mb-4 text-xl text-center light-font' :class='personClass'>{{ profession }}</p>
      <p class='text-center tracking-wide light-font text-gray-800 text-xl'>
        {{ text }}
      </p>

    </div>
    <div v-if='personLinkedIn !== ""' class='flex' >
      <a target='_blank' :href='personLinkedIn' class='mx-auto text-center mt-4 text-green-secondary'>
        <SocialLinkedIn class='mx-auto' />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Person',
  props: {
    title: {
      type: String,
      required: true
    },
    profession: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    personClass: {
      type: String,
      required: true
    },
    personImage: {
      type: String,
      required: true
    },
    personLinkedIn: {
      type: String,
      required: true
    },
  }
}
</script>

<style scoped>

</style>