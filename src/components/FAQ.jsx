import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export const FAQ = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const expanded = openIndex === index;

        return (
          <div key={item.question} className="surface rounded-[1.5rem]">
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              onClick={() => setOpenIndex(expanded ? -1 : index)}
              aria-expanded={expanded}
            >
              <span className="text-sm font-medium text-slate-950 sm:text-base">{item.question}</span>
              <ChevronDown className={`shrink-0 text-slate-900 transition-transform ${expanded ? 'rotate-180' : ''}`} size={18} />
            </button>
            {expanded ? <div className="px-5 pb-5 text-sm leading-7 text-slate-900">{item.answer}</div> : null}
          </div>
        );
      })}
    </div>
  );
};
