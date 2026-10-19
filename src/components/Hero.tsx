import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Clock, MapPin, Truck } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { images } from '../data/images';
import { site } from '../data/site';
import { ease } from './ui';

const SLIDE_MS = 6500;
const slides = images.heroSlides;

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1, delay, ease },
});

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  useEffect(() => {
    const timer = setInterval(() => setActive((i) => (i + 1) % slides.length), SLIDE_MS);
    return () => clearInterval(timer);
  }, [active]);

  return (
    <section ref={ref} className="relative h-[100svh] min-h-[640px] overflow-hidden bg-espresso text-ivory">
      {/* Background slideshow */}
      <motion.div style={{ y: bgY }} className="absolute inset-0">
        <AnimatePresence initial={false}>
          <motion.img
            key={active}
            src={slides[active].src}
            alt={`ELVA — ${slides[active].label}`}
            initial={{ opacity: 0, scale: 1.12 }}
            animate={{ opacity: 1, scale: 1.02 }}
            exit={{ opacity: 0 }}
            transition={{ opacity: { duration: 1.6, ease }, scale: { duration: SLIDE_MS / 1000 + 1.6, ease: 'linear' } }}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </AnimatePresence>
        {/* Preload next slide */}
        <link rel="preload" as="image" href={slides[(active + 1) % slides.length].src} />
      </motion.div>

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/25 to-ink/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/60 via-ink/10 to-transparent" />

      {/* Content */}
      <motion.div style={{ y: contentY, opacity: contentOpacity }} className="container-site relative flex h-full flex-col justify-end pb-36 sm:pb-40 lg:justify-center lg:pb-0">
        <motion.p {...fade(0.3)} className="mb-6 flex items-center gap-3 text-[11px] font-medium uppercase tracking-luxe text-beige">
          <span className="h-px w-10 bg-beige" /> Coffee & Bakery · Navoiy
        </motion.p>

        <h1 className="overflow-hidden">
          <motion.span
            initial={{ y: '105%' }}
            animate={{ y: '0%' }}
            transition={{ duration: 1.3, delay: 0.4, ease }}
            className="block font-serif text-[5.5rem] font-normal leading-[0.85] tracking-[0.08em] sm:text-[9rem] lg:text-[12rem]"
          >
            ELVA
          </motion.span>
        </h1>

        <div className="mt-4 overflow-hidden sm:mt-6">
          <motion.p
            initial={{ y: '105%' }}
            animate={{ y: '0%' }}
            transition={{ duration: 1.2, delay: 0.6, ease }}
            className="font-serif text-3xl italic text-ivory/95 sm:text-5xl"
          >
            {site.tagline}
          </motion.p>
        </div>

        <motion.p {...fade(0.9)} className="mt-6 max-w-md text-[15px] leading-relaxed text-ivory/75 sm:text-base">
          Har kuningizga iliq kayfiyat, sifatli coffee va yangi pishirilgan croissant bilan.
        </motion.p>

        <motion.div {...fade(1.05)} className="mt-9 flex flex-wrap gap-3">
          <Link to="/menu" className="btn-ghost-light">
            Menu
          </Link>
          <Link to="/menu" className="btn group bg-beige text-espresso hover:bg-ivory">
            Buyurtma berish
            <ArrowUpRight size={16} className="transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </motion.div>
      </motion.div>

      {/* Bottom info bar */}
      <motion.div {...fade(1.3)} className="absolute inset-x-0 bottom-0 border-t border-ivory/15 bg-ink/20 backdrop-blur-md">
        <div className="container-site flex items-center justify-between gap-6 py-4 sm:py-5">
          <div className="no-scrollbar flex items-center gap-6 overflow-x-auto text-[11px] uppercase tracking-[0.18em] text-ivory/80 sm:gap-10">
            <span className="flex shrink-0 items-center gap-2">
              <Clock size={14} strokeWidth={1.5} className="text-beige" /> {site.hours.time}
            </span>
            <span className="flex shrink-0 items-center gap-2">
              <MapPin size={14} strokeWidth={1.5} className="text-beige" /> {site.city}
            </span>
            <span className="hidden shrink-0 items-center gap-2 sm:flex">
              <Truck size={14} strokeWidth={1.5} className="text-beige" /> Take-away & Delivery
            </span>
          </div>

          {/* Slide indicators */}
          <div className="hidden items-center gap-5 md:flex">
            {slides.map((slide, i) => (
              <button
                key={slide.label}
                onClick={() => setActive(i)}
                className={`group flex flex-col gap-2 text-left text-[10px] uppercase tracking-[0.2em] transition-colors ${
                  i === active ? 'text-ivory' : 'text-ivory/45 hover:text-ivory/80'
                }`}
              >
                {slide.label}
                <span className="relative h-px w-20 overflow-hidden bg-ivory/25">
                  {i === active && (
                    <motion.span
                      key={active}
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: SLIDE_MS / 1000, ease: 'linear' }}
                      className="absolute inset-0 origin-left bg-beige"
                    />
                  )}
                </span>
              </button>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.a
        href="#intro"
        {...fade(1.5)}
        aria-label="Scroll down"
        className="absolute bottom-24 right-5 hidden h-14 w-14 items-center justify-center rounded-full border border-ivory/30 text-ivory transition-colors hover:bg-ivory hover:text-espresso sm:right-8 lg:right-12 lg:flex"
      >
        <ArrowDown size={18} strokeWidth={1.5} />
      </motion.a>
    </section>
  );
}
