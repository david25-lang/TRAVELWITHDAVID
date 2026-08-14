import React from 'react';

export const PageHero = ({ eyebrow, title, description, image, children }) => (
  <section className="pt-6 sm:pt-10">
    <div className="shell">
      <div className="surface-strong overflow-hidden rounded-[1.5rem] sm:rounded-[2rem]">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
          <div className="flex flex-col justify-center gap-4 p-5 sm:p-8 lg:gap-6 lg:p-12">
            {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
            <div>
              <h1 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-6xl">{title}</h1>
              {description ? <p className="section-lead mt-3 text-slate-300 sm:text-slate-300">{description}</p> : null}
            </div>
            {children}
          </div>
          <div className="relative min-h-[220px] sm:min-h-[280px] lg:min-h-full">
            <img src={image} alt={title} className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent lg:bg-gradient-to-r" />
          </div>
        </div>
      </div>
    </div>
  </section>
);
