<script setup lang="ts">
import BasicNav from "~/components/BasicNav.vue";

const name = 'Mivory'

const { t } = useI18n({
  messages: {
    en: {
      title: "Terms and Conditions",
      introduction: "By using Mivory, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you do not accept these Terms, you must discontinue use immediately.",
      link: "Privacy Policy",
      sections: {
        acceptance: {
          title: "1. Acceptance of Terms",
          content: "By accessing or using Mivory, you agree to comply with these Terms and our",
          content2: "If you do not agree, do not use the app."
        },
        permitted_use: {
          title: "2. Permitted Use",
          content: "You agree to use Mivory only for lawful purposes and in accordance with these Terms. You must not:",
          list1: "Violate any federal, provincial, or international laws.",
          list2: "Upload, share, or store content that is illegal, harmful, or infringes upon the rights of others.",
          list3: "Interfere with, disrupt, or attempt to gain unauthorized access to the app’s security, systems, or data."
        },
        account_responsibilities: {
          title: "3. Account Responsibilities",
          content: "To use Mivory, you must create an account with a valid email and username. You are responsible for safeguarding your account credentials and all activity occurring under your account.",
          contact: "If you suspect unauthorized access, notify us immediately at ",
          contact2: "We are not responsible for any losses resulting from compromised accounts."
        },
        prohibited_content: {
          title: "4. Prohibited Content & Activities",
          intro: "You may not store, share, or distribute content that includes:",
          list1: "Sexually explicit, pornographic, or adult content.",
          list2: "Hate speech, harassment, or content that promotes violence.",
          list3: "Illegal or fraudulent activities, including scams, piracy, or hacking tools.",
          notice: "If you engage in prohibited activities, your account may be suspended or terminated without notice."
        },
        user_content: {
          title: "5. User Content & Licensing",
          content: "Users may add personal notes to their saved bookmarks. By doing so, you grant us a limited, non-exclusive, royalty-free license to store and display your notes within Mivory to facilitate your bookmarking experience.",
          responsibility: "You are responsible for ensuring that your content complies with these Terms. We reserve the right to remove any content that violates policies or applicable laws."
        },
        service_availability: {
          title: "6. Service Availability & Modifications",
          content: "We strive to keep Mivory available and running smoothly, but we do not guarantee uninterrupted service. Access may be affected by maintenance, updates, or unforeseen technical issues."
        },
        termination: {
          title: "7. Account Termination",
          content: "We may suspend or terminate your account if you violate these Terms, abuse the platform, or engage in illegal activity.",
          request: "You may also request account deletion in your account settings."
        },
        governing_law: {
          title: "8. Governing Law & Jurisdiction",
          content: "These Terms are governed by the laws of Canada and the province of Quebec. Any disputes will be resolved exclusively in the courts of Quebec. Where applicable, disputes shall first be attempted to be resolved through arbitration before seeking formal legal action."
        },
        consumer_rights: {
          title: "9. Consumer Rights (Canada, U.S., & EU)",
          intro: "In accordance with various privacy laws, users have the following rights:",
          list1: "Access & Portability: Request access to your personal data and receive a copy in a portable format.",
          list2: "Corrections & Deletions: Request corrections or permanent deletion of your data.",
          list3: "Opt-Out of Targeted Advertising & Data Sharing: Withdraw consent for personalized ads or data sharing.",
          list4: "Do Not Sell or Share My Personal Information (California Residents): Submit a request to prevent the sale or sharing of your personal data.",
          contact: "To exercise these rights, contact us at "
        },
        updates: {
          title: "10. Updates to These Terms",
          content: "We may update these Terms periodically. Changes will be communicated via in-app notifications or email."
        },
        contact_info: {
          title: "11. Contact Information",
          content: "For any questions regarding these Terms, contact us at"
        },
      },
      last_updated: "Last updated: March 2025"
    },
    fr: {
      title: "Conditions d'utilisation",
      introduction: "En utilisant Mivory, vous reconnaissez avoir lu, compris et accepté d'être lié par ces conditions. Si vous n'acceptez pas ces conditions, vous devez cesser immédiatement l'utilisation.",
      link: "Politique de confidentialité",
      sections: {
        acceptance: {
          title: "1. Acceptation des conditions",
          content: "En accédant ou en utilisant Mivory, vous acceptez de respecter ces conditions et notre",
          content2: "Si vous n'êtes pas d'accord, n'utilisez pas l'application."
        },
        permitted_use: {
          title: "2. Utilisation autorisée",
          content: "Vous acceptez d’utiliser Mivory uniquement à des fins légales et conformément à ces conditions. Vous ne devez pas :",
          list1: "Violer toute loi fédérale, provinciale ou internationale.",
          list2: "Télécharger, partager ou stocker du contenu illégal, nuisible ou portant atteinte aux droits d'autrui.",
          list3: "Tenter d’accéder, d’interférer ou de perturber les systèmes de sécurité de l’application."
        },
        account_responsibilities: {
          title: "3. Responsabilités du compte",
          content: "Pour utiliser Mivory, vous devez créer un compte avec une adresse e-mail et un nom d'utilisateur valides. Vous êtes responsable de la protection de vos informations d'identification de compte et de toutes les activités se déroulant sous votre compte.",
          contact: "Si vous soupçonnez un accès non autorisé, veuillez nous en informer immédiatement à ",
          contact2: "Nous ne sommes pas responsables des pertes résultant de comptes compromis."
        },
        prohibited_content: {
          title: "4. Contenu et activités interdits",
          intro: "Vous ne pouvez pas stocker, partager ou distribuer de contenu qui inclut :",
          list1: "Contenu sexuellement explicite ou pour adultes.",
          list2: "Discours de haine, harcèlement ou contenu qui promeut la violence.",
          list3: "Activités illégales ou frauduleuses, y compris les escroqueries, le piratage ou la contrefaçon.",
          notice: "Si vous vous engagez dans des activités interdites, votre compte peut être suspendu ou résilié sans préavis."
        },
        user_content: {
          title: "5. Contenu de l'utilisateur et licence",
          content: "Les utilisateurs peuvent ajouter des notes personnelles à leurs signets enregistrés. En le faisant, vous nous accordez une licence limitée, non exclusive et sans redevance pour stocker et afficher vos notes dans Mivory afin de faciliter votre expérience de signet.",
          responsibility: "Vous êtes responsable de vous assurer que votre contenu est conforme à ces conditions. Nous nous réservons le droit de supprimer tout contenu qui viole les politiques ou les lois applicables."
        },
        service_availability: {
          title: "6. Disponibilité du service et modifications",
          content: "Nous nous efforçons de maintenir Mivory disponible et de fonctionner correctement, mais nous ne garantissons pas un service ininterrompu. L'accès peut être affecté par la maintenance, les mises à jour ou des problèmes techniques imprévus."
        },
        termination: {
          title: "7. Résiliation du compte",
          content: "Nous pouvons suspendre ou résilier votre compte si vous violez ces conditions, abusez de la plateforme ou vous engagez dans des activités illégales.",
          request: "Vous pouvez également demander la suppression de votre compte dans vos paramètres de compte."
        },
        governing_law: {
          title: "8. Droit applicable et juridiction",
          content: "Ces conditions sont régies par les lois du Canada et de la province de Québec. Tout litige sera résolu exclusivement devant les tribunaux du Québec. Le cas échéant, les litiges seront d'abord tentés d'être résolus par arbitrage avant de recourir à une action en justice formelle."
        },
        consumer_rights: {
          title: "9. Droits des consommateurs (Canada, États-Unis et UE)",
          intro: "Conformément à diverses lois sur la confidentialité, les utilisateurs ont les droits suivants :",
          list1: "Accès et portabilité : Demander l'accès à vos données personnelles et recevoir une copie dans un format portable.",
          list2: "Corrections et suppressions : Demander des corrections ou la suppression permanente de vos données.",
          list3: "Refus de la publicité ciblée et du partage de données : Retirer votre consentement à la publicité personnalisée ou au partage de données.",
          list4: "Ne pas vendre ou partager mes informations personnelles (résidents de la Californie) : Soumettre une demande pour empêcher la vente ou le partage de vos données personnelles.",
          contact: "Pour exercer ces droits, contactez-nous à "
        },
        updates: {
          title: "10. Updates to These Terms",
          content: "We may update these Terms periodically. Changes will be communicated via in-app notifications or email."
        },
        contact_info: {
          title: "11. Contact Information",
          content: "For any questions regarding these Terms, contact us at"
        },
      },
      last_updated: "Dernière mise à jour : Mars 2025"
    }
  }
});
</script>

