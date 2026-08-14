import React from 'react';
import { ArrowRight, Heart, MapPin, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { formatCurrency } from '../utils/currency';
import { useWishlist } from '../context/WishlistContext';

export const DestinationCard = ({ destination }) => {
  const { isSaved, toggleItem } = useWishlist();
  const saved = isSaved(destination.slug, 'destination');

  return (
    <article className="surface card-hover group relative mx-auto w-full max-w-[340px] overflow-hidden rounded-[1.1rem] sm:max-w-none sm:rounded-[1.75rem]">
      <div className="relative h-48 overflow-hidden sm:h-64 lg:h-72">
        <img src={destination.image} alt={destination.name} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/15 to-transparent" />
        <button
          type="button"
          onClick={() => toggleItem({ type: 'destination', slug: destination.slug, title: destination.name, image: destination.image, meta: destination.country, price: destination.startingPrice })}
          className="absolute right-3 top-3 rounded-full border border-white/10 bg-slate-950/75 p-2.5 text-white backdrop-blur-md transition hover:bg-slate-900 sm:right-4 sm:top-4 sm:p-3"
          aria-label={saved ? `Remove ${destination.name} from wishlist` : `Save ${destination.name} to wishlist`}
        >
          <Heart size={14} className={saved ? 'fill-rose-500 text-rose-500' : ''} />
        </button>
        <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between gap-2 sm:bottom-4 sm:left-4 sm:right-4 sm:gap-4">
          <div>
            <p className="pill mb-1.5 bg-white/10 text-white text-[9px] sm:mb-2 sm:text-[10px]"><MapPin size={10} /> {destination.country}</p>
            <h3 className="text-lg font-semibold text-white sm:text-2xl">{destination.name}</h3>
          </div>
          <div className="rounded-xl border border-white/10 bg-slate-950/75 px-2 py-1.5 text-right text-[10px] text-slate-200 backdrop-blur-md sm:rounded-2xl sm:px-3 sm:py-2 sm:text-sm">
            <div className="flex items-center justify-end gap-1 text-amber-300"><Star size={12} fill="currentColor" /> {destination.experiences}</div>
            experiences
          </div>
        </div>
      </div>

      <div className="space-y-3 p-3 sm:space-y-4 sm:p-5">
        <p className="text-xs leading-5 text-slate-300 sm:text-sm sm:leading-7">{destination.shortDescription}</p>
        <div className="flex items-center justify-between gap-2 text-[11px] text-slate-300 sm:gap-3 sm:text-sm">
          <span>From <strong className="text-white">{formatCurrency(destination.startingPrice)}</strong></span>
          <span>{destination.region}</span>
        </div>
        <Link to={`/destinations/${destination.slug}`} className="inline-flex items-center gap-2 text-[11px] font-semibold text-amber-200 transition hover:text-amber-100 sm:text-sm">
          View destination <ArrowRight size={14} />
        </Link>
      </div>
    </article>
  );
};
