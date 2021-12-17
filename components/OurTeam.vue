<template>

  <div class='px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pb-16'>
    <AppTitle title='Our Team' />
    <div class='grid pt-8 gap-10 mx-auto sm:grid-cols-2 lg:grid-cols-4 lg:max-w-screen-lg'>
      <OurTeamPerson v-for='person in persons' :key='person.title' :title='person.title' :profession='person.profession'
                     :text='person.text'
                     :person-class='person.personClass' :person-image='person.personImage'
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'OurTeam',
  data() {
    return {
      persons: [
        {
          title: 'Michal',
          profession: 'Product Manager',
          text: 'Michal develops high quality business strategies and plans ensuring their alignment with short-term and long-term objectives. Experienced in Audit, Analysis & Forecasts. Also was a part of European voluntary organization. Manage important partnerships and Safe Pets token\'s team.\t\n',
          personClass: 'text-green-primary',
          personImage: 'test'
        },
        {
          title: 'Daniel Mala',
          profession: 'Product Manager',
          text: 'He\'s trying to manage the companionship between our team and law problems that occure.  34 year old but already been 15 years in several businesses.  He\'s favourite quote is: Sky is the limit!',
          personClass: 'text-purple-primary',
          personImage: 'test'
        },
        {
          title: 'Martin',
          profession: 'Product Manager',
          text: 'Our computer scientist and full-stack developer experienced in Blockchain, Trading and Technical analysis.  He is also working as programmer for a company that develops electric chargers for electric cars.\n',
          personClass: 'text-green-secondary',
          personImage: 'test'
        },
        {
          title: 'Peter Jandura',
          profession: 'Product Manager',
          text: 'Peter developed own trading system which provides fx signals. Manages our marketing campaigns, builds important partnerships and engages our community. ',
          personClass: 'text-purple-secondary',
          personImage: 'test'
        }
      ]
    }
  }
}
</script>