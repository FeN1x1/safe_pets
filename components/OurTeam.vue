<template>
  <div id='ourTeam' class='relative py-8 mx-auto lg:px-32 lg:pb-32 lg:pt-16'>
    <!--    <nuxt-img class='absolute dog w-1/4' src='dog-question.png' />-->
    <AppTitle title='Our Team' />
    <!--    <div class='relative grid pt-16 gap-10 mx-auto sm:grid-cols-2 lg:grid-cols-4 lg:max-w-screen-xl'>-->
    <!--      <OurTeamPerson v-for='person in persons' :key='person.title' :title='person.title' :profession='person.profession'-->
    <!--                     :text='person.text'-->
    <!--                     :person-class='person.personClass' :person-image='person.personImage'-->
    <!--                     :person-linked-in='person.personLinkedIn'-->
    <!--      />-->
    <!--    </div>-->
    <div class='grid gap-10 mx-auto lg:grid-cols-2 lg:max-w-screen-lg'>
      <OurTeamPersonVol2 v-for='person in persons' :key='person.title' :title='person.title' :profession='person.profession'
                             :text='person.text'
                             :person-class='person.personClass' :person-image='person.personImage'
                             :person-linked-in='person.personLinkedIn' />
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
          personImage: 'test',
          personLinkedIn: 'https://www.linkedin.com/in/michal-sur%C5%BEin-1240851b3/'
        },
        {
          title: 'Daniel',
          profession: 'Product Manager',
          text: 'He\'s trying to manage the companionship between our team and law problems that occure.  34 year old but already been 15 years in several businesses.  He\'s favourite quote is: Sky is the limit!',
          personClass: 'text-purple-primary',
          personImage: 'test',
          personLinkedIn: ''
        },
        {
          title: 'Martin',
          profession: 'Product Manager',
          text: 'Our computer scientist and full-stack developer experienced in Blockchain, Trading and Technical analysis.  He is also working as programmer for a company that develops electric chargers for electric cars.\n',
          personClass: 'text-green-secondary',
          personImage: 'test',
          personLinkedIn: 'https://www.linkedin.com/in/martin-gelo-2b5249224/'
        },
        {
          title: 'Peter',
          profession: 'Product Manager',
          text: 'Peter developed own trading system which provides fx signals. Manages our marketing campaigns, builds important partnerships and engages our community. ',
          personClass: 'text-purple-secondary',
          personImage: 'test',
          personLinkedIn: 'https://www.linkedin.com/in/peter-jandura-1b658b122'
        },
        {
          title: 'Peter',
          profession: 'Product Manager',
          text: 'Peter developed own trading system which provides fx signals. Manages our marketing campaigns, builds important partnerships and engages our community. ',
          personClass: 'text-purple-secondary',
          personImage: 'test',
          personLinkedIn: 'https://www.linkedin.com/in/peter-jandura-1b658b122'
        }
      ]
    }
  }
}
</script>

<style scoped>
.dog {
  right: 0;
  bottom: 800px;
}
</style>