import React from 'react';
import { Compass, Globe, Mail, MapPin, MessageCircle, Phone, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { NewsletterForm } from './NewsletterForm';

const columns = {
  Company: [
    { label: 'About', to: '/about' },
    { label: 'Careers', to: '/about' },
    { label: 'Contact', to: '/contact' },
  ],
  Explore: [
    { label: 'Destinations', to: '/destinations' },
    { label: 'Tours', to: '/tours' },
    { label: 'Experiences', to: '/experiences' },
    { label: 'Travel Guide', to: '/blog' },
  ],
  Support: [
    { label: 'Help Center', to: '/contact' },
    { label: 'FAQ', to: '/booking' },
    { label: 'Booking Policy', to: '/booking' },
    { label: 'Cancellation Policy', to: '/booking' },
  ],
};

const socials = [Globe, MessageCircle, Share2, Compass];

export const Footer = () => (
  <footer className="mt-24 border-t border-white/10 bg-slate-950/95">
    <div className="shell py-16 lg:py-20">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-8">
          <div>
            <p className="eyebrow">Davis_Gee Travel</p>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-white sm:text-3xl lg:text-4xl">Get travel inspiration in your inbox.</h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
              Premium trip ideas, seasonal offers, and practical destination notes delivered with a calm cadence.
            </p>
          </div>
          <NewsletterForm compact />
          <div className="flex flex-col gap-3 text-sm text-slate-300 sm:flex-row sm:flex-wrap sm:items-center">
            <span className="inline-flex items-center gap-2"><Mail size={16} /> davidyinka660@gmail.com</span>
            <span className="inline-flex items-center gap-2"><Phone size={16} /> +2349135074211</span>
            <span className="inline-flex items-center gap-2"><MapPin size={16} /> Lagos, Nigeria</span>
          </div>
        </div>

        <div className="surface-strong rounded-[1.5rem] p-4 sm:rounded-[2rem] sm:p-6 lg:p-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {Object.entries(columns).map(([title, items]) => (
              <div key={title}>
                <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-200">{title}</h3>
                <ul className="mt-4 space-y-3 text-sm text-slate-300">
                  {items.map((item) => (
                    <li key={item.label}>
                      <Link to={item.to} className="transition-colors hover:text-white">
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-8 flex items-center gap-3">
            {socials.map((Icon, index) => (
              <a key={index} href="#" aria-label="Social link" className="icon-button">
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
        <p>© 2026 Davis_Gee Travel. All rights reserved.</p>
        <p>Discover More. Travel Better.</p>
      </div>
    </div>
  </footer>
);
