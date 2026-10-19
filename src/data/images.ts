/**
 * Barcha rasm URL'lari shu yerda saqlanadi.
 * Real ELVA rasmlari tayyor bo'lganda faqat shu fayldagi URL'larni almashtiring
 * (masalan: '/images/hero.jpg' — fayllarni public/images/ ichiga qo'ying).
 */
const u = (id: string, w = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const images = {
  hero: u('photo-1495474472287-4d71bcdd2085', 1600),
  /** Bosh sahifadagi to'liq ekranli slayder (navbat bilan almashadi). */
  heroSlides: [
    { src: u('photo-1509042239860-f550ce710b93', 2000), label: 'Coffee' },
    { src: u('photo-1555507036-ab1f4038808a', 2000), label: 'Croissant' },
    { src: u('photo-1554118811-1e0d58224f24', 2000), label: 'Atmosphere' },
  ],
  intro: u('photo-1554118811-1e0d58224f24', 1400),
  introSecondary: u('photo-1495474472287-4d71bcdd2085', 900),
  combo: u('photo-1549903072-7e6e0bedb7fb', 1600),
  about: u('photo-1501339847302-ac426a4a7cbb', 1400),
  location: u('photo-1453614512568-c4024d13c247', 1400),
  cta: u('photo-1445116572660-236099ec97a0', 1800),

  products: {
    classicCroissant: u('photo-1555507036-ab1f4038808a', 800),
    chocolateCroissant: u('photo-1623334044303-241021148842', 800),
    almondCroissant: u('photo-1530610476181-d83430b64dcd', 800),
    cappuccino: u('photo-1572442388796-11668a67e53d', 800),
    americano: u('photo-1514432324607-a09d9b4aefdd', 800),
    latte: u('photo-1570968915860-54d5c301fa9f', 800),
    flatWhite: u('photo-1577968897966-3d4325b36b61', 800),
    espresso: u('photo-1510591509098-f4fdc6d0ff04', 800),
    cheesecake: u('photo-1524351199678-941a58a3df50', 800),
    chocolateCake: u('photo-1578985545062-69928b1d9587', 800),
    tiramisu: u('photo-1571877227200-a0d98ea607e9', 800),
    avocadoToast: u('photo-1525351484163-7529414344d8', 800),
    frenchToast: u('photo-1484723091739-30a097e8f929', 800),
    granola: u('photo-1490474418585-ba9bad8fd0ea', 800),
    icedLatte: u('photo-1461023058943-07fcbe16d735', 800),
    lemonade: u('photo-1556679343-c7306c1976bc', 800),
    matcha: u('photo-1515823064-d6e0c04616a7', 800),
  },

  gallery: [
    { src: u('photo-1442512595331-e89e73853f31', 900), alt: 'Coffee cup on table', tall: true },
    { src: u('photo-1608198093002-ad4e005484ec', 900), alt: 'Fresh pastries', tall: false },
    { src: u('photo-1521017432531-fbd92d768814', 900), alt: 'ELVA interior', tall: false },
    { src: u('photo-1511920170033-f8396924c348', 900), alt: 'Latte art', tall: true },
    { src: u('photo-1517248135467-4c7edcad34c4', 900), alt: 'Evening atmosphere', tall: false },
    { src: u('photo-1501339847302-ac426a4a7cbb', 900), alt: 'Tables by the window', tall: true },
    { src: u('photo-1541167760496-1628856ab772', 900), alt: 'Barista pouring latte art', tall: false },
    { src: u('photo-1559305616-3f99cd43e353', 900), alt: 'Coffee bar', tall: true },
  ],
};
