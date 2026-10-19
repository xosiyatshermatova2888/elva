import { Instagram, Phone, Send } from 'lucide-react';
import { site } from '../data/site';

const items = [
  { label: 'Telegram', href: site.telegram, Icon: Send },
  { label: 'Instagram', href: site.instagram, Icon: Instagram },
  { label: 'Phone', href: site.phoneHref, Icon: Phone },
];

export default function SocialIcons({ light = false }: { light?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      {items.map(({ label, href, Icon }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith('http') ? '_blank' : undefined}
          rel="noreferrer"
          aria-label={label}
          className={`flex h-12 w-12 items-center justify-center rounded-full border transition-all duration-500 ease-premium hover:-translate-y-0.5 ${
            light
              ? 'border-ivory/25 text-ivory hover:border-ivory hover:bg-ivory hover:text-espresso'
              : 'border-espresso/15 text-espresso hover:border-espresso hover:bg-espresso hover:text-ivory'
          }`}
        >
          <Icon size={18} strokeWidth={1.5} />
        </a>
      ))}
    </div>
  );
}
