import React from 'react';
import { Link } from 'react-router-dom';
import { PageHero } from '../components/PageHero';
import { useWishlist } from '../context/WishlistContext';
import { destinations, tours } from '../data/siteData';
import { formatCurrency } from '../utils/currency';
import { useSeo } from '../hooks/useSeo';

const Wishlist = () => {
  const { items, clearWishlist, removeItem } = useWishlist();
  useSeo('My Wishlist | Davis_Gee Travel', 'Saved destinations and tours stored in localStorage.');

  const fullItems = items.map((item) => {
    const source = item.type === 'tour' ? tours.find((tour) => tour.slug === item.slug) : destinations.find((destination) => destination.slug === item.slug);
    return source ? { ...item, source } : item;
  });

  return (
    <div className="pb-24">
      <PageHero
        eyebrow="Wishlist"
        title="Your saved trips"
        description="This page reads from localStorage so saved items persist through refreshes."
        image={destinations[6].image}
      />

      <section className="shell mt-12 space-y-8">
        <div className="flex items-center justify-between gap-4">
          <p className="text-sm text-slate-600">{fullItems.length} saved trip{fullItems.length === 1 ? '' : 's'}</p>
          {fullItems.length ? <button className="ghost-button" type="button" onClick={clearWishlist}>Clear wishlist</button> : null}
        </div>

        {fullItems.length ? (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {fullItems.map((item) => (
              <article key={`${item.type}-${item.slug}`} className="surface overflow-hidden rounded-[1.75rem]">
                <img src={item.image || item.source?.image} alt={item.title} className="h-56 w-full object-cover" />
                <div className="p-5">
                  <p className="eyebrow">{item.type}</p>
                  <h2 className="mt-2 text-2xl font-semibold text-slate-950">{item.title}</h2>
                  <p className="mt-2 text-sm text-slate-600">{item.meta || item.source?.country || item.source?.location}</p>
                  <p className="mt-4 text-sm text-slate-700">{formatCurrency(item.price || item.source?.price || item.source?.startingPrice)}</p>
                  <div className="mt-5 flex items-center justify-between gap-4">
                    <Link to={item.type === 'tour' ? `/tours/${item.slug}` : `/destinations/${item.slug}`} className="text-amber-700">View</Link>
                    <button type="button" className="text-sm text-slate-600" onClick={() => removeItem(item.slug, item.type)}>Remove</button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="surface rounded-[2rem] p-12 text-center text-slate-700">
            Nothing saved yet. Use the heart icon on destinations or tours to add items here.
          </div>
        )}
      </section>
    </div>
  );
};

export default Wishlist;
