<script setup lang="ts">
const mainPage = () => {
  window.location.href = "/";
}
</script>

<template>
  <nav class="flex items-center gap-6 md:gap-60 text-3xl">
    <div class="flex items-center gap-2 shrink-0" @click="mainPage">
      <img src="/mivory-icon-no-bg.svg" alt="mivory icon: smart elephant" class="size-16"/>
      <h1 class="hidden md:block text-rose-700 font-theme font-bold"><a href="#">MIVORY</a></h1>
    </div>
    <div class="absolute top-4 right-8">
      <LanguageSwitch />
    </div>
  </nav>
</template>
