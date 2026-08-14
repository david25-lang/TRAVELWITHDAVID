import React from 'react';
import { ArrowRight, Heart, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { formatCurrency } from '../utils/currency';
import { useWishlist } from '../context/WishlistContext';

export const TourCard = ({ tour }) => {
  const { isSaved, toggleItem } = useWishlist();
  const saved = isSaved(tour.slug, 'tour');

  return (
    <article className="surface card-hover group mx-auto w-full max-w-[340px] animate-fade-up overflow-hidden rounded-[1.1rem] sm:max-w-none sm:rounded-[1.75rem]">
      <div className="max-md:hidden relative h-52 overflow-hidden sm:h-64">
        <img src={tour.image} alt={tour.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
        <button
          type="button"
          onClick={() => toggleItem({ type: 'tour', slug: tour.slug, title: tour.title, image: tour.image, meta: tour.location, price: tour.price })}
          className="absolute right-3 top-3 rounded-full border border-white/10 bg-slate-950/75 p-2.5 text-white backdrop-blur-md transition hover:bg-slate-900 sm:right-4 sm:top-4 sm:p-3"
          aria-label={saved ? `Remove ${tour.title} from wishlist` : `Save ${tour.title} to wishlist`}
        >
          <Heart size={14} className={saved ? 'fill-rose-500 text-rose-500' : ''} />
        </button>

        <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between gap-2 sm:bottom-4 sm:left-4 sm:right-4 sm:gap-4">
          <div>
            <p className="pill mb-1.5 bg-white/10 text-white text-[9px] sm:text-[10px]">{tour.category}</p>
            <h3 className="text-lg font-semibold text-white sm:text-2xl">{tour.title}</h3>
          </div>
          <div className="rounded-xl border border-white/10 bg-slate-950/75 px-2 py-1.5 text-right text-[10px] text-slate-200 backdrop-blur-md sm:rounded-2xl sm:px-3 sm:py-2 sm:text-sm">
            <div className="flex items-center justify-end gap-1 text-amber-300">
              <Star size={12} fill="currentColor" /> {tour.rating}
            </div>
            {tour.reviews} reviews
          </div>
        </div>
      </div>

      <div className="space-y-3 p-4 sm:space-y-4 sm:p-5">
        <div className="flex items-center justify-between gap-2 text-[10px] text-slate-500 sm:text-xs">
          <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2 py-1 font-medium text-slate-700 sm:hidden">{tour.category}</span>
          <button
            type="button"
            onClick={() => toggleItem({ type: 'tour', slug: tour.slug, title: tour.title, image: tour.image, meta: tour.location, price: tour.price })}
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm sm:hidden"
            aria-label={saved ? `Remove ${tour.title} from wishlist` : `Save ${tour.title} to wishlist`}
          >
            <Heart size={13} className={saved ? 'fill-rose-500 text-rose-500' : ''} />
          </button>
        </div>

        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-lg font-semibold text-slate-950 sm:text-2xl">{tour.title}</h3>
            <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-slate-500 sm:text-[11px]">{tour.location}</p>
          </div>
          <div className="hidden items-center gap-1 rounded-full bg-amber-50 px-2 py-1 text-[10px] font-medium text-amber-700 sm:inline-flex">
            <Star size={12} fill="currentColor" /> {tour.rating}
          </div>
        </div>

        <div className="flex items-center justify-between gap-2 text-[11px] text-slate-500 sm:gap-3 sm:text-sm">
          <span>{tour.duration}</span>
          <span>{tour.location}</span>
        </div>
        <p className="text-sm leading-6 text-slate-600 sm:leading-7">{tour.description}</p>
        <div className="flex items-center justify-between gap-2 sm:gap-4">
          <span className="text-[11px] text-slate-600 sm:text-sm">From <strong className="text-slate-950">{formatCurrency(tour.price)}</strong></span>
          <Link to={`/tours/${tour.slug}`} className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-950 transition hover:text-slate-700 sm:gap-2 sm:text-sm">
            View Trip <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </article>
  );
};
