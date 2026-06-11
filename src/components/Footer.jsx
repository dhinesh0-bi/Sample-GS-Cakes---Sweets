import { Link } from 'react-router-dom';
import {
  Phone,
  MapPin,
  Clock,
  Heart,
  CakeSlice,
  ChevronRight
} from 'lucide-react';

const FOOTER_NAV = [
  { name: 'Home',     to: '/'        },
  { name: 'Menu',     to: '/menu'    },
  { name: 'About Us', to: '/about'   },
  { name: 'Reviews',  to: '/reviews' },
  { name: 'Contact',  to: '/contact' },
];

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo" aria-label="Footer">
      <div className="container">
        <div className="footer__grid">

          {/* Column 1 — Brand */}
          <div className="footer__col">
            <Link to="/" className="footer__logo-link">
              <div className="footer__logo-icon" aria-hidden="true">
                <CakeSlice size={16} color="#0E0703" strokeWidth={2.2} />
              </div>
              <h2 className="footer__brand-name">GS Cakes &amp; Sweets</h2>
            </Link>
            <p className="footer__brand-desc">
              Indulging your cravings with fresh cakes, traditional sweets, and
              crispy snacks. Vellore's most-loved neighbourhood bakery.
            </p>
          </div>

          {/* Column 2 — Quick Links */}
          <div className="footer__col">
            <h3 className="footer__col-title">Quick Links</h3>
            <ul className="footer__nav-list">
              {FOOTER_NAV.map(link => (
                <li key={link.name}>
                  <Link to={link.to} className="footer__nav-link">
                    <ChevronRight size={13} />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Contact */}
          <div className="footer__col">
            <h3 className="footer__col-title">Get in Touch</h3>
            <div className="footer__contact-list">
              <a
                href="https://maps.google.com/?q=174,+Arni+Rd,+Virupatchipuram,+RV+Nagar,+Vellore,+Tamil+Nadu+632002"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__contact-row"
              >
                <div className="footer__contact-icon" aria-hidden="true">
                  <MapPin size={15} />
                </div>
                <span className="footer__contact-text">
                  174, Arni Rd, Virupatchipuram,
                  RV Nagar, Vellore – 632002
                </span>
              </a>

              <a href="tel:09944459835" className="footer__contact-row">
                <div className="footer__contact-icon" aria-hidden="true">
                  <Phone size={15} />
                </div>
                <span className="footer__contact-text" style={{ fontWeight: 600 }}>
                  099444 59835
                </span>
              </a>

              <div className="footer__contact-row" style={{ cursor: 'default' }}>
                <div className="footer__contact-icon" aria-hidden="true">
                  <Clock size={15} />
                </div>
                <span className="footer__contact-text">
                  Open daily: 8 AM – 10 PM
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer__bottom">
        <div className="container">
          <div className="footer__bottom-inner">
            <p>&copy; {new Date().getFullYear()} GS Cakes and Sweets. All rights reserved.</p>
            <p className="footer__crafted">
              Crafted with{' '}
              <Heart size={11} fill="var(--color-gold)" style={{ color: 'var(--color-gold)' }} />{' '}
              in Vellore, Tamil Nadu
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
