<script setup lang="ts">
  const handleClick = () => {
    window.open('https://apps.apple.com/app/id6741949955', '_blank');
  };
</script>

<template>
  <UButton  variant="link" @click="handleClick()">
    <img src="/download_en_apple.svg" alt="Download on the App Store" class="w-40"/>
  </UButton>
</template>
