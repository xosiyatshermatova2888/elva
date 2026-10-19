/** Kontakt va brend ma'lumotlari — bitta joyda. */
export const site = {
  name: 'ELVA',
  tagline: 'Coffee. Croissant. Good moments.',
  city: 'Navoiy, Uzbekistan',
  address: 'Navoi city, Uzbekistan',
  hours: { days: 'Monday — Sunday', time: '08:00 — 22:00' },
  phone: '+998 XX XXX XX XX',
  phoneHref: 'tel:+998000000000',
  instagram: 'https://instagram.com/',
  telegram: 'https://t.me/',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Navoi+Uzbekistan',
  mapsEmbed: 'https://www.google.com/maps?q=Navoi,Uzbekistan&z=13&output=embed',
  currency: 'UZS',
} as const;

export const navLinks = [
  { label: 'Menu', to: '/menu' },
  { label: 'About', to: '/about' },
  { label: 'Gallery', to: '/#gallery' },
  { label: 'Contact', to: '/contact' },
] as const;

export const formatPrice = (value: number) =>
  `${value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')} ${site.currency}`;
