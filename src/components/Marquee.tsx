const words = ['Coffee', 'Croissant', 'Fresh pastries', 'Dessert', 'Breakfast', 'Take-away', 'Delivery'];

/** Hero'dan keyingi sekin harakatlanuvchi brend yo'lagi. */
export default function Marquee() {
  const row = [...words, ...words];

  return (
    <div className="overflow-hidden border-b border-espresso/10 bg-ivory py-6 sm:py-8" aria-hidden>
      <div className="flex w-max animate-[marquee_40s_linear_infinite] items-center">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex items-center">
            {row.map((word, i) => (
              <span key={`${copy}-${i}`} className="flex items-center">
                <span className={`px-6 font-serif text-3xl sm:px-10 sm:text-5xl ${i % 2 ? 'italic text-mocha' : 'text-espresso'}`}>
                  {word}
                </span>
                <span className="h-2 w-2 rotate-45 bg-gold" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
