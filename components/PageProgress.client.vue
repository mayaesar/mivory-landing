<script setup lang="ts">

import {windowScroll} from "@tanstack/virtual-core";

const scrollPosition = ref(0)

const handleScroll = () => {
  scrollPosition.value = ((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});

</script>

<template>
  <div class="w-full fixed top-0 z-20">
    <div class="bg-pink-600 h-4 z-20" :style="{ width: scrollPosition + '%' }"></div>
  </div>
</template>
