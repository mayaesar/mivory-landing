<script setup lang="ts">

</script>

<template>
  <NuxtLayout>
    <div class="md:h-dvh flex flex-col gap-3 py-3">
      <NavBar />
      <Hero />
    </div>
    <HowTo />
    <div class="h-dvh flex flex-col items-center justify-between">
      <AboutUs />
      <Footer />
    </div>
  </NuxtLayout>

</template>