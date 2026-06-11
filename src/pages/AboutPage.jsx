import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Check,
  Star,
  Sparkles,
  ChevronRight,
  Award,
  ShieldCheck,
  Leaf,
  Heart,
  Users,
  Clock
} from 'lucide-react';

const fadeUp = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.25, 1, 0.5, 1] } }
};

const stagger = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const VALUES = [
  {
    icon: ShieldCheck,
    title: 'Strict Hygiene',
    desc: 'Every product is prepared in a spotless kitchen following the highest hygiene standards and food safety protocols.',
  },
  {
    icon: Leaf,
    title: 'Fresh Ingredients',
    desc: 'We source the finest quality raw materials daily — from premium flour and butter to farm-fresh eggs and real fruit.',
  },
  {
    icon: Award,
    title: 'Artisan Craftsmanship',
    desc: 'Each cake and sweet is handcrafted by our experienced bakers with decades of combined expertise.',
  },
  {
    icon: Heart,
    title: 'Made with Love',
    desc: 'We treat every order like it\'s for our own family. Passion and dedication go into every single creation.',
  },
  {
    icon: Users,
    title: 'Community First',
    desc: 'As a proud local business, we\'re committed to serving our Vellore community with warmth and affordability.',
  },
  {
    icon: Clock,
    title: 'Always Fresh',
    desc: 'No day-old products here. Everything is baked and prepared fresh daily, so you always get the best.',
  },
];

const FEATURES = [
  'Strict hygiene protocols',
  'Affordable luxury prices',
  'Freshly baked daily',
  'Custom party designs',
  'Traditional rich recipes',
  'Premium raw materials',
];

export default function AboutPage() {
  return (
    <>
      {/* ══════════ PAGE HEADER ══════════ */}
      <section className="page-hero" aria-label="About Page Header">
        <div className="page-hero__bg" aria-hidden="true">
          <img src="/images/bakery_interior.png" alt="" className="page-hero__bg-img" />
          <div className="page-hero__overlay" />
        </div>
        <div className="page-hero__content">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.span className="page-hero__eyebrow" variants={fadeUp}>
              <Sparkles size={13} className="animate-spin-slow" />
              Our Story
            </motion.span>
            <motion.h1 className="page-hero__title" variants={fadeUp}>
              About <span>GS Cakes</span>
            </motion.h1>
            <motion.p className="page-hero__subtitle" variants={fadeUp}>
              A legacy of taste, quality, and hygiene — serving Vellore with love since day one.
            </motion.p>
          </motion.div>
        </div>
      </section>


      {/* ══════════ OUR STORY ══════════ */}
      <section className="about-story section" aria-label="Our Story">
        <div className="container">
          <div className="about-story__grid">

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={fadeUp}
            >
              <div className="about-story__image-frame">
                <img
                  src="/images/bakery_interior.png"
                  alt="Inside GS Cakes & Sweets bakery"
                  loading="lazy"
                />
                <div className="about-story__image-overlay" aria-hidden="true" />
                <div className="about-story__rating">
                  <div className="about-story__rating-icon pulse-gold" aria-hidden="true">
                    <Star size={20} fill="var(--color-gold)" strokeWidth={0} />
                  </div>
                  <div>
                    <div className="about-story__rating-score">4.7 / 5 Stars</div>
                    <div className="about-story__rating-label">Rated by local guides on Google Reviews</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={fadeUp}
              className="about-story__content"
            >
              <span className="section-eyebrow">Our Philosophy</span>
              <h2 className="about-story__heading">
                The GS Standard:<br />
                Quality &amp; Hygiene
              </h2>
              <p className="about-story__desc">
                Located in the heart of Vellore, GS Cakes and Sweets was born from a simple
                dream — to bring premium-quality bakery products at prices everyone can afford.
                What started as a small neighbourhood shop has grown into one of Vellore's
                most-loved bakeries, trusted by thousands of families.
              </p>
              <p className="about-story__desc">
                Whether you need a towering multi-tier wedding cake, a fun character cake for
                your child's birthday, a box of fresh gulab jamun for a festival, or just a
                refreshing ice cream cone on a hot day — we've got you covered with the same
                love and dedication in every product.
              </p>

              <ul className="about-story__features">
                {FEATURES.map(f => (
                  <li key={f} className="about-story__feature-item">
                    <span className="about-story__feature-dot" aria-hidden="true">
                      <Check size={11} strokeWidth={3} />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <Link to="/menu" className="btn btn-light">
                Explore Our Menu
                <ChevronRight size={15} />
              </Link>
            </motion.div>

          </div>
        </div>
      </section>


      {/* ══════════ OUR VALUES ══════════ */}
      <section className="values section" aria-label="Our Values">
        <div className="container">
          <div className="section-header section-header--dark">
            <span className="section-header__eyebrow">What Drives Us</span>
            <h2 className="section-header__title">Our Core Values</h2>
          </div>

          <motion.div
            className="values-grid"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            {VALUES.map(val => (
              <motion.div
                key={val.title}
                className="value-card"
                variants={fadeUp}
              >
                <div className="value-card__icon">
                  <val.icon size={24} />
                </div>
                <h3 className="value-card__title">{val.title}</h3>
                <p className="value-card__desc">{val.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>


      {/* ══════════ CTA ══════════ */}
      <section className="about-cta section" aria-label="Visit Us CTA">
        <div className="container">
          <motion.div
            className="about-cta__box"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="about-cta__title">Come Visit Our Store</h2>
            <p className="about-cta__desc">
              We'd love to meet you! Drop by our store on Arni Road, Vellore
              and experience the warmth and quality of GS Cakes & Sweets in person.
            </p>
            <div className="about-cta__actions">
              <Link to="/contact" className="btn btn-primary">
                Get Directions
                <ChevronRight size={15} />
              </Link>
              <Link to="/reviews" className="btn btn-secondary">
                Read Reviews
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
