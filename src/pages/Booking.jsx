import React from 'react';
import { BookingForm } from '../components/BookingForm';
import { PageHero } from '../components/PageHero';
import { destinations } from '../data/siteData';
import { useSeo } from '../hooks/useSeo';

const Booking = () => {
  useSeo('Booking | Voyara Travel', 'Book a premium trip with Voyara Travel using a multi-step frontend booking flow.');

  return (
    <div className="pb-24">
      <PageHero
        eyebrow="Booking"
        title="Plan your trip with a calm, structured flow"
        description="This booking experience uses local state and clearly shows each step of the process."
        image={destinations[3].image}
      />

      <section className="shell mt-12 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        <BookingForm />
        <aside className="surface rounded-[2rem] p-6 lg:sticky lg:top-28">
          <p className="eyebrow text-slate-950">What happens next</p>
          <h2 className="mt-3 text-2xl font-semibold text-slate-950">A clear frontend booking experience</h2>
          <ul className="mt-6 space-y-4 text-sm leading-7 text-slate-600">
            <li>Traveler information is validated before moving forward.</li>
            <li>Trip data is stored locally to demonstrate a real booking summary.</li>
            <li>Confirmation persists in browser storage for a lightweight demo history.</li>
          </ul>
        </aside>
      </section>
    </div>
  );
};

export default Booking;
