import type { IconName } from '../components/Icon'
import { APP_URL } from './site'

export type HelpCategory = {
  id: string
  label: string
  icon: IconName
  topics: string[]
}

export const SELLERHQ_CATEGORIES: HelpCategory[] = [
  {
    id: 'getting-started',
    label: 'Getting started',
    icon: 'rocket',
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
    icon: 'user',
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
    icon: 'store',
    topics: [
      'Creating multiple businesses',
      'Business settings',
      'Logo & branding',
      'White-label branding',
      'Inviting team members',
      'Roles & permissions',
      'Full audit log',
    ],
  },
  {
    id: 'inventory',
    label: 'Inventory',
    icon: 'box',
    topics: [
      'Product statuses explained',
      'Photographing products',
      'Labels, barcodes & QR codes',
      'Mobile QR scanner',
      'QR relay: phone scans to a laptop',
      'Pricing calculator',
      'Price ladder & profit optimisation',
      'Custom product fields',
      'Low-stock & reorder alerts',
      'Bulk actions & CSV import/export',
    ],
  },
  {
    id: 'listings',
    label: 'Listings',
    icon: 'tag',
    topics: [
      'Tracking marketplace listings',
      'Auto-relist',
      'Relisting required alerts',
    ],
  },
  {
    id: 'sales',
    label: 'Sales',
    icon: 'money',
    topics: [
      'Recording a sale',
      'Quick listings & bundle sales',
      'Bundle templates',
      'The shipping flow',
      'Multi-currency sales',
      'Refunds & returns',
    ],
  },
  {
    id: 'till',
    label: 'Till Mode',
    icon: 'store',
    topics: [
      'Starting a selling session',
      'Receipts & cash drawer',
      'Closing the till & session reports',
    ],
  },
  {
    id: 'expenses',
    label: 'Expenses',
    icon: 'receipt',
    topics: [
      'Adding an expense',
      'Expense categories',
      'Receipts Archive',
      'Monthly expense totals',
    ],
  },
  {
    id: 'forecasts',
    label: 'Forecasts & reports',
    icon: 'chart',
    topics: [
      'Forecasting with your data',
      'Scenario planning',
      'Cash-flow projection',
      'P&L & inventory health reports',
      'Stock ageing',
    ],
  },
  {
    id: 'tax',
    label: 'Tax',
    icon: 'calculator',
    topics: [
      'How the UK tax estimate works',
      'Tax years & allowances',
      'Income tax & Class 4 National Insurance',
      'Quarterly deadlines & filing',
      'Accounting export',
      'Using SellerHQ at tax time',
    ],
  },
  {
    id: 'settings',
    label: 'Settings',
    icon: 'settings',
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
    icon: 'wrench',
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
  email: 'adminonsoftware@gmail.com',
} as const
