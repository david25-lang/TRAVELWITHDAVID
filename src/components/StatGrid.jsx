import React from 'react';

export const StatGrid = ({ stats }) => (
  <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
    {stats.map((stat) => (
      <div key={stat.label} className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5 shadow-sm">
        <p className="text-3xl font-semibold text-slate-950">{stat.value}</p>
        <p className="mt-2 text-sm text-slate-600">{stat.label}</p>
      </div>
    ))}
  </div>
);
