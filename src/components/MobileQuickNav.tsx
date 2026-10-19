import { AnimatePresence, motion } from 'framer-motion';
import { Coffee, MessageCircle, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { ease } from './ui';

/** Mobil qurilmalarda pastki sticky tezkor navigatsiya + "savatga qo'shildi" toast. */
export default function MobileQuickNav() {
  const { count, open, lastAdded } = useCart();

  return (
    <>
      <AnimatePresence>
        {lastAdded && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.4, ease }}
            className="fixed bottom-24 left-1/2 z-[65] -translate-x-1/2 whitespace-nowrap rounded-full bg-espresso px-5 py-3 text-xs font-medium text-ivory shadow-xl md:bottom-8"
          >
            {lastAdded} — savatga qo‘shildi
          </motion.div>
        )}
      </AnimatePresence>

      <nav className="fixed inset-x-3 bottom-3 z-40 md:hidden">
        <div className="grid grid-cols-3 overflow-hidden rounded-full border border-espresso/10 bg-ivory/90 shadow-[0_10px_40px_-12px_rgba(43,29,20,0.35)] backdrop-blur-xl">
          <Link to="/menu" className="flex items-center justify-center gap-2 py-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-espresso">
            <Coffee size={16} strokeWidth={1.6} /> Menu
          </Link>
          <button onClick={open} className="relative flex items-center justify-center gap-2 bg-espresso py-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-ivory">
            <ShoppingBag size={16} strokeWidth={1.6} /> Order
            {count > 0 && (
              <span className="flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-gold px-1 text-[10px]">{count}</span>
            )}
          </button>
          <Link to="/contact" className="flex items-center justify-center gap-2 py-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-espresso">
            <MessageCircle size={16} strokeWidth={1.6} /> Contact
          </Link>
        </div>
      </nav>
    </>
  );
}
