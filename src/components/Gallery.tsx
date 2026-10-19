import { Instagram } from 'lucide-react';
import { images } from '../data/images';
import { site } from '../data/site';
import { Reveal, SectionHeading, SmartImage } from './ui';

export default function Gallery() {
  return (
    <section id="gallery" className="scroll-mt-20 py-24 sm:py-32">
      <div className="container-site">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading eyebrow="Gallery" title={<>Moments at <em>ELVA</em></>} />
          <Reveal>
            <a href={site.instagram} target="_blank" rel="noreferrer" className="btn-outline">
              <Instagram size={16} strokeWidth={1.5} /> Follow us
            </a>
          </Reveal>
        </div>

        <div className="mt-14 columns-2 gap-3 sm:gap-5 lg:mt-20 lg:columns-3">
          {images.gallery.map((img, i) => (
            <Reveal key={img.src + i} delay={(i % 3) * 0.08} className="mb-3 break-inside-avoid sm:mb-5">
              <figure className="group relative cursor-pointer overflow-hidden rounded-[20px]">
                <SmartImage
                  src={img.src}
                  alt={img.alt}
                  className={img.tall ? 'aspect-[3/4]' : 'aspect-square'}
                  imgClassName="transition-transform duration-[1600ms] ease-premium group-hover:scale-110"
                />
                <figcaption className="absolute inset-0 flex items-center justify-center bg-espresso/0 transition-colors duration-700 ease-premium group-hover:bg-espresso/45">
                  <span className="translate-y-3 font-serif text-3xl tracking-[0.3em] text-ivory opacity-0 transition-all duration-700 ease-premium group-hover:translate-y-0 group-hover:opacity-100">
                    ELVA
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
