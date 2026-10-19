import { Link } from 'react-router-dom';
import { site } from '../data/site';

const nav = [
  { label: 'Home', to: '/' },
  { label: 'Menu', to: '/menu' },
  { label: 'About', to: '/about' },
  { label: 'Gallery', to: '/#gallery' },
  { label: 'Contact', to: '/contact' },
];

export default function Footer() {
  return (
    <footer className="border-t border-espresso/10 bg-ivory pb-28 pt-16 md:pb-12">
      <div className="container-site">
        <div className="flex flex-col gap-12 md:flex-row md:items-end md:justify-between">
          <div>
            <Link to="/" className="font-serif text-6xl font-normal tracking-[0.3em] text-espresso sm:text-7xl">
              ELVA
            </Link>
            <p className="mt-4 font-serif text-xl italic text-mocha">{site.tagline}</p>
          </div>

          <div className="flex flex-col gap-10 sm:flex-row sm:gap-20">
            <ul className="grid grid-cols-2 gap-x-10 gap-y-3 sm:grid-cols-1">
              {nav.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="link-underline text-sm text-coffee hover:text-espresso">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="flex flex-col gap-3">
              <li>
                <a href={site.instagram} target="_blank" rel="noreferrer" className="link-underline text-sm text-coffee hover:text-espresso">
                  Instagram
                </a>
              </li>
              <li>
                <a href={site.telegram} target="_blank" rel="noreferrer" className="link-underline text-sm text-coffee hover:text-espresso">
                  Telegram
                </a>
              </li>
              <li className="pt-3 text-sm text-mocha">{site.city}</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-espresso/10 pt-6 text-xs text-mocha sm:flex-row sm:justify-between">
          <p>© 2026 ELVA. All rights reserved.</p>
          <p>
            {site.hours.days} · {site.hours.time}
          </p>
        </div>
      </div>
    </footer>
  );
}
