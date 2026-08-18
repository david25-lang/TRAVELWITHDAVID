import React from 'react';
import { Clock3 } from 'lucide-react';
import { formatCurrency } from '../utils/currency';

export const DealCard = ({ deal }) => (
  <article className="surface card-hover rounded-[1.75rem] p-6">
    <div className="flex items-start justify-between gap-4">
      <div>
        <p className="eyebrow">Limited-Time Escapes</p>
        <h3 className="mt-3 text-2xl font-semibold text-slate-950">{deal.destination}</h3>
      </div>
      <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-semibold text-emerald-700">-{deal.discount}%</span>
    </div>
    <div className="mt-5 grid gap-3 text-sm text-slate-700">
      <p>
        <span className="text-slate-500 line-through">{formatCurrency(deal.oldPrice)}</span>{' '}
        <span className="ml-2 text-xl font-semibold text-slate-950">{formatCurrency(deal.newPrice)}</span>
      </p>
      <p>Travel dates: {deal.travelDates}</p>
      <div className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3 py-2 text-amber-800">
        <Clock3 size={16} /> {deal.countdown}
      </div>
    </div>
  </article>
);
