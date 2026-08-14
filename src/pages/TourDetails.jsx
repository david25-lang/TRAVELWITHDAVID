import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { CalendarDays, Gauge, MapPin, Users } from 'lucide-react';
import { FAQ } from '../components/FAQ';
import { PageHero } from '../components/PageHero';
import { findTourBySlug, tours } from '../data/siteData';
import { formatCurrency } from '../utils/currency';
import { useSeo } from '../hooks/useSeo';

const TourDetails = () => {
  const { slug } = useParams();
  const tour = findTourBySlug(slug);

  useSeo(tour ? `${tour.title} | Voyara Travel` : 'Tour Details | Voyara Travel', tour?.description || 'Voyara Travel tour details.');

  if (!tour) {
    return (
      <div className="shell py-24 text-center text-slate-300">
        <h1 className="text-3xl font-semibold text-white">Tour not found</h1>
        <Link to="/tours" className="mt-6 inline-flex text-amber-200">Back to tours</Link>
      </div>
    );
  }

  return (
    <div className="pb-24">
      <PageHero
        eyebrow={tour.category}
        title={tour.title}
        description={tour.description}
        image={tour.image}
      >
        <div className="flex flex-wrap gap-3 text-sm text-slate-300">
          <span className="pill"><MapPin size={14} /> {tour.location}</span>
          <span className="pill"><CalendarDays size={14} /> {tour.duration}</span>
          <span className="pill"><Gauge size={14} /> {tour.difficulty}</span>
          <span className="pill"><Users size={14} /> {tour.groupSize}</span>
        </div>
      </PageHero>

      <section className="shell mt-12 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        <article className="space-y-8">
          <div className="grid gap-3 sm:grid-cols-3">
            {tour.gallery.map((image, index) => (
              <img key={image} src={image} alt={`${tour.title} gallery ${index + 1}`} className="h-56 w-full rounded-[1.5rem] object-cover" />
            ))}
          </div>

          <div className="surface rounded-[2rem] p-6 lg:p-8">
            <h2 className="text-2xl font-semibold text-white">What is included</h2>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              {tour.includes.map((item) => <li key={item}>• {item}</li>)}
            </ul>
          </div>

          <div className="surface rounded-[2rem] p-6 lg:p-8">
            <h2 className="text-2xl font-semibold text-white">What is excluded</h2>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              {tour.excludes.map((item) => <li key={item}>• {item}</li>)}
            </ul>
          </div>

          <div className="surface rounded-[2rem] p-6 lg:p-8">
            <h2 className="text-2xl font-semibold text-white">Detailed itinerary</h2>
            <div className="mt-6 space-y-4">
              {tour.itinerary.map((day) => (
                <div key={day.day} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-4">
                  <p className="text-sm text-amber-200">{day.day}</p>
                  <h3 className="mt-2 text-lg font-semibold text-white">{day.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-300">{day.summary}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="surface rounded-[2rem] p-6 lg:p-8">
            <h2 className="text-2xl font-semibold text-white">Meeting point and cancellation</h2>
            <p className="mt-4 text-sm leading-8 text-slate-300">Meeting point: {tour.meetingPoint}</p>
            <p className="mt-2 text-sm leading-8 text-slate-300">Cancellation: {tour.cancellation}</p>
          </div>

          <div className="surface rounded-[2rem] p-6 lg:p-8">
            <h2 className="text-2xl font-semibold text-white">FAQ</h2>
            <div className="mt-6">
              <FAQ items={tour.faq.map((question) => ({ question, answer: 'This is demo FAQ copy used to present the structure of the tour detail page.' }))} />
            </div>
          </div>
        </article>

        <aside className="space-y-6 lg:sticky lg:top-28">
          <div className="surface-strong rounded-[2rem] p-6">
            <p className="eyebrow">Price</p>
            <p className="mt-3 text-4xl font-semibold text-white">{formatCurrency(tour.price)}</p>
            <p className="mt-2 text-sm text-slate-400">From {tour.location}</p>
            <Link to="/booking" className="gold-button mt-6 w-full justify-center">Book This Trip</Link>
          </div>
          <div className="surface rounded-[2rem] p-6">
            <p className="text-sm text-slate-400">Rating</p>
            <p className="mt-2 text-2xl font-semibold text-white">{tour.rating} / 5</p>
            <p className="mt-2 text-sm text-slate-400">{tour.reviews} reviews</p>
          </div>
        </aside>
      </section>
    </div>
  );
};

export default TourDetails;
