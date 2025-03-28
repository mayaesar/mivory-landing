  <script setup lang="ts">

  import AppleDownload from "~/components/AppleDownload.vue";

  const isClicked = ref(false);
  </script>

<template>
  <section id="hero" class="flex-1 flex flex-col-reverse md:flex-row items-center justify-center gap-8 md:gap-24">

    <div class="relative w-full md:max-w-[280px] aspect-[480/1000] shrink-0 overflow-hidden rounded-[2.5rem] ring-4 ring-gray-900 pointer-events-none">
      <iframe
          src="https://www.youtube.com/embed/SsuwCLjf004?si=QdKiQT66fyxkmY7U&autoplay=1&mute=1&controls=0&loop=1&playsinline=1&playlist=SsuwCLjf004"
          allow="autoplay"
          class="absolute top-0 left-0 w-full h-full z-0 object-cover border-none overflow-hidden"
      />
    </div>
    <div>
      <h1 class="text-5xl md:text-7xl font-theme font-bold mb-6">Save, Organize, <br/> Collaborate</h1>
      <p class="text-gray-700 text-lg">
        <strong>Mivory </strong>
        let's you save content from anywhere, organize your ideas with custom bookshelves, and collaborate effortlessly with friends.
      </p>
      <div class="flex items-center justify-between md:justify-start gap-2 md:gap-4 mt-12 mb-6">
        <UIcon name="ph-instagram-logo" class="size-8"/>
        <UIcon name="ph-google-logo" class="size-8"/>
        <UIcon name="ph-x-logo" class="size-8"/>
        <UIcon name="ph-github-logo" class="size-8"/>
        <UIcon name="ph-tiktok-logo" class="size-8"/>
        <UIcon name="ph-pinterest-logo" class="size-8"/>
        <UIcon name="ph-youtube-logo" class="size-8"/>
        <UIcon name="ph-map-pin" class="size-8"/>
      </div>
      <div class="flex flex-row justify-start items-start">
        <AppleDownload />
        <AndroidDownload
        @click="isClicked = true"/>
      </div>
      <div class="h-52">
        <div v-if="isClicked" class="w-96 p-4">
          <email-input />
          <p class="text-sm text-gray-500">Note: Make sure use the email that is linked to your Play store, once sumbitted keep an eye on your inbox for the link to join. </p>
        </div>
      </div>


    </div>
  </section>
</template>
