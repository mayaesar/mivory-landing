<script setup lang="ts">
const { setLocale, locale } = useI18n();

const toggleLocale = () => {
  setLocale(locale.value.startsWith("en") ? "fr" : "en");
};
</script>

<template>
  <UButton color="gray" @click="toggleLocale">
    {{ locale.startsWith("en") ? "Français" : "English" }}
  </UButton>
</template>