import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Phone,
  Sparkles,
  ChevronRight,
  Star,
  Check,
  IceCream,
  Candy,
  CakeSlice
} from 'lucide-react';

const fadeUp = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.25, 1, 0.5, 1] } }
};

const stagger = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const FEATURED = [
  {
    title: 'Premium Cakes',
    desc:  'Birthday, Tower, Chocolate, Rasmalai & more — crafted fresh for every celebration.',
    image: '/images/hero_cake.png',
    icon:  CakeSlice,
    tag:   'Signature',
  },
  {
    title: 'Artisan Ice Creams',
    desc:  'Cool, creamy scoops in classic & exotic flavors. A perfect treat for any season.',
    image: '/images/ice_cream_display.png',
    icon:  IceCream,
    tag:   'Refreshing',
  },
  {
    title: 'Traditional Sweets',
    desc:  'Gulab Jamun, Jalebi, Barfi & more — authentic Indian mithai made fresh daily.',
    image: '/images/traditional_sweets.png',
    icon:  Candy,
    tag:   'Heritage',
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

export default function HomePage() {
  return (
    <>
      {/* ══════════ HERO ══════════ */}
      <section id="home" className="hero" aria-label="Hero">
        <div className="hero__bg" aria-hidden="true">
          <img
            src="/images/hero_cake.png"
            alt=""
            className="hero__bg-img"
            loading="eager"
            fetchPriority="high"
          />
          <div className="hero__bg-overlay" />
        </div>

        <div className="hero__content">
          <motion.div initial="hidden" animate="visible" variants={stagger}>

            <motion.div variants={fadeUp}>
              <span className="hero__badge">
                <Sparkles size={13} className="animate-spin-slow" />
                Premium Bakery &amp; Sweets
              </span>
            </motion.div>

            <motion.h1 className="hero__title" variants={fadeUp}>
              Crafting Sweet{' '}
              <span>Memories</span>{' '}
              in Vellore.
            </motion.h1>

            <motion.p className="hero__subtitle" variants={fadeUp}>
              Freshly baked cakes, traditional sweets, and artisan ice creams — quality
              and hygiene you can taste in every bite.
            </motion.p>

            <motion.div className="hero__actions" variants={fadeUp}>
              <Link to="/menu" className="btn btn-primary">
                Explore Our Menu
              </Link>
              <a href="tel:09944459835" className="btn btn-secondary">
                <Phone size={16} />
                Call to Order
              </a>
            </motion.div>

          </motion.div>
        </div>

        <div className="hero__scroll" aria-hidden="true">
          <a href="#featured">
            <motion.div
              animate={{ y: [0, 9, 0] }}
              transition={{ repeat: Infinity, duration: 1.6 }}
              className="hero__scroll-mouse"
            >
              <div className="hero__scroll-dot" />
            </motion.div>
          </a>
        </div>
      </section>


      {/* ══════════ FEATURED CATEGORIES ══════════ */}
      <section id="featured" className="featured section" aria-label="Featured Categories">
        <div className="container">
          <div className="section-header section-header--light">
            <span className="section-header__eyebrow">What We Offer</span>
            <h2 className="section-header__title">Our Specialities</h2>
          </div>

          <motion.div
            className="featured-grid"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            {FEATURED.map(item => (
              <motion.article
                key={item.title}
                className="featured-card"
                variants={fadeUp}
              >
                <div className="featured-card__image-wrap">
                  <img src={item.image} alt={item.title} loading="lazy" />
                  <span className="featured-card__tag">{item.tag}</span>
                </div>
                <div className="featured-card__body">
                  <div className="featured-card__icon-wrap">
                    <item.icon size={20} />
                  </div>
                  <h3 className="featured-card__title">{item.title}</h3>
                  <p className="featured-card__desc">{item.desc}</p>
                  <Link to="/menu" className="featured-card__link">
                    View Menu <ChevronRight size={15} />
                  </Link>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>


      {/* ══════════ WHY CHOOSE US ══════════ */}
      <section className="why-us section" aria-label="Why Choose Us">
        <div className="container">
          <div className="why-us__grid">

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={fadeUp}
            >
              <div className="why-us__image-frame">
                <img
                  src="/images/bakery_interior.png"
                  alt="Inside GS Cakes & Sweets bakery"
                  loading="lazy"
                />
                <div className="why-us__image-overlay" aria-hidden="true" />
                <div className="why-us__rating">
                  <div className="why-us__rating-icon pulse-gold" aria-hidden="true">
                    <Star size={20} fill="var(--color-gold)" strokeWidth={0} />
                  </div>
                  <div>
                    <div className="why-us__rating-score">4.7 / 5 Stars</div>
                    <div className="why-us__rating-label">Rated on Google Reviews</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={fadeUp}
              className="why-us__content"
            >
              <span className="section-eyebrow">Our Promise</span>
              <h2 className="why-us__heading">
                The GS Standard:<br />
                Quality &amp; Hygiene
              </h2>
              <p className="why-us__desc">
                Located in the heart of Vellore, GS Cakes and Sweets is dedicated
                to bringing you the finest baked goods at an affordable price. Whether
                you need a quick snack, a custom birthday cake, or traditional sweets,
                every bite is crafted with fresh ingredients and the highest hygiene
                standards.
              </p>

              <ul className="why-us__features">
                {FEATURES.map(f => (
                  <li key={f} className="why-us__feature-item">
                    <span className="why-us__feature-dot" aria-hidden="true">
                      <Check size={11} strokeWidth={3} />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <Link to="/about" className="btn btn-light">
                Learn More About Us
                <ChevronRight size={15} />
              </Link>
            </motion.div>

          </div>
        </div>
      </section>


      {/* ══════════ CTA BANNER ══════════ */}
      <section className="cta-banner" aria-label="Call to Action">
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
              <Sparkles size={14} /> Ready to Order?
            </span>
            <h2 className="cta-banner__title">
              Make Your Next Celebration <span>Unforgettable</span>
            </h2>
            <p className="cta-banner__desc">
              From custom birthday cakes to towering wedding masterpieces — we bring your
              sweetest visions to life. Call us or visit our store today.
            </p>
            <div className="cta-banner__actions">
              <a href="tel:09944459835" className="btn btn-primary">
                <Phone size={15} />
                Call: 099444 59835
              </a>
              <Link to="/contact" className="btn btn-secondary">
                Visit Our Store
                <ChevronRight size={15} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
