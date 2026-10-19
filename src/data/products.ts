import type { Category, Product } from '../types';
import { images } from './images';

const p = images.products;

export const categories: { id: Category | 'all'; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'coffee', label: 'Coffee' },
  { id: 'croissant', label: 'Croissant' },
  { id: 'dessert', label: 'Dessert' },
  { id: 'breakfast', label: 'Breakfast' },
  { id: 'drinks', label: 'Drinks' },
];

export const products: Product[] = [
  { id: 'classic-croissant', name: 'Classic Croissant', description: 'Sariyog‘li, qatlam-qatlam, har tong yangi pishirilgan.', price: 30000, category: 'croissant', image: p.classicCroissant, featured: true, tag: 'Signature' },
  { id: 'cappuccino', name: 'Cappuccino', description: 'Espresso, baxmal sut ko‘pigi va yumshoq ta’m.', price: 30000, category: 'coffee', image: p.cappuccino, featured: true },
  { id: 'americano', name: 'Americano', description: 'Toza, chuqur va muvozanatli qora coffee.', price: 25000, category: 'coffee', image: p.americano, featured: true },
  { id: 'latte', name: 'Latte', description: 'Mayin sut va espresso — kunning eng iliq boshlanishi.', price: 30000, category: 'coffee', image: p.latte, featured: true, tag: 'Bestseller' },
  { id: 'chocolate-croissant', name: 'Chocolate Croissant', description: 'Qora shokolad bilan to‘ldirilgan pain au chocolat.', price: 35000, category: 'croissant', image: p.chocolateCroissant, featured: true },
  { id: 'cheesecake', name: 'Cheesecake', description: 'Kremli New York cheesecake, yengil vanil notasi bilan.', price: 40000, category: 'dessert', image: p.cheesecake, featured: true },
  { id: 'flat-white', name: 'Flat White', description: 'Ikki shot espresso va yupqa mikroko‘pik.', price: 32000, category: 'coffee', image: p.flatWhite },
  { id: 'espresso', name: 'Espresso', description: 'Qisqa, kuchli va aromatli.', price: 20000, category: 'coffee', image: p.espresso },
  { id: 'almond-croissant', name: 'Almond Croissant', description: 'Bodom kremi va qovurilgan bodom bo‘lakchalari.', price: 38000, category: 'croissant', image: p.almondCroissant },
  { id: 'chocolate-cake', name: 'Chocolate Cake', description: 'Nam va boy shokoladli tort bo‘lagi.', price: 42000, category: 'dessert', image: p.chocolateCake },
  { id: 'tiramisu', name: 'Tiramisu', description: 'Mascarpone, espresso va kakao — klassika.', price: 45000, category: 'dessert', image: p.tiramisu },
  { id: 'avocado-toast', name: 'Avocado Toast', description: 'Sourdough non, avokado, tuxum va mikrozelen.', price: 55000, category: 'breakfast', image: p.avocadoToast },
  { id: 'french-toast', name: 'French Toast', description: 'Brioche, rezavorlar va asal.', price: 48000, category: 'breakfast', image: p.frenchToast },
  { id: 'granola-bowl', name: 'Granola Bowl', description: 'Yogurt, uy granolasi va mavsumiy mevalar.', price: 42000, category: 'breakfast', image: p.granola },
  { id: 'iced-latte', name: 'Iced Latte', description: 'Muzli, sovuq va tetiklantiruvchi.', price: 32000, category: 'drinks', image: p.icedLatte },
  { id: 'lemonade', name: 'House Lemonade', description: 'Limon, yalpiz va gazli suv.', price: 28000, category: 'drinks', image: p.lemonade },
  { id: 'matcha-latte', name: 'Matcha Latte', description: 'Yapon matchasi va mayin sut.', price: 35000, category: 'drinks', image: p.matcha },
];

export const comboProduct: Product = {
  id: 'morning-combo',
  name: 'Morning Combo',
  description: 'Classic Croissant + istalgan coffee',
  price: 60000,
  category: 'breakfast',
  image: images.combo,
};

export const featuredProducts = products.filter((item) => item.featured);
