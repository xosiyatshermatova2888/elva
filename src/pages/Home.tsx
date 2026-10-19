import About from '../components/About';
import BrandIntro from '../components/BrandIntro';
import Combo from '../components/Combo';
import ContactCTA from '../components/ContactCTA';
import Experience from '../components/Experience';
import Gallery from '../components/Gallery';
import Hero from '../components/Hero';
import Location from '../components/Location';
import Marquee from '../components/Marquee';
import MenuSection from '../components/MenuSection';

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <BrandIntro />
      <MenuSection />
      <div className="pt-24 sm:pt-32">
        <Combo />
      </div>
      <About />
      <Gallery />
      <Experience />
      <Location />
      <ContactCTA />
    </>
  );
}
