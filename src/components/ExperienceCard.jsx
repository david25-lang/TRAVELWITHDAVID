import React from 'react';

export const ExperienceCard = ({ experience }) => (
  <article className="surface card-hover overflow-hidden rounded-[1.75rem]">
    <div className="relative h-72 overflow-hidden">
      <img src={experience.image} alt={experience.title} className="h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/25 to-transparent" />
      <div className="absolute bottom-4 left-4 right-4">
        <h3 className="text-2xl font-semibold text-white">{experience.title}</h3>
      </div>
    </div>
    <div className="p-5">
      <p className="text-sm leading-7 text-slate-300">{experience.description}</p>
    </div>
  </article>
);
