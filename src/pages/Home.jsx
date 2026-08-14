import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight, Globe2, Heart, MapPin, MountainSnow, PlaneTakeoff, ShieldCheck, Sparkles, Star, Ticket, UtensilsCrossed } from 'lucide-react';
import { DestinationCard } from '../components/DestinationCard';
import { DealCard } from '../components/DealCard';
import { ExperienceCard } from '../components/ExperienceCard';
import { FAQ } from '../components/FAQ';
import { NewsletterForm } from '../components/NewsletterForm';
import { PageHero } from '../components/PageHero';
import { SearchBar } from '../components/SearchBar';
import { SectionHeading } from '../components/SectionHeading';
import { StatGrid } from '../components/StatGrid';
import { TestimonialCard } from '../components/TestimonialCard';
import { TourCard } from '../components/TourCard';
import { blogPosts, deals, destinations, experiences, faqs, stats, testimonials, tours, travelCategories, trustPoints, travelSteps, imageUrl } from '../data/siteData';
import { useSeo } from '../hooks/useSeo';

const heroStats = [
  { label: 'Trusted travelers', value: '25K+' },
  { label: 'Global destinations', value: '80+' },
  { label: 'Curated experiences', value: '150+' },
];

const referenceIcons = [Globe2, PlaneTakeoff, ShieldCheck, MountainSnow, Ticket, UtensilsCrossed, MapPin, Heart];

