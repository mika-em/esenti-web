export type Product = {
  id: string
  size: string
  slug: string
  number: string
  name: string
  shortDescription: string
  longDescription: string
  ingredients?: string[]
  skinTypes?: string[]
  howToUse?: string
  shopUrl?: string // undefined = no CTA (essential oils)
}

export const products: Product[] = [
  {
    id: 'handmade-soap',
    size: '148g / 5oz',
    slug: 'handmade-soap',
    number: '01',
    name: 'handmade soap',
    shortDescription:
      "show your body some love with our vitamin-rich, coconut milk and mango butter soaps. they'll quench your skin's need for moisture and the luxurious, natural lather will leave your skin feeling oh-so-smooth.",
    longDescription:
      "show your body some love with our vitamin-rich, coconut milk and mango butter soaps. they'll quench your skin's need for moisture and the luxurious, natural lather will leave your skin feeling oh-so-smooth. hand-crafted in Stevestion Village, BC with only the finest natural ingredients — no synthetics, no compromise.",
    ingredients: ['coconut milk', 'mango butter', 'olive oil', 'shea butter', 'essential oils'],
    skinTypes: ['all skin types', 'dry skin', 'sensitive skin'],
    howToUse: 'lather with warm water and apply to skin. rinse thoroughly. suitable for daily use.',
    shopUrl: 'https://loveandnatural.com/collections/esenti',
  },
  {
    id: 'custom-face-oil',
    size: '30ml',
    slug: 'custom-face-oil',
    number: '02',
    name: 'custom face oil',
    shortDescription:
      "no two faces are the same — so skincare needs a personalized approach. our facial oils are customized formulas tailored to your skin's individual needs, leaving it feeling healthy and nourished. custom blends by request.",
    longDescription:
      "no two faces are the same — so skincare needs a personalized approach. our facial oils are customized formulas tailored to your skin's individual needs, leaving it feeling healthy and nourished. by balancing your skin's pH on a holistic level and giving it the nourishment it needs, we can help defy the aging process and revitalize your skin.",
    ingredients: ['cold-pressed, unrefined carrier oils', 'pure 100% organic essential oils'],
    skinTypes: ['oily', 'dry', 'combination', 'sensitive', 'mature'],
    howToUse: 'apply 3–5 drops to clean skin morning and evening. gently press into face and neck.',
    shopUrl: 'https://loveandnatural.com/pages/custom-facial-oil',
  },
  {
    id: 'luminere-eye-oil',
    size: '15ml',
    slug: 'luminere-eye-oil',
    number: '03',
    name: 'luminere eye oil',
    shortDescription:
      'luminate the eyes by delivering more moisture to the delicate under eye area. strengthen and protect the collagen with argan and jojoba. while carrot seed and rosemary provides smoothness and radiance under the eyes.',
    longDescription:
      'luminate the eyes by delivering more moisture to the delicate under eye area. strengthen and protect the collagen with argan and jojoba. while carrot seed and rosemary provides smoothness and radiance under the eyes. a lightweight, fast-absorbing blend formulated specifically for the most delicate skin on your face.',
    ingredients: ['argan oil', 'jojoba oil', 'carrot seed oil', 'rosemary extract'],
    skinTypes: ['all skin types', 'mature skin', 'sensitive skin'],
    howToUse: 'apply 1–2 drops under the eye area using your ring finger. gently pat — do not rub. use morning and evening.',
    shopUrl: 'https://loveandnatural.com/collections/esenti',
  },
  {
    id: 'essential-oil',
    size: '15ml',
    slug: 'essential-oil',
    number: '04',
    name: 'essential oils',
    shortDescription:
      'create a spa-like experience at home with our pure 100% organic essential oils, bottled on-demand in Stevestion Village, BC. essential oils can be diffused or added to your body-care routine to naturally uplift your energy.',
    longDescription:
      'create a spa-like experience at home with our pure 100% organic essential oils, bottled on-demand in Stevestion Village, BC. essential oils can be diffused or added to your body-care routine to naturally uplift your energy. each bottle is filled fresh to order — never sitting on a shelf.',
    ingredients: ['lavender', 'peppermint', 'tea tree', 'orange', 'grapefruit', 'lemongrass'],
    howToUse: 'add a few drops to a diffuser, or dilute with a carrier oil before applying to skin. do not apply undiluted essential oils directly to skin.',
    shopUrl: undefined, // not available on loveandnatural yet
  },
  {
    id: 'body-mist',
    size: '100ml',
    slug: 'body-mist',
    number: '05',
    name: 'body mists',
    shortDescription:
      'six blends of pure 100% organic essential oils. light, lasting, and free of synthetics.',
    longDescription:
      'six blends of pure 100% organic essential oils. light, lasting, and free of synthetics. shake off the elements with our natural body mists — crafted to refresh, uplift, and leave your skin subtly scented throughout the day.',
    ingredients: ['pure 100% organic essential oils', 'distilled water', 'natural emulsifier'],
    skinTypes: ['all skin types'],
    howToUse: 'shake well before use. spray onto skin from 15–20cm away. can be used throughout the day.',
    shopUrl: 'https://loveandnatural.com/collections/esenti',
  },
]

export const testimonials = [
  {
    quote: '"best thing I put on my face every day."',
    name: 'L. Carpenter',
  },
  {
    quote: '"I can finally go without wearing makeup — something I haven\'t done since I was 12."',
    name: 'S. Khosa',
  },
  {
    quote: '"Winnie and her team created a special facial oil to help even my complexion."',
    name: 'K. Nelson',
  },
]

export const navLinks = [
  { href: '/', label: 'home' },
  { href: '/products', label: 'products' },
  { href: '/our-story', label: 'our story' },
  { href: '/contact-us', label: 'contact' },
]
