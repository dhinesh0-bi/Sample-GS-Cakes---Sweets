import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Phone,
  ChevronRight,
  CakeSlice,
  IceCream,
  Candy,
  Sparkles
} from 'lucide-react';

const fadeUp = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1] } }
};

const stagger = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

/* ─── MENU DATA ──────────────────────────────────── */

const CATEGORIES = [
  { key: 'cakes',     label: 'Cakes',      icon: CakeSlice },
  { key: 'icecreams', label: 'Ice Creams',  icon: IceCream  },
  { key: 'sweets',    label: 'Sweets',      icon: Candy     },
];

const MENU_DATA = {
  cakes: [
    {
      title: 'Birthday Cakes',
      desc: 'Colorful custom cakes for every birthday celebration. Choose from rainbow layers, themed designs, fondant art, and more — each one made to order for your special day.',
      image: '/images/birthday_cake.png',
      tag: 'Celebration',
      sub: 'Custom Designs Available',
    },
    {
      title: 'Tower Cakes',
      desc: 'Grand multi-tier cakes that make a statement. Perfect for weddings, anniversaries, and milestone celebrations with elegant fondant and premium decorations.',
      image: '/images/tower_cake.png',
      tag: 'Grand Events',
      sub: 'Multi-Tier Masterpieces',
    },
    {
      title: 'Chocolate Cakes',
      desc: 'Rich, decadent chocolate cakes made with premium Belgian cocoa. Topped with silky ganache drip, chocolate shavings, and layers of pure indulgence.',
      image: '/images/chocolate_cake.png',
      tag: 'Best Seller',
      sub: 'Premium Belgian Cocoa',
    },
    {
      title: 'Rasmalai Cakes',
      desc: 'A unique Indian fusion delight — soft sponge layers infused with cardamom cream, topped with pistachios, saffron strands, and the essence of classic rasmalai.',
      image: '/images/rasmalai_cake.png',
      tag: 'Fusion',
      sub: 'Indian Heritage Blend',
    },
    {
      title: 'Classic Black Forest',
      desc: 'Rich chocolate sponge layered with kirsch-soaked cherries and hand-whipped fresh cream. Our timeless best-seller that never goes out of style.',
      image: '/images/black_forest_slice.png',
      tag: 'Classic',
      sub: 'Timeless Favourite',
    },
    {
      title: 'Custom Barbie Doll Cake',
      desc: 'Beautifully sculpted celebration centerpieces with intricate fondant work. Perfect for kids\' birthdays and themed celebrations.',
      image: '/images/barbie_doll_cake.png',
      tag: 'Kids Special',
      sub: 'Themed Designs',
    },
  ],

  icecreams: [
    {
      title: 'Classic Vanilla',
      desc: 'Smooth, creamy vanilla bean ice cream made with real Madagascar vanilla. A timeless classic that pairs perfectly with any dessert.',
      image: '/images/ice_cream_display.png',
      tag: 'Classic',
      sub: 'Real Vanilla Bean',
    },
    {
      title: 'Belgian Chocolate',
      desc: 'Deep, rich chocolate ice cream crafted from premium Belgian cocoa. An intensely satisfying chocolate experience in every scoop.',
      image: '/images/ice_cream_display.png',
      tag: 'Rich',
      sub: 'Premium Cocoa',
    },
    {
      title: 'Mango Delight',
      desc: 'Fresh Alphonso mango pulp blended into a luscious, naturally sweet ice cream. A tropical burst of sunshine in every bite.',
      image: '/images/ice_cream_display.png',
      tag: 'Seasonal',
      sub: 'Real Alphonso Mango',
    },
    {
      title: 'Pistachio Kulfi',
      desc: 'Traditional Indian-style frozen dessert with crushed pistachios and cardamom. Dense, creamy, and authentically crafted.',
      image: '/images/ice_cream_display.png',
      tag: 'Heritage',
      sub: 'Traditional Recipe',
    },
    {
      title: 'Strawberry Sundae',
      desc: 'Fresh strawberry ice cream topped with berry compote, whipped cream, and crunchy wafer bits. A refreshing summer favourite.',
      image: '/images/ice_cream_display.png',
      tag: 'Popular',
      sub: 'Fresh Berries',
    },
    {
      title: 'Butterscotch Crunch',
      desc: 'Butterscotch-flavoured ice cream loaded with caramel praline crunch bits. Sweet, crunchy, and utterly irresistible.',
      image: '/images/ice_cream_display.png',
      tag: 'Crunchy',
      sub: 'Praline Crunch',
    },
  ],

  sweets: [
    {
      title: 'Gulab Jamun',
      desc: 'Soft, golden-brown milk dumplings soaked in fragrant rose-cardamom sugar syrup. The undisputed king of Indian sweets.',
      image: '/images/traditional_sweets.png',
      tag: 'Iconic',
      sub: 'Rose-Cardamom Syrup',
    },
    {
      title: 'Jalebi',
      desc: 'Crispy, spiral-shaped fermented batter sweets, deep-fried until golden and soaked in saffron-infused sugar syrup. Best served warm.',
      image: '/images/traditional_sweets.png',
      tag: 'Crispy',
      sub: 'Saffron Infused',
    },
    {
      title: 'Kaju Barfi',
      desc: 'Premium diamond-shaped cashew fudge made with finely ground cashews, sugar, and a hint of cardamom. Garnished with silver leaf.',
      image: '/images/traditional_sweets.png',
      tag: 'Premium',
      sub: 'Pure Cashew',
    },
    {
      title: 'Motichoor Ladoo',
      desc: 'Tiny golden boondi pearls bound with ghee, sugar, and aromatic cardamom into perfectly round, melt-in-your-mouth ladoos.',
      image: '/images/traditional_sweets.png',
      tag: 'Traditional',
      sub: 'Pure Ghee',
    },
    {
      title: 'Rasgulla',
      desc: 'Soft, spongy cottage cheese balls soaked in light sugar syrup. A refreshing and delicate Bengali sweet that melts on your tongue.',
      image: '/images/traditional_sweets.png',
      tag: 'Light',
      sub: 'Bengali Classic',
    },
    {
      title: 'Mysore Pak',
      desc: 'Rich, ghee-laden gram flour sweet with a melt-in-your-mouth texture. A proud South Indian heritage sweet made the traditional way.',
      image: '/images/traditional_sweets.png',
      tag: 'Heritage',
      sub: 'South Indian Classic',
    },
  ],
};

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState('cakes');
  const items = MENU_DATA[activeCategory];

  return (
    <>
      {/* ══════════ PAGE HEADER ══════════ */}
      <section className="page-hero" aria-label="Menu Page Header">
        <div className="page-hero__bg" aria-hidden="true">
          <img src="/images/hero_cake.png" alt="" className="page-hero__bg-img" />
          <div className="page-hero__overlay" />
        </div>
        <div className="page-hero__content">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.span className="page-hero__eyebrow" variants={fadeUp}>
              <Sparkles size={13} className="animate-spin-slow" />
              Our Full Menu
            </motion.span>
            <motion.h1 className="page-hero__title" variants={fadeUp}>
              Delicious <span>Creations</span>
            </motion.h1>
            <motion.p className="page-hero__subtitle" variants={fadeUp}>
              Explore our full range of handcrafted cakes, artisan ice creams, and traditional Indian sweets.
            </motion.p>
          </motion.div>
        </div>
      </section>


      {/* ══════════ CATEGORY TABS ══════════ */}
      <section className="menu-page section" aria-label="Menu Items">
        <div className="container">

          <div className="menu-tabs" role="tablist" aria-label="Menu categories">
            {CATEGORIES.map(cat => (
              <button
                key={cat.key}
                role="tab"
                aria-selected={activeCategory === cat.key}
                className={`menu-tab${activeCategory === cat.key ? ' menu-tab--active' : ''}`}
                onClick={() => setActiveCategory(cat.key)}
              >
                <cat.icon size={18} />
                {cat.label}
              </button>
            ))}
          </div>

          {/* ── Items Grid ── */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              className="menu-grid menu-grid--full"
              variants={stagger}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, transition: { duration: 0.2 } }}
            >
              {items.map(item => (
                <motion.article
                  key={item.title}
                  className="menu-card"
                  variants={fadeUp}
                  aria-label={item.title}
                >
                  <div className="menu-card__image-wrap">
                    <img src={item.image} alt={item.title} loading="lazy" />
                    <span className="menu-card__tag">{item.tag}</span>
                  </div>
                  <div className="menu-card__body">
                    <h3 className="menu-card__title">{item.title}</h3>
                    <p className="menu-card__sub">{item.sub}</p>
                    <p className="menu-card__desc">{item.desc}</p>
                    <div className="menu-card__footer">
                      <span className="menu-card__quality-label">Premium Quality</span>
                      <a
                        href="tel:09944459835"
                        className="menu-card__order-link"
                        aria-label={`Order ${item.title} by phone`}
                      >
                        Order Now <ChevronRight size={15} />
                      </a>
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* ── CTA ── */}
          <motion.div
            className="menu-page__cta"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <p>Can't find what you're looking for? We accept custom orders!</p>
            <a href="tel:09944459835" className="btn btn-primary">
              <Phone size={15} />
              Call to Order
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
