import { Coffee, Croissant, Heart, type LucideIcon } from 'lucide-react';
import { Reveal, SectionHeading } from './ui';

const features: { Icon: LucideIcon; title: string; text: string }[] = [
  { Icon: Coffee, title: 'Specialty Coffee', text: 'Freshly prepared coffee — tanlangan donlar, aniq retsept, har bir chashka e’tibor bilan.' },
  { Icon: Croissant, title: 'Fresh Bakery', text: 'Fresh croissants and pastries — har tong pechdan yangi chiqadi.' },
  { Icon: Heart, title: 'Cozy Atmosphere', text: 'A place to work, meet and relax — iliq yorug‘lik, tinch musiqa, qulay stollar.' },
];

export default function About() {
  return (
    <section id="about" className="scroll-mt-20 py-24 sm:py-32 lg:py-40">
      <div className="container-site">
        <SectionHeading
          align="center"
          eyebrow="The ELVA concept"
          title={<>Made for your <em>moments.</em></>}
          text="Ertalabki shoshilinch coffee’dan tortib do‘stlar bilan uzoq suhbatlargacha — ELVA kuningizning har bir lahzasiga moslashadi."
        />

        <div className="mt-16 grid gap-px overflow-hidden rounded-[28px] border border-espresso/10 bg-espresso/10 md:grid-cols-3 lg:mt-24">
          {features.map(({ Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 0.12} className="group bg-ivory p-10 transition-colors duration-700 hover:bg-cream lg:p-14">
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-espresso/15 text-coffee transition-all duration-700 ease-premium group-hover:border-espresso group-hover:bg-espresso group-hover:text-ivory">
                <Icon size={22} strokeWidth={1.3} />
              </div>
              <p className="mt-10 font-serif text-sm italic text-gold">0{i + 1}</p>
              <h3 className="mt-2 font-serif text-3xl text-espresso">{title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-mocha">{text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
