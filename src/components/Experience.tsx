import { animate, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { Reveal } from './ui';

function Counter({ to, suffix = '' }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration: 2,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, to]);

  return (
    <span ref={ref} className="tabular-nums">
      {value}
      {suffix}
    </span>
  );
}

const stats = [
  { value: <Counter to={50} suffix="+" />, label: 'Daily guests' },
  { value: <span>Fresh</span>, label: 'Every morning' },
  { value: <Counter to={100} suffix="%" />, label: 'Made with care' },
];

export default function Experience() {
  return (
    <section className="grain relative overflow-hidden bg-espresso py-24 text-ivory sm:py-32">
      <div className="container-site relative">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow !text-beige">Customer experience</p>
          <h2 className="mt-6 font-serif text-4xl font-normal leading-[1.08] sm:text-5xl lg:text-6xl">
            Come for the coffee.
            <br />
            <em className="text-beige">Stay for the atmosphere.</em>
          </h2>
        </Reveal>

        <div className="mt-16 grid divide-y divide-ivory/10 sm:mt-24 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.15} className="py-10 text-center sm:py-4">
              <p className="font-serif text-6xl font-normal sm:text-7xl lg:text-8xl">{stat.value}</p>
              <p className="mt-4 text-[11px] uppercase tracking-luxe text-ivory/50">{stat.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
