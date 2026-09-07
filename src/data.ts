export type Piece = {
  id: string
  name: string
  category: string
  image: string
  note: string
}

const img = (name: string) => `/images/${name}`

const defaultWhatsappMessage = `Welcome to ZUCOL APPAREL.%0A%0ARC 9112050%0A• ELITE Tailor%0A• Natives | Kaftans | Suits | Corporate Wears for Elites Only%0A• 📍Abuja • 🌎 Wide Delivery%0A%0AYou’re chatting with our official WhatsApp line — how may we serve you today?`

export const contactInfo = {
  phoneDisplay: '0803 215 3130',
  phoneRaw: '08032153130',
  whatsappIntl: '2348032153130',
  location: 'Abuja, Nigeria',
  company: 'ZUCOL APPAREL',
  rc: 'RC 9112050',
  whatsappLink: `https://wa.me/2348032153130?text=${defaultWhatsappMessage}`,
  whatsappDefaultText: defaultWhatsappMessage,
}

export const images = {
  hero: img('teal_senator_lookbook_portrait.png'),
  atelier: img('charcoal_pinstripe_kaftan_portrait.png'),
  about: img('confident_blue_kaftan_studio_portrait.png'),
  occasion: img('modern_navy_kaftan_studio_portrait.png'),
  executive: img('refined_deep_green_traditional_ensemble.png'),
}

export const collections = [
  {
    title: 'THE SENATOR EDIT',
    subtitle: 'Executive / Signature Native',
    image: img('teal_senator_lookbook_portrait.png'),
  },
  {
    title: 'MODERN KAFTANS',
    subtitle: 'Minimal / Refined Daily Luxury',
    image: img('modern_black_kaftan_fashion_portrait.png'),
  },
  {
    title: 'ELITE OCCASION',
    subtitle: 'Suits / Ceremony / Corporate Presence',
    image: img('confident_blue_kaftan_studio_portrait.png'),
  },
]

export const pieces: Piece[] = [
  {
    id: 'teal-signature-senator',
    name: 'Teal Signature Senator',
    category: 'Signature Senator Wear',
    image: img('teal_senator_lookbook_portrait.png'),
    note: 'A polished senator set with textured finishing, balanced structure and a confident Abuja-worthy presence.',
  },
  {
    id: 'midnight-executive-kaftan',
    name: 'Midnight Executive Kaftan',
    category: 'Executive Kaftan',
    image: img('modern_navy_kaftan_studio_portrait.png'),
    note: 'A clean two-piece native set developed for meetings, receptions and elevated everyday dressing.',
  },
  {
    id: 'charcoal-elite-fit',
    name: 'Charcoal Elite Fit',
    category: 'Contemporary Kaftan',
    image: img('charcoal_pinstripe_kaftan_portrait.png'),
    note: 'Quiet luxury for men who prefer discipline, restraint and detail over noise.',
  },
  {
    id: 'royal-blue-senator',
    name: 'Royal Blue Senator',
    category: 'Classic Senator Wear',
    image: img('confident_blue_kaftan_studio_portrait.png'),
    note: 'A bold clean-lined statement for celebrations, photoshoots and polished social appearances.',
  },
  {
    id: 'black-thobe-formal',
    name: 'Black Formal Thobe',
    category: 'Formal Native Wear',
    image: img('elegant_black_thobe_portrait.png'),
    note: 'An understated all-black option shaped for evening dignity and minimalist elegance.',
  },
  {
    id: 'beige-day-kaftan',
    name: 'Beige Day Kaftan',
    category: 'Light Luxury',
    image: img('minimalist_beige_kaftan_portrait.png'),
    note: 'Soft neutral styling for daytime events, Friday dressing and refined comfort.',
  },
  {
    id: 'deep-green-regal',
    name: 'Deep Green Regal Set',
    category: 'Ceremonial Menswear',
    image: img('refined_deep_green_traditional_ensemble.png'),
    note: 'Rich colour, measured simplicity and a dress code that feels quietly important.',
  },
  {
    id: 'plum-private-client',
    name: 'Plum Private Client',
    category: 'Private Client',
    image: img('purple_kaftan_studio_portrait.png'),
    note: 'A refined colour-driven look for elite clients who want distinction without excess.',
  },
]

export const lookbook = [
  img('teal_senator_lookbook_portrait.png'),
  img('modern_navy_kaftan_studio_portrait.png'),
  img('charcoal_pinstripe_kaftan_portrait.png'),
  img('confident_blue_kaftan_studio_portrait.png'),
  img('elegant_black_thobe_portrait.png'),
  img('refined_deep_green_traditional_ensemble.png'),
]
