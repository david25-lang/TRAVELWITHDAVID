import React from 'react';
import { Compass, Globe, Mail, MapPin, MessageCircle, Phone, Share2 } from 'lucide-react';
import { ContactForm } from '../components/ContactForm';
import { PageHero } from '../components/PageHero';
import { destinations } from '../data/siteData';
import { useSeo } from '../hooks/useSeo';

const Contact = () => {
  useSeo('Contact | Voyara Travel', 'Contact Voyara Travel for premium travel planning, support, and custom trip requests.');

  return (
    <div className="pb-24">
      <PageHero
        eyebrow="Contact"
        title="Talk to Voyara about your next trip"
        description="Use the contact form for custom requests, planning support, and general travel questions."
        image={destinations[5].image}
      />

      <section className="shell mt-12 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        <ContactForm />
        <aside className="space-y-6">
          <div className="surface rounded-[2rem] p-6 lg:p-8">
            <h2 className="text-2xl font-semibold text-slate-950">Contact details</h2>
            <div className="mt-6 space-y-4 text-sm text-slate-600">
              <p className="inline-flex items-center gap-3 text-slate-700"><Mail size={16} className="text-amber-300" /> davidyinka660@gmail.com</p>
              <p className="inline-flex items-center gap-3 text-slate-700"><Phone size={16} className="text-amber-300" /> +2349135074211</p>
              <p className="inline-flex items-center gap-3 text-slate-700"><MapPin size={16} className="text-amber-300" /> Lagos, Nigeria</p>
            </div>
            <div className="mt-6 rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5 text-sm text-slate-600">
              Monday - Friday: 9:00 AM - 6:00 PM
            </div>
          </div>
          <div className="surface rounded-[2rem] p-6 lg:p-8">
            <h2 className="text-2xl font-semibold text-slate-950">Follow us</h2>
            <div className="mt-6 flex flex-wrap gap-3">
              {[Globe, MessageCircle, Share2, Compass].map((Icon, index) => (
                <a key={index} href="#" className="icon-button" aria-label="Social link">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
          <div className="surface rounded-[2rem] p-6 lg:p-8">
            <h2 className="text-2xl font-semibold text-slate-950">Map placeholder</h2>
            <div className="mt-6 grid h-64 place-items-center rounded-[1.5rem] border border-dashed border-slate-300 bg-slate-50 text-sm text-slate-500">
              Premium office map preview
            </div>
          </div>
        </aside>
      </section>
    </div>
  );
};

export default Contact;
