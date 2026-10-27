import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// 6 Carousel Slides
const SLIDES = [
  {
    eyebrow: "New Season",
    title: "Dressed to<br><em>command attention.</em>",
    sub: "Explore high fashion, handcrafted ethnic weaves, and contemporary daily wear at Askaran Binjraj.",
    img: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=1600"
  },
  {
    eyebrow: "Heritage Collection",
    title: "Six generations of<br><em>artisan craft.</em>",
    sub: "Authentic Banarasi sarees sourced directly from Varanasi weavers across six generations.",
    img: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=1600"
  },
  {
    eyebrow: "Fine Jewellery",
    title: "Adorned in<br><em>pure elegance.</em>",
    sub: "Stunning jewellery styled for weddings, festive pujas, engagements and celebrations.",
    img: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=1600"
  },
  {
    eyebrow: "Ready-to-Wear",
    title: "Move through the world<br><em>unforgettably.</em>",
    sub: "Curated apparel, tailored suits, and authentic ethnic wear for men at Askaran Binjraj, Dhekiajuli.",
    img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1600"
  },
  {
    eyebrow: "Travel & Style",
    title: "Travel light,<br><em>arrive brilliantly.</em>",
    sub: "Luxury luggage and travel accessories on the 4th Floor — suitcases, duffle bags, rucksacks, laptop bags.",
    img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=1600"
  },
  {
    eyebrow: "Beauty & Wellness",
    title: "Your best self,<br><em>every single day.</em>",
    sub: "Prestige cosmetics, skincare and daily beauty essentials from trusted brands in store.",
    img: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=1600"
  }
];

