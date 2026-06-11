import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Phone,
  Menu,
  X,
  ChevronRight,
  CakeSlice
} from 'lucide-react';

const NAV_LINKS = [
  { name: 'Home',     to: '/'        },
  { name: 'Menu',     to: '/menu'    },
  { name: 'About',    to: '/about'   },
  { name: 'Reviews',  to: '/reviews' },
  { name: 'Contact',  to: '/contact' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled]     = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const closeMenu = () => setMobileOpen(false);

  return (
    <>
      <header className={`navbar${scrolled ? ' scrolled' : ''}`} role="banner">
        <div className="navbar__inner">

          {/* Brand */}
          <Link to="/" className="navbar__brand" aria-label="GS Cakes & Sweets – Home">
            <div className="navbar__brand-icon" aria-hidden="true">
              <CakeSlice size={18} color="#0E0703" strokeWidth={2.2} />
            </div>
            <div className="navbar__brand-text">
              <span className="navbar__brand-name">GS Cakes &amp; Sweets</span>
              <span className="navbar__brand-tagline">Premium Bakery · Vellore</span>
            </div>
          </Link>

          {/* Desktop Links */}
          <nav aria-label="Primary navigation">
            <ul className="navbar__links">
              {NAV_LINKS.map(link => (
                <li key={link.name}>
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      `navbar__link${isActive ? ' navbar__link--active' : ''}`
                    }
                    end={link.to === '/'}
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop CTA */}
          <div className="navbar__cta">
            <a href="tel:09944459835" className="btn btn-primary">
              <Phone size={13} />
              Call to Order
            </a>
          </div>

          {/* Hamburger */}
          <button
            className="navbar__hamburger"
            onClick={() => setMobileOpen(o => !o)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="drawer"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.32, ease: [0.25, 1, 0.5, 1] }}
            className="mobile-drawer"
            aria-modal="true"
            role="dialog"
          >
            <ul className="mobile-drawer__links">
              {NAV_LINKS.map(link => (
                <li key={link.name}>
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      `mobile-drawer__link${isActive ? ' mobile-drawer__link--active' : ''}`
                    }
                    onClick={closeMenu}
                    end={link.to === '/'}
                  >
                    {link.name}
                    <ChevronRight size={18} style={{ color: 'var(--color-gold)', opacity: 0.6 }} />
                  </NavLink>
                </li>
              ))}
            </ul>

            <div className="mobile-drawer__footer">
              <a
                href="tel:09944459835"
                className="btn btn-primary"
                style={{ width: '100%', justifyContent: 'center' }}
                onClick={closeMenu}
              >
                <Phone size={16} />
                Call: 099444 59835
              </a>
              <p className="mobile-drawer__hours">Open daily · 8:00 AM – 10:00 PM</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
