import { APP_URL, SUPPORT_URL } from './site'

export type HelpCategory = {
  id: string
  label: string
  icon: string
  topics: string[]
}

export const SELLERHQ_CATEGORIES: HelpCategory[] = [
  {
    id: 'getting-started',
    label: 'Getting started',
    icon: '🚀',
    topics: [
      'Creating your SellerHQ account',
      'Setting up your first business',
      'Adding your first product',
      'The dashboard explained',
      'Installing SellerHQ on your phone',
    ],
  },
  {
    id: 'account',
    label: 'Account',
    icon: '👤',
    topics: [
      'Managing your profile',
      'Changing your password',
      'Plans, billing & subscriptions',
      'Deleting your account',
      'Data backup & export',
    ],
  },
  {
    id: 'businesses',
    label: 'Businesses',
    icon: '🏪',
    topics: [
      'Creating multiple businesses',
      'Business settings',
      'Logo & branding',
      'Inviting team members',
      'Roles & permissions',
    ],
  },
  {
    id: 'inventory',
    label: 'Inventory',
    icon: '📦',
    topics: [
      'Product statuses explained',
      'Photographing products',
      'Labels, barcodes & QR codes',
      'Pricing calculator',
      'Bulk actions & CSV import/export',
    ],
  },
  {
    id: 'listings',
    label: 'Listings',
    icon: '🏷️',
    topics: [
      'Tracking marketplace listings',
      'Auto-relist',
      'Relisting required alerts',
    ],
  },
  {
    id: 'sales',
    label: 'Sales',
    icon: '💷',
    topics: [
      'Recording a sale',
      'Quick listings & bundle sales',
      'The shipping flow',
      'Refunds & returns',
    ],
  },
  {
    id: 'expenses',
    label: 'Expenses',
    icon: '🧾',
    topics: [
      'Adding an expense',
      'Expense categories',
      'Receipts Archive',
      'Monthly expense totals',
    ],
  },
  {
    id: 'forecasts',
    label: 'Forecasts',
    icon: '📈',
    topics: [
      'Forecasting with your data',
      'Scenario planning',
      'Cash-flow projection',
    ],
  },
  {
    id: 'tax',
    label: 'Tax',
    icon: '🧮',
    topics: [
      'How the UK tax estimate works',
      'Tax years & allowances',
      'Income tax & Class 4 National Insurance',
      'Using SellerHQ at tax time',
    ],
  },
  {
    id: 'settings',
    label: 'Settings',
    icon: '⚙️',
    topics: [
      'Feature toggles',
      'Business defaults',
      'Notifications',
      'Appearance & dark mode',
    ],
  },
  {
    id: 'troubleshooting',
    label: 'Troubleshooting',
    icon: '🛠️',
    topics: [
      'Signed out unexpectedly',
      'Photos not uploading',
      'Payments not showing',
      'Report a bug',
    ],
  },
]

export const SUPPORT_LINKS = {
  inAppSupport: `${APP_URL}/support`,
  email: 'support@onsoftware.uk',
  futureCentre: SUPPORT_URL,
} as const
