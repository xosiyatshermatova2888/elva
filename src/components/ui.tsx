import { motion, type HTMLMotionProps } from 'framer-motion';
import { useState, type ReactNode } from 'react';

export const ease = [0.22, 1, 0.36, 1] as const;

/** Scroll paytida nozik paydo bo'lish animatsiyasi. */
export function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
  ...rest
}: { children: ReactNode; delay?: number; y?: number; className?: string } & HTMLMotionProps<'div'>) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.9, delay, ease }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

/** Rasm yuklanmaguncha iliq placeholder, xato bo'lsa — brendli fon. */
export function SmartImage({
  src,
  alt,
  className = '',
  imgClassName = '',
  eager = false,
}: {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  eager?: boolean;
}) {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-sand ${className}`}>
      {!failed ? (
        <img
          src={src}
          alt={alt}
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
          onLoad={() => setLoaded(true)}
          onError={() => setFailed(true)}
          className={`h-full w-full object-cover transition-opacity duration-1000 ease-premium ${
            loaded ? 'opacity-100' : 'opacity-0'
          } ${imgClassName}`}
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-sand to-beige">
          <span className="font-serif text-3xl tracking-[0.3em] text-coffee/50">ELVA</span>
        </div>
      )}
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  text,
  align = 'left',
  light = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  text?: string;
  align?: 'left' | 'center';
  light?: boolean;
}) {
  return (
    <Reveal className={align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      {eyebrow && <p className={`eyebrow mb-5 ${light ? 'text-beige' : ''}`}>{eyebrow}</p>}
      <h2 className={`heading-lg ${light ? 'text-ivory' : 'text-espresso'}`}>{title}</h2>
      {text && (
        <p className={`mt-6 text-[15px] leading-relaxed ${light ? 'text-ivory/70' : 'text-mocha'}`}>{text}</p>
      )}
    </Reveal>
  );
}
