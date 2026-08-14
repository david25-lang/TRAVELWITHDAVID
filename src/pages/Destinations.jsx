import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DestinationCard } from '../components/DestinationCard';
import { PageHero } from '../components/PageHero';
import { SearchBar } from '../components/SearchBar';
import { destinations } from '../data/siteData';
import { useSeo } from '../hooks/useSeo';

const Destinations = () => {
  const navigate = useNavigate();
  const [filters, setFilters] = useState({ destination: '', price: 'all', duration: 'all', travelType: 'all', rating: 'all', sort: 'popular' });

  useSeo('Destinations | Voyara Travel', 'Browse premium travel destinations curated by Voyara Travel.');

  const filteredDestinations = useMemo(() => {
    const normalized = filters.destination.trim().toLowerCase();
    const result = destinations.filter((destination) => {
      const matchesDestination = !normalized || [destination.name, destination.country, destination.region].some((value) => value.toLowerCase().includes(normalized));
      const matchesPrice = filters.price === 'all' || (filters.price === 'under-800000' ? destination.startingPrice < 800000 : filters.price === '800000-1100000' ? destination.startingPrice >= 800000 && destination.startingPrice <= 1100000 : destination.startingPrice > 1100000);
      const matchesRating = filters.rating === 'all' || destination.experiences >= Number(filters.rating) * 3;
      return matchesDestination && matchesPrice && matchesRating;
    });

    if (filters.sort === 'price-asc') return [...result].sort((a, b) => a.startingPrice - b.startingPrice);
    if (filters.sort === 'price-desc') return [...result].sort((a, b) => b.startingPrice - a.startingPrice);
    if (filters.sort === 'rating') return [...result].sort((a, b) => b.experiences - a.experiences);
    return [...result].sort((a, b) => b.experiences - a.experiences);
  }, [filters]);

  return (
    <div className="pb-24">
      <PageHero
        eyebrow="Destinations"
        title="Premium places to take your next trip"
        description="Search by destination, budget, or travel style and browse a curated travel collection."
        image={destinations[1].image}
      >
        <SearchBar mode="filters" initialValues={filters} onChange={setFilters} />
      </PageHero>

      <section className="shell mt-12 space-y-8">
        <div className="flex items-center justify-between gap-3">
          <p className="text-sm text-slate-400">Showing {filteredDestinations.length} destinations</p>
          <button type="button" onClick={() => navigate('/wishlist')} className="ghost-button">
            My Wishlist
          </button>
        </div>

        {filteredDestinations.length ? (
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {filteredDestinations.map((destination, index) => (
              <div key={destination.slug} className={index % 5 === 0 ? 'md:col-span-2' : ''}>
                <DestinationCard destination={destination} />
              </div>
            ))}
          </div>
        ) : (
          <div className="surface rounded-[2rem] p-10 text-center text-slate-300">No destinations match your current filters.</div>
        )}
      </section>
    </div>
  );
};

export default Destinations;
