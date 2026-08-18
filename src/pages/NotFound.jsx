import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div className="shell flex min-h-[70vh] flex-col items-center justify-center text-center">
    <p className="eyebrow">404</p>
    <h1 className="mt-4 text-4xl font-semibold text-slate-950">This page could not be found</h1>
    <p className="mt-4 max-w-xl text-slate-700">The link may have changed, or the page may not exist in this demo frontend.</p>
    <Link to="/" className="gold-button mt-8">Return Home</Link>
  </div>
);

export default NotFound;
