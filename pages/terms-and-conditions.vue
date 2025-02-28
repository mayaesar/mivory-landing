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

      <p class="text-gray-700 mb-6">
        By using {{ name }}, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you do not accept these Terms, you must discontinue use immediately.
      </p>

      <div class="space-y-8">
        <section>
          <h2 class="text-2xl font-semibold text-gray-800">1. Acceptance of Terms</h2>
          <p class="mt-2">
            By accessing or using <strong>{{ name }}</strong>, you agree to comply with these Terms and our
            <a href="/privacy-policy" class="text-blue-500 hover:underline">Privacy Policy</a>. If you do not agree, do not use the app.
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-semibold text-gray-800">2. Permitted Use</h2>
          <p class="mt-2">You agree to use {{ name }} only for lawful purposes and in accordance with these Terms. You must not:</p>
          <ul class="list-disc list-inside mt-2 text-gray-700">
            <li>Violate any federal, provincial, or international laws.</li>
            <li>Upload, share, or store content that is illegal, harmful, or infringes upon the rights of others.</li>
            <li>Interfere with, disrupt, or attempt to gain unauthorized access to the app’s security, systems, or data.</li>
          </ul>
        </section>

        <section>
          <h2 class="text-2xl font-semibold text-gray-800">3. Account Responsibilities</h2>
          <p class="mt-2">
            To use {{ name }}, you must create an account with a valid email and username. You are responsible for safeguarding your account credentials and all activity occurring under your account.
          </p>
          <p class="mt-2">
            If you suspect unauthorized access, notify us immediately at
            <a href="mailto:support@mivory.app" class="text-blue-500 hover:underline">support@mivory.app</a>. We are not responsible for any losses resulting from compromised accounts.
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-semibold text-gray-800">4. Prohibited Content & Activities</h2>
          <p class="mt-2">You may not store, share, or distribute content that includes:</p>
          <ul class="list-disc list-inside mt-2 text-gray-700">
            <li>Sexually explicit, pornographic, or adult content.</li>
            <li>Hate speech, harassment, or content that promotes violence.</li>
            <li>Illegal or fraudulent activities, including scams, piracy, or hacking tools.</li>
          </ul>
          <p class="mt-2">
            If you engage in prohibited activities, your account may be suspended or terminated without notice.
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-semibold text-gray-800">5. User Content & Licensing</h2>
          <p class="mt-2">
            Users may add personal notes to their saved bookmarks. By doing so, you grant us a limited, non-exclusive, royalty-free license to store and display your notes within {{ name }} to facilitate your bookmarking experience.
          </p>
          <p class="mt-2">
            You are responsible for ensuring that your content complies with these Terms. We reserve the right to remove any content that violates policies or applicable laws.
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-semibold text-gray-800">6. Service Availability & Modifications</h2>
          <p class="mt-2">
            We strive to keep {{ name }} available and running smoothly, but we do not guarantee uninterrupted service. Access may be affected by maintenance, updates, or unforeseen technical issues.
          </p>
          <p class="mt-2">
            If paid features or subscriptions are introduced, users will be provided clear refund and cancellation policies.
            Any charges will be clearly communicated before processing a transaction.
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
          <h2 class="text-2xl font-semibold text-gray-800">8. Governing Law & Jurisdiction</h2>
          <p class="mt-2">
            These Terms are governed by the laws of <strong>Canada and the province of Quebec</strong>. Any disputes will be resolved exclusively in the courts of Quebec.
            Where applicable, disputes shall first be attempted to be resolved through arbitration before seeking formal legal action.
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-semibold text-gray-800">9. Consumer Rights (Canada, U.S., & EU)</h2>
          <p class="mt-2">
            In accordance with <strong>PIPEDA (Canada), Law 25 (Quebec), CCPA/CPRA (California), COPPA (Children’s Privacy), and GDPR (European Union)</strong>, users have the following rights:
          </p>
          <ul class="list-disc list-inside mt-2 text-gray-700">
            <li><strong>Access & Portability:</strong> Request access to your personal data and receive a copy in a portable format.</li>
            <li><strong>Corrections & Deletions:</strong> Request corrections or permanent deletion of your data.</li>
            <li><strong>Opt-Out of Targeted Advertising & Data Sharing:</strong> Withdraw consent for personalized ads or data sharing.</li>
            <li><strong>Do Not Sell or Share My Personal Information (California Residents):</strong> Submit a request to prevent the sale or sharing of your personal data.</li>
            <li><strong>Right to Restrict Processing (EU & U.S. Users in Some States):</strong> Restrict data collection under certain circumstances.</li>
            <li><strong>Right to Object (EU & Some U.S. States):</strong> Object to data processing based on legitimate interests.</li>
            <li><strong>Parental Rights (COPPA - U.S.):</strong> Parents can request deletion of personal data collected from children under 13.</li>
          </ul>
          <p class="mt-2">
            To exercise these rights, contact us at
            <a href="mailto:support@mivory.app" class="text-blue-500 hover:underline">support@mivory.app</a>.
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-semibold text-gray-800">10. Updates to These Terms</h2>
          <p class="mt-2">
            We may update these Terms periodically. Changes will be communicated via in-app notifications or email.
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-semibold text-gray-800">11. Contact Information</h2>
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