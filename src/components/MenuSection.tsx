import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { featuredProducts } from '../data/products';
import ProductCard from './ProductCard';
import { Reveal, SectionHeading } from './ui';

export default function MenuSection() {
  return (
    <section id="menu" className="grain relative scroll-mt-20 overflow-hidden bg-espresso py-24 sm:py-32">
      <div className="container-site relative">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading light eyebrow="Featured menu" title={<>Our <em className="text-beige">favorites</em></>} />
          <Reveal>
            <Link to="/menu" className="btn-ghost-light group">
              View full menu
              <ArrowRight size={16} className="transition-transform duration-500 group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3 lg:gap-x-8">
          {featuredProducts.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} dark />
          ))}
        </div>
      </div>
    </section>
  );
}
