import React, { useState } from 'react';
import { Send } from 'lucide-react';

const initialForm = {
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
};

export const ContactForm = () => {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({ type: 'idle', message: '' });

  const handleChange = (field, value) => setForm((current) => ({ ...current, [field]: value }));

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!form.name || !form.email || !form.message) {
      setStatus({ type: 'error', message: 'Please fill in the required fields.' });
      return;
    }

    setStatus({ type: 'success', message: 'Thanks. Your message has been captured in this demo frontend.' });
    setForm(initialForm);
  };

  return (
    <form onSubmit={handleSubmit} className="surface-strong rounded-[2rem] p-6 lg:p-8">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="block">
          <span className="premium-label">Name</span>
          <input className="premium-input" value={form.name} onChange={(event) => handleChange('name', event.target.value)} />
        </label>
        <label className="block">
          <span className="premium-label">Email</span>
          <input type="email" className="premium-input" value={form.email} onChange={(event) => handleChange('email', event.target.value)} />
        </label>
        <label className="block">
          <span className="premium-label">Phone</span>
          <input className="premium-input" value={form.phone} onChange={(event) => handleChange('phone', event.target.value)} />
        </label>
        <label className="block">
          <span className="premium-label">Subject</span>
          <input className="premium-input" value={form.subject} onChange={(event) => handleChange('subject', event.target.value)} />
        </label>
        <label className="block md:col-span-2">
          <span className="premium-label">Message</span>
          <textarea rows="6" className="premium-input" value={form.message} onChange={(event) => handleChange('message', event.target.value)} />
        </label>
      </div>

      {status.type !== 'idle' ? (
        <div className={`mt-4 rounded-2xl px-4 py-3 text-sm ${status.type === 'success' ? 'bg-emerald-500/10 text-emerald-100' : 'bg-rose-500/10 text-rose-100'}`}>
          {status.message}
        </div>
      ) : null}

      <button type="submit" className="gold-button mt-6">
        Send Message
        <Send size={16} />
      </button>
    </form>
  );
};
