import About from '../components/About';
import ContactCTA from '../components/ContactCTA';
import Experience from '../components/Experience';
import Gallery from '../components/Gallery';
import PageHeader from '../components/PageHeader';
import { Reveal, SmartImage } from '../components/ui';
import { images } from '../data/images';

const values = [
  { title: 'Morning ritual', text: 'Eshiklar 08:00 da ochiladi — croissant’lar pechdan endi chiqqan, birinchi espresso tayyor.' },
  { title: 'Slow afternoon', text: 'Laptop bilan ishlash, kitob o‘qish yoki uchrashuv uchun tinch va yorug‘ joy.' },
  { title: 'Evening warmth', text: 'Iliq chiroqlar, dessert va do‘stlar bilan uzoq suhbatlar.' },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our story"
        title={<>About <em>ELVA</em></>}
        text="Navoiy shahrida tug‘ilgan zamonaviy coffee & bakery. Biz oddiy narsalarni — yaxshi coffee, yangi non va samimiy muhitni — mukammal qilishga intilamiz."
      />

      <section className="pb-24 sm:pb-32">
        <div className="container-site">
          <Reveal>
            <SmartImage src={images.about} alt="Inside ELVA" eager className="aspect-[16/10] rounded-[32px] sm:aspect-[21/9]" />
          </Reveal>

          <div className="mt-20 grid gap-12 lg:mt-28 lg:grid-cols-12">
            <Reveal className="lg:col-span-5">
              <h2 className="heading-lg text-espresso">
                Kichik detallar — <em>katta farq.</em>
              </h2>
            </Reveal>
            <Reveal delay={0.1} className="space-y-6 text-base leading-[1.85] text-mocha lg:col-span-6 lg:col-start-7">
              <p>
                ELVA g‘oyasi oddiy: shahar shovqinidan biroz uzoqlashib, sifatli coffee va yangi pishirilgan croissant bilan
                o‘zingizga vaqt ajratadigan joy yaratish.
              </p>
              <p>
                Har bir chashka aniq retsept asosida tayyorlanadi, har bir croissant tongda qo‘lda shakllantiriladi. Interyerimiz
                esa yorug‘lik, tabiiy materiallar va sokinlik atrofida qurilgan.
              </p>
            </Reveal>
          </div>

          <div className="mt-20 grid gap-6 md:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.1} className="rounded-[24px] bg-cream p-9">
                <p className="font-serif text-sm italic text-gold">0{i + 1}</p>
                <h3 className="mt-3 font-serif text-3xl text-espresso">{v.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-mocha">{v.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Experience />
      <About />
      <Gallery />
      <ContactCTA />
    </>
  );
}
