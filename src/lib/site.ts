export const SITE_NAME = 'ONSoftware'
export const SITE_TAGLINE = 'Software built to make business simpler.'
export const SITE_DESCRIPTION =
  'ONSoftware creates practical software designed to help independent businesses and individuals manage, organise and grow.'

/** Canonical public origin of the hub site. */
export const SITE_URL = 'https://onsoftware.uk'

/** Origin of the SellerHQ application (its own subdomain). */
export const APP_URL = 'https://sellerhq.onsoftware.uk'

/** Future central support centre origin. */
export const SUPPORT_URL = 'https://support.onsoftware.uk'

/** Single inbox used for all contact routes. */
export const CONTACT_EMAIL = 'adminonsoftware@gmail.com'

/** Email addresses for the different contact routes. */
export const CONTACT_EMAILS = {
  general: CONTACT_EMAIL,
  support: CONTACT_EMAIL,
  business: CONTACT_EMAIL,
  feedback: CONTACT_EMAIL,
} as const

export const COMPANY_YEAR = 2026
