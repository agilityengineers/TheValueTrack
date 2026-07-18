// Centralized site content config: image sources, external links, and contact
// details. Swap placeholder imagery and hotlinked assets here in one place.

export const images = {
  // Real logo, hotlinked from the live site — replace with a hosted asset in production.
  logo: 'https://getonthevaluetrack.com/wp-content/uploads/cropped-the-value-track-logo-e1689430795234-262x69.png',
  // PLACEHOLDER photography — replace with licensed Value Track imagery
  // (the live site ships img_build_value_before_sale_h1410.webp / img_sell_for_return_h1410.webp).
  hero: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1920&q=80',
  mission: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1000&q=80',
  whyUs: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1000&q=80',
  quote: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80',
} as const;

export const links = {
  linkedin: 'https://www.linkedin.com/in/davidshavzin/',
  insights: 'https://insights.getonthevaluetrack.com',
  faq: 'https://getonthevaluetrack.com/sell-business-faq/',
  contactPage: 'https://getonthevaluetrack.com/contact-us/',
  speaking: 'https://getonthevaluetrack.com/speaking/',
  valueBuilding: 'https://getonthevaluetrack.com/value-building/',
  sellYourBusiness: 'https://getonthevaluetrack.com/sell-your-business/',
  businessValuation: 'https://getonthevaluetrack.com/business-valuation/',
} as const;

export const phone = {
  display: '(770) 329-5224',
  href: 'tel:7703295224',
} as const;

export const location = 'Metro Atlanta, Georgia';
