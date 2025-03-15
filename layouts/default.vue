<script setup lang="ts">
useSeoMeta({
  title: 'Mivory - My second memory',
  description: 'Mivory is a bookmarking manager that helps you save and organize your favourite links',
  ogTitle: 'Mivory - My second memory',
  ogDescription: 'Mivory is a bookmarking manager that helps you save and organize your favourite links',
  ogImage: 'https://mivory.app/metaImg.png',
  ogUrl: 'https://mivory.app',
});
</script>

<template>
  <PageProgress />
  <main class="relative flex-1 flex flex-col max-w-screen-lg mx-auto px-3 py-4">
    <div class="absolute top-4 right-8">
      <LanguageSwitch />
    </div>
    <slot />
  </main>
</template>