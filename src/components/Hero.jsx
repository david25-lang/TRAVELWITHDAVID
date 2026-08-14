import React from 'react';
import { ArrowRight, CalendarDays, MapPin, Search, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SearchBar } from './SearchBar';
import { imageUrl } from '../data/siteData';

export const Hero = ({ onSearch }) => (
  <section className="relative overflow-hidden pt-6 sm:pt-8">
    <div className="shell">
      <div className="surface-strong relative min-h-[760px] overflow-hidden rounded-[2rem] lg:min-h-[820px]">
        <div className="absolute inset-0">
          <img
            src={imageUrl('hero-lagoon', 1600, 1100)}
            alt="Premium tropical travel destination"
            className="h-full w-full object-cover"
          />
          <div className="hero-mask absolute inset-0" />
        </div>

        <div className="relative z-10 flex min-h-[760px] flex-col justify-between p-6 sm:p-8 lg:min-h-[820px] lg:p-12">
          <div className="flex flex-wrap items-center gap-3">
            <span className="pill bg-white/10 text-white">Premium curated journeys</span>
            <span className="pill bg-amber-300/15 text-amber-100">Tailored planning</span>
          </div>

          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div className="max-w-3xl space-y-6">
              <p className="eyebrow text-amber-200">Voyara Travel</p>
              <h1 className="text-balance text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
                Explore the World on Your Terms
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl">
                Curated journeys, unforgettable experiences, and seamless travel planning designed around you.
              </p>

              <div className="flex flex-wrap gap-3">
                <Link to="/destinations" className="gold-button">
                  Explore Destinations
                  <ArrowRight size={16} />
                </Link>
                <Link to="/booking" className="ghost-button">
                  Plan My Trip
                </Link>
              </div>

              <div className="grid gap-3 pt-4 sm:grid-cols-3">
                {[
                  { icon: MapPin, label: '80+ Destinations' },
                  { icon: CalendarDays, label: 'Flexible Dates' },
                  { icon: Users, label: 'Expert Support' },
                ].map((item) => (
                  <div key={item.label} className="surface rounded-2xl px-4 py-3 text-sm text-slate-200">
                    <item.icon className="mb-2 text-amber-300" size={18} />
                    {item.label}
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:pl-8">
              <div className="surface-strong rounded-[2rem] p-4 sm:p-5 lg:p-6">
                <div className="mb-4 flex items-center gap-3">
                  <span className="icon-button border-amber-300/20 bg-amber-300/15 text-amber-200">
                    <Search size={16} />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-white">Find the right journey</p>
                    <p className="text-sm text-slate-400">Search a premium trip in seconds</p>
                  </div>
                </div>
                <SearchBar mode="hero" onSearch={onSearch} compact />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
