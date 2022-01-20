<template>
  <section id="ourTeam" class="sm:px-16 py-8 mx-auto lg:pb-16 lg:pt-8">
    <AppTitle :title="$t('ourTeam.title')" class="px-4" />
    <section
      class="
        grid
        lg:grid-cols-4
        sm:grid-cols-2
        grid-cols-1
        mx-auto
        justify-center
        lg:max-w-screen-2xl
      "
    >
      <OurTeamPerson
        v-for="person in $t('ourTeam.persons')"
        :key="person.title"
        :title="person.title"
        :profession="person.profession"
        :text="person.text"
        :image="person.image"
        :person-class="person.personClass"
        :person-linked-in="person.personLinkedIn"
      />
    </section>
  </section>
</template>

<script>
export default {
  name: 'OurTeam',
}
</script>
