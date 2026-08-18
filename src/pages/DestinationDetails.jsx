import React, { useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { CalendarDays, CloudSun, MapPin, Mountain, Plane, Star } from 'lucide-react';
import { FAQ } from '../components/FAQ';
import { PageHero } from '../components/PageHero';
import { SearchBar } from '../components/SearchBar';
import { destinations, faqs, findDestinationBySlug, tours } from '../data/siteData';
import { formatCurrency } from '../utils/currency';
import { useSeo } from '../hooks/useSeo';

const DestinationDetails = () => {
  const { slug } = useParams();
  const destination = findDestinationBySlug(slug);

  useSeo(destination ? `${destination.name} | Davis_Gee Travel` : 'Destination | Davis_Gee Travel', destination?.description || 'Davis_Gee Travel destination details.');

  const relatedDestinations = useMemo(() => destinations.filter((item) => item.slug !== slug && !!destination?.related?.includes(item.slug)).slice(0, 3), [slug, destination]);
  const relatedTours = useMemo(() => tours.filter((tour) => !!destination?.tours?.includes(tour.slug)), [destination]);

  if (!destination) {
    return (
      <div className="shell py-24 text-center text-slate-700">
        <h1 className="text-3xl font-semibold text-slate-950">Destination not found</h1>
        <Link to="/destinations" className="mt-6 inline-flex text-amber-700">Back to destinations</Link>
      </div>
    );
  }

  return (
    <div className="pb-12 sm:pb-24">
      <PageHero
        eyebrow={destination.country}
        title={destination.name}
        description={destination.overview}
        image={destination.image}
      >
        <div className="flex flex-wrap gap-2 text-xs text-slate-300 sm:gap-3 sm:text-sm">
          <span className="pill"><MapPin size={14} /> {destination.country}</span>
          <span className="pill"><CalendarDays size={14} /> {destination.bestTime}</span>
          <span className="pill"><CloudSun size={14} /> {destination.weather}</span>
        </div>
      </PageHero>

      <section className="shell mt-7 grid gap-6 sm:mt-12 sm:gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        <article className="space-y-5 sm:space-y-8">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
            <div className="surface rounded-2xl p-3 sm:rounded-[1.5rem] sm:p-5"><p className="text-xs text-slate-600 sm:text-sm">Average cost</p><p className="mt-1 text-lg font-semibold text-slate-950 sm:mt-2 sm:text-2xl">{destination.averageCost}</p></div>
            <div className="surface rounded-2xl p-3 sm:rounded-[1.5rem] sm:p-5"><p className="text-xs text-slate-600 sm:text-sm">Starting price</p><p className="mt-1 text-lg font-semibold text-slate-950 sm:mt-2 sm:text-2xl">{formatCurrency(destination.startingPrice)}</p></div>
            <div className="surface col-span-2 rounded-2xl p-3 sm:col-span-1 sm:rounded-[1.5rem] sm:p-5"><p className="text-xs text-slate-600 sm:text-sm">Experiences</p><p className="mt-1 text-lg font-semibold text-slate-950 sm:mt-2 sm:text-2xl">{destination.experiences}</p></div>
          </div>

          <div className="surface rounded-[1.5rem] p-4 sm:rounded-[2rem] sm:p-6 lg:p-8">
            <h2 className="text-xl font-semibold text-slate-950 sm:text-2xl">Destination overview</h2>
            <p className="mt-3 text-xs leading-6 text-slate-900 sm:mt-4 sm:text-sm sm:leading-8">{destination.description}</p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-6">
            <div className="surface rounded-[1.5rem] p-4 sm:rounded-[2rem] sm:p-6">
              <h3 className="text-base font-semibold leading-6 text-slate-950 sm:text-xl">Popular attractions</h3>
              <ul className="mt-3 space-y-2 text-xs leading-5 text-slate-900 sm:mt-4 sm:space-y-3 sm:text-sm">
                {destination.attractions.map((item) => <li key={item}>• {item}</li>)}
              </ul>
            </div>
            <div className="surface rounded-[1.5rem] p-4 sm:rounded-[2rem] sm:p-6">
              <h3 className="text-base font-semibold leading-6 text-slate-950 sm:text-xl">Recommended hotels</h3>
              <ul className="mt-3 space-y-2 text-xs leading-5 text-slate-900 sm:mt-4 sm:space-y-3 sm:text-sm">
                {destination.hotels.map((item) => <li key={item}>• {item}</li>)}
              </ul>
            </div>
          </div>

          <div className="surface rounded-[1.5rem] p-4 sm:rounded-[2rem] sm:p-6 lg:p-8">
            <h3 className="text-lg font-semibold text-slate-950 sm:text-xl">Things to do</h3>
            <p className="mt-3 text-xs leading-6 text-slate-900 sm:mt-4 sm:text-sm sm:leading-8">Enjoy the curated atmosphere, local cuisine, and flexible excursions that match the pace of the city or island.</p>
          </div>

          <div className="surface rounded-[1.5rem] p-4 sm:rounded-[2rem] sm:p-6 lg:p-8">
            <h3 className="text-lg font-semibold text-slate-950 sm:text-xl">Travel tips</h3>
            <ul className="mt-3 space-y-2 text-xs leading-6 text-slate-900 sm:mt-4 sm:space-y-3 sm:text-sm">
              {destination.tips.map((tip) => <li key={tip}>• {tip}</li>)}
            </ul>
          </div>

          <div className="surface rounded-[1.5rem] p-4 sm:rounded-[2rem] sm:p-6 lg:p-8">
            <h3 className="text-lg font-semibold text-slate-950 sm:text-xl">FAQ</h3>
            <div className="mt-4 sm:mt-6">
              <FAQ items={faqs.slice(0, 4)} />
            </div>
          </div>

          <div className="surface rounded-[1.5rem] p-4 sm:rounded-[2rem] sm:p-6 lg:p-8">
            <h3 className="text-lg font-semibold text-slate-950 sm:text-xl">Related destinations</h3>
            <div className="mt-4 grid grid-cols-2 gap-3 sm:mt-6 sm:gap-4 xl:grid-cols-3">
              {relatedDestinations.map((item) => (
                <Link key={item.slug} to={`/destinations/${item.slug}`} className="rounded-xl border border-white/10 bg-white/5 p-3 transition hover:bg-white/10 sm:rounded-[1.5rem] sm:p-4">
                  <p className="text-xs text-amber-700 sm:text-sm">{item.country}</p>
                  <p className="mt-1 text-sm font-semibold text-slate-950 sm:mt-2 sm:text-lg">{item.name}</p>
                </Link>
              ))}
            </div>
          </div>

          <div className="surface rounded-[1.5rem] p-4 sm:rounded-[2rem] sm:p-6 lg:p-8">
            <h3 className="text-lg font-semibold text-slate-950 sm:text-xl">Available tours</h3>
            <div className="mt-4 grid gap-3 sm:mt-6 sm:gap-4">
              {relatedTours.map((tour) => (
                <Link key={tour.slug} to={`/tours/${tour.slug}`} className="flex items-center justify-between gap-2 rounded-xl border border-white/10 bg-white/5 p-3 text-sm transition hover:bg-white/10 sm:rounded-[1.5rem] sm:p-4 sm:text-base">
                  <span className="text-slate-950">{tour.title}</span>
                  <span className="shrink-0 text-amber-700">View</span>
                </Link>
              ))}
            </div>
          </div>
        </article>

        <aside className="space-y-4 sm:space-y-6 lg:sticky lg:top-28">
          <div className="surface-strong rounded-[1.5rem] p-4 sm:rounded-[2rem] sm:p-6">
            <p className="eyebrow text-white">Book or search</p>
            <h2 className="mt-2 text-xl font-semibold text-white sm:mt-3 sm:text-2xl">Plan this destination</h2>
            <div className="mt-4 sm:mt-6">
              <SearchBar mode="filters" initialValues={{ destination: destination.name, price: 'all', duration: 'all', travelType: 'all', rating: 'all', sort: 'popular' }} />
            </div>
          </div>
          <div className="surface rounded-[1.5rem] p-4 sm:rounded-[2rem] sm:p-6">
            <div className="flex items-center gap-3 text-amber-700"><Star size={18} /> Popular destination</div>
            <p className="mt-3 text-xs leading-6 text-slate-900 sm:mt-4 sm:text-sm sm:leading-7">The sticky panel gives desktop users a quick path to search or pivot into booking without leaving the page.</p>
          </div>
        </aside>
      </section>
    </div>
  );
};

export default DestinationDetails;
