import type { IconName } from '../components/Icon'
import { APP_URL, CONTACT_EMAILS } from './site'

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
    topics: ['Creating your SellerHQ account', 'Setting up your first business', 'Adding your first product', 'Installing SellerHQ on your phone'],
  },
  {
    id: 'account',
    label: 'Account & billing',
    icon: 'user',
    topics: ['Managing your profile', 'Plans, billing & subscriptions', 'Cancelling a subscription', 'Deleting your account', 'Data backup & export'],
  },
  {
    id: 'inventory',
    label: 'Inventory & listings',
    icon: 'box',
    topics: ['Product statuses', 'Photos and locations', 'Labels & QR codes', 'Marketplace listings', 'Relisting workflows', 'CSV import/export'],
  },
  {
    id: 'sales',
    label: 'Sales & expenses',
    icon: 'money',
    topics: ['Recording a sale', 'Bundle sales', 'Shipping flow', 'Multi-currency sales', 'Expenses & receipt records'],
  },
  {
    id: 'reports',
    label: 'Reports, forecasts & tax',
    icon: 'chart',
    topics: ['P&L & inventory health', 'Forecasting', 'Cash-flow projection', 'UK tax estimates', 'Tax-tool limitations'],
  },
  {
    id: 'business',
    label: 'Business features',
    icon: 'store',
    topics: ['Team members', 'Roles & permissions', 'Audit log', 'Business branding', 'QR relay', 'Till Mode'],
  },
]

export const SUPPORT_LINKS = {
  inAppSupport: `${APP_URL}/support`,
  email: CONTACT_EMAILS.products,
  feedback: CONTACT_EMAILS.feedback,
} as const
