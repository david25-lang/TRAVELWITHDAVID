import React from 'react';
import { ArrowRight, Heart, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { formatCurrency } from '../utils/currency';
import { useWishlist } from '../context/WishlistContext';

export const TourCard = ({ tour }) => {
  const { isSaved, toggleItem } = useWishlist();
  const saved = isSaved(tour.slug, 'tour');

  return (
    <article className="surface card-hover group overflow-hidden rounded-[1.75rem]">
      <div className="relative h-64 overflow-hidden">
        <img src={tour.image} alt={tour.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
        <button
          type="button"
          onClick={() => toggleItem({ type: 'tour', slug: tour.slug, title: tour.title, image: tour.image, meta: tour.location, price: tour.price })}
          className="absolute right-4 top-4 rounded-full border border-white/10 bg-slate-950/75 p-3 text-white backdrop-blur-md transition hover:bg-slate-900"
          aria-label={saved ? `Remove ${tour.title} from wishlist` : `Save ${tour.title} to wishlist`}
        >
          <Heart size={16} className={saved ? 'fill-rose-500 text-rose-500' : ''} />
        </button>

        <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-4">
          <div>
            <p className="pill mb-2 bg-white/10 text-white">{tour.category}</p>
            <h3 className="text-2xl font-semibold text-white">{tour.title}</h3>
          </div>
          <div className="rounded-2xl border border-white/10 bg-slate-950/75 px-3 py-2 text-right text-sm text-slate-200 backdrop-blur-md">
            <div className="flex items-center justify-end gap-1 text-amber-300">
              <Star size={14} fill="currentColor" /> {tour.rating}
            </div>
            {tour.reviews} reviews
          </div>
        </div>
      </div>

      <div className="space-y-4 p-5">
        <div className="flex items-center justify-between gap-3 text-sm text-slate-300">
          <span>{tour.location}</span>
          <span>{tour.duration}</span>
        </div>
        <p className="text-sm leading-7 text-slate-300">{tour.description}</p>
        <div className="flex items-center justify-between gap-4">
          <span className="text-sm text-slate-300">From <strong className="text-white">{formatCurrency(tour.price)}</strong></span>
          <Link to={`/tours/${tour.slug}`} className="inline-flex items-center gap-2 text-sm font-semibold text-amber-200 transition hover:text-amber-100">
            View Trip <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </article>
  );
};
