<script setup lang="ts">
const { t, setLocale, locale } = useI18n({
  messages: {
    en: {
      en: "English",
      fr: "French",
    },
    fr: {
      en: "Anglais",
      fr: "Français",
    }
  }
});

const toggleLocale = () => {
  setLocale(locale.value === "en" ? "fr" : "en");
};
</script>

<template>
  <UButton color="gray" @click="toggleLocale">
    {{ locale ? t(locale) : t("en") }}
  </UButton>
</template>