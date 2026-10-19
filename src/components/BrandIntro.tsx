import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { images } from '../data/images';
import { Reveal, SmartImage } from './ui';

export default function BrandIntro() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);
  const smallY = useTransform(scrollYProgress, [0, 1], ['30%', '-30%']);

  return (
    <section id="intro" ref={ref} className="scroll-mt-20 py-24 sm:py-32 lg:py-40">
      <div className="container-site grid items-center gap-16 lg:grid-cols-12 lg:gap-20">
        <div className="relative order-2 pb-16 pr-10 sm:pr-24 lg:order-1 lg:col-span-6 lg:pb-24">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden rounded-t-[999px] rounded-b-[24px]">
              <motion.div style={{ y }} className="absolute inset-[-10%_0]">
                <SmartImage src={images.intro} alt="ELVA cafe interior" className="h-full w-full" />
              </motion.div>
            </div>
          </Reveal>
          <motion.div style={{ y: smallY }} className="absolute bottom-0 right-0 w-[46%] sm:w-[42%]">
            <Reveal delay={0.2}>
              <div className="overflow-hidden rounded-[20px] border-[6px] border-ivory shadow-[0_30px_60px_-25px_rgba(44,26,16,0.55)]">
                <SmartImage src={images.introSecondary} alt="Coffee at ELVA" className="aspect-square" />
              </div>
            </Reveal>
          </motion.div>
          <span className="absolute -left-2 top-10 hidden rotate-[-90deg] origin-left text-[10px] uppercase tracking-luxe text-mocha sm:block">
            Est. 2026 · Navoiy
          </span>
        </div>

        <div className="order-1 lg:order-2 lg:col-span-6">
          <Reveal>
            <p className="eyebrow mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-gold" /> About ELVA
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-serif text-5xl font-normal leading-[1.02] text-espresso sm:text-6xl lg:text-7xl">
              ELVA — oddiy <em className="text-gold">coffee shop</em> emas.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-lg text-base leading-[1.8] text-mocha sm:text-lg">
              Bu yerda coffee, fresh bakery va samimiy muhit bir joyda uchrashadi. ELVA — ertalabki coffee, do‘stlar bilan
              suhbat va kunning eng yaxshi daqiqalari uchun yaratilgan.
            </p>
          </Reveal>
          <Reveal delay={0.3} className="mt-10 grid max-w-md grid-cols-3 gap-6 border-t border-espresso/15 pt-8">
            {[
              ['08:00', 'Opening'],
              ['17+', 'Menu items'],
              ['Fresh', 'Daily bakery'],
            ].map(([value, label]) => (
              <div key={label}>
                <p className="font-serif text-3xl text-espresso">{value}</p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-mocha">{label}</p>
              </div>
            ))}
          </Reveal>
          <Reveal delay={0.4} className="mt-10">
            <Link to="/about" className="btn-dark">
              Our story
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
