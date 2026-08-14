import React from 'react';

export const PageHero = ({ eyebrow, title, description, image, children }) => (
  <section className="pt-6 sm:pt-10">
    <div className="shell">
      <div className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-[#edf2f6] shadow-[0_20px_80px_rgba(15,23,42,0.08)] sm:rounded-[2rem] lg:border-white/10 lg:bg-slate-900 lg:shadow-[0_25px_100px_rgba(2,6,23,0.45)]">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
          <div className="flex flex-col justify-center gap-4 bg-[#edf2f6] p-5 text-slate-900 sm:p-8 lg:gap-6 lg:bg-transparent lg:p-12 lg:text-white">
            {eyebrow ? <span className="eyebrow text-slate-900 lg:text-slate-200">{eyebrow}</span> : null}
            <div>
              <h1 className="text-balance text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl lg:text-6xl lg:text-white">{title}</h1>
              {description ? <p className="mt-3 text-base leading-8 text-slate-900 sm:text-lg lg:text-slate-200">{description}</p> : null}
            </div>
            {children}
          </div>
          <div className="relative hidden min-h-[220px] sm:min-h-[280px] lg:block lg:min-h-full">
            <img src={image} alt={title} className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent lg:bg-gradient-to-r" />
          </div>
        </div>
      </div>
    </div>
  </section>
);
