import React, { useState } from 'react';
import { Mail, Send } from 'lucide-react';

export const NewsletterForm = ({ compact = false }) => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email) {
      setMessage('Enter a valid email address to subscribe.');
      return;
    }

    setMessage('Subscribed. This demo keeps the email in local state only.');
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit} className={compact ? 'space-y-3' : 'surface rounded-[1.75rem] p-5'}>
      {!compact ? <div className="mb-4 inline-flex items-center gap-2 text-amber-200"><Mail size={16} /> Newsletter</div> : null}
      <div className="flex gap-3 flex-col sm:flex-row">
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Enter your email"
          className="premium-input flex-1"
        />
        <button type="submit" className="gold-button shrink-0">
          Subscribe
          <Send size={15} />
        </button>
      </div>
      {message ? <p className="mt-3 text-sm text-slate-400">{message}</p> : null}
    </form>
  );
};