// Authentic Lotus SVG Logo
const BrandLogo = () => (
  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
    <svg width="36" height="36" viewBox="0 0 64 64" fill="none" stroke="#C8251E">
      <path d="M32 8 C36 20 48 28 58 30 C48 34 40 44 32 56 C24 44 16 34 6 30 C16 28 28 20 32 8 Z" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M32 18 C35 26 42 31 50 33 C42 36 36 43 32 50 C28 43 22 36 14 33 C22 31 29 26 32 18 Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
    <div style={{ textAlign: "left" }}>
      <div style={{ fontFamily: "var(--serif)", fontSize: "1.35rem", fontWeight: "bold", color: "#C8251E", lineHeight: 1, letterSpacing: "-0.01em" }}>ASKARAN BINJRAJ</div>
      <div style={{ fontSize: "9px", textTransform: "uppercase", letterSpacing: "0.25em", color: "#2E7D32", fontWeight: 700, marginTop: "3px" }}>Quality. Variety. Trust.</div>
    </div>
  </div>
);

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideTimer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 6000);
    return () => clearInterval(slideTimer);
  }, []);

  useEffect(() => {
    const revealEls = document.querySelectorAll(".reveal");
    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("in");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12 }
      );
      revealEls.forEach((el) => observer.observe(el));
      return () => observer.disconnect();
    } else {
      revealEls.forEach((el) => el.classList.add("in"));
    }
  }, []);

  return (
    <div className="storefront">
      
      {/* Top Announcement Bar */}
      <div className="sf-announce">
        Same-Day & 1-Day Delivery Available · New Ethnic Collection Just Dropped
      </div>

      {/* Primary Header Navbar */}
      <header id="site-header" className="sf-header">
        <div className="sf-header-in">
          <Link to="/" className="sf-logo">
            <BrandLogo />
          </Link>
          <nav className="sf-nav">
            <a href="#fashion">Fashion</a>
            <a href="#ethnic">Ethnic Wear</a>
            <a href="#travel">Travel Gear</a>
            <a href="#cosmetics">Cosmetics</a>
            <a href="#jewelry">Jewellery</a>
            <a href="#accessories">Accessories</a>
            <a href="#about">About</a>
          </nav>
          <div className="sf-header-actions">
            <a href="https://shop.askaranbinjraj.com/" target="_blank" rel="noopener noreferrer" className="sf-shop-btn">
              Shop Online ↗
            </a>
          </div>
        </div>
      </header>

      {/* Hero 6-Slide Carousel */}
      <section id="hero" className="sf-hero">
        {SLIDES.map((slide, idx) => (
          <div key={idx} className={`sf-slide ${idx === currentSlide ? "active" : ""}`}>
            <img src={slide.img} alt={slide.eyebrow} />
          </div>
        ))}

        <div className="sf-hero-shade"></div>

        <div className="sf-counter">
          <span>0{currentSlide + 1}<small>/ 06</small></span>
        </div>

        <div className="sf-dots">
          {SLIDES.map((_, idx) => (
            <button
              key={idx}
              className={idx === currentSlide ? "active" : ""}
              onClick={() => setCurrentSlide(idx)}
            />
          ))}
        </div>

        <div className="sf-hero-content">
          <div className="sf-hero-inner">
            <div className="sf-eyebrow">
              <p>{SLIDES[currentSlide].eyebrow}</p>
            </div>
            <h1 dangerouslySetInnerHTML={{ __html: SLIDES[currentSlide].title }} />
            <p className="sf-hero-sub">{SLIDES[currentSlide].sub}</p>
            <div className="sf-cta-row">
              <a href="https://shop.askaranbinjraj.com/" target="_blank" rel="noopener noreferrer" className="sf-btn-red">Shop Online ↗</a>
              <a href="#ethnic" className="sf-btn-ghost-w">Explore Departments</a>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee Ticker */}
      <div className="sf-ticker">
        <div className="sf-ticker-track">
          <span><span>◆</span> Dhekiajuli Flagship</span>
          <span><span>◆</span> Six Generations of Trust</span>
          <span><span>◆</span> Authentic Banarasi Sarees</span>
          <span><span>◆</span> Premium Suitings & Formals</span>
          <span><span>◆</span> Luxury Travel Gear</span>
          <span><span>◆</span> Same-Day Delivery Available</span>
        </div>
      </div>

      {/* Fashion Bento Section */}
      <section id="fashion" className="sf-section bg-paper">
        <div className="sf-wrap">
          <div className="reveal">
            <div className="sf-head">
              <div className="sf-head-text">
                <div className="sf-eyebrow-s"><p>1st Floor · Fashion & Apparel</p></div>
                <h2 className="sf-h2">Latest fashion<br /><em>under one roof.</em></h2>
                <p className="sf-sub">Branded shirts, tailored trousers, midi dresses, frocks and everyday style for men and women at Askaran Binjraj Shopping Mall.</p>
              </div>
              <a href="https://shop.askaranbinjraj.com/" target="_blank" rel="noopener noreferrer" className="sf-btn-red">Shop Fashion ↗</a>
            </div>
          </div>
          <div className="sf-bento reveal">
            <div>
              <div className="sf-card-img" style={{ minHeight: "430px" }}>
                <img src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&auto=format&fit=crop&q=80" alt="Fashion Model" />
                <div className="sf-card-shade"></div>
                <div className="sf-card-label"><p>Sharp Everyday Style</p><p>Branded shirts & tailored trousers</p></div>
              </div>
            </div>
            <div>
              <div className="sf-card-img" style={{ minHeight: "430px" }}>
                <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&auto=format&fit=crop&q=80" alt="Midi Dresses" />
                <div className="sf-card-shade"></div>
                <div className="sf-card-label"><p>Contemporary Fusion</p><p>Midi dresses & Indo-Western</p></div>
              </div>
            </div>
            <div>
              <div className="sf-card-img" style={{ minHeight: "430px" }}>
                <img src="https://images.unsplash.com/photo-1502784444187-359ac186c5bb?w=600&auto=format&fit=crop&q=80" alt="Kids Fashion" />
                <div className="sf-card-shade"></div>
                <div className="sf-card-label"><p>Little Trendsetters</p><p>Frocks & kids wear</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ethnic 3-Polaroid Section */}
      <section id="ethnic" className="sf-section bg-alt">
        <div className="sf-wrap">
          <div className="reveal">
            <div className="sf-head">
              <div className="sf-head-text">
                <div className="sf-eyebrow-s green"><p>Ethnic & Heritage</p></div>
                <h2 className="sf-h2"><em>Roots,</em><br />reimagined.</h2>
                <p className="sf-sub">Authentic Banarasi sarees, Muga and Assam silk, Mekhela Chador and bridal weaves — sourced directly from Varanasi weavers across six generations.</p>
              </div>
              <a href="https://shop.askaranbinjraj.com/" target="_blank" rel="noopener noreferrer" className="sf-btn-red">Shop Ethnic Wear ↗</a>
            </div>
          </div>
          <div className="sf-grid-3 reveal">
            <div className="sf-polaroid">
              <div className="sf-card-img"><img src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&auto=format&fit=crop&q=80" alt="Banarasi Sarees" /><span className="sf-badge">Bestseller</span></div>
              <div className="sf-card-body"><h3>Authentic Banarsi Sarees</h3><p>3rd Floor · Royal Handlooms</p><span className="sf-link-arrow">Explore →</span></div>
            </div>
            <div className="sf-polaroid">
              <div className="sf-card-img"><img src="https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=600&auto=format&fit=crop&q=80" alt="Assam Silk" /></div>
              <div className="sf-card-body"><h3>Traditional Assam Silk</h3><p>3rd Floor · Heritage Assam</p><span className="sf-link-arrow">Explore →</span></div>
            </div>
            <div className="sf-polaroid">
              <div className="sf-card-img"><img src="https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=600&auto=format&fit=crop&q=80" alt="Bridal Lehengas" /></div>
              <div className="sf-card-body"><h3>Designer Bridal Lehengas</h3><p>15+ curated bridal departments</p><span className="sf-link-arrow">Explore →</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* Travel Gear Section */}
      <section id="travel" className="sf-section bg-white">
        <div className="sf-wrap">
          <div className="reveal">
            <div className="sf-head">
              <div className="sf-head-text">
                <div className="sf-eyebrow-s"><p>4th Floor · Travel Gear</p></div>
                <h2 className="sf-h2">Pack smart,<br /><em>travel far.</em></h2>
                <p className="sf-sub">Elevate your journey with luxury luggage and travel accessories — suitcases, duffle bags, rucksacks, and laptop bags on the 4th Floor.</p>
              </div>
              <a href="https://shop.askaranbinjraj.com/" target="_blank" rel="noopener noreferrer" className="sf-btn-red">Shop Travel Gear ↗</a>
            </div>
          </div>
          <div className="sf-feature-grid reveal">
            <div className="sf-feature-main">
              <img src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&auto=format&fit=crop&q=80" alt="Travel Gear" />
              <div className="sf-feature-label">
                <span className="sf-badge">4th Floor</span>
                <h3>Travel Gear in Dhekiajuli</h3>
                <p>Suitcases, duffle bags, rucksacks & laptop bags.</p>
                <span className="sf-link-arrow">Explore Travel Gear →</span>
              </div>
            </div>
            <div className="sf-mini-tiles">
              <div className="sf-mini-tile">
                <div className="tile-img"><img src="https://images.unsplash.com/photo-1544816155-12df9643f363?w=500&auto=format&fit=crop&q=80" alt="Luggage" /></div>
                <div className="tile-body"><p>Luggage & Cases</p><p>Suitcases & trolley bags</p></div>
              </div>
              <div className="sf-mini-tile">
                <div className="tile-img"><img src="https://images.unsplash.com/photo-1546938576-6e6a64f3175d?w=500&auto=format&fit=crop&q=80" alt="Rucksacks" /></div>
                <div className="tile-body"><p>Rucksacks</p><p>Trek & travel packs</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accessories 4-Tile Grid */}
      <section id="accessories" className="sf-section bg-alt">
        <div className="sf-wrap">
          <div className="reveal">
            <div className="sf-head">
              <div className="sf-head-text">
                <div className="sf-eyebrow-s"><p>Ground Floor · Accessories & Gift Items</p></div>
                <h2 className="sf-h2">The finishing<br /><em>touch.</em></h2>
                <p className="sf-sub">Watches, wallets, belts, premium gift items, perfumes and everyday lifestyle accessories located right on the ground floor.</p>
              </div>
              <a href="https://shop.askaranbinjraj.com/" target="_blank" rel="noopener noreferrer" className="sf-btn-red">Shop Accessories ↗</a>
            </div>
          </div>
          <div className="sf-grid-4 reveal">
            <div className="sf-acc-tile">
              <div className="tile-img"><img src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=500&auto=format&fit=crop&q=80" alt="Watches" /></div>
              <div className="tile-body"><p>Watches</p></div>
            </div>
            <div className="sf-acc-tile">
              <div className="tile-img"><img src="https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=500&auto=format&fit=crop&q=80" alt="Fragrances" /></div>
              <div className="tile-body"><p>Fragrances</p></div>
            </div>
            <div className="sf-acc-tile">
              <div className="tile-img"><img src="https://images.unsplash.com/photo-1627123424574-724758594e93?w=500&auto=format&fit=crop&q=80" alt="Belts & Wallets" /></div>
              <div className="tile-body"><p>Belts & Wallets</p></div>
            </div>
            <div className="sf-acc-tile">
              <div className="tile-img"><img src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=500&auto=format&fit=crop&q=80" alt="Gift Items" /></div>
              <div className="tile-body"><p>Gift Items</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Action Button */}
      <a href="https://wa.me/918811966701" target="_blank" rel="noopener noreferrer" className="wa-float" aria-label="Chat on WhatsApp">
        <svg fill="currentColor" width="28" height="28" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.334 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.334-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
      </a>
    </div>
  );
}