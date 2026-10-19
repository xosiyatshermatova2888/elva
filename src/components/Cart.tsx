import { AnimatePresence, motion } from 'framer-motion';
import { Minus, Plus, ShoppingBag, Trash2, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../data/site';
import { placeOrder } from '../services/api';
import OrderModal from './OrderModal';
import { ease, SmartImage } from './ui';

export default function Cart() {
  const { items, total, count, isOpen, close, increment, decrement, remove, clear } = useCart();
  const [submitting, setSubmitting] = useState(false);
  const [orderId, setOrderId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && close();
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [isOpen, close]);

  const handlePlaceOrder = async () => {
    setSubmitting(true);
    setError(null);
    try {
      const res = await placeOrder({
        items: items.map((i) => ({ productId: i.product.id, name: i.product.name, quantity: i.quantity, price: i.product.price })),
        total,
        createdAt: new Date().toISOString(),
      });
      setOrderId(res.id);
      clear();
      close();
    } catch {
      setError('Buyurtma yuborilmadi. Iltimos, qayta urinib ko‘ring.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              onClick={close}
              className="fixed inset-0 z-[70] bg-ink/40 backdrop-blur-[2px]"
            />
            <motion.aside
              role="dialog"
              aria-label="Your order"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.6, ease }}
              className="fixed right-0 top-0 z-[80] flex h-full w-full max-w-md flex-col bg-ivory shadow-2xl"
            >
              <div className="flex items-center justify-between border-b border-espresso/10 px-6 py-5">
                <div>
                  <p className="eyebrow">Your order</p>
                  <p className="mt-1 font-serif text-2xl text-espresso">{count} items</p>
                </div>
                <button onClick={close} aria-label="Close cart" className="flex h-11 w-11 items-center justify-center rounded-full hover:bg-espresso/5">
                  <X size={20} strokeWidth={1.5} />
                </button>
              </div>

              {items.length === 0 ? (
                <div className="flex flex-1 flex-col items-center justify-center px-8 text-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-cream">
                    <ShoppingBag size={28} strokeWidth={1.2} className="text-mocha" />
                  </div>
                  <p className="mt-6 font-serif text-3xl text-espresso">Savatingiz bo‘sh</p>
                  <p className="mt-2 text-sm text-mocha">Sevimli coffee va croissant’ingizni tanlang.</p>
                  <Link to="/menu" onClick={close} className="btn-dark mt-8">
                    View menu
                  </Link>
                </div>
              ) : (
                <>
                  <ul className="no-scrollbar flex-1 divide-y divide-espresso/10 overflow-y-auto px-6">
                    <AnimatePresence initial={false}>
                      {items.map(({ product, quantity }) => (
                        <motion.li
                          key={product.id}
                          layout
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20, height: 0 }}
                          transition={{ duration: 0.4, ease }}
                          className="flex gap-4 py-5"
                        >
                          <SmartImage src={product.image} alt={product.name} className="h-20 w-20 shrink-0 rounded-xl" />
                          <div className="flex flex-1 flex-col">
                            <div className="flex items-start justify-between gap-2">
                              <p className="font-serif text-xl leading-tight text-espresso">{product.name}</p>
                              <button onClick={() => remove(product.id)} aria-label={`Remove ${product.name}`} className="p-1 text-mocha/60 hover:text-espresso">
                                <Trash2 size={15} strokeWidth={1.5} />
                              </button>
                            </div>
                            <p className="mt-0.5 text-xs text-mocha">{formatPrice(product.price)}</p>
                            <div className="mt-auto flex items-center justify-between pt-2">
                              <div className="flex items-center rounded-full border border-espresso/15">
                                <button onClick={() => decrement(product.id)} aria-label="Decrease" className="flex h-8 w-8 items-center justify-center hover:text-gold">
                                  <Minus size={14} />
                                </button>
                                <span className="w-6 text-center text-sm font-medium tabular-nums">{quantity}</span>
                                <button onClick={() => increment(product.id)} aria-label="Increase" className="flex h-8 w-8 items-center justify-center hover:text-gold">
                                  <Plus size={14} />
                                </button>
                              </div>
                              <p className="text-sm font-semibold tabular-nums text-espresso">{formatPrice(product.price * quantity)}</p>
                            </div>
                          </div>
                        </motion.li>
                      ))}
                    </AnimatePresence>
                  </ul>

                  <div className="border-t border-espresso/10 bg-cream/50 px-6 py-6">
                    <div className="flex items-baseline justify-between">
                      <span className="eyebrow">Total</span>
                      <span className="font-serif text-3xl text-espresso tabular-nums">{formatPrice(total)}</span>
                    </div>
                    {error && <p className="mt-3 text-sm text-red-700">{error}</p>}
                    <button onClick={handlePlaceOrder} disabled={submitting} className="btn-dark mt-5 w-full !py-4">
                      {submitting ? 'Sending…' : 'Place order'}
                    </button>
                    <p className="mt-3 text-center text-[11px] text-mocha">Take-away yoki delivery — operator siz bilan bog‘lanadi.</p>
                  </div>
                </>
              )}
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      <OrderModal orderId={orderId} onClose={() => setOrderId(null)} />
    </>
  );
}
