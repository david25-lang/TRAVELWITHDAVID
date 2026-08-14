import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { ArrowRight, Menu, Search, Sparkles, X } from 'lucide-react';

const links = [
  { label: 'Home', to: '/' },
  { label: 'Destinations', to: '/destinations' },
  { label: 'Tours', to: '/tours' },
  { label: 'Experiences', to: '/experiences' },
  { label: 'Travel Guide', to: '/blog' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-white/10 bg-slate-950/95 shadow-[0_12px_30px_rgba(2,6,23,0.45)] backdrop-blur-xl transition-all duration-300 ${
        isScrolled ? 'bg-slate-950/95' : 'bg-slate-950/95'
      }`}
    >
      <div className="shell">
        <div className="flex h-16 items-center justify-between gap-3 sm:h-18 lg:h-20">
          <Link to="/" className="flex items-center gap-3" aria-label="Davis_Gee Travel home">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-amber-300 text-slate-950 shadow-[0_10px_24px_rgba(252,211,77,0.38)] sm:h-11 sm:w-11">
              <Sparkles size={18} />
            </span>
            <span className="flex flex-col leading-tight">
              <span className="text-[10px] font-semibold tracking-[0.22em] text-white sm:text-xs">FLOURISH</span>
              <span className="text-[9px] uppercase tracking-[0.3em] text-slate-400 sm:text-[10px]">Travel</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    isActive ? 'bg-white/10 text-white' : 'text-slate-300 hover:text-white'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <button type="button" onClick={() => navigate('/tours')} className="icon-button" aria-label="Search trips">
              <Search size={18} />
            </button>
            <Link to="/booking" className="gold-button">
              Book a Trip
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <button type="button" onClick={() => navigate('/tours')} className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-white/10" aria-label="Search trips">
              <Search size={18} />
            </button>
            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-white/10"
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={`overflow-hidden border-t border-white/10 bg-slate-950 transition-all duration-300 lg:hidden ${menuOpen ? 'max-h-[36rem] opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="shell py-4">
          <div className="rounded-[1.5rem] border border-white/10 bg-slate-900/90 p-3 shadow-[0_16px_40px_rgba(2,6,23,0.45)]">
            <div className="grid gap-2">
              {links.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    `rounded-2xl px-4 py-3 text-sm font-medium transition-colors ${
                      isActive ? 'bg-white/10 text-white' : 'text-slate-300 hover:bg-white/5 hover:text-white'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
            <Link to="/booking" className="gold-button mt-4 w-full justify-center">
              Book a Trip
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
