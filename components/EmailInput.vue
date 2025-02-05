<script setup lang="ts">
const isLoading = ref(false);

const sendEmail = async (event: Event) => {
  try {
    isLoading.value = true;

    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    await $fetch("/api/emails", {
      method: "POST",
      body: {
        email: formData.get("email"),
      },
    });

    form.reset();
  } catch (error) {
    console.error(error);
  } finally {
    isLoading.value = false;
  }
}
</script>

<template>
  <div>
    <form @submit.prevent="sendEmail">
      <div class="flex items-center gap-4 md:mr-6">

        <UInput :disabled="isLoading" color="white" variant="outline" type="email" name="email" placeholder="example@email.com" size="xl" class="flex-1" :ui="{ base: '!bg-gray-50' }" />

        <UButton :loading="isLoading" size="xl" type="submit">
          Early Access
        </UButton>
      </div>
    </form>
  </div>
</template>
