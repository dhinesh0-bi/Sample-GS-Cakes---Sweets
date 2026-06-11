import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Star,
  Sparkles,
  ChevronRight,
  Phone,
  Quote
} from 'lucide-react';

const fadeUp = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.25, 1, 0.5, 1] } }
};

const stagger = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
};

const REVIEWS = [
  {
    name:   'MMM (Local Guide)',
    text:   'Excellent bakery! Cakes, sweets, and snacks are always fresh and delicious. Good quality, reasonable price, and quick service — highly recommended!',
    rating: 5,
  },
  {
    name:   'MohanRaj A',
    text:   'Affordable price with very good quality and hygiene. The taste is consistently excellent. I always come here for birthday cakes.',
    rating: 5,
  },
  {
    name:   'Naveen Sankar',
    text:   'Good quality, amazing taste, low price. Best place for a quick bite in Vellore. Their black forest cake is simply the best!',
    rating: 5,
  },
  {
    name:   'Priya Lakshmi',
    text:   'Ordered a custom tower cake for my daughter\'s wedding. The design was absolutely stunning and it tasted heavenly. Thank you GS Cakes!',
    rating: 5,
  },
  {
    name:   'Karthik R',
    text:   'The rasmalai cake was a unique fusion that my whole family loved. Fresh ingredients and perfect sweetness. Will order again!',
    rating: 5,
  },
  {
    name:   'Deepika S',
    text:   'Best gulab jamun in Vellore, hands down. The sweets are always fresh and authentic. My go-to for all festival sweet boxes.',
    rating: 5,
  },
  {
    name:   'Arun Kumar (Local Guide)',
    text:   'I\'ve been coming here for years. The consistency in quality is remarkable. Their ice cream is incredibly smooth and creamy.',
    rating: 5,
  },
  {
    name:   'Meera Devi',
    text:   'Ordered a Barbie doll cake for my daughter\'s 5th birthday. She was thrilled! The detailing was beautiful and the cake was delicious.',
    rating: 5,
  },
  {
    name:   'Rajesh V',
    text:   'Great bakery with a wide variety. The chocolate cake is rich and moist. Service is friendly and quick. Highly recommended!',
    rating: 4,
  },
];

export default function ReviewsPage() {
  return (
    <>
      {/* ══════════ PAGE HEADER ══════════ */}
      <section className="page-hero" aria-label="Reviews Page Header">
        <div className="page-hero__bg" aria-hidden="true">
          <img src="/images/hero_cake.png" alt="" className="page-hero__bg-img" />
          <div className="page-hero__overlay" />
        </div>
        <div className="page-hero__content">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.span className="page-hero__eyebrow" variants={fadeUp}>
              <Sparkles size={13} className="animate-spin-slow" />
              Wall of Love
            </motion.span>
            <motion.h1 className="page-hero__title" variants={fadeUp}>
              Customer <span>Reviews</span>
            </motion.h1>
            <motion.p className="page-hero__subtitle" variants={fadeUp}>
              Don't just take our word for it — hear what our customers have to say.
            </motion.p>
          </motion.div>
        </div>
      </section>


      {/* ══════════ RATING HIGHLIGHT ══════════ */}
      <section className="rating-highlight section" aria-label="Overall Rating">
        <div className="container">
          <motion.div
            className="rating-highlight__card"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <div className="rating-highlight__stars">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={28} fill="var(--color-gold)" strokeWidth={0} />
              ))}
            </div>
            <div className="rating-highlight__score">4.7 / 5</div>
            <p className="rating-highlight__label">
              Based on Google Reviews from local guides and verified customers
            </p>
            <div className="rating-highlight__badges">
              <span className="rating-highlight__badge">🏆 Highly Rated</span>
              <span className="rating-highlight__badge">✅ Verified Reviews</span>
              <span className="rating-highlight__badge">📍 Local Favourite</span>
            </div>
          </motion.div>
        </div>
      </section>


      {/* ══════════ REVIEWS GRID ══════════ */}
      <section className="reviews-page section" aria-label="All Reviews">
        <div className="container">
          <div className="section-header section-header--light">
            <span className="section-header__eyebrow">Testimonials</span>
            <h2 className="section-header__title">What Our Customers Say</h2>
          </div>

          <motion.div
            className="reviews-grid reviews-grid--full"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {REVIEWS.map(rev => (
              <motion.blockquote
                key={rev.name}
                className="review-card review-card--light"
                variants={fadeUp}
                aria-label={`Review by ${rev.name}`}
              >
                <div className="review-card__quote-icon" aria-hidden="true">
                  <Quote size={20} />
                </div>
                <div className="review-card__stars" aria-label={`${rev.rating} stars`}>
                  {Array.from({ length: rev.rating }).map((_, i) => (
                    <Star key={i} size={14} fill="var(--color-gold)" strokeWidth={0} />
                  ))}
                </div>
                <p className="review-card__text">"{rev.text}"</p>
                <div className="review-card__author-row">
                  <cite className="review-card__author-name">{rev.name}</cite>
                  <span className="review-card__platform">Google Review</span>
                </div>
              </motion.blockquote>
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
              <Sparkles size={14} /> Join Our Happy Customers
            </span>
            <h2 className="cta-banner__title">
              Ready to Taste the <span>Difference</span>?
            </h2>
            <p className="cta-banner__desc">
              Order your favourite cakes, sweets, or ice creams today. We promise you won't be disappointed!
            </p>
            <div className="cta-banner__actions">
              <a href="tel:09944459835" className="btn btn-primary">
                <Phone size={15} />
                Call to Order
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
