<script setup lang="ts">
import { useMousePosition } from "~/composables/useMousePosition";

const mousePosition = useMousePosition();

onMounted(() => {
  watch(mousePosition, (value) => {
    if (!value) return;
    document.body.style.backgroundImage = `radial-gradient(circle at ${value.x}px ${value.y}px, rgba(190, 24, 93, 0.2) 0%, rgba(253, 242, 248, 0.01) 6%)`;
  });
});
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
    </div>
    <Footer />
  </NuxtLayout>
</template>
