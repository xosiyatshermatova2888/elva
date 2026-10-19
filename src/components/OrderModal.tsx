import { AnimatePresence, motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { ease } from './ui';

export default function OrderModal({ orderId, onClose }: { orderId: string | null; onClose: () => void }) {
  return (
    <AnimatePresence>
      {orderId && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[90] flex items-center justify-center bg-ink/50 p-5 backdrop-blur-sm"
        >
          <motion.div
            role="alertdialog"
            aria-modal="true"
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.6, ease }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-md rounded-[28px] bg-ivory p-10 text-center shadow-2xl"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.25, type: 'spring', stiffness: 220, damping: 16 }}
              className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-espresso text-ivory"
            >
              <Check size={28} strokeWidth={1.8} />
            </motion.div>
            <h3 className="mt-7 font-serif text-4xl leading-tight text-espresso">Thank you!</h3>
            <p className="mt-3 text-[15px] text-mocha">Your order has been received.</p>
            <p className="mt-6 inline-block rounded-full bg-cream px-4 py-1.5 text-xs tracking-wider text-coffee">
              Order № {orderId}
            </p>
            <button onClick={onClose} className="btn-dark mt-8 w-full">
              Continue
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
