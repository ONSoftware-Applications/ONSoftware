export type LegalBlock = {
  heading: string
  paragraphs?: string[]
  list?: string[]
}

export type LegalPage = {
  slug: string
  title: string
  updated: string
  intro: string
  blocks: LegalBlock[]
}

export const LEGAL_PAGES: LegalPage[] = [
  {
    slug: 'privacy',
    title: 'Privacy Policy',
    updated: '2026',
    intro:
      'This Privacy Policy explains how ONSoftware handles information when you use our websites and applications, including SellerHQ.',
    blocks: [
      {
        heading: 'Who we are',
        paragraphs: [
          'ONSoftware ("we", "us") develops software applications designed to help independent businesses and individuals manage, organise and grow. Our hub website is onsoftware.uk, and our applications live on their own subdomains, such as sellerhq.onsoftware.uk.',
        ],
      },
      {
        heading: 'What we collect',
        paragraphs: [
          'What we collect depends on the product you use. Across the ecosystem we may collect:',
        ],
        list: [
          'Account information — name, email address and password (stored securely).',
          'Business information — the business data you add, such as products, sales, expenses and settings.',
          'Payment information — handled by our payment provider (Stripe); we do not store full card details.',
          'Usage and technical data — such as device type, browser and error reports, to keep our products reliable.',
        ],
      },
      {
        heading: 'How we use your information',
        paragraphs: [
          'We use your information to provide and operate our products, process billing, respond to support requests, maintain security, and improve our software. We do not sell your personal data.',
        ],
      },
      {
        heading: 'Legal bases',
        paragraphs: [
          'Where UK GDPR applies, we process personal data on the basis of contract (providing the service you signed up for), legitimate interest (operating and securing the service), consent (where you have actively opted in) and legal obligation (such as accounting or tax records).',
        ],
      },
      {
        heading: 'Data retention',
        paragraphs: [
          'We keep your data only as long as needed to provide the service or to meet legal and accounting requirements. When you delete your account, we permanently remove your business data and files from our systems as described in our account deletion flow.',
        ],
      },
      {
        heading: 'Your rights',
        paragraphs: [
          'You can access, correct or delete your personal data at any time, and you can object to or restrict certain processing. To exercise any of these rights, contact us at the address below.',
        ],
      },
      {
        heading: 'Contact',
        paragraphs: [
          'Questions about this policy can be sent to hello@onsoftware.uk.',
        ],
      },
    ],
  },
  {
    slug: 'terms',
    title: 'Terms of Use',
    updated: '2026',
    intro:
      'These Terms of Use govern your access to and use of the ONSoftware website and its applications, including SellerHQ.',
    blocks: [
      {
        heading: '1. Acceptance',
        paragraphs: [
          'By accessing onsoftware.uk or any ONSoftware application, you agree to these Terms. If you do not agree, please do not use the services.',
        ],
      },
      {
        heading: '2. The service',
        paragraphs: [
          'ONSoftware provides a hub website describing our company and products, and software applications that you can sign up to use. Each application is a separate service with its own sign-up and may be governed by additional terms presented at sign-up.',
        ],
      },
      {
        heading: '3. Your account',
        paragraphs: [
          'You are responsible for keeping your login credentials secure and for everything that happens under your account. You must provide accurate information and be old enough to enter into a binding agreement where required by law.',
        ],
      },
      {
        heading: '4. Acceptable use',
        paragraphs: [
          'You agree not to misuse our services — for example by attempting to breach security, interfering with other users, or using the services for unlawful activity. Further detail is in our Acceptable Use Policy.',
        ],
      },
      {
        heading: '5. Subscriptions and billing',
        paragraphs: [
          'Paid applications are billed through our payment provider. Subscription fees are charged in advance on the billing cycle you choose. You can manage or cancel your subscription from your account or the billing portal at any time.',
        ],
      },
      {
        heading: '6. Content you provide',
        paragraphs: [
          'You retain ownership of the business data you add to our applications. By adding it, you grant us the limited rights needed to store and process it to provide the service. We do not claim ownership of your data.',
        ],
      },
      {
        heading: '7. Availability',
        paragraphs: [
          'We work hard to keep our services reliable, but we do not guarantee uninterrupted availability. Services may be changed, updated or withdrawn from time to time, and we will try to give reasonable notice where practical.',
        ],
      },
      {
        heading: '8. Limitation of liability',
        paragraphs: [
          'To the maximum extent permitted by law, ONSoftware is not liable for indirect or consequential loss, or for loss of profits or data, arising from your use of the services. Nothing in these Terms limits liability that cannot be limited by law.',
        ],
      },
      {
        heading: '9. Termination',
        paragraphs: [
          'You can stop using the services at any time and delete your account from your profile settings. We may suspend or terminate access where you breach these Terms or misuse the service.',
        ],
      },
      {
        heading: '10. Changes',
        paragraphs: [
          'We may update these Terms from time to time. Where changes are significant, we will make reasonable efforts to notify you. Continued use after changes take effect means you accept the updated Terms.',
        ],
      },
      {
        heading: '11. Contact',
        paragraphs: [
          'Questions about these Terms can be sent to hello@onsoftware.uk.',
        ],
      },
    ],
  },
  {
    slug: 'cookies',
    title: 'Cookie Policy',
    updated: '2026',
    intro:
      'This Cookie Policy explains how ONSoftware uses cookies and similar technologies across its websites and applications.',
    blocks: [
      {
        heading: 'What cookies are',
        paragraphs: [
          'Cookies are small text files stored on your device that help websites remember information about your visit. We use a small number of cookies to make our services work and to understand how they are used.',
        ],
      },
      {
        heading: 'Cookies we use',
        paragraphs: [
          'The cookies we use fall into the following categories:',
        ],
        list: [
          'Essential — required for the service to function, such as keeping you signed in and remembering preferences.',
          'Analytics — help us understand how the site is used so we can improve it (where used, these are privacy-respecting and can be disabled).',
          'Payment and security — set by our payment provider to complete a transaction safely.',
        ],
      },
      {
        heading: 'Managing cookies',
        paragraphs: [
          'You can control cookies through your browser settings, and you can clear them at any time. Disabling essential cookies may stop the service from working correctly.',
        ],
      },
      {
        heading: 'Contact',
        paragraphs: [
          'Questions about this policy can be sent to hello@onsoftware.uk.',
        ],
      },
    ],
  },
  {
    slug: 'acceptable-use',
    title: 'Acceptable Use Policy',
    updated: '2026',
    intro:
      'This policy sets out what is and is not acceptable when using ONSoftware websites and applications.',
    blocks: [
      {
        heading: 'What you must not do',
        paragraphs: [
          'You must not use ONSoftware services to:',
        ],
        list: [
          'Break the law, or encourage others to break the law.',
          'Store or distribute unlawful, harmful or infringing content.',
          'Attempt to access another person\u2019s account or data without permission.',
          'Interfere with, overload or attack the infrastructure of our services.',
          'Scrape, resell or repurpose the service or its content without permission.',
          'Misrepresent your identity or affiliation.',
        ],
      },
      {
        heading: 'Enforcement',
        paragraphs: [
          'We may suspend or terminate access where we reasonably believe this policy has been breached. Where the activity is unlawful, we may report it to the relevant authorities.',
        ],
      },
      {
        heading: 'Reporting a concern',
        paragraphs: [
          'If you see content or behaviour that you believe breaches this policy, please contact us at support@onsoftware.uk.',
        ],
      },
    ],
  },
  {
    slug: 'refunds',
    title: 'Refund Policy',
    updated: '2026',
    intro:
      'This policy explains how refunds work for paid ONSoftware subscriptions, including SellerHQ paid plans.',
    blocks: [
      {
        heading: 'Subscriptions',
        paragraphs: [
          'Paid plans are billed in advance on a monthly or annual cycle. You can cancel at any time from the billing portal in the application; your subscription will remain active until the end of the current billing period, after which you will not be charged again.',
        ],
      },
      {
        heading: 'When we refund',
        paragraphs: [
          'If you are not satisfied and cancel within a reasonable short period after starting a paid plan, or if there is an error in billing on our side, we will refund the charge. We assess each request fairly and individually.',
        ],
      },
      {
        heading: 'How to request a refund',
        paragraphs: [
          'Email us at support@onsoftware.uk with your account email and the reason for the request. We aim to respond within a few working days.',
        ],
      },
      {
        heading: 'Consumer rights',
        paragraphs: [
          'Nothing in this policy affects your statutory rights under UK consumer law, including your right to cancel within the statutory cooling-off period for distance contracts.',
        ],
      },
    ],
  },
  {
    slug: 'accessibility',
    title: 'Accessibility Statement',
    updated: '2026',
    intro:
      'ONSoftware aims to make its websites and applications usable by as many people as possible.',
    blocks: [
      {
        heading: 'Our commitment',
        paragraphs: [
          'We design our products to be usable by people with a wide range of abilities. This includes keyboard-friendly navigation, support for dark mode, high-contrast styling and clear, plain-language content.',
        ],
      },
      {
        heading: 'Conformance',
        paragraphs: [
          'We work towards the Web Content Accessibility Guidelines (WCAG) 2.2 AA. Our applications are under continuous development, and accessibility is part of that process.',
        ],
      },
      {
        heading: 'Feedback',
        paragraphs: [
          'If you find anything difficult to use, or have suggestions for improvement, please email us at support@onsoftware.uk. We treat accessibility feedback as a priority.',
        ],
      },
    ],
  },
]

export function getLegalPage(slug: string): LegalPage | undefined {
  return LEGAL_PAGES.find((page) => page.slug === slug)
}
