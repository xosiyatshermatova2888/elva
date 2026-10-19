import { Link } from 'react-router-dom';
import { images } from '../data/images';
import SocialIcons from './SocialIcons';
import { Reveal, SmartImage } from './ui';

export default function ContactCTA() {
  return (
    <section className="px-3 pb-6 sm:px-6 sm:pb-10">
      <div className="relative overflow-hidden rounded-[32px]">
        <SmartImage src={images.cta} alt="ELVA in the evening" className="absolute inset-0 h-full w-full" />
        <div className="absolute inset-0 bg-gradient-to-b from-espresso/70 via-espresso/60 to-espresso/80" />
        <div className="container-site relative flex min-h-[560px] flex-col items-center justify-center py-24 text-center text-ivory">
          <Reveal>
            <p className="eyebrow !text-beige">See you soon</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mx-auto mt-6 max-w-3xl font-serif text-5xl font-normal leading-[1.02] sm:text-6xl lg:text-7xl">
              Your next favorite place <em className="text-beige">is waiting.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.2} className="mt-12 flex flex-wrap justify-center gap-3">
            <Link to="/menu" className="btn-light">
              Order now
            </Link>
            <Link to="/contact" className="btn-ghost-light">
              Contact us
            </Link>
          </Reveal>
          <Reveal delay={0.3} className="mt-10">
            <SocialIcons light />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
