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
  product?: 'ONSoftware' | 'SellerHQ'
  blocks: LegalBlock[]
}

const UPDATED = '30 August 2026'
const LEGAL_EMAIL = 'legal@onsoftware.uk'
const PRODUCTS_EMAIL = 'products@onsoftware.uk'

export const LEGAL_PAGES: LegalPage[] = [
  {
    slug: 'privacy',
    title: 'Privacy Notice',
    updated: UPDATED,
    product: 'ONSoftware',
    intro:
      'This notice explains how personal data is handled across onsoftware.uk and ONSoftware products, including SellerHQ, under applicable UK data-protection law.',
    blocks: [
      {
        heading: '1. Who this notice applies to',
        paragraphs: [
          'ONSoftware is the name used for the software services available through onsoftware.uk and product subdomains such as sellerhq.onsoftware.uk. This notice applies to visitors, account holders, prospective customers and people who contact us.',
          `Privacy and data-protection enquiries can be sent to ${LEGAL_EMAIL}.`,
        ],
      },
      {
        heading: '2. Personal data we may collect',
        list: [
          'Identity and account data, such as your name, email address, authentication identifiers and account preferences.',
          'Business and product data you choose to enter into a product, including inventory, listings, sales, expenses, receipts, business settings and team information.',
          'Subscription and billing records, such as your plan, billing cycle, transaction references and subscription status. Full card details are handled by the payment provider rather than stored by ONSoftware.',
          'Support and correspondence data, including messages, attachments and information you provide when asking for help or giving feedback.',
          'Technical and security data, such as browser or device information, IP-derived security information, error reports and authentication events where collected by our infrastructure.',
          'Preference data stored locally on your device, including interface or theme preferences.',
        ],
      },
      {
        heading: '3. Why we use personal data',
        list: [
          'To create and maintain accounts and provide the product features you request.',
          'To process and administer subscriptions and payments.',
          'To respond to support, product, legal and business enquiries.',
          'To secure accounts, prevent abuse, investigate faults and maintain service reliability.',
          'To improve products using feedback, diagnostic information and aggregated usage information.',
          'To comply with legal, accounting, tax or regulatory obligations where they apply.',
        ],
      },
      {
        heading: '4. Legal bases',
        paragraphs: [
          'Where the UK GDPR applies, processing may be based on performance of a contract, steps requested before entering a contract, legitimate interests in operating and securing the service, compliance with legal obligations, or consent where the law requires consent. The basis depends on the specific processing activity.',
        ],
      },
      {
        heading: '5. Service providers and data sharing',
        paragraphs: [
          'We use specialist service providers to operate the services. Depending on the product and feature, these may include Supabase for application database/authentication infrastructure, Stripe for payment processing and Vercel for web hosting and deployment. Those providers process information under their own contractual and privacy obligations.',
          'We do not sell personal data. We may disclose information where required by law, to protect the security or rights of users and ONSoftware, or as part of a legitimate business reorganisation subject to appropriate safeguards.',
        ],
      },
      {
        heading: '6. International processing',
        paragraphs: [
          'Some infrastructure providers may process information outside the United Kingdom. Where this occurs, we rely on the safeguards and transfer mechanisms made available by the relevant provider and required by applicable data-protection law.',
        ],
      },
      {
        heading: '7. Retention and deletion',
        paragraphs: [
          'We keep personal data for as long as reasonably necessary for the purpose for which it was collected, to provide an active account, to resolve disputes, and to meet legal or accounting requirements. Product data deleted through an account may remain temporarily in backups or logs before routine deletion cycles complete.',
          'Closing an account does not necessarily require immediate deletion of records that must be retained for legal, fraud-prevention, payment or accounting reasons.',
        ],
      },
      {
        heading: '8. Your rights',
        list: [
          'Ask for access to personal data we hold about you.',
          'Ask us to correct inaccurate or incomplete personal data.',
          'Ask for deletion where there is no lawful reason to continue processing.',
          'Ask us to restrict processing in circumstances provided by law.',
          'Object to processing based on legitimate interests in circumstances provided by law.',
          'Ask for portable data where the right applies.',
          'Withdraw consent where processing relies on consent.',
          'Complain to the UK Information Commissioner’s Office if you believe your data-protection rights have been infringed.',
        ],
      },
      {
        heading: '9. Children',
        paragraphs: [
          'ONSoftware products are intended for people capable of managing their own account and, where applicable, entering into a contract. They are not designed as services directed at young children.',
        ],
      },
      {
        heading: '10. Contact and changes',
        paragraphs: [
          `Contact ${LEGAL_EMAIL} for privacy requests or questions. We may update this notice as products, providers or legal requirements change. The date at the top shows the latest public revision.`,
        ],
      },
    ],
  },
  {
    slug: 'website-terms',
    title: 'Website Terms of Use',
    updated: UPDATED,
    product: 'ONSoftware',
    intro:
      'These terms apply to use of the public ONSoftware hub at onsoftware.uk. Product accounts and subscriptions are subject to additional product terms.',
    blocks: [
      {
        heading: '1. Using the website',
        paragraphs: [
          'You may use the public website to learn about ONSoftware, its products, pricing, policies and support routes. You must use it lawfully and must not interfere with its operation, attempt unauthorised access or misuse its content or infrastructure.',
        ],
      },
      {
        heading: '2. Information on the website',
        paragraphs: [
          'We aim to keep product, pricing and feature information accurate. Software changes quickly, so the live application, checkout screen and product-specific terms take priority where a discrepancy arises. We may correct errors or update information without prior notice.',
        ],
      },
      {
        heading: '3. Intellectual property',
        paragraphs: [
          'Unless otherwise stated, ONSoftware owns or is licensed to use the website design, branding, software-related materials and original content. You may view and use the website for its intended purpose but may not reproduce, resell or present the service or branding as your own without permission.',
        ],
      },
      {
        heading: '4. Third-party services and links',
        paragraphs: [
          'The website may link to product subdomains and third-party services. Those destinations may operate under separate terms and privacy notices. We are not responsible for third-party websites that we do not control.',
        ],
      },
      {
        heading: '5. Availability and liability',
        paragraphs: [
          'We do not promise that the public website will always be available or error-free. Nothing in these terms excludes liability that cannot lawfully be excluded. To the extent permitted by law, we are not responsible for indirect loss caused solely by reliance on general marketing or informational content on this website.',
        ],
      },
      {
        heading: '6. Law and contact',
        paragraphs: [
          `These terms are governed by the law of England and Wales, subject to any mandatory consumer protections that apply to you. Legal enquiries can be sent to ${LEGAL_EMAIL}.`,
        ],
      },
    ],
  },
  {
    slug: 'sellerhq-terms',
    title: 'SellerHQ Service Terms',
    updated: UPDATED,
    product: 'SellerHQ',
    intro:
      'These terms govern creation of a SellerHQ account and use of the SellerHQ service, including free and paid plans.',
    blocks: [
      {
        heading: '1. The SellerHQ service',
        paragraphs: [
          'SellerHQ is a web application for reselling-business administration. It provides tools for inventory, sales, expenses, listings, reporting, forecasting, pricing calculations, tax estimates and related operational workflows. Features and limits depend on the plan attached to an account.',
          'SellerHQ is not a marketplace, bank, accountant, tax adviser, courier, payment processor or agent for eBay, Vinted, Etsy, Depop or any other marketplace unless a specific integration expressly states otherwise.',
        ],
      },
      {
        heading: '2. Your account',
        list: [
          'You must provide accurate registration information and keep it reasonably up to date.',
          'You are responsible for protecting your credentials and for activity carried out through your account or authorised team access.',
          'You must notify us promptly if you believe your account has been compromised.',
          'You must not use another person’s account without permission or attempt to bypass plan, access or security controls.',
        ],
      },
      {
        heading: '3. Your business data',
        paragraphs: [
          'You retain ownership of the information and files you submit to SellerHQ. You give ONSoftware the limited permission needed to host, process, display, back up and transmit that data solely to operate, secure and support the service.',
          'You are responsible for the accuracy, legality and quality of the data you enter and for maintaining any independent records that law, tax rules or your own risk management require.',
        ],
      },
      {
        heading: '4. Plans and feature limits',
        paragraphs: [
          'SellerHQ currently offers Basic, Growing, Pro and Business plans. The live pricing page and checkout state the current price, billing cycle, limits and included features. We may change plan structures prospectively. Material changes affecting an existing paid subscription will be communicated where reasonably practicable.',
        ],
      },
      {
        heading: '5. Payments, renewal and cancellation',
        paragraphs: [
          'Paid subscriptions are processed through Stripe and renew on the selected monthly or annual cycle until cancelled. You can cancel through the billing tools made available in the service. Cancellation normally stops the next renewal while access to paid features continues until the end of the already-paid billing period.',
          'Additional information about refunds and cancellation is set out in the Subscription, Cancellation & Refund Policy.',
        ],
      },
      {
        heading: '6. Tax, pricing and financial tools',
        paragraphs: [
          'SellerHQ calculations are administrative estimates based on the information supplied and the rules or assumptions implemented in the software. They are not personalised professional advice and do not replace HMRC guidance, an accountant or another appropriately qualified adviser. See the Tax & Financial Tools Disclaimer.',
        ],
      },
      {
        heading: '7. Marketplace information',
        paragraphs: [
          'SellerHQ can record marketplace-related information and includes workflows designed around marketplaces such as eBay, Vinted, Etsy and Depop. Marketplace fees, rules and features can change independently of SellerHQ. Unless explicitly described as a live API integration, a marketplace name indicates workflow support rather than an official partnership or automatic synchronisation.',
        ],
      },
      {
        heading: '8. Service availability and changes',
        paragraphs: [
          'We aim to keep SellerHQ available and reliable but cannot guarantee uninterrupted operation. Maintenance, provider outages, security events and software defects can affect availability. We may modify the service to improve security, reliability, legal compliance or functionality.',
        ],
      },
      {
        heading: '9. Suspension and termination',
        paragraphs: [
          'We may restrict or suspend an account where reasonably necessary to protect users or infrastructure, investigate suspected abuse, address non-payment or enforce these terms. You may stop using SellerHQ and request or use available account-deletion tools at any time, subject to records we must lawfully retain.',
        ],
      },
      {
        heading: '10. Liability',
        paragraphs: [
          'Nothing in these terms excludes liability that cannot legally be excluded. Subject to that, SellerHQ is an administrative software tool and ONSoftware is not responsible for losses caused by inaccurate information entered by a user, marketplace rule changes, a user’s failure to keep required records, or decisions made by treating an estimate as professional tax, legal or financial advice.',
          'If you are a consumer, these terms do not remove statutory rights that cannot be excluded by contract.',
        ],
      },
      {
        heading: '11. Contact and governing law',
        paragraphs: [
          `Product questions can be sent to ${PRODUCTS_EMAIL}; legal notices can be sent to ${LEGAL_EMAIL}. These terms are governed by the law of England and Wales, subject to mandatory consumer protections that apply to you.`,
        ],
      },
    ],
  },
  {
    slug: 'subscriptions-refunds',
    title: 'Subscription, Cancellation & Refund Policy',
    updated: UPDATED,
    product: 'SellerHQ',
    intro:
      'This policy explains how SellerHQ paid subscriptions renew, how to cancel, and how refund requests are handled.',
    blocks: [
      {
        heading: '1. Free and paid plans',
        paragraphs: [
          'SellerHQ Basic is a free plan. Growing, Pro and Business are paid plans. Current prices and plan limits are displayed before purchase. Paid plans may be offered monthly or annually, with any annual discount shown before checkout.',
        ],
      },
      {
        heading: '2. Renewal',
        paragraphs: [
          'A paid subscription renews automatically on its selected billing cycle until it is cancelled. Stripe processes payment using the payment method associated with the subscription.',
        ],
      },
      {
        heading: '3. Cancellation',
        paragraphs: [
          'You can cancel a paid subscription using the billing controls provided in SellerHQ. Unless a different result is shown at cancellation, the paid plan remains active until the end of the current billing period and then stops renewing. Cancelling a subscription does not by itself delete the SellerHQ account or its data.',
        ],
      },
      {
        heading: '4. Refund requests',
        paragraphs: [
          'We will correct duplicate charges and billing errors attributable to ONSoftware or its payment configuration. Other refund requests are considered fairly based on the circumstances, the timing of the request and any statutory rights that apply.',
          'We do not promise automatic pro-rata refunds simply because a subscription is cancelled part-way through an already-paid billing period, except where the law requires otherwise or we expressly agree to one.',
        ],
      },
      {
        heading: '5. Consumer cancellation rights',
        paragraphs: [
          'UK consumers may have statutory cancellation rights for distance contracts. The way those rights apply can depend on whether digital services have begun at the consumer’s request and on the information and consent given at checkout. Nothing in this policy limits statutory rights.',
        ],
      },
      {
        heading: '6. How to contact us',
        paragraphs: [
          `For a billing or refund issue, email ${PRODUCTS_EMAIL} from the address associated with the SellerHQ account and include enough information for us to identify the subscription.`,
        ],
      },
    ],
  },
  {
    slug: 'tax-disclaimer',
    title: 'Tax & Financial Tools Disclaimer',
    updated: UPDATED,
    product: 'SellerHQ',
    intro:
      'SellerHQ includes calculators, forecasts, pricing tools and UK tax estimates. This document explains their limits.',
    blocks: [
      {
        heading: '1. Administrative tools, not professional advice',
        paragraphs: [
          'SellerHQ is software for organising information and producing estimates. It does not provide legal, accounting, tax, investment or other regulated professional advice. The software cannot take account of every personal circumstance, relief, election, adjustment or change in law.',
        ],
      },
      {
        heading: '2. Your inputs matter',
        paragraphs: [
          'Calculations depend on the information entered into SellerHQ. Missing, delayed, duplicated or incorrect records can produce incorrect results. You are responsible for checking the underlying data and deciding whether an estimate is suitable for your circumstances.',
        ],
      },
      {
        heading: '3. Tax rules and HMRC',
        paragraphs: [
          'Tax thresholds, rates, filing requirements and HMRC guidance can change. SellerHQ may be updated to reflect changes, but an update may not be instantaneous and the software does not represent or bind HMRC. Check current HMRC guidance and obtain professional advice where appropriate before filing or making material decisions.',
        ],
      },
      {
        heading: '4. Forecasts and marketplace fees',
        paragraphs: [
          'Forecasts are projections rather than guarantees. Marketplace fee examples or defaults are assumptions and may not match the fee actually charged to your account, category, location or transaction. Always verify current marketplace terms and actual transaction data.',
        ],
      },
      {
        heading: '5. Responsibility for compliance',
        paragraphs: [
          'You remain responsible for your tax registrations, records, returns, payments and deadlines. SellerHQ can help organise records but does not transfer those legal responsibilities to ONSoftware.',
        ],
      },
    ],
  },
  {
    slug: 'cookies',
    title: 'Cookie & Local Storage Policy',
    updated: UPDATED,
    product: 'ONSoftware',
    intro:
      'This policy explains how ONSoftware websites and products use browser storage, cookies and similar technologies.',
    blocks: [
      {
        heading: '1. Essential browser storage',
        paragraphs: [
          'The ONSoftware hub uses local browser storage for preferences such as light or dark appearance. SellerHQ may use cookies, local storage or similar mechanisms required for authentication, security and application preferences.',
        ],
      },
      {
        heading: '2. Payments and third parties',
        paragraphs: [
          'When you use payment or hosted third-party functionality, providers such as Stripe may set their own security or payment-related cookies under their own policies.',
        ],
      },
      {
        heading: '3. Analytics',
        paragraphs: [
          'We may introduce privacy-conscious analytics to understand product performance. Where non-essential cookies or similar technologies require consent, we will provide the relevant choice before using them.',
        ],
      },
      {
        heading: '4. Managing storage',
        paragraphs: [
          'You can clear cookies and local site data through your browser. Removing authentication or essential storage can sign you out or reset preferences and may prevent parts of a product from functioning correctly.',
        ],
      },
      {
        heading: '5. Contact',
        paragraphs: [`Questions can be sent to ${LEGAL_EMAIL}.`],
      },
    ],
  },
  {
    slug: 'acceptable-use',
    title: 'Acceptable Use Policy',
    updated: UPDATED,
    product: 'ONSoftware',
    intro:
      'This policy protects ONSoftware services, users and infrastructure from misuse.',
    blocks: [
      {
        heading: 'You must not use an ONSoftware service to',
        list: [
          'Break the law or knowingly facilitate unlawful activity.',
          'Access, test or interfere with accounts, data, systems or networks without authorisation.',
          'Circumvent authentication, plan limits, billing controls or technical restrictions.',
          'Upload malware or deliberately harmful, deceptive or infringing content.',
          'Overload, scrape or automate access in a way that materially harms the service or other users.',
          'Misrepresent a relationship with ONSoftware, SellerHQ or a third-party marketplace.',
          'Resell, clone or commercially exploit the service itself without written permission.',
        ],
      },
      {
        heading: 'Enforcement',
        paragraphs: [
          'We may investigate suspected misuse and take proportionate action, including limiting access, suspending an account, preserving relevant evidence or contacting appropriate authorities where required or justified by law.',
        ],
      },
      {
        heading: 'Reporting concerns',
        paragraphs: [`Report suspected misuse to ${PRODUCTS_EMAIL} or security concerns to admin@onsoftware.uk.`],
      },
    ],
  },
  {
    slug: 'security',
    title: 'Security & Responsible Disclosure',
    updated: UPDATED,
    product: 'ONSoftware',
    intro:
      'This statement describes our security approach and how to report a potential vulnerability responsibly.',
    blocks: [
      {
        heading: 'Our approach',
        list: [
          'Authentication and application data are separated by access controls implemented in the product infrastructure.',
          'Connections to ONSoftware web services are intended to use encrypted HTTPS transport.',
          'Payment card processing is delegated to Stripe rather than storing full card details in SellerHQ.',
          'We use managed infrastructure providers and apply software updates, access controls and monitoring appropriate to the service.',
          'Users are encouraged to use unique passwords and protect access to their email account and devices.',
        ],
      },
      {
        heading: 'Responsible vulnerability reporting',
        paragraphs: [
          'If you believe you have found a vulnerability, report it privately before making details public. Give us a reasonable opportunity to investigate and fix the issue, avoid accessing more data than necessary to demonstrate the problem, and do not disrupt the service.',
          'Do not use vulnerability research as a reason to access another person’s account, destroy data, extort payment, run denial-of-service activity or carry out social engineering.',
        ],
      },
      {
        heading: 'How to report',
        paragraphs: [
          'Send security reports to admin@onsoftware.uk with a clear description, affected URL or feature, reproducible steps and any evidence that can be shared safely. Please do not include unnecessary personal data.',
        ],
      },
    ],
  },
  {
    slug: 'accessibility',
    title: 'Accessibility Statement',
    updated: UPDATED,
    product: 'ONSoftware',
    intro:
      'ONSoftware aims to make its public website and products usable by as many people as reasonably possible.',
    blocks: [
      {
        heading: 'Our accessibility approach',
        paragraphs: [
          'We aim for clear structure, keyboard-accessible navigation, readable contrast, responsive layouts, visible focus states and compatibility with common browser accessibility features. We use WCAG 2.2 AA as a practical design target rather than claiming formal certification unless an audit has established it.',
        ],
      },
      {
        heading: 'Known limitations and continuous improvement',
        paragraphs: [
          'Software changes continuously and accessibility issues can be introduced despite testing. We prioritise fixes that block core tasks and review new interfaces as products evolve.',
        ],
      },
      {
        heading: 'Feedback',
        paragraphs: [
          'If you find an accessibility problem, email feedback@onsoftware.uk with the page or feature, what went wrong and any assistive technology or browser information you are comfortable sharing.',
        ],
      },
    ],
  },
]

export function getLegalPage(slug: string): LegalPage | undefined {
  return LEGAL_PAGES.find((page) => page.slug === slug)
}