const Home = () => {
  const navigate = useNavigate();
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const currentTestimonial = testimonials[testimonialIndex % testimonials.length];

  const featuredDestinations = useMemo(() => destinations.slice(0, 8), []);
  const featuredTours = useMemo(() => tours.filter((tour) => tour.featured).slice(0, 4), []);
  const featuredExperiences = useMemo(() => experiences.slice(0, 4), []);
  const featuredBlogs = useMemo(() => blogPosts.slice(0, 3), []);

  useSeo('Voyara Travel | Discover More. Travel Better.', 'Voyara Travel is a premium travel company frontend with curated destinations, tours, booking, and editorial travel content.');

  return (
    <div className="bg-white text-slate-950">
      <section className="border-b border-slate-200/80 bg-[#faf8f4]">
        <div className="shell py-3 text-[11px] font-medium uppercase tracking-[0.32em] text-slate-500">
          Discover More. Travel Better.
        </div>
      </section>

      <section className="shell pb-10 pt-4 lg:pb-14 lg:pt-8">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div className="space-y-8">
            <div className="space-y-5">
              <p className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-slate-500 shadow-sm">
                <Sparkles size={14} /> Travel With Davis
              </p>
              <h1 className="max-w-3xl text-balance text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl lg:text-[5.5rem] lg:leading-[0.95]">
                Let&apos;s Move Your Travel Forward
              </h1>
              <p className="max-w-xl text-lg leading-8 text-slate-950 sm:text-xl">
                Premium journeys, thoughtful planning, and a calmer way to book the next trip.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <button type="button" onClick={() => navigate('/destinations')} className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
                Explore Destinations
              </button>
              <button type="button" onClick={() => navigate('/booking')} className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:border-slate-400 hover:bg-slate-50">
                Plan My Trip
              </button>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {heroStats.map((stat) => (
                <div key={stat.label} className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm">
                  <p className="text-3xl font-semibold text-slate-950">{stat.value}</p>
                  <p className="mt-2 text-sm text-slate-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-5 lg:pt-10">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-[0_18px_50px_rgba(15,23,42,0.08)]">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-medium text-slate-500">We craft seamless travel experiences wherever you want to go.</p>
                  <p className="mt-3 max-w-sm text-sm leading-7 text-slate-500">With Davis_Gee Travels, you get clarity, pace, and confidence at every step of the journey.</p>
                </div>
                <button type="button" className="rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800">
                  Learn More
                </button>
              </div>
            </div>

              <div className="overflow-hidden rounded-[2.5rem] border border-slate-200 bg-slate-100 shadow-[0_28px_80px_rgba(15,23,42,0.12)]">
              <img
                src={imageUrl('hero-container-ship', 1200, 900)}
                alt="Voyara Travel premium editorial travel visual"
                className="h-[420px] w-full object-cover sm:h-[520px]"
              />
            </div>
          </div>
        </div>

        <div className="mt-6 rounded-[2rem] border border-slate-200 bg-white p-4 shadow-sm lg:-mt-12 lg:relative lg:z-10">
          <SearchBar mode="hero" variant="light" className="rounded-[1.5rem] bg-[#f6f3ee] p-4 sm:p-5" />
        </div>
      </section>

      <section className="shell space-y-8 py-6 lg:py-8 destinations-green">
        <SectionHeading
          eyebrow="Popular Destinations"
          title="A premium image-led destination gallery"
          description="Explore destinations chosen for atmosphere, service quality, and memorable travel value."
        />
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {featuredDestinations.map((destination) => (
            <div key={destination.slug} className="h-full">
              <DestinationCard destination={destination} />
            </div>
          ))}
        </div>
      </section>

      <section className="shell grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start py-6 lg:py-8">
        <div className="space-y-6">
          <SectionHeading
            eyebrow="Why Choose Us"
            title="Travel planning that feels considered, not transactional"
            description="The platform is designed around trust, calm interactions, and a premium service feel."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {trustPoints.map((point) => (
              <div key={point.title} className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm">
                <ShieldCheck className="text-slate-950" size={20} />
                <h3 className="mt-4 text-lg font-semibold text-slate-950">{point.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm lg:p-8">
          <SectionHeading
            eyebrow="How It Works"
            title="A simple booking journey in four steps"
            description="Connected cards keep the process easy to understand on every screen size."
          />
          <div className="mt-8 grid gap-4">
            {travelSteps.map((step, index) => (
              <div key={step} className="flex items-center gap-4 rounded-[1.4rem] border border-slate-200 bg-[#faf8f4] p-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-950 text-white font-semibold">0{index + 1}</div>
                <div>
                  <p className="font-medium text-slate-950">{step}</p>
                  <p className="text-sm text-slate-500">A guided, low-friction planning step.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="shell space-y-8 py-6 lg:py-8">
        <SectionHeading
          eyebrow="Travel Categories"
          title="Find a trip that fits the way you travel"
          description="These categories help surface journeys by mood, purpose, and level of indulgence."
        />
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {travelCategories.map((category, index) => {
            const Icon = referenceIcons[index % referenceIcons.length];
            return (
              <article key={category.slug} className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-[0_22px_50px_rgba(15,23,42,0.08)]">
                <div className="relative h-56 overflow-hidden">
                  <img src={category.image} alt={category.title} className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
                  <div className="absolute left-4 top-4 rounded-full bg-white/90 p-3 text-slate-950 shadow-sm backdrop-blur-md"><Icon size={16} /></div>
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-slate-950">{category.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{category.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="shell space-y-8 py-6 lg:py-8 journeys-green">
        <SectionHeading
          eyebrow="Journeys Worth Taking"
          title="Featured tours with real travel energy"
          description="Each itinerary balances comfort, pace, and a clearly defined style of travel."
        />
        <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-4">
          {featuredTours.map((tour) => <TourCard key={tour.slug} tour={tour} />)}
        </div>
      </section>

      <section className="shell grid gap-8 lg:grid-cols-[0.96fr_1.04fr] lg:items-start py-6 lg:py-8">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm lg:p-8">
          <SectionHeading
            eyebrow="Travel Experience"
            title="Editorial layouts for memorable travel styles"
            description="Asymmetric cards create a more premium magazine-like visual rhythm."
          />
          <div className="mt-8 grid gap-8 grid-cols-1 sm:grid-cols-2">
            {featuredExperiences.map((experience) => (
              <div key={experience.slug} className="h-full">
                <ExperienceCard experience={experience} />
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm lg:p-8">
            <SectionHeading
              eyebrow="Testimonials"
              title="Realistic demo feedback from fictional travelers"
              description="Carousel controls let the section feel alive without overdoing motion."
            />
            <div className="mt-5 flex gap-3">
              <button type="button" className="rounded-full border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-50" onClick={() => setTestimonialIndex((value) => (value - 1 + testimonials.length) % testimonials.length)} aria-label="Previous testimonial">
                <ChevronLeft size={16} />
              </button>
              <button type="button" className="rounded-full border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-50" onClick={() => setTestimonialIndex((value) => (value + 1) % testimonials.length)} aria-label="Next testimonial">
                <ChevronRight size={16} />
              </button>
            </div>
            <div className="mt-5">
              <TestimonialCard testimonial={currentTestimonial} />
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm lg:p-8">
            <SectionHeading
              eyebrow="Limited-Time Escapes"
              title="Travel deals with clear value signals"
              description="Static demo promotions show how premium offers can be presented without clutter."
            />
            <div className="mt-6 grid gap-5">
              {deals.map((deal) => <DealCard key={deal.slug} deal={deal} />)}
            </div>
          </div>
        </div>
      </section>

      <section className="shell space-y-8 py-6 lg:py-8">
        <SectionHeading
          eyebrow="Travel Guide"
          title="An editorial blog section that feels current"
          description="Useful travel guidance, destination inspiration, and packing advice in a calm content layout."
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featuredBlogs.map((post) => (
            <article key={post.slug} className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-[0_22px_50px_rgba(15,23,42,0.08)]">
              <img src={post.image} alt={post.title} className="h-56 w-full object-cover" />
              <div className="p-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-500">{post.category}</p>
                <h3 className="mt-3 text-xl font-semibold text-slate-950">{post.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{post.excerpt}</p>
                <div className="mt-4 flex items-center justify-between text-sm text-slate-400">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
                <button type="button" onClick={() => navigate(`/blog/${post.slug}`)} className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-slate-950">
                  Read More <ArrowRight size={15} />
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="shell grid gap-6 py-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:py-8">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm lg:p-8">
          <SectionHeading eyebrow="Newsletter" title="Get travel inspiration in your inbox" description="Seasonal inspiration, practical planning notes, and the occasional offer." />
          <div className="mt-6">
            <NewsletterForm compact={false} />
          </div>
        </div>
        <StatGrid stats={stats} />
      </section>

      <section className="shell py-6 lg:py-8">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm lg:p-8">
          <SectionHeading
            eyebrow="FAQ"
            title="Questions that usually come up before booking"
            description="A small accordion keeps the common questions easy to scan."
          />
          <div className="mt-8">
            <FAQ items={faqs} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
