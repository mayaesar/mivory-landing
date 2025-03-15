<script setup lang="ts">
  import BasicNav from "~/components/BasicNav.vue";

  const name = 'Mivory'
</script>

<template>
  <NuxtLayout>
  <section class="flex-1 flex flex-col max-w-screen-lg w-full mx-auto px-3">
  <BasicNav />
    <div class="flex-1 flex flex-col max-w-screen-lg w-full mx-auto px-4 py-8">
      <h1 class="text-center text-5xl font-bold mb-10">Privacy Policy</h1>
      <p class="text-gray-700 mb-6">
        Welcome to Mivory. Protecting your privacy is our top priority. This Privacy Policy outlines how we collect, use,
        and protect your information in compliance with:
      </p>
      <ul class="list-disc list-inside text-gray-700 mb-6">
        <li><strong>Canada</strong>: PIPEDA & Law 25 (Quebec)</li>
        <li><strong>United States</strong>: CCPA/CPRA, COPPA, and other applicable state privacy laws</li>
        <li><strong>European Union</strong>: General Data Protection Regulation (GDPR)</li>
      </ul>

      <h2 class="text-2xl font-semibold text-gray-900 mb-4">1. Information We Collect</h2>
      <ul class="list-disc list-inside text-gray-700 mb-6">
        <li><strong>Personal Information:</strong> Email, username, and details provided during registration.</li>
        <li><strong>Usage Data:</strong> Interactions with the app, including saved bookmarks, collections, and visited pages.</li>
        <li><strong>Device Data:</strong> Operating system and device model.</li>
        <li><strong>Cookies & Tracking Data:</strong> Analytics tools like PostHog.</li>
      </ul>

      <h2 class="text-2xl font-semibold text-gray-900 mb-4">2. How We Use Your Information</h2>
      <ul class="list-disc list-inside text-gray-700 mb-6">
        <li>To provide, maintain, and improve our services.</li>
        <li>To personalize your experience and enhance functionality.</li>
        <li>To send updates, notifications, and security alerts.</li>
        <li>To comply with legal and regulatory obligations.</li>

      </ul>

      <h2 class="text-2xl font-semibold text-gray-900 mb-4">3. Your Rights</h2>
      <p class="text-gray-700 mb-2">You have the right to:</p>
      <ul class="list-disc list-inside text-gray-700 mb-6">
        <li>Access and review your personal data.</li>
        <li>Request corrections or deletions.</li>
        <li>Withdraw consent for data collection</li>
      </ul>

      <h2 class="text-2xl font-semibold text-gray-900 mb-6">4. Data Storage and Security</h2>
      <p class="mb-6">
        We implement industry-standard security measures, including encryption and access controls, to protect your personal data.
        Our infrastructure partners are <strong>SOC 2 compliant</strong>, ensuring that data is handled with the highest security and privacy standards.
      </p>
      <p class="mb-6">
        While we take all reasonable measures to secure your information, no online platform is completely risk-free.
        We recommend users take precautions such as using strong passwords and enabling two-factor authentication where possible.
      </p>

      <h2 class="text-2xl font-semibold text-gray-900 mb-4">5. Data Retention</h2>
      <p class="text-gray-700 mb-6">
        We retain personal data only as long as necessary. If you delete your account, your data will be removed within 30 days unless required
        for legal or fraud prevention purposes.
      </p>

      <h2 class="text-2xl font-semibold text-gray-900 mb-4">6. Third-Party Services</h2>
      <p class="text-gray-700 mb-6">
        We integrate with third-party services like:
      </p>
      <ul class="list-disc list-inside text-gray-700 mb-6">
        <li><strong>Supabase:</strong> Authentication & database (U.S. servers).</li>
        <li><strong>PostHog:</strong> Analytics for app improvements.</li>
      </ul>

      <h2 class="text-2xl font-semibold text-gray-900 mb-4">7. Cookies & Tracking</h2>
      <p class="text-gray-700 mb-6">
        We do not use any 3rd party cookies. We use cookies for authentication and fonctionality purposes. All data tracking is anonymized and aggrigated for analytics purposes only.

      </p>

      <h2 class="text-2xl font-semibold text-gray-900 mb-4">8. International Data Transfers</h2>
      <p class="text-gray-700 mb-6">
        Your personal data is stored on servers in the United States. By using our services, you consent to this transfer. While we implement
        security measures, U.S. laws may allow government access to data.
      </p>
      <p class="text-gray-700 mb-6">
        If you are located in the European Union (EU), you have additional rights under the General Data Protection Regulation (GDPR),
        including the right to data portability, the right to restrict processing, and the right to object to data collection.
      </p>
      <p class="text-gray-700 mb-6">
        <strong>Quebec Users (Law 25 Compliance):</strong> We apply security measures comparable to Canadian standards.
      </p>

      <h2 class="text-2xl font-semibold text-gray-900 mb-4">9. Age Restrictions</h2>
      <p class="text-gray-700 mb-6">
        Our services are intended for users <strong>aged 13 and older.</strong> If we discover a child under 13 has provided personal data,
        we will delete their personal data in compliance with <strong>COPPA.</strong>
      </p>

      <h2 class="text-2xl font-semibold text-gray-900 mb-4">10. Updates to This Policy</h2>
      <p class="text-gray-700 mb-6">
        We may update this policy periodically. Changes will be communicated via in-app notifications or email.
      </p>

      <h2 class="text-2xl font-semibold text-gray-900 mb-4">11. Contact Us</h2>
      <p class="text-gray-700 mb-6">
        If you have questions or wish to exercise your rights, contact us at:
      </p>
      <p class="text-gray-700 mb-6">
        📩 <a href="mailto:support@mivory.app" class="text-blue-600 hover:underline">support@mivory.app</a>
      </p>

      <p class="text-gray-500 text-sm mt-6">Last updated: March 2025</p>
    </div>
    <Footer/>
  </section>
  </NuxtLayout>
</template>
