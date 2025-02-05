<script setup lang="ts">

</script>

<template>
  <footer class="flex flex-col w-full items-center gap-6 pt-6 border-t border-gray-700">
    <div class="flex flex-col md:flex-row w-full items-center justify-between mb-6 gap-6">
      <div class="flex items-center gap-6">
        <div class="hidden md:flex items-center">
          <img src="/mivory-icon-no-bg.svg" alt="logo of a bookmark" class="size-8"/>
          <h1 class="text-rose-700 font-semibold ml-1"><a href="#">MIVORY</a></h1>
        </div>
        <a class="text-sm md:text-lg" href="/terms-and-conditions">Terms & Conditions </a>
        <a class="text-sm md:text-lg" href="/privacy-policy">Privacy Policy </a>
      </div>

      <a href="#hero">
        <UButton size="xl">
          Early Access
        </UButton>
      </a>
    </div>

    <p class="text-xs text-gray-700 mb-10">©2025 Mivory. All rights reserved.</p>

  </footer>
</template>
