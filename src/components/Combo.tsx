import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { useCart } from '../context/CartContext';
import { images } from '../data/images';
import { comboProduct } from '../data/products';
import { formatPrice } from '../data/site';
import { Reveal, SmartImage } from './ui';

export default function Combo() {
  const { add, open } = useCart();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const scale = useTransform(scrollYProgress, [0, 0.5], [1.15, 1]);

  const orderCombo = () => {
    add(comboProduct);
    open();
  };

  return (
    <section ref={ref} className="py-6 sm:py-10">
      <div className="container-site">
        <div className="grain relative overflow-hidden rounded-[32px] bg-espresso text-ivory">
          <div className="grid lg:grid-cols-2">
            <div className="relative aspect-[4/3] overflow-hidden lg:aspect-auto lg:min-h-[640px]">
              <motion.div style={{ scale }} className="absolute inset-0">
                <SmartImage src={images.combo} alt="Croissant and coffee morning combo" className="h-full w-full" />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/50 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-espresso/40" />
            </div>

            <div className="relative flex flex-col justify-center px-7 py-14 sm:px-14 lg:px-20">
              <Reveal>
                <p className="eyebrow !text-beige">Special combo</p>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="mt-6 font-serif text-5xl font-normal leading-[1.02] sm:text-6xl">
                  Start your morning <em className="text-beige">with ELVA</em>
                </h2>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="mt-10 flex items-center gap-5 border-y border-ivory/15 py-6">
                  <span className="font-serif text-2xl">Croissant</span>
                  <span className="text-beige">+</span>
                  <span className="font-serif text-2xl">Coffee</span>
                </div>
              </Reveal>
              <Reveal delay={0.3} className="mt-8 flex flex-wrap items-end justify-between gap-6">
                <div>
                  <p className="text-xs uppercase tracking-luxe text-ivory/50">Combo price</p>
                  <p className="mt-2 font-serif text-5xl tabular-nums">{formatPrice(comboProduct.price)}</p>
                </div>
                <button onClick={orderCombo} className="btn-light">
                  Order combo
                </button>
              </Reveal>
              <Reveal delay={0.4}>
                <p className="mt-8 text-sm text-ivory/50">Har kuni 08:00 — 12:00 · Classic Croissant + istalgan coffee</p>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
