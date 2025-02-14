<script setup lang="ts">
type Props = {
  videoUrl: string
}
const { videoUrl } = defineProps<Props>()
</script>

<template>
  <div class="relative w-full p-4 md:p-0 md:max-w-[280px] aspect-[9/19] shrink-0 overflow-hidden rounded-[2.5rem] border-4 border-gray-900 pointer-events-none">
    <video
        :src="videoUrl"
        :controls="false"
        autoPlay
        playsinline
        loop
        muted
        class="absolute top-0 left-0 w-full h-full z-0 object-cover overflow-hidden"
    />
<!--    <LazyNuxtImg-->
<!--        src="/phoneMock.svg"-->
<!--        alt="phone frame"-->
<!--        fill={true}-->
<!--        class="absolute top-0 left-0 w-full h-full z-10"-->
<!--    />-->

  </div>
</template>
