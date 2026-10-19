import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { forwardRef } from 'react';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../data/site';
import type { Product } from '../types';
import { ease, SmartImage } from './ui';

interface Props {
  product: Product;
  index?: number;
  ctaLabel?: string;
  /** To'q fonli bo'limlar uchun */
  dark?: boolean;
}

const ProductCard = forwardRef<HTMLElement, Props>(function ProductCard({ product, index = 0, ctaLabel = 'Order', dark = false }, ref) {
  const { add } = useCart();

  return (
    <motion.article
      ref={ref}
      layout
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.8, delay: (index % 3) * 0.08, ease }}
      className="group flex flex-col"
    >
      <div className="relative overflow-hidden rounded-[24px]">
        <SmartImage
          src={product.image}
          alt={product.name}
          className="aspect-[4/5]"
          imgClassName="transition-transform duration-[1400ms] ease-premium group-hover:scale-[1.06]"
        />
        <div className="absolute inset-0 bg-espresso/0 transition-colors duration-700 group-hover:bg-espresso/10" />
        {product.tag && (
          <span className="absolute left-4 top-4 rounded-full bg-ivory/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-espresso backdrop-blur">
            {product.tag}
          </span>
        )}
        <button
          onClick={() => add(product)}
          aria-label={`Add ${product.name} to order`}
          className="absolute bottom-4 right-4 flex h-12 w-12 items-center justify-center rounded-full bg-ivory text-espresso shadow-lg transition-all duration-500 ease-premium hover:bg-espresso hover:text-ivory lg:translate-y-3 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100"
        >
          <Plus size={20} strokeWidth={1.5} />
        </button>
      </div>

      <div className="flex flex-1 flex-col pt-5">
        <div className="flex items-baseline justify-between gap-4">
          <h3 className={`font-serif text-2xl leading-tight ${dark ? 'text-ivory' : 'text-espresso'}`}>{product.name}</h3>
          <p className={`shrink-0 text-sm font-semibold tabular-nums ${dark ? 'text-beige' : 'text-coffee'}`}>{formatPrice(product.price)}</p>
        </div>
        <p className={`mt-2 text-sm leading-relaxed ${dark ? 'text-ivory/60' : 'text-mocha'}`}>{product.description}</p>
        <button
          onClick={() => add(product)}
          className={`link-underline mt-4 self-start text-[11px] font-semibold uppercase tracking-[0.2em] ${dark ? 'text-beige' : 'text-espresso'}`}
        >
          {ctaLabel}
        </button>
      </div>
    </motion.article>
  );
});

export default ProductCard;
