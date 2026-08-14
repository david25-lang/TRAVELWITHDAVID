import React, { useMemo, useState } from 'react';
import { TourCard } from '../components/TourCard';
import { PageHero } from '../components/PageHero';
import { SearchBar } from '../components/SearchBar';
import { tours } from '../data/siteData';
import { useSeo } from '../hooks/useSeo';

const Tours = () => {
  const [filters, setFilters] = useState({ destination: '', price: 'all', duration: 'all', travelType: 'all', rating: 'all', sort: 'popular' });

  useSeo('Tours | Davis_Gee Travel', 'Find curated tours, compare pricing, and sort by popularity or rating.');

  const filteredTours = useMemo(() => {
    const normalized = filters.destination.trim().toLowerCase();
    let result = tours.filter((tour) => {
      const matchesDestination = !normalized || [tour.title, tour.location, tour.category].some((value) => value.toLowerCase().includes(normalized));
      const matchesPrice = filters.price === 'all' || (filters.price === 'under-800000' ? tour.price < 800000 : filters.price === '800000-1100000' ? tour.price >= 800000 && tour.price <= 1100000 : tour.price > 1100000);
      const matchesDuration = filters.duration === 'all' || (filters.duration === '3-5 days' ? ['3 Days', '4 Days', '5 Days'].includes(tour.duration) : filters.duration === '6-8 days' ? ['6 Days', '7 Days', '8 Days'].includes(tour.duration) : Number.parseInt(tour.duration, 10) >= 9);
      const matchesType = filters.travelType === 'all' || tour.travelType.toLowerCase() === filters.travelType.toLowerCase();
      const matchesRating = filters.rating === 'all' || tour.rating >= Number(filters.rating);
      return matchesDestination && matchesPrice && matchesDuration && matchesType && matchesRating;
    });

    if (filters.sort === 'price-asc') result = [...result].sort((a, b) => a.price - b.price);
    else if (filters.sort === 'price-desc') result = [...result].sort((a, b) => b.price - a.price);
    else if (filters.sort === 'rating') result = [...result].sort((a, b) => b.rating - a.rating);
    else result = [...result].sort((a, b) => b.popular - a.popular);

    return result;
  }, [filters]);

  return (
    <div className="pb-24">
      <PageHero
        eyebrow="Tours"
        title="Journeys worth taking"
        description="Browse curated tours and refine them with powerful local filtering and sorting."
        image={tours[0].image}
      >
        <SearchBar mode="filters" initialValues={filters} onChange={setFilters} />
      </PageHero>

      <section className="shell mt-12">
        {filteredTours.length ? (
          <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
            {filteredTours.map((tour) => <TourCard key={tour.slug} tour={tour} />)}
          </div>
        ) : (
          <div className="surface rounded-[2rem] p-10 text-center text-slate-900">No tours match your current filters.</div>
        )}
      </section>
    </div>
  );
};

export default Tours;
