import React, { useMemo, useState } from 'react';
import { ArrowRight, CalendarDays, Filter, Search, Users } from 'lucide-react';
import { destinations, travelCategories, tours } from '../data/siteData';

const defaultHero = {
  destination: '',
  departure: '',
  returnDate: '',
  travelers: '2',
  travelType: '',
};

const defaultFilters = {
  destination: '',
  price: 'all',
  duration: 'all',
  travelType: 'all',
  rating: 'all',
  sort: 'popular',
};

export const SearchBar = ({
  mode = 'filters',
  initialValues,
  onSubmit,
  onChange,
  className = '',
  variant = 'dark',
  compact = false,
}) => {
  const startingValues = mode === 'hero' ? { ...defaultHero, ...initialValues } : { ...defaultFilters, ...initialValues };
  const [values, setValues] = useState(startingValues);

  const destinationOptions = useMemo(() => destinations.map((destination) => destination.name), []);
  const travelTypeOptions = useMemo(() => ['all', ...new Set(tours.map((tour) => tour.travelType))], []);
  const durationOptions = ['all', '3-5 days', '6-8 days', '9+ days'];

  const handleChange = (field, nextValue) => {
    setValues((current) => {
      const updated = { ...current, [field]: nextValue };
      onChange?.(updated);
      return updated;
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit?.(values);
  };

  if (mode === 'hero') {
    const inputClass = variant === 'light' ? 'w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-950 placeholder:text-slate-400 transition duration-200 focus:border-slate-400 focus:ring-2 focus:ring-slate-200' : 'premium-input';
    const selectClass = variant === 'light' ? 'w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-950 transition duration-200 focus:border-slate-400 focus:ring-2 focus:ring-slate-200' : 'premium-select';

    return (
      <form onSubmit={handleSubmit} className={`grid gap-3 ${className}`}>
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
          <label className="block xl:col-span-2">
            <span className="premium-label">Where do you want to go?</span>
            <input
              value={values.destination}
              onChange={(event) => handleChange('destination', event.target.value)}
              placeholder="Paris, Dubai, Maldives..."
              className={inputClass}
              list="davis-gee-destinations"
            />
            <datalist id="davis-gee-destinations">
              {destinationOptions.map((option) => (
                <option key={option} value={option} />
              ))}
            </datalist>
          </label>

          <label className="block">
            <span className="premium-label">Departure date</span>
            <input type="date" value={values.departure} onChange={(event) => handleChange('departure', event.target.value)} className={inputClass} />
          </label>

          <label className="block">
            <span className="premium-label">Return date</span>
            <input type="date" value={values.returnDate} onChange={(event) => handleChange('returnDate', event.target.value)} className={inputClass} />
          </label>

          <label className="block">
            <span className="premium-label">Travelers</span>
            <select value={values.travelers} onChange={(event) => handleChange('travelers', event.target.value)} className={selectClass}>
              {['1', '2', '3', '4', '5', '6+'].map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </label>

          <label className="block xl:col-span-2">
            <span className="premium-label">Travel type</span>
            <select value={values.travelType} onChange={(event) => handleChange('travelType', event.target.value)} className={selectClass}>
              <option value="">Any style</option>
              {travelCategories.map((category) => (
                <option key={category.slug} value={category.title}>{category.title}</option>
              ))}
            </select>
          </label>
        </div>

        <button type="submit" className="gold-button mt-1 w-full sm:w-auto">
          Search Trips
          <ArrowRight size={16} />
        </button>
      </form>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`grid gap-3 ${className}`}>
      <div className={`grid gap-3 ${compact ? 'lg:grid-cols-2' : 'lg:grid-cols-3 xl:grid-cols-6'}`}>
        <label className="block">
          <span className="premium-label">Destination</span>
          <input
            value={values.destination}
            onChange={(event) => handleChange('destination', event.target.value)}
            placeholder="Search tours or destinations"
            className={variant === 'light' ? 'w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-950 placeholder:text-slate-400 transition duration-200 focus:border-slate-400 focus:ring-2 focus:ring-slate-200' : 'premium-input'}
            list="davis-gee-filters-destination"
          />
          <datalist id="davis-gee-filters-destination">
            {destinationOptions.map((option) => (
              <option key={option} value={option} />
            ))}
          </datalist>
        </label>

        <label className="block">
          <span className="premium-label">Price</span>
          <select value={values.price} onChange={(event) => handleChange('price', event.target.value)} className={variant === 'light' ? 'w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-950 transition duration-200 focus:border-slate-400 focus:ring-2 focus:ring-slate-200' : 'premium-select'}>
            <option value="all">All prices</option>
            <option value="under-800000">Under ₦800,000</option>
            <option value="800000-1100000">₦800,000 - ₦1,100,000</option>
            <option value="over-1100000">Above ₦1,100,000</option>
          </select>
        </label>

        <label className="block">
          <span className="premium-label">Duration</span>
          <select value={values.duration} onChange={(event) => handleChange('duration', event.target.value)} className={variant === 'light' ? 'w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-950 transition duration-200 focus:border-slate-400 focus:ring-2 focus:ring-slate-200' : 'premium-select'}>
            {durationOptions.map((option) => (
              <option key={option} value={option}>{option === 'all' ? 'All durations' : option}</option>
            ))}
          </select>
        </label>

        <label className="block">
          <span className="premium-label">Travel type</span>
          <select value={values.travelType} onChange={(event) => handleChange('travelType', event.target.value)} className={variant === 'light' ? 'w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-950 transition duration-200 focus:border-slate-400 focus:ring-2 focus:ring-slate-200' : 'premium-select'}>
            {travelTypeOptions.map((option) => (
              <option key={option} value={option}>{option === 'all' ? 'All types' : option}</option>
            ))}
          </select>
        </label>

        <label className="block">
          <span className="premium-label">Rating</span>
          <select value={values.rating} onChange={(event) => handleChange('rating', event.target.value)} className={variant === 'light' ? 'w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-950 transition duration-200 focus:border-slate-400 focus:ring-2 focus:ring-slate-200' : 'premium-select'}>
            <option value="all">Any rating</option>
            <option value="4.5">4.5+ Stars</option>
            <option value="4.7">4.7+ Stars</option>
            <option value="4.8">4.8+ Stars</option>
          </select>
        </label>

        <label className="block">
          <span className="premium-label">Sort by</span>
          <select value={values.sort} onChange={(event) => handleChange('sort', event.target.value)} className={variant === 'light' ? 'w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-950 transition duration-200 focus:border-slate-400 focus:ring-2 focus:ring-slate-200' : 'premium-select'}>
            <option value="popular">Popularity</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="rating">Rating</option>
          </select>
        </label>
      </div>

      <div className="flex items-center gap-3">
        <button type="submit" className="gold-button">
          <Filter size={16} />
          Apply Filters
        </button>
        <div className="hidden items-center gap-3 text-sm text-slate-400 md:flex">
          <span className="inline-flex items-center gap-2"><Search size={15} /> Local search</span>
          <span className="inline-flex items-center gap-2"><CalendarDays size={15} /> Flexible booking</span>
          <span className="inline-flex items-center gap-2"><Users size={15} /> Premium support</span>
        </div>
      </div>
    </form>
  );
};
