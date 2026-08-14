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
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-950/90 shadow-2xl backdrop-blur-xl' : 'bg-transparent'}`}>
      <div className="shell">
        <div className="flex h-20 items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-3" aria-label="Voyara Travel home">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-300 text-slate-950 shadow-glow">
              <Sparkles size={18} />
            </span>
            <span className="flex flex-col leading-tight">
              <span className="text-sm font-semibold tracking-[0.28em] text-white">FLOURISH</span>
              <span className="text-xs uppercase tracking-[0.35em] text-slate-400">Travel</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `rounded-full px-4 py-2 text-sm font-medium transition-colors ${isActive ? 'bg-slate-950 text-white' : 'text-slate-700 hover:text-slate-950'}`
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
            <button type="button" onClick={() => navigate('/tours')} className="icon-button" aria-label="Search trips">
              <Search size={18} />
            </button>
            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              className="icon-button"
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
        className={`overflow-hidden border-b border-white/10 bg-slate-950/98 transition-all duration-300 lg:hidden ${menuOpen ? 'max-h-[32rem] opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="shell py-4">
          <div className="surface-strong rounded-[1.75rem] p-4">
            <div className="grid gap-2">
              {links.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    `rounded-2xl px-4 py-3 text-sm font-medium ${isActive ? 'bg-slate-950 text-white' : 'text-slate-700 hover:text-slate-950'}`
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
