<script setup lang="ts">
const name = 'Mivory'
</script>

<template>
  <section class="flex-1 flex flex-col max-w-screen-lg w-full mx-auto px-3">
  <NavBar />
  <div class="flex-1 flex flex-col max-w-screen-lg w-full mx-auto px-3 py-6">
    <h1 class="text-center text-5xl font-bold mb-12 ">Terms and Conditions</h1>

    <p class="font-semibold mb-6">Your use of the Services is conditional on your acceptance of these Terms. By using or continuing to use the Services, you agree to be bound by these Terms. If you do not agree to all these Terms, then do not use the Services.</p>
    <div class="flex flex-col gap-4">
      <h2 class="text-2xl font-semibold text-gray-800 mb-4">1. Acceptance of Terms</h2>
      <p class="mb-4">By accessing or using {{name}}, you agree to be bound by these Terms and Conditions and our Privacy Policy. If you do not agree, please do not use our application.</p>

      <h2 class="text-2xl font-semibold text-gray-800 mb-4">2. Use of the Application</h2>
      <p class="mb-4">You agree to use {{name}} only for lawful purposes and in accordance with these Terms. You must not:</p>
      <ul class="list-disc list-inside mb-4">
        <li>Use the app in any way that violates applicable local, state, national, or international law.</li>
        <li>Upload or share content that is illegal, harmful, or infringes on the rights of others.</li>
        <li>Attempt to gain unauthorized access to the app or its systems.</li>
      </ul>

      <h2 class="text-2xl font-semibold text-gray-800 mb-4">3. Account Responsibilities</h2>
      <p class="mb-4">You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.</p>

      <h2 class="text-2xl font-semibold text-gray-800 mb-4">4. Content Ownership</h2>
      <p class="mb-4">All content you save or bookmark remains your property. By using the app, you grant us a non-exclusive, worldwide license to store and display your content for the purpose of providing the service.</p>

      <h2 class="text-2xl font-semibold text-gray-800 mb-4">5. Limitation of Liability</h2>
      <p class="mb-4">{{name}} is provided &#34;as is&#34; and &#34;as available.&#34; We make no warranties of any kind regarding the app&#39;s performance or reliability. We will not be liable for any loss or damage arising from your use of the app.</p>

      <h2 class="text-2xl font-semibold text-gray-800 mb-4">6. Termination</h2>
      <p class="mb-4">We reserve the right to suspend or terminate your access to {{name}} if you violate these Terms or engage in any harmful or illegal activity.</p>

      <h2 class="text-2xl font-semibold text-gray-800 mb-4">7. Changes to Terms</h2>
      <p class="mb-4">We may update these Terms and Conditions from time to time. Changes will be effective upon posting, and it is your responsibility to review them periodically.</p>

      <h2 class="text-2xl font-semibold text-gray-800 mb-4">8. Privacy Policy</h2>
      <p class="mb-4">Your privacy is important to us. Please refer to our Privacy Policy for details on how we collect, use, and protect your information.</p>

      <h2 class="text-2xl font-semibold text-gray-800 mb-4">9. Intellectual Property</h2>
      <p class="mb-4">All intellectual property rights related to the application, including trademarks, logos, and service marks, are owned by {{name}} or its licensors. You agree not to reproduce, distribute, or create derivative works without prior written consent.</p>

      <h2 class="text-2xl font-semibold text-gray-800 mb-4">10. Third-Party Services</h2>
      <p class="mb-4">The application may include links to third-party websites or services. We are not responsible for the content or practices of these third parties and encourage you to review their terms and privacy policies.</p>

      <h2 class="text-2xl font-semibold text-gray-800 mb-4">11. Indemnification</h2>
      <p class="mb-4">You agree to indemnify and hold harmless {{name}}, its affiliates, and employees from any claims, damages, or expenses arising from your use of the application or violation of these Terms.</p>

      <h2 class="text-2xl font-semibold text-gray-800 mb-4">12. Governing Law</h2>
      <p class="mb-4">These Terms and Conditions are governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law principles.</p>

      <h2 class="text-2xl font-semibold text-gray-800 mb-4">13. Contact Us</h2>
      <p class="mb-4">If you have any questions about these Terms and Conditions, please contact us at <a href="mailto:couplewhocodes@gmail.com" class="text-blue-500 hover:underline">couplewhocodes@gmail.com</a>.</p>


      <p class="text-sm text-gray-600">Last updated: January 2025</p>

    </div>
  </div>
  <Footer />
  </section>
</template>