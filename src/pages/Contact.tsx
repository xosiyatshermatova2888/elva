import { AnimatePresence, motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { useState, type FormEvent } from 'react';
import Location from '../components/Location';
import PageHeader from '../components/PageHeader';
import SocialIcons from '../components/SocialIcons';
import { Reveal, ease } from '../components/ui';
import { site } from '../data/site';

const inputClass =
  'w-full border-b border-espresso/20 bg-transparent py-4 text-base text-espresso placeholder:text-mocha/50 transition-colors focus:border-espresso focus:outline-none';

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: backend tayyor bo'lganda services/api.ts ga sendMessage() qo'shing.
    setSent(true);
    e.currentTarget.reset();
  };

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title={<>Say <em>hello</em></>}
        text="Savol, taklif yoki katta buyurtma (tadbir, ofis uchun)? Bizga yozing — tez orada javob beramiz."
      />

      <section className="pb-12">
        <div className="container-site grid gap-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <div className="rounded-[28px] bg-espresso p-10 text-ivory sm:p-12">
              <p className="eyebrow !text-beige">Reach us</p>
              <a href={site.phoneHref} className="mt-6 block font-serif text-4xl hover:text-beige">
                {site.phone}
              </a>
              <p className="mt-6 text-sm leading-relaxed text-ivory/60">
                {site.address}
                <br />
                {site.hours.days} · {site.hours.time}
              </p>
              <div className="mt-10">
                <SocialIcons light />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-7">
            <AnimatePresence mode="wait">
              {sent ? (
                <motion.div
                  key="sent"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease }}
                  className="flex h-full flex-col items-start justify-center py-10"
                >
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-espresso text-ivory">
                    <Check size={24} />
                  </span>
                  <h2 className="mt-6 font-serif text-4xl text-espresso">Rahmat! Xabaringiz qabul qilindi.</h2>
                  <button onClick={() => setSent(false)} className="btn-outline mt-8">
                    Send another
                  </button>
                </motion.div>
              ) : (
                <motion.form key="form" onSubmit={handleSubmit} exit={{ opacity: 0 }} className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <label className="block">
                      <span className="eyebrow">Name</span>
                      <input required name="name" autoComplete="name" placeholder="Ismingiz" className={inputClass} />
                    </label>
                    <label className="block">
                      <span className="eyebrow">Phone</span>
                      <input required name="phone" type="tel" autoComplete="tel" placeholder="+998" className={inputClass} />
                    </label>
                  </div>
                  <label className="block">
                    <span className="eyebrow">Message</span>
                    <textarea required name="message" rows={4} placeholder="Xabaringiz..." className={`${inputClass} resize-none`} />
                  </label>
                  <button type="submit" className="btn-dark mt-4">
                    Send message
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </Reveal>
        </div>
      </section>

      <Location />
    </>
  );
}
