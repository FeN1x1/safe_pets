<template>
  <div id='ourTeam' class='sm:px-16 py-8 mx-auto lg:pb-16 lg:pt-8'>
    <AppTitle :title='$t("ourTeam.title")' class='px-4' />
    <div class='flex flex-col lg:flex-row flex-wrap mx-auto justify-center lg:max-w-screen-xl'>
      <OurTeamPerson v-for='person in $t("ourTeam.persons")' :key='person.title' :title='person.title' :profession='person.profession'
                     :text='person.text'
                     :image='person.image'
                     :person-class='person.personClass'
                     :person-linked-in='person.personLinkedIn'
      />
    </div>
  </div>
</template>
