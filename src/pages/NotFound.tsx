import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="flex min-h-[80svh] flex-col items-center justify-center px-5 pt-24 text-center">
      <p className="eyebrow">404</p>
      <h1 className="mt-6 font-serif text-6xl text-espresso sm:text-7xl">
        Bu sahifa <em>topilmadi.</em>
      </h1>
      <p className="mt-5 text-mocha">Lekin coffee hali ham issiq.</p>
      <Link to="/" className="btn-dark mt-10">
        Back home
      </Link>
    </section>
  );
}
