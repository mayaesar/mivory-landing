<script setup lang="ts">
type Props = {
  videoID: string,
  sig: string;
}
const { videoID, sig } = defineProps<Props>()
</script>

<template>
  <div class="relative w-full md:max-w-[280px] aspect-[455/1000] shrink-0 overflow-hidden rounded-[3rem] ring-4 ring-gray-900 pointer-events-none">
    <iframe
        :src="`https://www.youtube.com/embed/${videoID}?si=${sig}&autoplay=1&mute=1&controls=0&loop=1&playsinline=1&playlist=${videoID}`"
        allow="autoplay"
        class="absolute top-0 left-0 w-full h-full z-0 object-cover border-none overflow-hidden"
    />
  </div>
</template>
