<script setup lang="ts">

</script>

<template>
  <section id="hero" class="flex-1 flex flex-col-reverse md:flex-row items-center justify-center gap-8 md:gap-24">
    <div class="relative w-full md:max-w-[280px] aspect-[9/16] shrink-0">
      <LazyNuxtImg src="/phoneMock.svg" alt="phone frame" />
    </div>
    <div>
      <h1 class="text-5xl md:text-7xl font-bold mb-6">Save, Organize, <br/> Collaborate</h1>
      <p class="text-gray-700 text-lg">
        <strong>Mivory </strong>
        let's you save content from anywhere, organize your ideas with custom bookshelves, and collaborate effortlessly with friends.
      </p>
      <div class="flex items-center justify-between md:justify-start gap-2 md:gap-4 mt-12 mb-8">
        <UIcon name="ph-instagram-logo" class="size-8"/>
        <UIcon name="ph-google-logo" class="size-8"/>
        <UIcon name="ph-x-logo" class="size-8"/>
        <UIcon name="ph-github-logo" class="size-8"/>
        <UIcon name="ph-tiktok-logo" class="size-8"/>
        <UIcon name="ph-pinterest-logo" class="size-8"/>
        <UIcon name="ph-youtube-logo" class="size-8"/>
        <UIcon name="ph-map-pin" class="size-8"/>
      </div>
      <div class="flex flex-col justify-center md:block">
        <EmailInput/>
        <p class="mt-2 text-gray-500">
          Be the
          <span class="text-gray-900 font-semibold">first</span>
          to know when we launch and get
          <span class="text-gray-900 font-semibold">exclusive early access!</span>
        </p>
      </div>

    </div>
  </section>
</template>
