<script setup lang="ts">
const isLoading = ref(false);
const token = ref("")
const turnstile = ref<Turnstile.Turnstile | null>(null);

const sendEmail = async (event: Event) => {
  try {
    isLoading.value = true;

    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    const email = formData.get("email");

    if (!token.value) {
      // TODO: Show please complete captcha
      return;
    }

    await $fetch("/api/emails", {
      method: "POST",
      body: {
        email,
        captcha: token.value
      },
    });

    form.reset();
    turnstile.value?.reset();
  } catch (error) {
    console.error(error);
  } finally {
    isLoading.value = false;
  }
}

watch(token, (v) => {
  console.log(v)
})
</script>

<template>
  <div>
    <form @submit.prevent="sendEmail">
      <div class="flex items-center gap-4 md:mr-6 mb-2">
        <UInput :disabled="isLoading" color="white" variant="outline" type="email" name="email" placeholder="example@email.com" size="xl" required class="flex-1" :ui="{ base: '!bg-gray-50' }" />

        <UButton :loading="isLoading" size="xl" type="submit">
          Early Access
        </UButton>
      </div>
      <NuxtTurnstile ref="turnstile" v-model="token" :options="{theme: 'light'}" />
    </form>
  </div>
</template>
