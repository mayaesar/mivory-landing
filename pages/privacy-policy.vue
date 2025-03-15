<script setup lang="ts">
  import BasicNav from "~/components/BasicNav.vue";

  const name = 'Mivory'

  const { t } = useI18n({
    messages: {
      en: {
        title: "Privacy Policy",
        introduction: "Welcome to Mivory. Protecting your privacy is our top priority. This Privacy Policy outlines how we collect, use, and protect your information in compliance with:",
        compliance: {
          key1: "Canada",
          key2: "United States",
          key3: "European Union",
          canada: ": PIPEDA & Law 25 (Quebec)",
          us: ": CCPA/CPRA, COPPA, and other applicable state privacy laws",
          eu: ": General Data Protection Regulation (GDPR)"
        },
        sections: {
          information_collection: {
            title: "1. Information We Collect",
            key1: "Personal Information",
            key2: "Usage Data",
            key3: "Device Data",
            key4: "Cookies & Tracking Data",
            personal: ": Email, username, and details provided during registration.",
            usage: ": Interactions with the app, including saved bookmarks, collections, and visited pages.",
            device: ": Operating system and device model.",
            cookies: ": Analytics tools like PostHog."
          },
          use_of_information: {
            title: "2. How We Use Your Information",
            list1: "To provide, maintain, and improve our services.",
            list2: "To personalize your experience and enhance functionality.",
            list3: "To send updates, notifications, and security alerts.",
            list4: "To comply with legal and regulatory obligations."
          },
          user_rights: {
            title: "3. Your Rights",
            intro: "You have the right to:",
            list1: "Access and review your personal data.",
            list2: "Request corrections or deletions.",
            list3: "Withdraw consent for data collection."
          },
          security: {
            title: "4. Data Storage and Security",
            content: "We implement industry-standard security measures, including encryption and access controls, to protect your personal data. Our infrastructure partners are SOC 2 compliant, ensuring that data is handled with the highest security and privacy standards.",
            notice: "While we take all reasonable measures to secure your information, no online platform is completely risk-free. We recommend users take precautions such as using strong passwords and enabling two-factor authentication where possible."
          },
          data_retention: {
            title: "5. Data Retention",
            content: "We retain personal data only as long as necessary. If you delete your account, your data will be removed within 30 days unless required for legal or fraud prevention purposes."
          },
          third_party: {
            title: "6. Third-Party Services",
            content: "We integrate with third-party services like:",
            supabase: "Supabase: Authentication & database (U.S. servers).",
            posthog: "PostHog: Analytics for app improvements."
          },
          cookies_tracking: {
            title: "7. Cookies & Tracking",
            content: "We do not use any 3rd party cookies. We use cookies for authentication and functionality purposes. All data tracking is anonymized and aggregated for analytics purposes only."
          },
          data_transfers: {
            title: "8. International Data Transfers",
            content: "Your personal data is stored on servers in the United States. By using our services, you consent to this transfer. While we implement security measures, U.S. laws may allow government access to data.",
            eu_rights: "If you are located in the European Union (EU), you have additional rights under the General Data Protection Regulation (GDPR), including the right to data portability, the right to restrict processing, and the right to object to data collection.",
            quebec: "Quebec Users (Law 25 Compliance): We apply security measures comparable to Canadian standards."
          },
          age_restrictions: {
            title: "9. Age Restrictions",
            content: "Our services are intended for users aged 13 and older. If we discover a child under 13 has provided personal data, we will delete their personal data in compliance with COPPA."
          },
          updates: {
            title: "10. Updates to This Policy",
            content: "We may update this policy periodically. Changes will be communicated via in-app notifications or email."
          },
          contact_info: {
            title: "11. Contact Us",
            content: "If you have questions or wish to exercise your rights, contact us at:",
            email: "📩 support@mivory.app"
          }
        },
        last_updated: "Last updated: March 2025"
      },
      fr: {
        title: "Politique de confidentialité",
        introduction: "Bienvenue sur Mivory. La protection de votre vie privée est notre priorité absolue. Cette politique de confidentialité décrit comment nous collectons, utilisons et protégeons vos informations conformément à :",
        compliance: {
          key1: "Canada",
          key2: "États-Unis",
          key3: "Union Européenne",
          canada: ": PIPEDA & Loi 25 (Québec)",
          us: ": CCPA/CPRA, COPPA et autres lois sur la protection de la vie privée des États",
          eu: ": Règlement général sur la protection des données (RGPD)"
        },
        sections: {
          information_collection: {
            title: "1. Informations que nous collectons",
            key1: "Informations personnelles",
            key2: "Données d'utilisation",
            key3: "Données de l'appareil",
            key4: "Cookies et suivi",
            personal: ": Email, nom d'utilisateur et détails fournis lors de l'inscription.",
            usage: ": Interactions avec l'application, y compris les signets enregistrés, les collections et les pages visitées.",
            device: ": Système d'exploitation et modèle de l'appareil.",
            cookies: ": Outils analytiques comme PostHog."
          },
          use_of_information: {
            title: "2. Comment nous utilisons vos informations",
            list1: "Fournir, maintenir et améliorer nos services.",
            list2: "Personnaliser votre expérience et améliorer les fonctionnalités.",
            list3: "Envoyer des mises à jour, notifications et alertes de sécurité.",
            list4: "Se conformer aux obligations légales et réglementaires."
          },
          user_rights: {
            title: "3. Vos droits",
            intro: "Vous avez le droit de :",
            list1: "Accéder à vos données personnelles et les examiner.",
            list2: "Demander des corrections ou des suppressions.",
            list3: "Retirer votre consentement à la collecte des données."
          },
          security: {
            title: "4. Stockage et sécurité des données",
            content: "Nous mettons en œuvre des mesures de sécurité conformes aux normes de l'industrie, y compris le chiffrement et les contrôles d'accès, pour protéger vos données personnelles. Nos partenaires d'infrastructure sont conformes à SOC 2, garantissant un niveau de sécurité et de confidentialité élevé.",
            notice: "Bien que nous prenions toutes les précautions raisonnables pour sécuriser vos informations, aucune plateforme en ligne n'est totalement à l'abri des risques. Nous recommandons aux utilisateurs de prendre des précautions comme l'utilisation de mots de passe forts et l'activation de l'authentification à deux facteurs lorsque cela est possible."
          },
          data_retention: {
            title: "5. Conservation des données",
            content: "Nous conservons vos données personnelles uniquement aussi longtemps que nécessaire. Si vous supprimez votre compte, vos données seront effacées sous 30 jours, sauf en cas d'obligation légale ou de prévention des fraudes."
          },
          third_party: {
            title: "6. Services tiers",
            content: "Nous intégrons des services tiers tels que :",
            supabase: "Supabase : Authentification et base de données (serveurs aux États-Unis).",
            posthog: "PostHog : Analyse pour l'amélioration de l'application."
          },
          cookies_tracking: {
            title: "7. Cookies et suivi",
            content: "Nous n'utilisons pas de cookies tiers. Nous utilisons des cookies uniquement pour l'authentification et les fonctionnalités. Toutes les données de suivi sont anonymisées et agrégées uniquement à des fins analytiques."
          },
          data_transfers: {
            title: "8. Transferts internationaux de données",
            content: "Vos données personnelles sont stockées sur des serveurs aux États-Unis. En utilisant nos services, vous consentez à ce transfert. Bien que nous appliquions des mesures de sécurité, les lois américaines peuvent permettre l'accès aux données par les autorités.",
            quebec: "Utilisateurs du Québec (Loi 25) : Nous appliquons des mesures de sécurité comparables aux normes canadiennes."
          },
          age_restrictions: {
            title: "9. Restrictions d'âge",
            content: "Nos services sont destinés aux utilisateurs de 13 ans et plus. Si nous découvrons qu'un enfant de moins de 13 ans a fourni des données personnelles, nous les supprimerons conformément à la COPPA."
          },
          updates: {
            title: "10. Mises à jour de cette politique",
            content: "Nous pouvons mettre à jour cette politique périodiquement. Les changements seront communiqués via des notifications dans l'application ou par e-mail."
          },
          contact_info: {
            title: "11. Nous contacter",
            content: "Pour toute question ou demande concernant vos droits, contactez-nous à :",
            email: "📩 support@mivory.app"
          }
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
      <h1 class="text-center text-5xl font-bold mb-10">{{ t("title")}}</h1>
      <p class="text-gray-700 mb-6">
        {{ t("introduction")}}
      </p>
      <ul class="list-disc list-inside text-gray-700 mb-6">
        <li><strong>{{ t("compliance.key1")}}</strong>{{ t("compliance.canada")}}</li>
        <li><strong>{{ t("compliance.key2")}}</strong>{{ t("compliance.us")}}</li>
        <li><strong>{{ t("compliance.key3")}}</strong>{{ t("compliance.eu")}}</li>
      </ul>

      <h2 class="text-2xl font-semibold text-gray-900 mb-4">{{ t("sections.information_collection.title")}}</h2>
      <ul class="list-disc list-inside text-gray-700 mb-6">
        <li><strong>{{ t("sections.information_collection.key1")}}</strong>{{ t("sections.information_collection.personal")}}</li>
        <li><strong>{{ t("sections.information_collection.key2")}}</strong>{{ t("sections.information_collection.usage")}}</li>
        <li><strong>{{ t("sections.information_collection.key3")}}</strong>{{ t("sections.information_collection.device")}}</li>
        <li><strong>{{ t("sections.information_collection.key4")}}</strong>{{ t("sections.information_collection.cookies")}}</li>
      </ul>

      <h2 class="text-2xl font-semibold text-gray-900 mb-4">{{ t("sections.use_of_information.title")}}</h2>
      <ul class="list-disc list-inside text-gray-700 mb-6">
        <li>{{ t("sections.use_of_information.list1")}}</li>
        <li>{{ t("sections.use_of_information.list2")}}</li>
        <li>{{ t("sections.use_of_information.list3")}}</li>
        <li>{{ t("sections.use_of_information.list4")}}</li>
      </ul>

      <h2 class="text-2xl font-semibold text-gray-900 mb-4">{{ t("sections.user_rights.title")}}</h2>
      <p class="text-gray-700 mb-2">{{ t("sections.user_rights.intro")}}</p>
      <ul class="list-disc list-inside text-gray-700 mb-6">
        <li>{{ t("sections.user_rights.list1")}}</li>
        <li>{{ t("sections.user_rights.list2")}}</li>
        <li>{{ t("sections.user_rights.list3")}}</li>
      </ul>

      <h2 class="text-2xl font-semibold text-gray-900 mb-6">{{ t("sections.security.title")}}</h2>
      <p class="mb-6">{{ t("sections.security.content")}}</p>
      <p class="mb-6">{{ t("sections.security.notice")}}</p>

      <h2 class="text-2xl font-semibold text-gray-900 mb-4">{{ t("sections.data_retention.title")}}</h2>
      <p class="text-gray-700 mb-6">{{ t("sections.data_retention.content")}}</p>

      <h2 class="text-2xl font-semibold text-gray-900 mb-4">{{ t("sections.third_party.title")}}</h2>
      <p class="text-gray-700 mb-6">{{ t("sections.third_party.content")}}</p>
      <ul class="list-disc list-inside text-gray-700 mb-6">
        <li>{{ t("sections.third_party.supabase")}}</li>
        <li>{{ t("sections.third_party.posthog")}}</li>
      </ul>

      <h2 class="text-2xl font-semibold text-gray-900 mb-4">{{ t("sections.cookies_tracking.title")}}</h2>
      <p class="text-gray-700 mb-6">{{ t("sections.cookies_tracking.content")}}</p>

      <h2 class="text-2xl font-semibold text-gray-900 mb-4">{{ t("sections.data_transfers.title")}}</h2>
      <p class="text-gray-700 mb-6">{{ t("sections.data_retention.content")}}</p>
      <p class="text-gray-700 mb-6">{{ t("sections.data_transfers.eu_rights")}}</p>
      <p class="text-gray-700 mb-6">{{ t("sections.data_transfers.quebec")}}</p>

      <h2 class="text-2xl font-semibold text-gray-900 mb-4">{{ t("sections.age_restrictions.title")}}</h2>
      <p class="text-gray-700 mb-6">
        {{ t("sections.age_restrictions.content")}}
      </p>

      <h2 class="text-2xl font-semibold text-gray-900 mb-4">{{ t("sections.updates.title")}}</h2>
      <p class="text-gray-700 mb-6">{{ t("sections.updates.content")}}</p>

      <h2 class="text-2xl font-semibold text-gray-900 mb-4">{{ t("sections.contact_info.title")}}</h2>
      <p class="text-gray-700 mb-6">{{ t("sections.contact_info.content")}}</p>
      <p class="text-gray-700 mb-6">
        📩 <a href="mailto:support@mivory.app" class="text-blue-600 hover:underline">support@mivory.app</a>
      </p>

      <p class="text-gray-500 text-sm mt-6">{{ t("last_updated")}}</p>
    </div>
    <Footer/>
  </section>
  </NuxtLayout>
</template>
