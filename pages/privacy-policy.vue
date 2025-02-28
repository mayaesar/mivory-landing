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

      <p class="text-lg font-medium mb-6">
        Welcome to <span class="font-bold">{{name}}</span>. Protecting your privacy is our top priority.
        This Privacy Policy outlines how we collect, use, and protect your information, in compliance with the
        <strong>Personal Information Protection and Electronic Documents Act (PIPEDA) in Canada</strong> and
        <strong>Law 25 (Quebec)</strong>.
      </p>

      <h2 class="text-2xl font-semibold text-gray-900 mb-4">1. Information We Collect</h2>
      <ul class="list-disc list-inside space-y-2 mb-6 text-gray-800">
        <li><strong>Personal Information:</strong> Your email, username, and any details you provide when registering.</li>
        <li><strong>Usage Data:</strong> Your interactions with the app, including saved bookmarks and visited pages.</li>
      </ul>

      <h2 class="text-2xl font-semibold text-gray-900 mb-4">2. How We Use Your Information</h2>
      <ul class="list-disc list-inside space-y-2 mb-6 text-gray-800">
        <li>To provide and enhance our services.</li>
        <li>To personalize your experience and improve app functionality.</li>
        <li>To send important updates and notifications.</li>
        <li>To comply with legal requirements.</li>
        <li><strong>For future targeted advertising (only with your explicit consent).</strong></li>
      </ul>

      <h2 class="text-2xl font-semibold text-gray-900 mb-4">3. Your Rights</h2>
      <ul class="list-disc list-inside space-y-2 mb-6 text-gray-800">
        <li>Access and review the personal data we hold about you.</li>
        <li>Request corrections or deletions of your data.</li>
        <li>Withdraw consent for data collection and targeted advertising at any time.</li>
      </ul>

      <h2 class="text-2xl font-semibold text-gray-900 mb-4">4. Data Storage and Security</h2>
      <p class="text-gray-800 mb-6">
        We implement industry-standard security measures to protect your data. However, no online system is 100% secure.
        We encourage you to use strong passwords and be cautious when sharing personal information online.
      </p>

      <h2 class="text-2xl font-semibold text-gray-900 mb-4">5. Data Retention</h2>
      <p class="text-gray-800 mb-6">
        We retain your personal data only as long as necessary to provide our services and comply with legal obligations.
        If you delete your account, your personal data will be removed from our active systems within <strong>30 days</strong>,
        unless retention is required for security, fraud prevention, or legal reasons.
      </p>

      <h2 class="text-2xl font-semibold text-gray-900 mb-4">6. Third-Party Services</h2>
      <p class="text-gray-800 mb-6">
        We may integrate with third-party services, such as Supabase for authentication and database management.
        These services handle data in accordance with their own privacy policies. We recommend reviewing their policies
        to understand how they manage your information.
      </p>

      <h2 class="text-2xl font-semibold text-gray-900 mb-4">7. Cookies & Tracking</h2>
      <p class="text-gray-800 mb-6">
        We use cookies and similar tracking technologies to enhance your experience, analyze app performance,
        and improve our services. These may include analytics tools like PostHog. You can manage your cookie preferences
        in your device settings.
      </p>

      <h2 class="text-2xl font-semibold text-gray-900 mb-4">8. International Data Transfers</h2>
      <p class="text-gray-800 mb-6">
        Your data may be processed and stored on servers located outside your country of residence, including in the
        United States or other jurisdictions. We take appropriate measures to ensure your information remains protected
        under applicable privacy laws.
      </p>

      <h2 class="text-2xl font-semibold text-gray-900 mb-4">9. Age Restrictions</h2>
      <p class="text-gray-800 mb-6">
        Our services are intended for users aged 13 and older. If you are under 13, please do not provide personal information.
        If we discover that a minor has submitted personal data, we will take steps to delete it.
      </p>

      <h2 class="text-2xl font-semibold text-gray-900 mb-4">10. Contact Us</h2>
      <p class="text-gray-800 mb-6">
        If you have questions or wish to exercise your rights, contact us at:
        <a href="mailto:support@mivory.app" class="text-blue-600 hover:underline">support@mivory.app</a>.
      </p>

      <p class="text-sm text-gray-600">Last updated: March 2025</p>
    </div>


    <Footer/>
  </section>
  </NuxtLayout>
</template>
