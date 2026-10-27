import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Hero Banner Carousel mapping directly to public/assets/ with Web Fallbacks
const SLIDES = [
  {
    eyebrow: "Heritage Collection",
    title: "Six generations of<br><em>artisan craft.</em>",
    sub: "Authentic Banarasi sarees sourced directly from Varanasi weavers across six generations.",
    localImg: "/assets/Banarasi.jpg",
    fallbackImg: "https://askaranbinjraj.com/wp-content/uploads/2025/11/Banarasi.jpg"
  },
  {
    eyebrow: "Ready-to-Wear",
    title: "Move through the world<br><em>unforgettably.</em>",
    sub: "Curated apparel, tailored suits, and authentic ethnic wear for men and women at Askaran Binjraj.",
    localImg: "/assets/4237-768x427.jpg",
    fallbackImg: "https://askaranbinjraj.com/wp-content/uploads/2025/11/4237-768x427.jpg"
  },
  {
    eyebrow: "The Wedding Studio",
    title: "Designer bridal<br><em>lehengas & weaves.</em>",
    sub: "Raw silk zardozi, hand-embroidered velvet bridal sets, and festive celebratory wear.",
    localImg: "/assets/Morni_Banner_600x600.webp",
    fallbackImg: "https://askaranbinjraj.com/wp-content/uploads/2025/11/Morni_Banner_600x600.webp"
  },
  {
    eyebrow: "Travel & Style",
    title: "Travel light,<br><em>arrive brilliantly.</em>",
    sub: "Luxury luggage and travel accessories on the 4th Floor — suitcases, duffle bags, rucksacks, laptop bags.",
    localImg: "/assets/BEST-GEAR-FOR-TRAVEL-8125-2x1-1-768x384.webp",
    fallbackImg: "https://askaranbinjraj.com/wp-content/uploads/2025/11/BEST-GEAR-FOR-TRAVEL-8125-2x1-1-768x384.webp"
  },
  {
    eyebrow: "Fine Jewellery",
    title: "Adorned in<br><em>pure elegance.</em>",
    sub: "Stunning jewellery styled for weddings, festive pujas, engagements and celebrations.",
    localImg: "/assets/jewelry.jpg",
    fallbackImg: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=1600"
  },
  {
    eyebrow: "Beauty & Wellness",
    title: "Your best self,<br><em>every single day.</em>",
    sub: "Lakmé, Mamaearth, Pond's, Sugar, Elle 18 and more trusted beauty brands in-store.",
    localImg: "/assets/cosmetics.jpg",
    fallbackImg: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=1600"
  }
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [splashDone, setSplashDone] = useState(false);
  const [splashRemoved, setSplashRemoved] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const slideTimer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 6000);
    return () => clearInterval(slideTimer);
  }, []);

  useEffect(() => {
    document.body.classList.add("lock");
    const t1 = setTimeout(() => {
      setSplashDone(true);
      document.body.classList.remove("lock");
      const t2 = setTimeout(() => {
        setSplashRemoved(true);
      }, 950);
      return () => clearTimeout(t2);
    }, 3500);
    return () => {
      document.body.classList.remove("lock");
      clearTimeout(t1);
    };
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
      
      {/* Animated Splash Screen Gate */}
      {!splashRemoved && (
        <div className={`splash ${splashDone ? "done" : ""}`} id="splash">
          <div className="sp-dot" style={{ top: "8%", left: "12%", width: "3px", height: "3px", opacity: 0.18 }}></div>
          <div className="sp-dot" style={{ top: "15%", left: "78%", width: "2px", height: "2px", opacity: 0.24 }}></div>
          <div className="sp-ring">
            <svg width="500" height="500" viewBox="0 0 500 500" fill="none">
              <circle cx="250" cy="250" r="248" stroke="#E8E3DA" strokeWidth="1"></circle>
              <path d="M 250 2 A 248 248 0 0 1 497 223" stroke="#C8251E" strokeWidth="1.5" fill="none" opacity="0.55"></path>
            </svg>
          </div>
          <div className="sp-line-h" style={{ top: "28px" }}></div>
          <div className="sp-line-h" style={{ bottom: "28px" }}></div>
          <div className="sp-line-v" style={{ left: "28px" }}></div>
          <div className="sp-line-v" style={{ right: "28px" }}></div>
          <div className="sp-center">
            <div className="sp-logo mb-4">
              <img 
                src="/assets/logo-stacked.png" 
                onError={(e) => { e.target.onerror = null; e.target.src = "/assets/logo-wide.png"; }} 
                alt="Askaran Binjraj" 
                style={{ height: "70px", width: "auto", margin: "0 auto", objectFit: "contain" }}
              />
            </div>
            <div className="sp-divider"></div>
            <div className="sp-tagline">Quality. Variety. Trust.</div>
            <p className="sp-since">EST. 1980 · DHEKIAJULI, ASSAM</p>
          </div>
        </div>
      )}

      {/* Announcement Bar */}
      <div className="sf-announce">
        Same-Day & 1-Day Delivery Available · New Ethnic Collection Just Dropped
      </div>

      {/* Primary Sticky Header Navbar */}
      <header id="site-header" className="sf-header">
        <div className="sf-header-in">
          <Link to="/" className="sf-logo">
            <img 
              src="/assets/logo-wide.png" 
              onError={(e) => { e.target.onerror = null; e.target.src = "/assets/logo-stacked.png"; }} 
              alt="Askaran Binjraj" 
              style={{ height: "42px", width: "auto", objectFit: "contain" }}
            />
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
          <div className="sf-header-actions" style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <a href="https://shop.askaranbinjraj.com/" target="_blank" rel="noopener noreferrer" className="sf-shop-btn">
              Shop Online ↗
            </a>
            <button className="sf-burger" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle Menu">
              <span></span><span></span><span></span>
            </button>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="sf-mobile-nav open">
            <a href="#fashion" onClick={() => setMobileMenuOpen(false)}>Fashion</a>
            <a href="#ethnic" onClick={() => setMobileMenuOpen(false)}>Ethnic Wear</a>
            <a href="#travel" onClick={() => setMobileMenuOpen(false)}>Travel Gear</a>
            <a href="#cosmetics" onClick={() => setMobileMenuOpen(false)}>Cosmetics</a>
            <a href="#jewelry" onClick={() => setMobileMenuOpen(false)}>Jewellery</a>
            <a href="#accessories" onClick={() => setMobileMenuOpen(false)}>Accessories</a>
            <a href="https://shop.askaranbinjraj.com/" target="_blank" rel="noopener noreferrer">Shop Online ↗</a>
          </div>
        )}
      </header>

      {/* Hero 6-Slide Carousel */}
      <section id="hero" className="sf-hero">
        {SLIDES.map((slide, idx) => (
          <div key={idx} className={`sf-slide ${idx === currentSlide ? "active" : ""}`}>
            <img 
              src={slide.localImg} 
              onError={(e) => { e.target.onerror = null; e.target.src = slide.fallbackImg; }} 
              alt={slide.eyebrow} 
            />
          </div>
        ))}

        <div className="sf-hero-shade"></div>

        <button 
          className="sf-arrow prev" 
          onClick={() => setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length)}
          aria-label="Previous Slide"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
        </button>
        <button 
          className="sf-arrow next" 
          onClick={() => setCurrentSlide((prev) => (prev + 1) % SLIDES.length)}
          aria-label="Next Slide"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
        </button>

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
            <div className="tall">
              <div className="sf-card-img" style={{ minHeight: "430px" }}>
                <img 
                  src="/assets/4237-768x427.jpg" 
                  onError={(e) => { e.target.onerror = null; e.target.src = "https://askaranbinjraj.com/wp-content/uploads/2025/11/4237-768x427.jpg"; }} 
                  alt="Womens Fashion" 
                />
                <div className="sf-card-shade"></div>
                <div className="sf-card-label"><p>Womens Collection</p><p>1st & 2nd Floor · Latest styles</p></div>
              </div>
            </div>
            <div>
              <div className="sf-card-img" style={{ minHeight: "205px" }}>
                <img 
                  src="/assets/2148401436-768x768.jpg" 
                  onError={(e) => { e.target.onerror = null; e.target.src = "https://askaranbinjraj.com/wp-content/uploads/2025/11/2148401436-768x768.jpg"; }} 
                  alt="Mens Fashion" 
                />
                <div className="sf-card-shade"></div>
                <div className="sf-card-label"><p>Mens Suiting & Shirts</p><p>Branded formals & casuals</p></div>
              </div>
            </div>
            <div>
              <div className="sf-card-img" style={{ minHeight: "205px" }}>
                <img 
                  src="/assets/kids.jpg" 
                  onError={(e) => { e.target.onerror = null; e.target.src = "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?w=600&auto=format&fit=crop&q=80"; }} 
                  alt="Kids Fashion" 
                />
                <div className="sf-card-shade"></div>
                <div className="sf-card-label"><p>Kids Wear</p><p>Frocks & kids apparel</p></div>
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
              <div className="sf-card-img">
                <img 
                  src="/assets/Banarasi.jpg" 
                  onError={(e) => { e.target.onerror = null; e.target.src = "https://askaranbinjraj.com/wp-content/uploads/2025/11/Banarasi.jpg"; }} 
                  alt="Banarasi Sarees" 
                />
                <span className="sf-badge">Bestseller</span>
              </div>
              <div className="sf-card-body"><h3>Authentic Banarsi Sarees</h3><p>3rd Floor · Royal Handlooms</p><span className="sf-link-arrow">Explore →</span></div>
            </div>
            <div className="sf-polaroid">
              <div className="sf-card-img">
                <img 
                  src="/assets/assam-silk.jpg" 
                  onError={(e) => { e.target.onerror = null; e.target.src = "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&auto=format&fit=crop&q=80"; }} 
                  alt="Assam Silk" 
                />
              </div>
              <div className="sf-card-body"><h3>Traditional Assam Silk</h3><p>3rd Floor · Heritage Assam</p><span className="sf-link-arrow">Explore →</span></div>
            </div>
            <div className="sf-polaroid">
              <div className="sf-card-img">
                <img 
                  src="/assets/Morni_Banner_600x600.webp" 
                  onError={(e) => { e.target.onerror = null; e.target.src = "https://askaranbinjraj.com/wp-content/uploads/2025/11/Morni_Banner_600x600.webp"; }} 
                  alt="Bridal Lehengas" 
                />
              </div>
              <div className="sf-card-body"><h3>Designer Bridal Lehengas</h3><p>The Wedding Studio</p><span className="sf-link-arrow">Explore →</span></div>
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
              <img 
                src="/assets/BEST-GEAR-FOR-TRAVEL-8125-2x1-1-768x384.webp" 
                onError={(e) => { e.target.onerror = null; e.target.src = "https://askaranbinjraj.com/wp-content/uploads/2025/11/BEST-GEAR-FOR-TRAVEL-8125-2x1-1-768x384.webp"; }} 
                alt="Travel Gear" 
              />
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

      {/* Cosmetics Section */}
      <section id="cosmetics" className="sf-section bg-alt">
        <div className="sf-wrap">
          <div className="reveal">
            <div className="sf-head">
              <div className="sf-head-text">
                <div className="sf-eyebrow-s"><p>Beauty & Cosmetics</p></div>
                <h2 className="sf-h2">Glow,<br /><em>your way.</em></h2>
                <p className="sf-sub">Lakmé, Mamaearth, Pond's, Sugar, Elle 18 and more trusted brands — skincare, makeup and daily beauty essentials in store at Askaran Binjraj Shopping Mall, Dhekiajuli.</p>
              </div>
              <a href="https://shop.askaranbinjraj.com/" target="_blank" rel="noopener noreferrer" className="sf-btn-red">Shop Beauty ↗</a>
            </div>
          </div>
          <div className="sf-grid-3 reveal">
            <div className="sf-polaroid">
              <div className="sf-card-img"><img src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&auto=format&fit=crop&q=80" alt="Skincare" /></div>
              <div className="sf-card-body"><h3>Skincare</h3><p>Mamaearth, Pond's & daily care</p><span className="sf-link-arrow">Shop Now →</span></div>
            </div>
            <div className="sf-polaroid">
              <div className="sf-card-img"><img src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=600&auto=format&fit=crop&q=80" alt="Makeup" /></div>
              <div className="sf-card-body"><h3>Makeup & Colour</h3><p>Lakmé, Sugar, Elle 18</p><span className="sf-link-arrow">Shop Now →</span></div>
            </div>
            <div className="sf-polaroid">
              <div className="sf-card-img"><img src="https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=600&auto=format&fit=crop&q=80" alt="Fragrance" /></div>
              <div className="sf-card-body"><h3>Fragrance & More</h3><p>Perfumes & wellness</p><span className="sf-link-arrow">Shop Now →</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* Jewellery Feature Grid Section */}
      <section id="jewelry" className="sf-section bg-white">
        <div className="sf-wrap">
          <div className="reveal">
            <div className="sf-head">
              <div className="sf-head-text">
                <div className="sf-eyebrow-s"><p>2nd Floor · Jewellery & Lifestyle</p></div>
                <h2 className="sf-h2">Adorned in<br /><em>pure elegance.</em></h2>
                <p className="sf-sub">Stunning jewellery styled for weddings, festive pujas, engagements and celebrations. Traditional gold, silver and fashion jewellery on the 2nd Floor.</p>
              </div>
              <a href="https://shop.askaranbinjraj.com/" target="_blank" rel="noopener noreferrer" className="sf-btn-red">Shop Jewellery ↗</a>
            </div>
          </div>
          <div className="sf-feature-grid reveal">
            <div className="sf-feature-main">
              <img src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&auto=format&fit=crop&q=80" alt="Jewellery" />
              <div className="sf-feature-label">
                <span className="sf-badge">2nd Floor</span>
                <h3>Jewellery & Lifestyle in Dhekiajuli</h3>
                <p>Bridal sets, gold-plated necklaces & festive wear.</p>
                <span className="sf-link-arrow">Explore Jewellery →</span>
              </div>
            </div>
            <div className="sf-mini-tiles">
              <div className="sf-mini-tile">
                <div className="tile-img"><img src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&auto=format&fit=crop&q=80" alt="Necklaces" /></div>
                <div className="tile-body"><p>Bridal Sets</p><p>Traditional gold & polki</p></div>
              </div>
              <div className="sf-mini-tile">
                <div className="tile-img"><img src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500&auto=format&fit=crop&q=80" alt="Earrings" /></div>
                <div className="tile-body"><p>Earrings & Jhumkas</p><p>Festive statement pieces</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accessories Section */}
      <section id="accessories" className="sf-section bg-alt">
        <div className="sf-wrap">
          <div className="reveal">
            <div className="sf-head">
              <div className="sf-head-text">
                <div className="sf-eyebrow-s"><p>Bags, Shoes & More</p></div>
                <h2 className="sf-h2">The finishing<br /><em>touch.</em></h2>
                <p className="sf-sub">Footwear, jewellery, cosmetics, bags & home products — finishing touches for every look, all under one roof at Askaran Binjraj.</p>
              </div>
              <a href="https://shop.askaranbinjraj.com/" target="_blank" rel="noopener noreferrer" className="sf-btn-red">Shop Accessories ↗</a>
            </div>
          </div>
          <div className="sf-grid-4 reveal">
            <a href="/collections/jewellery-lifestyle" className="sf-acc-tile">
              <div className="tile-img"><img src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&auto=format&fit=crop&q=80" alt="Handbags" /></div>
              <div className="tile-body"><p>Handbags</p><p>4th Floor · Bag Boutique</p></div>
            </a>
            <a href="/collections/footwear" className="sf-acc-tile">
              <div className="tile-img"><img src="/assets/footwear-display.jpg" onError={(e)=>{e.target.onerror=null; e.target.src="https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&auto=format&fit=crop&q=80";}} alt="Footwear" /></div>
              <div className="tile-body"><p>Footwear</p><p>Men · Women · Kids</p></div>
            </a>
            <a href="/collections/jewellery-lifestyle" className="sf-acc-tile">
              <div className="tile-img"><img src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&auto=format&fit=crop&q=80" alt="Sunglasses" /></div>
              <div className="tile-body"><p>Sunglasses</p><p>Ground Floor · Eyewear Studio</p></div>
            </a>
            <a href="/collections/jewellery-lifestyle" className="sf-acc-tile">
              <div className="tile-img"><img src="https://images.unsplash.com/photo-1624222247344-550fb60583dc?w=600&auto=format&fit=crop&q=80" alt="Belts & Wallets" /></div>
              <div className="tile-body"><p>Belts & Wallets</p><p>Ground Floor · Leather Lounge</p></div>
            </a>
            <a href="/collections/jewellery-lifestyle" className="sf-acc-tile">
              <div className="tile-img"><img src="https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=600&auto=format&fit=crop&q=80" alt="Smartwatches" /></div>
              <div className="tile-body"><p>Smartwatches</p><p>Ground Floor · Smart Tech</p></div>
            </a>
            <a href="/collections/jewellery-lifestyle" className="sf-acc-tile">
              <div className="tile-img"><img src="https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=600&auto=format&fit=crop&q=80" alt="Fragrances" /></div>
              <div className="tile-body"><p>Fragrances</p><p>Ground Floor · Fragrance Bar</p></div>
            </a>
          </div>
        </div>
      </section>

      {/* Flagship Store Section */}
      <section id="stores" className="sf-section bg-paper">
        <div className="sf-wrap">
          <div className="reveal">
            <div style={{ marginBottom: "48px" }}>
              <div className="sf-eyebrow-s"><p>Visit Us</p></div>
              <h2 className="sf-h2">Visit us<br /><em>in person.</em></h2>
              <p className="sf-sub">Three floors of curated retail. Expert staff, in-store services, and the full collection.</p>
            </div>
          </div>
          <div className="reveal sf-store-feature">
            <div className="store-img">
              <img src="/assets/mall-dusk.jpg" onError={(e)=>{e.target.onerror=null; e.target.src="https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=800&auto=format&fit=crop&q=80";}} alt="Askaran Binjraj Shopping Mall, Dhekiajuli" />
              <span className="sf-badge" style={{ top: "12px", left: "12px" }}>Flagship Mall</span>
            </div>
            <div className="store-body">
              <h3>Askaran Binjraj Shopping Mall</h3>
              <p className="store-line">📍 NH 52, Main Road, Dhekiajuli, Assam 784110</p>
              <p className="store-line">🕐 Mon–Sat 10:00–20:30 · Sun 10:00–20:00</p>
              <p className="store-line">📞 03712 244 247 · +91 88119 66701</p>
              <p className="store-hl">↑ 3 floors · Home to The Super Store & The Wedding Studio</p>
              <div className="store-btns">
                <a href="https://maps.app.goo.gl/oYK6b4wPu7BUnzGb8" target="_blank" rel="noopener noreferrer" className="b-outline">Directions</a>
                <a href="https://shop.askaranbinjraj.com/" target="_blank" rel="noopener noreferrer" className="b-red">Shop Online</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Master 4-Column Footer */}
      <footer className="sf-footer">
        <div className="sf-wrap">
          <div className="sf-footer-grid">
            <div>
              <a href="/" className="f-logo">
                <img 
                  src="/assets/logo-wide.png" 
                  onError={(e) => { e.target.onerror = null; e.target.src = "/assets/logo-stacked.png"; }} 
                  alt="Askaran Binjraj" 
                />
              </a>
              <p className="f-desc">Fashion · Ethnic Wear · Travel Gear · Cosmetics · Jewellery · Accessories — all in one place.</p>
              <p className="f-motto">Quality. Variety. Trust.</p>
              <a href="https://shop.askaranbinjraj.com/" target="_blank" rel="noopener noreferrer" className="f-shop">Shop Online ↗</a>
            </div>
            <div>
              <h4>Departments</h4>
              <ul>
                <li><a href="#fashion">Fashion</a></li>
                <li><a href="#ethnic">Ethnic Wear</a></li>
                <li><a href="#travel">Travel Gear</a></li>
                <li><a href="#cosmetics">Cosmetics</a></li>
                <li><a href="#jewelry">Jewellery</a></li>
                <li><a href="#accessories">Accessories</a></li>
              </ul>
            </div>
            <div>
              <h4>Collections</h4>
              <ul>
                <li><a href="/collections/sarees">Sarees</a></li>
                <li><a href="/collections/lehengas">Bridal Lehengas</a></li>
                <li><a href="/collections/womens">Womens</a></li>
                <li><a href="/collections/mens">Mens</a></li>
                <li><a href="/collections/footwear">Footwear</a></li>
                <li><a href="/collections">All Collections</a></li>
              </ul>
            </div>
            <div>
              <h4>Company</h4>
              <ul>
                <li><a href="#about">About Us</a></li>
                <li><a href="/careers">Careers</a></li>
                <li><a href="#stores">Visit Us</a></li>
                <li><a href="/contact">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h4>Visit Us</h4>
              <ul>
                <li><a href="https://maps.app.goo.gl/oYK6b4wPu7BUnzGb8" target="_blank" rel="noopener noreferrer">NH 52, Main Road, Dhekiajuli, Assam 784110</a></li>
                <li><a href="tel:+91-8811966701">+91 88119 66701</a></li>
                <li><a href="tel:03712244247">03712 244 247</a></li>
                <li><a href="mailto:info.askaranbinjraj@gmail.com">info.askaranbinjraj@gmail.com</a></li>
              </ul>
            </div>
          </div>
          <div className="sf-footer-bottom">
            <p>© 2026 Askaran Binjraj. All rights reserved.</p>
            <p className="f-est">EST. 1980</p>
            <div className="f-legal">
              <a href="/contact">Contact</a>
              <a href="/careers">Careers</a>
              <a href="https://shop.askaranbinjraj.com/" target="_blank" rel="noopener noreferrer">Online Store</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Action Button */}
      <a href="https://wa.me/918811966701" target="_blank" rel="noopener noreferrer" className="wa-float" aria-label="Chat on WhatsApp">
        <svg fill="currentColor" width="28" height="28" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.334 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.334-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
      </a>
    </div>
  );
}