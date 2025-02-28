<script setup lang="ts">
import BasicNav from "~/components/BasicNav.vue";

const name = 'Mivory'
</script>

<template>
  <NuxtLayout>
  <section class="flex-1 flex flex-col max-w-screen-lg w-full mx-auto px-3">
    <BasicNav />
    <div class="flex-1 flex flex-col max-w-screen-lg w-full mx-auto px-4 py-8">
      <h1 class="text-center text-5xl font-bold mb-10">Terms and Conditions</h1>

      <p class="text-lg font-medium mb-6">
        By using {{name}}, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you do not accept these Terms, you must discontinue use immediately.
      </p>

      <div class="space-y-8">

        <section>
          <h2 class="text-2xl font-semibold text-gray-800">1. Acceptance of Terms</h2>
          <p class="mt-2">
            By accessing or using <strong>{{name}}</strong>, you agree to comply with these Terms and our
            <a href="/privacy-policy" class="text-blue-500 hover:underline">Privacy Policy</a>. If you do not agree, do not use the app.
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-semibold text-gray-800">2. Permitted Use</h2>
          <p class="mt-2">You agree to use {{name}} only for lawful purposes and in accordance with these Terms. You must not:</p>
          <ul class="list-disc list-inside mt-2">
            <li>Violate any federal, provincial, or international laws.</li>
            <li>Upload, share, or store content that is illegal, harmful, or infringes upon the rights of others.</li>
            <li>Interfere with, disrupt, or attempt to gain unauthorized access to the app’s security, systems, or data.</li>
          </ul>
        </section>

        <section>
          <h2 class="text-2xl font-semibold text-gray-800">3. Account Responsibilities</h2>
          <p class="mt-2">
            To use {{name}}, you must create an account with a valid email and username. You are responsible for safeguarding your account credentials and all activity occurring under your account.
          </p>
          <p class="mt-2">
            If you suspect unauthorized access, notify us immediately at
            <a href="mailto:support@mivory.app" class="text-blue-500 hover:underline">support@mivory.app</a>. We are not responsible for any losses resulting from compromised accounts.
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-semibold text-gray-800">4. Prohibited Content</h2>
          <p class="mt-2">You may not store, share, or distribute content that includes:</p>
          <ul class="list-disc list-inside mt-2">
            <li>Sexually explicit, pornographic, or adult content.</li>
            <li>Hate speech, harassment, or content that promotes violence.</li>
            <li>Illegal or fraudulent activities, including scams, piracy, or hacking tools.</li>
          </ul>
        </section>

        <section>
          <h2 class="text-2xl font-semibold text-gray-800">5. Notes & User Content</h2>
          <p class="mt-2">
            Users may add personal notes to their saved bookmarks. By doing so, you grant us a limited, non-exclusive, royalty-free
            license to store and display your notes within {{name}} to facilitate your bookmarking experience.
          </p>
          <p class="mt-2">
            You are responsible for ensuring that your notes comply with these Terms, and we reserve the right to remove any content that
            violates policies or applicable laws.
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-semibold text-gray-800">6. Service Availability & Modifications</h2>
          <p class="mt-2">
            We strive to keep {{name}} available and running smoothly, but we do not guarantee uninterrupted service.
            Access may be affected by maintenance, updates, or unforeseen technical issues.
          </p>
          <p class="mt-2">
            We reserve the right to modify, suspend, or discontinue parts of the service at any time without prior notice.
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-semibold text-gray-800">7. Account Termination</h2>
          <p class="mt-2">
            We may suspend or terminate your account if you violate these Terms, abuse the platform, or engage in illegal activity.
          </p>
          <p class="mt-2">
            You may also request account deletion by contacting
            <a href="mailto:support@mivory.app" class="text-blue-500 hover:underline">support@mivory.app</a>.
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-semibold text-gray-800">8. Disclaimer of Warranties & Limitation of Liability</h2>
          <p class="mt-2">
            {{name}} is provided "as is" and "as available," without warranties of any kind, express or implied.
            We do not guarantee that the service will always be secure, error-free, or meet your expectations.
          </p>
          <p class="mt-2">
            To the fullest extent permitted by law, we shall not be liable for any indirect, incidental, special, or consequential damages
            arising from your use of {{name}}.
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-semibold text-gray-800">9. Governing Law</h2>
          <p class="mt-2">
            These Terms are governed by the laws of <strong>Canada and the province of Quebec</strong>. Any disputes will be resolved
            exclusively in the courts of Quebec.
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-semibold text-gray-800">10. Contact Information</h2>
          <p class="mt-2">
            For any questions regarding these Terms, contact us at
            <a href="mailto:support@mivory.app" class="text-blue-500 hover:underline">support@mivory.app</a>.
          </p>
        </section>

        <p class="text-sm text-gray-600 mt-8">Last updated: March 2025</p>

      </div>
    </div>

    <Footer />
  </section>
  </NuxtLayout>
</template>