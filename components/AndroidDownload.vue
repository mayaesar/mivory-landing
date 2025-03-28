<script setup lang="ts">

const isClicked = ref(false);
</script>

<template>
  <div class="flex flex-col justify-start items-center w-52">
    <UButton  variant="link" @click="isClicked = true">
      <img src="/download_en_android.png" alt="Download on the Google Play  Store" class="w-44"/>
    </UButton>
  </div>

</template>