<script setup lang="ts">
  const isOpen = defineModel<boolean>({ required: true });
</script>

<template>
  <UModal v-model="isOpen">
    <UIcon
        name="i-ph-x-bold"
        class="text-gray-500 absolute top-4 right-4 cursor-pointer"
        @click="() => isOpen = false"
    />
    <div class="p-6 bg-white rounded-lg shadow-lg">
      <h2 class="text-2xl font-semibold text-gray-800 mb-4">You're In! 🎉</h2>
      <p class="text-gray-600 mb-4">Thanks for signing up for early access to Mivory!</p>
      <p class="text-gray-600 mb-4">📩 You'll receive an email from us shortly, make sure to check your inbox (and spam folder just in case).</p>
      <p class="text-gray-600 mb-4">In the meantime, feel free to check out our socials: </p>
      <ul class="list-disc pl-6">
        <li>
          <a href="https://www.instagram.com/mivory.app/" target="_blank" class="text-blue-500">Instagram</a>
        </li>
        <li>
          <a href="https://www.tiktok.com/@mivory.app?_t=ZM-8uH0oHIt0pL&_r=1" target="_blank" class="text-blue-500">TikTok</a>
        </li>
        <li>
          <a href="https://discord.gg/4TVTpwQyRY" target="_blank" class="text-blue-500">Join our Discord</a>
        </li>
      </ul>
      <br/>
      <p> We can’t wait for you to try Mivory! </p>
    </div>
  </UModal>
</template>
