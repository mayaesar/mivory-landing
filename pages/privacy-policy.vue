<script setup lang="ts">
  const name = 'Mivory'
</script>

<template>
  <NuxtLayout>
  <section class="flex-1 flex flex-col max-w-screen-lg w-full mx-auto px-3">
  <NavBar />
  <div class="flex-1 flex flex-col max-w-screen-lg w-full mx-auto px-3 py-6">
    <h1 class="text-center text-5xl font-bold mb-12">Privacy Policy</h1>
    <p class="font-semibold mb-6">Welcome to {{name}}. Your privacy is critically important to us. This Privacy Policy explains how we
      collect, use, and protect your information when you use our application.</p>

    <h2 class="text-2xl font-semibold text-gray-800 mb-4">Information We Collect</h2>
    <p class="mb-4">We collect the following types of information:</p>
    <ul class="list-disc list-inside mb-4">
      <li><strong>Personal Information:</strong> Such as your email address, username, and other details you
        provide during registration.
      </li>
      <li><strong>Usage Data:</strong> Information about how you interact with our app, such as pages visited,
        bookmarks saved, and interactions with friends.
      </li>
      <li><strong>Location Data:</strong> Geolocation information if you enable location services.</li>
    </ul>

    <h2 class="text-2xl font-semibold text-gray-800 mb-4">How We Use Your Information</h2>
    <p class="mb-4">We use the information collected for the following purposes:</p>
    <ul class="list-disc list-inside mb-4">
      <li>To provide and improve the app&#39;s features and services.</li>
      <li>To personalize your experience.</li>
      <li>To send notifications and updates.</li>
      <li>To ensure security and prevent fraudulent activity.</li>
    </ul>

    <h2 class="text-2xl font-semibold text-gray-800 mb-4">Sharing Your Information</h2>
    <p class="mb-4">We do not sell your personal information. However, we may share your information with:</p>
    <ul class="list-disc list-inside mb-4">
      <li><strong>Service Providers:</strong> For analytics, hosting, and other necessary services.</li>
      <li><strong>Legal Compliance:</strong> If required by law or to protect our legal rights.</li>
    </ul>

    <h2 class="text-2xl font-semibold text-gray-800 mb-4">Your Rights</h2>
    <p class="mb-4">You have the right to:</p>
    <ul class="list-disc list-inside mb-4">
      <li>Access and review your data.</li>
      <li>Request corrections or deletions of your data.</li>
      <li>Opt out of certain data collection or usage.</li>
    </ul>

    <h2 class="text-2xl font-semibold text-gray-800 mb-4">Data Security</h2>
    <p class="mb-4">We use industry-standard measures to protect your information. However, no method of transmission over
      the internet is 100% secure.</p>

    <h2 class="text-2xl font-semibold text-gray-800 mb-4">Children&#39;s Privacy</h2>
    <p class="mb-4">Our app is not intended for children under the age of 13, and we do not knowingly collect data from
      them.</p>

    <h2 class="text-2xl font-semibold text-gray-800 mb-4">Changes to This Policy</h2>
    <p class="mb-4">We may update this Privacy Policy from time to time. Any changes will be posted on this page with an
      updated revision date.</p>

    <h2 class="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>
    <p class="mb-4">If you have any questions about this Privacy Policy, please contact us at <a
        href="mailto:couplewhocodes@gmail.com">couplewhocodes@gmail.com</a>.</p>
    <p class="text-sm text-gray-600">Last updated: January 2025</p>
  </div>
  <Footer/>
  </section>
  </NuxtLayout>
</template>
