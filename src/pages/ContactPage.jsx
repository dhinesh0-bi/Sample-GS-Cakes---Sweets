import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Phone,
  MapPin,
  Clock,
  Sparkles,
  Truck,
  ShoppingBag,
  Check,
  ChevronRight,
  Mail,
  Navigation
} from 'lucide-react';

const fadeUp = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.25, 1, 0.5, 1] } }
};

const stagger = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const SERVICE_OPTIONS = [
  {
    icon: Truck,
    title: 'Delivery',
    desc: 'We deliver fresh cakes, sweets, and ice cream right to your doorstep across Vellore.',
  },
  {
    icon: ShoppingBag,
    title: 'Takeaway',
    desc: 'Order by phone and pick up your freshly prepared treats at our store — no waiting!',
  },
  {
    icon: Check,
    title: 'In-Store',
    desc: 'Visit our shop to browse our full display and choose from today\'s freshest selection.',
  },
];

export default function ContactPage() {
  return (
    <>
      {/* ══════════ PAGE HEADER ══════════ */}
      <section className="page-hero" aria-label="Contact Page Header">
        <div className="page-hero__bg" aria-hidden="true">
          <img src="/images/bakery_interior.png" alt="" className="page-hero__bg-img" />
          <div className="page-hero__overlay" />
        </div>
        <div className="page-hero__content">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.span className="page-hero__eyebrow" variants={fadeUp}>
              <Sparkles size={13} className="animate-spin-slow" />
              Get in Touch
            </motion.span>
            <motion.h1 className="page-hero__title" variants={fadeUp}>
              Visit <span>Our Store</span>
            </motion.h1>
            <motion.p className="page-hero__subtitle" variants={fadeUp}>
              Find us, call us, or visit us — we'd love to serve you!
            </motion.p>
          </motion.div>
        </div>
      </section>


      {/* ══════════ CONTACT INFO + MAP ══════════ */}
      <section className="contact-main section" aria-label="Contact Details">
        <div className="container">
          <div className="contact-main__grid">

            {/* Info Column */}
            <motion.div
              className="contact-info"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={stagger}
            >
              <motion.div variants={fadeUp}>
                <span className="section-eyebrow">Contact Information</span>
                <h2 className="contact-info__heading">We'd Love to Hear from You</h2>
              </motion.div>

              {/* Location */}
              <motion.a
                href="https://maps.google.com/?q=174,+Arni+Rd,+Virupatchipuram,+RV+Nagar,+Vellore,+Tamil+Nadu+632002"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-detail-card"
                variants={fadeUp}
                aria-label="Get directions on Google Maps"
              >
                <div className="contact-detail-card__icon">
                  <MapPin size={22} />
                </div>
                <div>
                  <h3 className="contact-detail-card__label">Our Location</h3>
                  <p className="contact-detail-card__text">
                    174, Arni Rd, Virupatchipuram,<br />
                    RV Nagar, Vellore – 632002
                  </p>
                  <span className="contact-detail-card__action">
                    <Navigation size={13} /> Get Directions
                  </span>
                </div>
              </motion.a>

              {/* Phone */}
              <motion.a
                href="tel:09944459835"
                className="contact-detail-card"
                variants={fadeUp}
                aria-label="Call us"
              >
                <div className="contact-detail-card__icon">
                  <Phone size={22} />
                </div>
                <div>
                  <h3 className="contact-detail-card__label">Phone Order</h3>
                  <p className="contact-detail-card__text" style={{ fontWeight: 700, fontSize: '1.15rem' }}>
                    099444 59835
                  </p>
                  <span className="contact-detail-card__action">
                    <Phone size={13} /> Tap to Call
                  </span>
                </div>
              </motion.a>

              {/* Hours */}
              <motion.div className="contact-detail-card" variants={fadeUp} style={{ cursor: 'default' }}>
                <div className="contact-detail-card__icon">
                  <Clock size={22} />
                </div>
                <div>
                  <h3 className="contact-detail-card__label">Hours of Service</h3>
                  <p className="contact-detail-card__text">
                    Monday – Sunday<br />
                    <strong>8:00 AM – 10:00 PM</strong>
                  </p>
                  <span className="contact-detail-card__status">
                    <span className="contact-detail-card__dot" /> Open Now
                  </span>
                </div>
              </motion.div>
            </motion.div>

            {/* Map Column */}
            <motion.div
              className="contact-map"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={fadeUp}
            >
              <div className="contact-map__wrapper">
                <iframe
                  title="GS Cakes and Sweets Location Map"
                  src="https://maps.google.com/maps?q=174,%20Arni%20Rd,%20Virupatchipuram,%20RV%20Nagar,%20Vellore,%20Tamil%20Nadu%20632002&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  aria-label="Google map showing GS Cakes and Sweets location"
                />
              </div>
            </motion.div>

          </div>
        </div>
      </section>


      {/* ══════════ SERVICE OPTIONS ══════════ */}
      <section className="services section" aria-label="Service Options">
        <div className="container">
          <div className="section-header section-header--dark">
            <span className="section-header__eyebrow">How to Order</span>
            <h2 className="section-header__title">Service Options</h2>
          </div>

          <motion.div
            className="services-grid"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {SERVICE_OPTIONS.map(svc => (
              <motion.div
                key={svc.title}
                className="service-card"
                variants={fadeUp}
              >
                <div className="service-card__icon">
                  <svc.icon size={28} />
                </div>
                <h3 className="service-card__title">{svc.title}</h3>
                <p className="service-card__desc">{svc.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>


      {/* ══════════ CTA ══════════ */}
      <section className="cta-banner" aria-label="Order CTA">
        <div className="cta-banner__bg" aria-hidden="true" />
        <div className="container">
          <motion.div
            className="cta-banner__content"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <span className="cta-banner__eyebrow">
              <Sparkles size={14} /> Start Your Order
            </span>
            <h2 className="cta-banner__title">
              Craving Something <span>Sweet</span>?
            </h2>
            <p className="cta-banner__desc">
              Browse our menu or call us directly. We deliver across Vellore!
            </p>
            <div className="cta-banner__actions">
              <a href="tel:09944459835" className="btn btn-primary">
                <Phone size={15} />
                Call: 099444 59835
              </a>
              <Link to="/menu" className="btn btn-secondary">
                Browse Menu
                <ChevronRight size={15} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
