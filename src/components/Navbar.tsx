import { AnimatePresence, motion } from 'framer-motion';
import { Menu as MenuIcon, ShoppingBag, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { navLinks, site } from '../data/site';
import { ease } from './ui';

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link
      to="/"
      aria-label="ELVA home"
      className={`font-serif text-[28px] font-medium leading-none tracking-[0.32em] ${light ? 'text-ivory' : 'text-espresso'}`}
    >
      ELVA
    </Link>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { count, open } = useCart();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [location.pathname, location.hash]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const isActive = (to: string) => !to.includes('#') && location.pathname === to;
  // Bosh sahifada, hero ustida — shaffof va och rangli navbar
  const light = location.pathname === '/' && !scrolled;

  return (
    <>
      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-premium ${
          scrolled ? 'border-b border-espresso/5 bg-ivory/85 backdrop-blur-xl' : 'bg-transparent'
        }`}
      >
        <nav className={`container-site flex items-center justify-between transition-all duration-500 ${scrolled ? 'h-16' : 'h-20 lg:h-24'}`}>
          <Logo light={light} />

          <ul className="hidden items-center gap-10 md:flex">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={`link-underline text-[13px] font-medium tracking-wide transition-colors ${
                    light
                      ? 'text-ivory/85 hover:text-ivory'
                      : isActive(link.to)
                        ? 'text-espresso after:scale-x-100'
                        : 'text-coffee/80 hover:text-espresso'
                  }`}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={open}
              aria-label="Open cart"
              className={`relative flex h-11 w-11 items-center justify-center rounded-full transition-colors ${
                light ? 'text-ivory hover:bg-ivory/10' : 'text-espresso hover:bg-espresso/5'
              }`}
            >
              <ShoppingBag size={20} strokeWidth={1.5} />
              <AnimatePresence>
                {count > 0 && (
                  <motion.span
                    key={count}
                    initial={{ scale: 0.4, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.4, opacity: 0 }}
                    className="absolute right-1 top-1 flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-gold px-1 text-[10px] font-semibold text-ivory"
                  >
                    {count}
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
            <Link to="/menu" className={`${light ? 'btn-light' : 'btn-dark'} hidden !px-6 !py-3 sm:inline-flex`}>
              Order now
            </Link>
            <button
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              className={`flex h-11 w-11 items-center justify-center rounded-full md:hidden ${
                light ? 'text-ivory hover:bg-ivory/10' : 'text-espresso hover:bg-espresso/5'
              }`}
            >
              <MenuIcon size={22} strokeWidth={1.5} />
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease }}
            className="fixed inset-0 z-[60] flex flex-col bg-espresso text-ivory md:hidden"
          >
            <div className="container-site flex h-20 items-center justify-between">
              <Logo light />
              <button
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
                className="flex h-11 w-11 items-center justify-center rounded-full hover:bg-ivory/10"
              >
                <X size={22} strokeWidth={1.5} />
              </button>
            </div>
            <ul className="container-site mt-10 flex flex-col gap-2">
              {[{ label: 'Home', to: '/' }, ...navLinks].map((link, i) => (
                <motion.li
                  key={link.to}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.06, duration: 0.6, ease }}
                >
                  <Link to={link.to} className="block py-2 font-serif text-5xl font-normal">
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
            <div className="container-site mt-auto pb-10">
              <Link to="/menu" className="btn-light w-full">
                Order now
              </Link>
              <p className="mt-8 text-sm text-ivory/50">
                {site.city} · {site.hours.time}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
