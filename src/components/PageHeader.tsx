import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { ease } from './ui';

export default function PageHeader({ eyebrow, title, text }: { eyebrow: string; title: ReactNode; text?: string }) {
  return (
    <section className="pb-12 pt-36 sm:pb-16 sm:pt-44">
      <div className="container-site text-center">
        <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease }} className="eyebrow">
          {eyebrow}
        </motion.p>
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: '100%' }}
            animate={{ y: '0%' }}
            transition={{ duration: 1.1, delay: 0.1, ease }}
            className="mt-6 font-serif text-6xl font-normal leading-none text-espresso sm:text-7xl lg:text-8xl"
          >
            {title}
          </motion.h1>
        </div>
        {text && (
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35, ease }}
            className="mx-auto mt-7 max-w-xl text-[15px] leading-relaxed text-mocha sm:text-base"
          >
            {text}
          </motion.p>
        )}
      </div>
    </section>
  );
}
