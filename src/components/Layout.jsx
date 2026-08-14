import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export const Layout = () => (
  <div className="min-h-screen overflow-x-hidden">
    <Navbar />
    <main>
      <Outlet />
    </main>
    <Footer />
  </div>
);
