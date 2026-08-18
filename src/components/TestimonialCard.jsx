import React from 'react';
import { Star } from 'lucide-react';

export const TestimonialCard = ({ testimonial }) => (
  <article className="surface rounded-[1.75rem] p-6 lg:p-8">
    <div className="flex items-start gap-4">
      <img src={testimonial.image} alt={testimonial.name} className="h-16 w-16 rounded-2xl object-cover" />
      <div className="flex-1">
        <div className="flex items-center gap-1 text-amber-600">
          {Array.from({ length: testimonial.rating }).map((_, index) => (
            <Star key={index} size={16} fill="currentColor" />
          ))}
        </div>
        <h3 className="mt-3 text-lg font-semibold text-slate-950">{testimonial.name}</h3>
        <p className="text-sm text-slate-600">{testimonial.location}</p>
      </div>
    </div>
    <p className="mt-6 text-base leading-8 text-slate-700">“{testimonial.quote}”</p>
  </article>
);
