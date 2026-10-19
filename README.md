# ELVA — Coffee. Croissant. Good moments.

ELVA cafe (Navoiy) uchun premium frontend: React + TypeScript + Tailwind CSS + Framer Motion + React Router + Lucide.

## Ishga tushirish

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build -> dist/
```

## Struktura

```
src/
  components/   Navbar, Hero, BrandIntro, ProductCard, MenuSection, Combo, About,
                Gallery, Experience, Location, ContactCTA, Footer, Cart, OrderModal,
                MobileQuickNav, PageHeader, SocialIcons, ui (Reveal, SmartImage, SectionHeading)
  pages/        Home, Menu, AboutPage, Contact, NotFound
  data/         products.ts (menyu), images.ts (barcha rasm URL'lari), site.ts (kontakt, ish vaqti)
  context/      CartContext.tsx (savat holati, localStorage'da saqlanadi)
  services/     api.ts (REST API'ga ulanish nuqtasi)
  types/        umumiy TypeScript tiplari
```

## Tez-tez o'zgartiriladigan joylar

- **Rasmlar** — `src/data/images.ts`. Real rasmlarni `public/images/` ga qo'yib, URL'ni `'/images/hero.jpg'` kabi almashtiring.
- **Menyu va narxlar** — `src/data/products.ts`.
- **Telefon, manzil, Instagram/Telegram, xarita** — `src/data/site.ts`.

## Backend ulash

`.env` faylida `VITE_API_URL=https://api.example.com` belgilang. Shunda:

- `GET  {API}/products` — menyu sahifasi mahsulotlarni API'dan oladi
- `POST {API}/orders`   — "Place order" `OrderPayload` (`src/types`) yuboradi va `{ id, status }` kutadi

`VITE_API_URL` bo'lmasa, local ma'lumot va demo tasdiqlash ishlatiladi.