<template>
  <NuxtLayout>
  <section class="flex-1 flex flex-col max-w-screen-lg w-full mx-auto px-3">
    <BasicNav />
    <div class="flex-1 flex flex-col max-w-screen-lg w-full mx-auto px-4 py-8">
      <h1 class="text-center text-5xl font-bold mb-10">{{ t("title") }}</h1>

      <p class="text-gray-700 mb-6">
        {{ t("introduction")}}</p>

      <div class="space-y-8">
        <section>
          <h2 class="text-2xl font-semibold text-gray-800">{{ t("sections.acceptance.title")}}</h2>
          <p class="mt-2">
            {{ t("sections.acceptance.content")}}
            <a href="/privacy-policy" class="text-blue-500 hover:underline">{{ t("link")}}</a>.
            {{ t("sections.acceptance.content2")}}
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-semibold text-gray-800">{{ t("sections.permitted_use.title") }}</h2>
          <p class="mt-2">{{ t("sections.permitted_use.content") }}</p>
          <ul class="list-disc list-inside mt-2 text-gray-700">
            <li>{{ t("sections.permitted_use.list1") }}</li>
            <li>{{ t("sections.permitted_use.list2") }}</li>
            <li>{{ t("sections.permitted_use.list3") }}</li>

          </ul>
        </section>

        <section>
          <h2 class="text-2xl font-semibold text-gray-800">{{ t("sections.account_responsibilities.title") }}</h2>
          <p class="mt-2">
            {{ t("sections.account_responsibilities.content") }}
          </p>
          <p class="mt-2">
            {{ t("sections.account_responsibilities.contact") }}
            <a href="mailto:support@mivory.app" class="text-blue-500 hover:underline">support@mivory.app</a>. {{ t("sections.account_responsibilities.contact2") }}
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-semibold text-gray-800">{{ t("sections.prohibited_content.title")}}</h2>
          <p class="mt-2">{{ t("sections.prohibited_content.intro")}}</p>
          <ul class="list-disc list-inside mt-2 text-gray-700">
            <li>{{ t("sections.prohibited_content.list1")}}</li>
            <li>{{ t("sections.prohibited_content.list2")}}</li>
            <li>{{ t("sections.prohibited_content.list3")}}</li>
          </ul>
          <p class="mt-2">
            {{ t("sections.prohibited_content.notice")}}
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-semibold text-gray-800">{{ t("sections.user_content.title")}}</h2>
          <p class="mt-2">{{ t("sections.user_content.content")}}</p>
          <p class="mt-2">{{ t("sections.user_content.responsibility")}} </p>
        </section>

        <section>
          <h2 class="text-2xl font-semibold text-gray-800">{{ t("sections.service_availability.title")}}</h2>
          <p class="mt-2">{{ t("sections.service_availability.content")}}</p>
        </section>

        <section>
          <h2 class="text-2xl font-semibold text-gray-800">{{ t("sections.termination.title")}}</h2>
          <p class="mt-2">
            {{ t("sections.termination.content")}}</p>
          <p class="mt-2">
            {{ t("sections.termination.request")}}
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-semibold text-gray-800">{{ t("sections.governing_law.title")}}</h2>
          <p class="mt-2">{{ t("sections.governing_law.content")}}</p>
        </section>

        <section>
          <h2 class="text-2xl font-semibold text-gray-800">{{ t("sections.consumer_rights.title") }}</h2>
          <p class="mt-2">
            {{ t("sections.consumer_rights.intro") }}          </p>
          <ul class="list-disc list-inside mt-2 text-gray-700">
            <li>{{ t("sections.consumer_rights.list1") }}</li>
            <li>{{ t("sections.consumer_rights.list2") }}</li>
            <li>{{ t("sections.consumer_rights.list3") }}</li>
            <li>{{ t("sections.consumer_rights.list4") }}</li>
          </ul>
          <p class="mt-2">
            {{ t("sections.consumer_rights.contact") }}
            <a href="mailto:support@mivory.app" class="text-blue-500 hover:underline">support@mivory.app</a>.
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-semibold text-gray-800">{{ t("sections.updates.title") }}</h2>
          <p class="mt-2">{{ t("sections.updates.content") }}</p>
        </section>

        <section>
          <h2 class="text-2xl font-semibold text-gray-800">{{ t("sections.contact_info.title") }}</h2>
          <p class="mt-2">
            {{ t("sections.contact_info.content") }}
            <a href="mailto:support@mivory.app" class="text-blue-500 hover:underline">support@mivory.app</a>.
          </p>
        </section>

        <p class="text-sm text-gray-600 mt-8">{{ t("last_updated")}}</p>
      </div>
    </div>

    <Footer />
  </section>
  </NuxtLayout>
</template>