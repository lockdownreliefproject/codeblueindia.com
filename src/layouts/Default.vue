<template>
  <div>



    <HeroSection></HeroSection>
    <SectionOne></SectionOne>
    <SectionTwo></SectionTwo>
    <SectionThree></SectionThree>
    <SectionFourFaq></SectionFourFaq>
    <SectionFotter></SectionFotter>

    <!-- Header & Navigation -->
    <!-- <header class="p-6 flex flex-col md:flex-row items-center justify-between text-center">
      <strong>
        <g-link to="/" class="text-2xl">{{ $static.metadata.siteName }}</g-link>
      </strong>
      <nav class="flex gap-x-4 text-gray-600">
        <g-link class="nav__link" to="/">Home</g-link>
        <g-link class="nav__link" to="/blog/">Blog</g-link>
      </nav>
    </header> -->

    <!-- Page Content -->
    <!-- <main class="p-6">
      <slot/>
    </main> -->

  </div>
</template>
<script>
import HeroSection from '@/components/HeroSection'
import SectionOne from '@/components/SectionOne'
import SectionTwo from '@/components/SectionTwo'
import SectionThree from '@/components/SectionThree'
import SectionFourFaq from '@/components/SectionFourFaq'
import SectionFotter from '@/components/SectionFotter'

export default {
    components:{
      HeroSection,
      SectionOne,
      SectionTwo,
      SectionThree,
      SectionFourFaq,
      SectionFotter
    }
}
</script>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style scoped>
/* Add any Global Styles Here */

.active--exact { /* Active Nav Link */
  @apply text-gray-900;
}
.code_blue_text{
  color: #27a1d8;
}
</style>