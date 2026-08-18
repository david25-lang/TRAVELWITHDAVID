import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export const Layout = () => (
  <div className="app-shell min-h-screen overflow-x-hidden">
    <div className="ambient-background" aria-hidden="true">
      {Array.from({ length: 10 }, (_, index) => <span key={index} className="ambient-particle" />)}
    </div>
    <Navbar />
    <main className="relative z-10">
      <Outlet />
    </main>
    <div className="relative z-10">
      <Footer />
    </div>
  </div>
);
