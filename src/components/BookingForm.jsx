import React, { useMemo, useState } from 'react';
import { ArrowLeft, ArrowRight, CalendarDays, CheckCircle2, ClipboardList, CreditCard } from 'lucide-react';
import { destinations, tours } from '../data/siteData';
import { formatCurrency } from '../utils/currency';

const steps = ['Traveler information', 'Trip information', 'Additional requests', 'Booking summary'];

const initialForm = {
  fullName: '',
  email: '',
  phone: '',
  travelers: '2',
  destination: '',
  tour: '',
  travelDates: '',
  accommodation: 'Luxury hotel',
  requests: '',
};

export const BookingForm = ({ initialData = {} }) => {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({ ...initialForm, ...initialData });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const selectedTour = useMemo(() => tours.find((tour) => tour.slug === form.tour), [form.tour]);
  const selectedDestination = useMemo(
    () => destinations.find((destination) => destination.slug === form.destination),
    [form.destination],
  );

  const basePrice = selectedTour?.price || selectedDestination?.startingPrice || 0;
  const travelerCount = Number(form.travelers) || 1;
  const fees = Math.round(basePrice * 0.08);
  const total = basePrice * travelerCount + fees;

  const handleChange = (field, value) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const validateStep = () => {
    if (step === 0) {
      if (!form.fullName || !form.email || !form.phone) {
        setError('Please complete your contact details before continuing.');
        return false;
      }
    }

    if (step === 1) {
      if (!form.destination || !form.travelDates) {
        setError('Please select a destination and travel dates.');
        return false;
      }
    }

    setError('');
    return true;
  };

  const nextStep = () => {
    if (!validateStep()) return;
    setStep((current) => Math.min(current + 1, steps.length - 1));
  };

  const confirmBooking = (event) => {
    event.preventDefault();
    setError('');
    setSuccess(true);
    const bookings = JSON.parse(window.localStorage.getItem('voyara-bookings') || '[]');
    bookings.unshift({ ...form, total, confirmedAt: new Date().toISOString() });
    window.localStorage.setItem('voyara-bookings', JSON.stringify(bookings.slice(0, 8)));
  };

  return (
    <form onSubmit={confirmBooking} className="surface-strong rounded-[2rem] p-6 lg:p-8">
      <div className="mb-8 grid gap-3 sm:grid-cols-4">
        {steps.map((label, index) => (
          <div key={label} className={`rounded-2xl px-4 py-3 text-sm ${index <= step ? 'bg-amber-300 text-slate-950' : 'bg-white/5 text-slate-400'}`}>
            <span className="block font-semibold">Step {index + 1}</span>
            {label}
          </div>
        ))}
      </div>

      {error ? <div className="mb-6 rounded-2xl border border-rose-500/20 bg-rose-500/10 px-4 py-3 text-sm text-rose-100">{error}</div> : null}
      {success ? (
        <div className="mb-6 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-100">
          Booking saved successfully. This demo stores the booking locally.
        </div>
      ) : null}

      {step === 0 ? (
        <div className="grid gap-4 md:grid-cols-2">
          <label className="block md:col-span-2">
            <span className="premium-label">Full name</span>
            <input className="premium-input" value={form.fullName} onChange={(event) => handleChange('fullName', event.target.value)} required />
          </label>
          <label className="block">
            <span className="premium-label">Email</span>
            <input type="email" className="premium-input" value={form.email} onChange={(event) => handleChange('email', event.target.value)} required />
          </label>
          <label className="block">
            <span className="premium-label">Phone</span>
            <input className="premium-input" value={form.phone} onChange={(event) => handleChange('phone', event.target.value)} required />
          </label>
          <label className="block">
            <span className="premium-label">Number of travelers</span>
            <select className="premium-select" value={form.travelers} onChange={(event) => handleChange('travelers', event.target.value)}>
              {['1', '2', '3', '4', '5', '6'].map((option) => <option key={option} value={option}>{option}</option>)}
            </select>
          </label>
        </div>
      ) : null}

      {step === 1 ? (
        <div className="grid gap-4 md:grid-cols-2">
          <label className="block">
            <span className="premium-label">Destination</span>
            <select className="premium-select" value={form.destination} onChange={(event) => handleChange('destination', event.target.value)}>
              <option value="">Select destination</option>
              {destinations.map((destination) => <option key={destination.slug} value={destination.slug}>{destination.name}</option>)}
            </select>
          </label>
          <label className="block">
            <span className="premium-label">Tour</span>
            <select className="premium-select" value={form.tour} onChange={(event) => handleChange('tour', event.target.value)}>
              <option value="">Select tour</option>
              {tours.map((tour) => <option key={tour.slug} value={tour.slug}>{tour.title}</option>)}
            </select>
          </label>
          <label className="block">
            <span className="premium-label">Travel dates</span>
            <input type="text" placeholder="10 Oct - 16 Oct 2026" className="premium-input" value={form.travelDates} onChange={(event) => handleChange('travelDates', event.target.value)} required />
          </label>
          <label className="block">
            <span className="premium-label">Accommodation preference</span>
            <select className="premium-select" value={form.accommodation} onChange={(event) => handleChange('accommodation', event.target.value)}>
              <option>Luxury hotel</option>
              <option>Boutique hotel</option>
              <option>Resort villa</option>
              <option>Serviced apartment</option>
            </select>
          </label>
        </div>
      ) : null}

      {step === 2 ? (
        <div className="grid gap-4">
          <label className="block">
            <span className="premium-label">Additional requests</span>
            <textarea rows="6" className="premium-input" value={form.requests} onChange={(event) => handleChange('requests', event.target.value)} placeholder="Airport transfer preferences, dietary needs, anniversary setup..." />
          </label>
        </div>
      ) : null}

      {step === 3 ? (
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4 rounded-[1.75rem] border border-white/10 bg-white/5 p-5">
            <h3 className="text-xl font-semibold text-white">Booking summary</h3>
            <dl className="space-y-4 text-sm text-slate-300">
              <div className="flex items-center justify-between gap-4"><dt>Trip</dt><dd className="text-white">{selectedTour?.title || selectedDestination?.name || 'Select a trip'}</dd></div>
              <div className="flex items-center justify-between gap-4"><dt>Dates</dt><dd className="text-white">{form.travelDates || 'Not selected'}</dd></div>
              <div className="flex items-center justify-between gap-4"><dt>Travelers</dt><dd className="text-white">{travelerCount}</dd></div>
              <div className="flex items-center justify-between gap-4"><dt>Price</dt><dd className="text-white">{formatCurrency(basePrice)}</dd></div>
              <div className="flex items-center justify-between gap-4"><dt>Fees</dt><dd className="text-white">{formatCurrency(fees)}</dd></div>
              <div className="flex items-center justify-between gap-4 border-t border-white/10 pt-4 text-base"><dt>Total</dt><dd className="text-amber-200">{formatCurrency(total)}</dd></div>
            </dl>
          </div>
          <div className="space-y-4 rounded-[1.75rem] border border-amber-300/20 bg-amber-300/10 p-5 text-amber-50">
            <div className="flex items-center gap-3 text-amber-200"><ClipboardList size={18} /> Final review</div>
            <p className="text-sm leading-7 text-amber-50/90">
              Confirming this booking saves the current details locally and demonstrates the final step of the premium booking flow.
            </p>
          </div>
        </div>
      ) : null}

      <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
        <button type="button" onClick={() => setStep((current) => Math.max(current - 1, 0))} className={`ghost-button ${step === 0 ? 'pointer-events-none opacity-50' : ''}`}>
          <ArrowLeft size={16} />
          Back
        </button>

        <div className="flex flex-wrap gap-3">
          {step < 3 ? (
            <button type="button" onClick={nextStep} className="gold-button">
              Next
              <ArrowRight size={16} />
            </button>
          ) : (
            <button type="submit" className="gold-button">
              <CreditCard size={16} />
              Confirm Booking
            </button>
          )}
        </div>
      </div>
    </form>
  );
};
