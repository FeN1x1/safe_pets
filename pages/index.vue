<template>
  <div>
    <Header />
    <Tokenomics />
    <Charity />
    <Roadmap />
    <Faq />
    <OurTeam />
    <AntiWhaleShield />
    <HowToBuy />
    <Contact class='hidden lg:flex' />
  </div>
</template>

<script>
import transition from "~/utils/lgNoTransition.js";
export default {
  transition
}
</script>
