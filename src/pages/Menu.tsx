import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import ProductCard from '../components/ProductCard';
import Combo from '../components/Combo';
import { categories } from '../data/products';
import { getProducts } from '../services/api';
import type { Category, Product } from '../types';

type Filter = Category | 'all';

export default function Menu() {
  const [params, setParams] = useSearchParams();
  const active = (params.get('category') as Filter) || 'all';
  const [items, setItems] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts()
      .then(setItems)
      .finally(() => setLoading(false));
  }, []);

  const filtered = useMemo(
    () => (active === 'all' ? items : items.filter((item) => item.category === active)),
    [items, active],
  );

  const select = (id: Filter) => {
    setParams(id === 'all' ? {} : { category: id }, { replace: true });
  };

  return (
    <>
      <PageHeader
        eyebrow="ELVA Menu"
        title={<>The <em>menu</em></>}
        text="Coffee, yangi pishirilgan croissant, dessertlar va nonushta — barchasi bir joyda. Tanlang va bir necha bosishda buyurtma bering."
      />

      <div className="sticky top-16 z-30 border-y border-espresso/10 bg-ivory/90 backdrop-blur-xl">
        <div className="container-site">
          <div role="tablist" className="no-scrollbar -mx-5 flex gap-1 overflow-x-auto px-5 py-3 sm:mx-0 sm:justify-center sm:px-0">
            {categories.map((cat) => {
              const isActive = active === cat.id;
              return (
                <button
                  key={cat.id}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => select(cat.id)}
                  className={`relative shrink-0 rounded-full px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.2em] transition-colors duration-300 ${
                    isActive ? 'text-ivory' : 'text-coffee hover:text-espresso'
                  }`}
                >
                  {isActive && (
                    <motion.span layoutId="menu-tab" className="absolute inset-0 rounded-full bg-espresso" transition={{ type: 'spring', stiffness: 380, damping: 32 }} />
                  )}
                  <span className="relative">{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <section className="py-16 sm:py-20">
        <div className="container-site">
          {loading ? (
            <div className="grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="animate-pulse">
                  <div className="aspect-[4/5] rounded-[24px] bg-sand/60" />
                  <div className="mt-5 h-6 w-2/3 rounded bg-sand/60" />
                  <div className="mt-3 h-4 w-full rounded bg-sand/40" />
                </div>
              ))}
            </div>
          ) : (
            <>
              <p className="mb-10 text-sm text-mocha">
                {filtered.length} ta mahsulot
              </p>
              <motion.div layout className="grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8">
                <AnimatePresence mode="popLayout">
                  {filtered.map((product, i) => (
                    <ProductCard key={product.id} product={product} index={i} ctaLabel="Add to order" />
                  ))}
                </AnimatePresence>
              </motion.div>
            </>
          )}
        </div>
      </section>

      <div className="pb-16">
        <Combo />
      </div>
    </>
  );
}
