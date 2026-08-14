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
      <div className="shell py-24 text-center text-slate-300">
        <h1 className="text-3xl font-semibold text-white">Destination not found</h1>
        <Link to="/destinations" className="mt-6 inline-flex text-amber-200">Back to destinations</Link>
      </div>
    );
  }

  return (
    <div className="pb-24">
      <PageHero
        eyebrow={destination.country}
        title={destination.name}
        description={destination.overview}
        image={destination.image}
      >
        <div className="flex flex-wrap gap-3 text-sm text-slate-300">
          <span className="pill"><MapPin size={14} /> {destination.country}</span>
          <span className="pill"><CalendarDays size={14} /> {destination.bestTime}</span>
          <span className="pill"><CloudSun size={14} /> {destination.weather}</span>
        </div>
      </PageHero>

      <section className="shell mt-12 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        <article className="space-y-8">
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="surface rounded-[1.5rem] p-5"><p className="text-sm text-slate-400">Average cost</p><p className="mt-2 text-2xl font-semibold text-white">{destination.averageCost}</p></div>
            <div className="surface rounded-[1.5rem] p-5"><p className="text-sm text-slate-400">Starting price</p><p className="mt-2 text-2xl font-semibold text-white">{formatCurrency(destination.startingPrice)}</p></div>
            <div className="surface rounded-[1.5rem] p-5"><p className="text-sm text-slate-400">Experiences</p><p className="mt-2 text-2xl font-semibold text-white">{destination.experiences}</p></div>
          </div>

          <div className="surface rounded-[2rem] p-6 lg:p-8">
            <h2 className="text-2xl font-semibold text-white">Destination overview</h2>
            <p className="mt-4 text-sm leading-8 text-slate-300">{destination.description}</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="surface rounded-[2rem] p-6">
              <h3 className="text-xl font-semibold text-white">Popular attractions</h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-300">
                {destination.attractions.map((item) => <li key={item}>• {item}</li>)}
              </ul>
            </div>
            <div className="surface rounded-[2rem] p-6">
              <h3 className="text-xl font-semibold text-white">Recommended hotels</h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-300">
                {destination.hotels.map((item) => <li key={item}>• {item}</li>)}
              </ul>
            </div>
          </div>

          <div className="surface rounded-[2rem] p-6 lg:p-8">
            <h3 className="text-xl font-semibold text-white">Things to do</h3>
            <p className="mt-4 text-sm leading-8 text-slate-300">Enjoy the curated atmosphere, local cuisine, and flexible excursions that match the pace of the city or island.</p>
          </div>

          <div className="surface rounded-[2rem] p-6 lg:p-8">
            <h3 className="text-xl font-semibold text-white">Travel tips</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              {destination.tips.map((tip) => <li key={tip}>• {tip}</li>)}
            </ul>
          </div>

          <div className="surface rounded-[2rem] p-6 lg:p-8">
            <h3 className="text-xl font-semibold text-white">FAQ</h3>
            <div className="mt-6">
              <FAQ items={faqs.slice(0, 4)} />
            </div>
          </div>

          <div className="surface rounded-[2rem] p-6 lg:p-8">
            <h3 className="text-xl font-semibold text-white">Related destinations</h3>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {relatedDestinations.map((item) => (
                <Link key={item.slug} to={`/destinations/${item.slug}`} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-4 transition hover:bg-white/10">
                  <p className="text-sm text-amber-200">{item.country}</p>
                  <p className="mt-2 text-lg font-semibold text-white">{item.name}</p>
                </Link>
              ))}
            </div>
          </div>

          <div className="surface rounded-[2rem] p-6 lg:p-8">
            <h3 className="text-xl font-semibold text-white">Available tours</h3>
            <div className="mt-6 grid gap-4">
              {relatedTours.map((tour) => (
                <Link key={tour.slug} to={`/tours/${tour.slug}`} className="flex items-center justify-between rounded-[1.5rem] border border-white/10 bg-white/5 p-4 transition hover:bg-white/10">
                  <span className="text-white">{tour.title}</span>
                  <span className="text-amber-200">View</span>
                </Link>
              ))}
            </div>
          </div>
        </article>

        <aside className="space-y-6 lg:sticky lg:top-28">
          <div className="surface-strong rounded-[2rem] p-6">
            <p className="eyebrow">Book or search</p>
            <h2 className="mt-3 text-2xl font-semibold text-white">Plan this destination</h2>
            <div className="mt-6">
              <SearchBar mode="filters" initialValues={{ destination: destination.name, price: 'all', duration: 'all', travelType: 'all', rating: 'all', sort: 'popular' }} />
            </div>
          </div>
          <div className="surface rounded-[2rem] p-6">
            <div className="flex items-center gap-3 text-amber-200"><Star size={18} /> Popular destination</div>
            <p className="mt-4 text-sm leading-7 text-slate-300">The sticky panel gives desktop users a quick path to search or pivot into booking without leaving the page.</p>
          </div>
        </aside>
      </section>
    </div>
  );
};

export default DestinationDetails;
