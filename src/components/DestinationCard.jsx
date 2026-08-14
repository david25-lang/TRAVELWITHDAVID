import React from 'react';
import { ArrowRight, Heart, MapPin, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { formatCurrency } from '../utils/currency';
import { useWishlist } from '../context/WishlistContext';

export const DestinationCard = ({ destination }) => {
  const { isSaved, toggleItem } = useWishlist();
  const saved = isSaved(destination.slug, 'destination');

  return (
    <article className="surface card-hover group relative overflow-hidden rounded-[1.4rem] sm:rounded-[1.75rem]">
      <div className="relative h-64 overflow-hidden sm:h-72">
        <img src={destination.image} alt={destination.name} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/15 to-transparent" />
        <button
          type="button"
          onClick={() => toggleItem({ type: 'destination', slug: destination.slug, title: destination.name, image: destination.image, meta: destination.country, price: destination.startingPrice })}
          className="absolute right-4 top-4 rounded-full border border-white/10 bg-slate-950/75 p-3 text-white backdrop-blur-md transition hover:bg-slate-900"
          aria-label={saved ? `Remove ${destination.name} from wishlist` : `Save ${destination.name} to wishlist`}
        >
          <Heart size={16} className={saved ? 'fill-rose-500 text-rose-500' : ''} />
        </button>
        <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-4">
          <div>
            <p className="pill mb-2 bg-white/10 text-white"><MapPin size={12} /> {destination.country}</p>
            <h3 className="text-2xl font-semibold text-white">{destination.name}</h3>
          </div>
          <div className="rounded-2xl border border-white/10 bg-slate-950/75 px-3 py-2 text-right text-sm text-slate-200 backdrop-blur-md">
            <div className="flex items-center justify-end gap-1 text-amber-300"><Star size={14} fill="currentColor" /> {destination.experiences}</div>
            experiences
          </div>
        </div>
      </div>

      <div className="space-y-4 p-5">
        <p className="text-sm text-slate-300">{destination.shortDescription}</p>
        <div className="flex items-center justify-between gap-3 text-sm text-slate-300">
          <span>From <strong className="text-white">{formatCurrency(destination.startingPrice)}</strong></span>
          <span>{destination.region}</span>
        </div>
        <Link to={`/destinations/${destination.slug}`} className="inline-flex items-center gap-2 text-sm font-semibold text-amber-200 transition hover:text-amber-100">
          View destination <ArrowRight size={15} />
        </Link>
      </div>
    </article>
  );
};
