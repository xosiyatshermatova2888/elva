import { ArrowUpRight, Clock, MapPin, Phone } from 'lucide-react';
import { useState } from 'react';
import { site } from '../data/site';
import { Reveal, SectionHeading } from './ui';

/** Google Maps embed — bosilgandan keyin yuklanadi (tezlik uchun). */
function MapPlaceholder() {
  const [active, setActive] = useState(false);

  return (
    <div className="relative h-full min-h-[360px] overflow-hidden rounded-[28px] bg-cream">
      {active ? (
        <iframe
          title="ELVA on Google Maps"
          src={site.mapsEmbed}
          className="absolute inset-0 h-full w-full grayscale-[0.4] sepia-[0.15]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      ) : (
        <button onClick={() => setActive(true)} className="group absolute inset-0 flex flex-col items-center justify-center" aria-label="Load map">
          <svg className="absolute inset-0 h-full w-full text-sand" aria-hidden>
            <defs>
              <pattern id="grid" width="44" height="44" patternUnits="userSpaceOnUse">
                <path d="M44 0H0V44" fill="none" stroke="currentColor" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
            <path d="M-20 260 C 140 200, 260 320, 420 220 S 700 140, 900 240" stroke="#E6DACA" strokeWidth="18" fill="none" />
            <path d="M200 -20 C 240 140, 180 300, 260 520" stroke="#E6DACA" strokeWidth="12" fill="none" />
          </svg>
          <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-espresso text-ivory shadow-xl transition-transform duration-500 group-hover:scale-110">
            <span className="absolute inset-0 animate-ping rounded-full bg-espresso/30" />
            <MapPin size={24} strokeWidth={1.5} />
          </span>
          <span className="relative mt-5 rounded-full bg-ivory px-4 py-2 text-xs font-medium tracking-wide text-espresso shadow">
            ELVA · {site.address}
          </span>
          <span className="relative mt-3 text-[11px] uppercase tracking-[0.2em] text-mocha">Tap to load map</span>
        </button>
      )}
    </div>
  );
}

export default function Location() {
  const rows = [
    { Icon: MapPin, label: 'Address', value: site.address },
    { Icon: Clock, label: site.hours.days, value: site.hours.time },
    { Icon: Phone, label: 'Phone', value: site.phone, href: site.phoneHref },
  ];

  return (
    <section id="location" className="scroll-mt-20 py-24 sm:py-32">
      <div className="container-site grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <SectionHeading eyebrow={site.city} title={<>Find <em>us</em></>} />
          <Reveal delay={0.15}>
            <ul className="mt-12 divide-y divide-espresso/10 border-y border-espresso/10">
              {rows.map(({ Icon, label, value, href }) => (
                <li key={label} className="flex items-center gap-5 py-6">
                  <Icon size={20} strokeWidth={1.3} className="shrink-0 text-gold" />
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.2em] text-mocha">{label}</p>
                    {href ? (
                      <a href={href} className="mt-1 block font-serif text-2xl text-espresso hover:text-coffee">
                        {value}
                      </a>
                    ) : (
                      <p className="mt-1 font-serif text-2xl text-espresso">{value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.25}>
            <a href={site.mapsUrl} target="_blank" rel="noreferrer" className="btn-dark group mt-10">
              Get directions
              <ArrowUpRight size={16} className="transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </Reveal>
        </div>
        <Reveal delay={0.1} className="lg:col-span-7">
          <MapPlaceholder />
        </Reveal>
      </div>
    </section>
  );
}
