import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const SLIDES = [
  {
    eyebrow: "Royal Heritage & Weaves",
    title: "Six generations of<br><em>artisan craft.</em>",
    sub: "Authentic Banarasi sarees sourced directly from Varanasi weavers across six generations of uncompromised trust.",
    localImg: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=1600",
    fallbackImg: "/assets/Banarasi.jpg"
  },
  {
    eyebrow: "The Wedding Studio",
    title: "Designer bridal<br><em>lehengas & celebrations.</em>",
    sub: "Raw silk zardozi, hand-embroidered velvet bridal sets, and festive celebratory wear curated for every milestone.",
    localImg: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&q=80&w=1600",
    fallbackImg: "/assets/Morni_Banner_600x600.webp"
  },
  {
    eyebrow: "Kids & Family Wear",
    title: "Joyful style for<br><em>the little ones.</em>",
    sub: "Adorable festive ethnic wear, party frocks, smart tailoring, and comfortable everyday clothing for kids.",
    localImg: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&q=80&w=1600",
    fallbackImg: "/assets/4237-768x427.jpg"
  },
  {
    eyebrow: "Travel & Luggage",
    title: "Travel light,<br><em>arrive brilliantly.</em>",
    sub: "Luxury hardside trolley luggage, travel duffles, rucksacks, and premium travel accessories on the 4th Floor.",
    localImg: "https://images.unsplash.com/photo-1581553680321-4fffae59fccd?auto=format&fit=crop&q=80&w=1600",
    fallbackImg: "/assets/BEST-GEAR-FOR-TRAVEL-8125-2x1-1-768x384.webp"
  },
  {
    eyebrow: "Fine Jewellery",
    title: "Adorned in<br><em>pure elegance.</em>",
    sub: "Stunning jewellery styled for weddings, festive pujas, engagements and celebrations.",
    localImg: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=1600",
    fallbackImg: "/assets/jewelry.jpg"
  },
  {
    eyebrow: "Beauty & Wellness",
    title: "Your best self,<br><em>every single day.</em>",
    sub: "Lakmé, Mamaearth, Pond's, Sugar, Elle 18 and more trusted beauty brands in-store.",
    localImg: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=1600",
    fallbackImg: "/assets/cosmetics.jpg"
  }
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [splashDone, setSplashDone] = useState(false);
  const [splashRemoved, setSplashRemoved] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

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
    }, 3800);
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
      
      {/* AUTHENTIC OG SPLASH SCREEN GATE */}
      {!splashRemoved && (
        <div className={`splash ${splashDone ? "done" : ""}`} id="splash">
          <div className="sp-corner top-left"></div>
          <div className="sp-corner top-right"></div>
          <div className="sp-corner bottom-left"></div>
          <div className="sp-corner bottom-right"></div>

          <div className="sp-floating-dot" style={{ top: "8%", left: "12%" }}></div>
          <div className="sp-floating-dot" style={{ top: "22%", left: "34%" }}></div>
          <div className="sp-floating-dot" style={{ top: "14%", right: "20%" }}></div>
          <div className="sp-floating-dot" style={{ top: "30%", right: "8%" }}></div>
          <div className="sp-floating-dot" style={{ bottom: "36%", left: "21%" }}></div>
          <div className="sp-floating-dot" style={{ bottom: "24%", right: "32%" }}></div>
          <div className="sp-floating-dot" style={{ bottom: "12%", left: "14%" }}></div>
          <div className="sp-floating-dot" style={{ bottom: "18%", right: "18%" }}></div>

          <div className="sp-top-meta">
            <span>EST. 1980</span>
            <span>6TH GENERATION</span>
          </div>

          <div className="sp-center-stage">
            <div className="sp-circle-ring"></div>
            <div className="sp-center-line"></div>
            
            <img 
              src="/assets/logo-stacked.png" 
              onError={(e) => { e.target.onerror = null; e.target.src = "/assets/logo-wide.png"; }} 
              alt="Askaran Binjraj" 
              className="sp-logo-img"
            />
            
            <div className="sp-motto-green">Quality. Variety. Trust.</div>
            
            <div className="sp-dots-trio">
              <span></span><span></span><span></span>
            </div>
            
            <div className="sp-sub-meta">SINCE 1980 · SIX GENERATIONS OF TRUST</div>
            <div className="sp-brand-name">ASKARAN BINJRAJ</div>
          </div>

          <div className="sp-bottom-nav">
            <span onClick={() => scrollToSection("ethnic")}>ETHNIC</span>
            <span onClick={() => scrollToSection("kids")}>KIDS</span>
            <span className="active" onClick={() => scrollToSection("home")}>HOME</span>
            <span onClick={() => scrollToSection("fashion")}>FASHION</span>
            <span onClick={() => scrollToSection("travel")}>TRAVEL</span>
            <span onClick={() => scrollToSection("jewelry")}>JEWELLERY</span>
          </div>
        </div>
      )}

      {/* Top Red Announcement Bar */}
      <div className="sf-announce">
        SAME-DAY & 1-DAY DELIVERY AVAILABLE · NEW ETHNIC & FESTIVE COLLECTION JUST DROPPED · 
        <a href="https://shop.askaranbinjraj.com/" target="_blank" rel="noopener noreferrer">SHOP ONLINE &gt;</a>
      </div>

      {/* Sticky Primary Header Navbar */}
      <header id="site-header" className="sf-header">
        <div className="sf-header-in">
          <Link to="/" className="sf-logo">
            <img 
              src="/assets/logo-wide.png" 
              onError={(e) => { e.target.onerror = null; e.target.src = "/assets/logo-stacked.png"; }} 
              alt="Askaran Binjraj" 
              style={{ height: "46px", width: "auto", objectFit: "contain" }}
            />
          </Link>
          <nav className="sf-nav">
            <a onClick={() => scrollToSection("ethnic")}>ETHNIC WEAR</a>
            <a onClick={() => scrollToSection("kids")}>KIDS WEAR</a>
            <a onClick={() => scrollToSection("home")}>HOME & LIVING</a>
            <a onClick={() => scrollToSection("fashion")}>FASHION</a>
            <a onClick={() => scrollToSection("travel")}>TRAVEL GEAR</a>
            <a onClick={() => scrollToSection("cosmetics")}>COSMETICS</a>
            <a onClick={() => scrollToSection("jewelry")}>JEWELLERY</a>
            <a onClick={() => scrollToSection("stores")}>VISIT US</a>
            <Link to="/careers">CAREERS</Link>
          </nav>
          <div className="sf-header-actions" style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <a href="https://shop.askaranbinjraj.com/" target="_blank" rel="noopener noreferrer" className="sf-shop-btn">
              SHOP ONLINE ↗
            </a>
            <button className="sf-burger" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle Menu">
              <span></span><span></span><span></span>
            </button>
          </div>
        </div>
        <nav className={`sf-mobile-nav ${mobileMenuOpen ? "open" : ""}`}>
          <a onClick={() => scrollToSection("ethnic")}>ETHNIC WEAR</a>
          <a onClick={() => scrollToSection("kids")}>KIDS WEAR</a>
          <a onClick={() => scrollToSection("home")}>HOME & LIVING</a>
          <a onClick={() => scrollToSection("fashion")}>FASHION</a>
          <a onClick={() => scrollToSection("travel")}>TRAVEL GEAR</a>
          <a onClick={() => scrollToSection("cosmetics")}>COSMETICS</a>
          <a onClick={() => scrollToSection("jewelry")}>JEWELLERY</a>
          <a onClick={() => scrollToSection("stores")}>VISIT US</a>
          <Link to="/careers" onClick={() => setMobileMenuOpen(false)}>CAREERS</Link>
          <a href="https://shop.askaranbinjraj.com/" target="_blank" rel="noopener noreferrer">SHOP ONLINE ↗</a>
        </nav>
      </header>

      {/* Hero Banner Carousel */}
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
          <span>0{currentSlide + 1}<small> / 06</small></span>
        </div>

        <div className="sf-hero-content">
          <div className="sf-hero-inner">
            <div className="sf-eyebrow">
              <p>— {SLIDES[currentSlide].eyebrow}</p>
            </div>
            <h1 dangerouslySetInnerHTML={{ __html: SLIDES[currentSlide].title }} />
            <p className="sf-hero-sub">{SLIDES[currentSlide].sub}</p>
            <div className="sf-cta-row">
              <a href="https://shop.askaranbinjraj.com/" target="_blank" rel="noopener noreferrer" className="sf-btn-red">
                SHOP ONLINE ↗
              </a>
              <a onClick={() => scrollToSection("ethnic")} className="sf-btn-ghost-w" style={{ cursor: "pointer" }}>
                EXPLORE DEPARTMENTS
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee Ticker */}
      <div className="sf-ticker">
        <div className="sf-ticker-track">
          <span><span>◆</span> Dhekiajuli Flagship Mall</span>
          <span><span>◆</span> Six Generations of Trust</span>
          <span><span>◆</span> Authentic Banarasi Sarees</span>
          <span><span>◆</span> Premium Kids & Family Wear</span>
          <span><span>◆</span> Home Furnishing & Improvements</span>
          <span><span>◆</span> Same-Day Delivery Available</span>
        </div>
      </div>

      {/* Ethnic Wear Section */}
      <section id="ethnic" className="sf-section bg-paper">
        <div className="sf-wrap">
          <div className="reveal">
            <div className="sf-head">
              <div className="sf-head-text">
                <div className="sf-eyebrow-s green"><p>Ethnic & Heritage Wears</p></div>
                <h2 className="sf-h2"><em>Roots,</em><br />reimagined.</h2>
                <p className="sf-sub">Authentic Banarasi sarees, Muga and Assam silk, Mekhela Chador and bridal weaves — sourced directly from Varanasi weavers across six generations.</p>
              </div>
              <a href="https://shop.askaranbinjraj.com/" target="_blank" rel="noopener noreferrer" className="sf-btn-red">Shop Ethnic Wear ↗</a>
            </div>
          </div>
          <div className="sf-vertical-stack reveal">
            <div className="sf-og-card">
              <img 
                src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=1200&auto=format&fit=crop&q=80" 
                alt="Authentic Banarsi Sarees" 
                style={{ width: "100%", height: "420px", objectFit: "cover", display: "block", borderRadius: "12px 12px 0 0" }} 
              />
              <div className="card-body-pad">
                <span className="sf-badge">Bestseller</span>
                <h3>Authentic Banarsi Sarees</h3>
                <p>3rd Floor · Royal Handlooms sourced directly from Varanasi</p>
                <span className="sf-link-arrow">Explore Sarees →</span>
              </div>
            </div>
            <div className="sf-og-card">
              <img 
                src="https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=1200&auto=format&fit=crop&q=80" 
                alt="Traditional Assam Silk" 
                style={{ width: "100%", height: "420px", objectFit: "cover", display: "block", borderRadius: "12px 12px 0 0" }} 
              />
              <div className="card-body-pad">
                <h3>Traditional Assam Silk & Mekhela Chador</h3>
                <p>3rd Floor · Pure Muga silk and exquisite celebratory ethnic wear</p>
                <span className="sf-link-arrow">Explore Silk →</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kids Section */}
      <section id="kids" className="sf-section bg-alt">
        <div className="sf-wrap">
          <div className="reveal">
            <div className="sf-head">
              <div className="sf-head-text">
                <div className="sf-eyebrow-s"><p>Kids & Family Section</p></div>
                <h2 className="sf-h2">Joyful style for<br /><em>the little ones.</em></h2>
                <p className="sf-sub">Festive ethnic outfits, party wear frocks, smart formals, and comfortable everyday clothing for children of all ages.</p>
              </div>
              <a href="https://shop.askaranbinjraj.com/" target="_blank" rel="noopener noreferrer" className="sf-btn-red">Shop Kids Wear ↗</a>
            </div>
          </div>
          <div className="sf-vertical-stack reveal">
            <div className="sf-og-card">
              <img 
                src="https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=1200&auto=format&fit=crop&q=80" 
                alt="Kids Festive & Casual Wear" 
                style={{ width: "100%", height: "420px", objectFit: "cover", display: "block", borderRadius: "12px 12px 0 0" }} 
              />
              <div className="card-body-pad">
                <span className="sf-badge" style={{ background: "var(--green)" }}>Kids Department</span>
                <h3>Kids Fashion & Festive Wear</h3>
                <p>2nd Floor · Comfortable daily wear, ethnic sets & party frocks</p>
                <span className="sf-link-arrow">Explore Kids Collection →</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Home Furnishing & Home Improvements Section */}
      <section id="home" className="sf-section bg-paper">
        <div className="sf-wrap">
          <div className="reveal">
            <div className="sf-head">
              <div className="sf-head-text">
                <div className="sf-eyebrow-s"><p>Home Furnishing & Improvements</p></div>
                <h2 className="sf-h2">Elevate your<br /><em>living spaces.</em></h2>
                <p className="sf-sub">Premium bedsheets, luxurious curtains, cushion covers, home decor, and essential home improvement items crafted for elegance and durability.</p>
              </div>
              <a href="https://shop.askaranbinjraj.com/" target="_blank" rel="noopener noreferrer" className="sf-btn-red">Shop Home & Living ↗</a>
            </div>
          </div>
          <div className="sf-grid-4 reveal" style={{ marginTop: "36px" }}>
            <div className="sf-acc-tile">
              <div className="tile-img"><img src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=600&auto=format&fit=crop&q=80" alt="Bedsheets & Linen" style={{ width: "100%", height: "280px", objectFit: "cover" }} /></div>
              <div className="tile-body"><p>Bedsheets & Linen</p><p>Home Furnishing Floor</p></div>
            </div>
            <div className="sf-acc-tile">
              <div className="tile-img"><img src="https://images.unsplash.com/photo-1513694203232-719a280e022f?w=600&auto=format&fit=crop&q=80" alt="Curtains & Drapes" style={{ width: "100%", height: "280px", objectFit: "cover" }} /></div>
              <div className="tile-body"><p>Curtains & Drapes</p><p>Interior Decor Studio</p></div>
            </div>
            <div className="sf-acc-tile">
              <div className="tile-img"><img src="https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=600&auto=format&fit=crop&q=80" alt="Home Improvements" style={{ width: "100%", height: "280px", objectFit: "cover" }} /></div>
              <div className="tile-body"><p>Home Improvements</p><p>Utility & Hardware</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* Fashion Section */}
      <section id="fashion" className="sf-section bg-alt">
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
          <div className="sf-vertical-stack reveal">
            <div className="sf-og-card">
              <img 
                src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1200&auto=format&fit=crop&q=80" 
                alt="Womens Collection" 
                style={{ width: "100%", height: "420px", objectFit: "cover", display: "block", borderRadius: "12px 12px 0 0" }} 
              />
              <div className="card-body-pad">
                <h3>Womens Collection</h3>
                <p>1st & 2nd Floor · Latest styles and seasonal picks</p>
                <span className="sf-link-arrow">Explore Womens →</span>
              </div>
            </div>
            <div className="sf-og-card">
              <img 
                src="https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?w=1200&auto=format&fit=crop&q=80" 
                alt="Mens Suiting & Shirts" 
                style={{ width: "100%", height: "420px", objectFit: "cover", display: "block", borderRadius: "12px 12px 0 0" }} 
              />
              <div className="card-body-pad">
                <h3>Mens Suiting & Shirts</h3>
                <p>Branded formals, trousers & casual wear</p>
                <span className="sf-link-arrow">Explore Mens →</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Travel Gear Section (Fixed with Luxury Trolley Bags) */}
      <section id="travel" className="sf-section bg-white">
        <div className="sf-wrap">
          <div className="reveal">
            <div className="sf-head">
              <div className="sf-head-text">
                <div className="sf-eyebrow-s"><p>4th Floor · Travel Gear & Luggage</p></div>
                <h2 className="sf-h2">Pack smart,<br /><em>travel far.</em></h2>
                <p className="sf-sub">Elevate your journey with luxury hardside luggage, trolley bags, rucksacks, and premium travel gear on the 4th Floor.</p>
              </div>
              <a href="https://shop.askaranbinjraj.com/" target="_blank" rel="noopener noreferrer" className="sf-btn-red">Shop Travel Gear ↗</a>
            </div>
          </div>
          <div className="sf-vertical-stack reveal">
            <div className="sf-og-card">
              <img 
                src="https://images.unsplash.com/photo-1581553680321-4fffae59fccd?w=1200&auto=format&fit=crop&q=80" 
                alt="Luxury Luggage & Trolley Bags" 
                style={{ width: "100%", height: "420px", objectFit: "cover", display: "block", borderRadius: "12px 12px 0 0" }} 
              />
              <div className="card-body-pad">
                <span className="sf-badge">4th Floor</span>
                <h3>Luxury Luggage & Trolley Sets</h3>
                <p>Durable hardside suitcases, travel duffles & premium rucksacks</p>
                <span className="sf-link-arrow">Explore Travel Gear →</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cosmetics Section */}
      <section id="cosmetics" className="sf-section bg-paper">
        <div className="sf-wrap">
          <div className="reveal">
            <div className="sf-head">
              <div className="sf-head-text">
                <div className="sf-eyebrow-s"><p>Beauty & Cosmetics</p></div>
                <h2 className="sf-h2">Glow,<br /><em>your way.</em></h2>
                <p className="sf-sub">Lakmé, Mamaearth, Pond's, Sugar, Elle 18 and more trusted beauty brands in-store.</p>
              </div>
              <a href="https://shop.askaranbinjraj.com/" target="_blank" rel="noopener noreferrer" className="sf-btn-red">Shop Cosmetics ↗</a>
            </div>
          </div>
          <div className="sf-vertical-stack reveal">
            <div className="sf-og-card">
              <img src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=1200&auto=format&fit=crop&q=80" alt="Beauty & Skincare Counter" style={{ width: "100%", height: "420px", objectFit: "cover", display: "block", borderRadius: "12px 12px 0 0" }} />
              <div className="card-body-pad">
                <h3>Beauty & Skincare Counter</h3>
                <p>Ground Floor · Lakmé, Mamaearth, Sugar, Elle 18</p>
                <span className="sf-link-arrow">Explore Cosmetics →</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Jewellery Store Section */}
      <section id="jewelry" className="sf-section bg-alt">
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
          <div className="sf-vertical-stack reveal">
            <div className="sf-og-card">
              <img 
                src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=1200&auto=format&fit=crop&q=80" 
                alt="Gold & Fine Jewellery Counter" 
                style={{ width: "100%", height: "420px", objectFit: "cover", display: "block", borderRadius: "12px 12px 0 0" }} 
              />
              <div className="card-body-pad">
                <h3>Gold & Fine Jewellery Counter</h3>
                <p>2nd Floor · Curated bridal sets, gold bangles & necklaces</p>
                <span className="sf-link-arrow">Explore Jewellery →</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Flagship Store & Interactive Map Destination Section */}
      <section id="stores" className="sf-section bg-paper">
        <div className="sf-wrap">
          <div className="reveal" style={{ marginBottom: "36px" }}>
            <div className="sf-eyebrow-s"><p>Visit Us</p></div>
            <h2 className="sf-h2">Visit us<br /><em>in person.</em></h2>
            <p className="sf-sub">Three floors of curated retail in Dhekiajuli, Assam. Home to The Super Store & The Wedding Studio.</p>
          </div>
          <div className="reveal sf-store-feature">
            <div className="store-img">
              <iframe 
                title="Askaran Binjraj Location Map" 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3568.513405788737!2d92.48347887616616!3d26.680016570776994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3744c7942e6129cb%3A0xb366cf8d4bebfbfd!2sAskaran%20Binjraj!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0, minHeight: "360px" }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="store-body">
              <span className="sf-badge" style={{ alignSelf: "flex-start" }}>Flagship Destination</span>
              <h3>Askaran Binjraj Shopping Mall</h3>
              <p className="store-line">📍 NH 52, Main Road, Dhekiajuli, Assam 784110</p>
              <p className="store-line">🕐 Mon–Sat 10:00–20:30 · Sun 10:00–20:00</p>
              <p className="store-line">📞 03712 244 247 · +91 88119 66701</p>
              <p className="store-hl">↑ 3 floors · Home to Fashion, Ethnic Wear, Travel Gear & Fine Jewellery</p>
              <div className="store-btns">
                <a href="https://maps.app.goo.gl/oYK6b4wPu7BUnzGb8" target="_blank" rel="noopener noreferrer" className="b-outline">Directions ↗</a>
                <a href="https://shop.askaranbinjraj.com/" target="_blank" rel="noopener noreferrer" className="b-red">Shop Online ↗</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Master Footer */}
      <footer className="sf-footer">
        <div className="sf-wrap">
          <div className="sf-footer-grid">
            <div>
              <Link to="/" className="f-logo">
                <img 
                  src="/assets/logo-wide.png" 
                  onError={(e) => { e.target.onerror = null; e.target.src = "/assets/logo-stacked.png"; }} 
                  alt="Askaran Binjraj" 
                />
              </Link>
              <p className="f-desc">Fashion · Ethnic Wear · Kids Wear · Home Furnishing · Travel Gear · Cosmetics · Jewellery — all in one place.</p>
              <p className="f-motto">Quality. Variety. Trust.</p>
              <a href="https://shop.askaranbinjraj.com/" target="_blank" rel="noopener noreferrer" className="f-shop">Shop Online ↗</a>
            </div>
            <div>
              <h4>Departments</h4>
              <ul>
                <li><a onClick={() => scrollToSection("ethnic")}>Ethnic Wear</a></li>
                <li><a onClick={() => scrollToSection("kids")}>Kids Wear</a></li>
                <li><a onClick={() => scrollToSection("home")}>Home & Living</a></li>
                <li><a onClick={() => scrollToSection("fashion")}>Fashion</a></li>
                <li><a onClick={() => scrollToSection("travel")}>Travel Gear</a></li>
                <li><a onClick={() => scrollToSection("jewelry")}>Jewellery</a></li>
              </ul>
            </div>
            <div>
              <h4>Collections</h4>
              <ul>
                <li><a href="/collections/sarees">Sarees</a></li>
                <li><a href="/collections/lehengas">Bridal Lehengas</a></li>
                <li><a href="/collections/kids">Kids Festive</a></li>
                <li><a href="/collections/furnishing">Home Furnishing</a></li>
              </ul>
            </div>
            <div>
              <h4>Company</h4>
              <ul>
                <li><a onClick={() => scrollToSection("stores")}>Visit Us</a></li>
                <li><Link to="/careers">Careers</Link></li>
                <li><a href="/contact">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h4>Visit Us</h4>
              <ul>
                <li><a href="https://maps.app.goo.gl/oYK6b4wPu7BUnzGb8" target="_blank" rel="noopener noreferrer">NH 52, Main Road, Dhekiajuli, Assam 784110</a></li>
                <li><a href="tel:+91-8811966701">+91 88119 66701</a></li>
                <li><a href="tel:03712244247">03712 244 247</a></li>
              </ul>
            </div>
          </div>
          <div className="sf-footer-bottom">
            <p>© 2026 Askaran Binjraj. All rights reserved.</p>
            <p className="f-est">EST. 1980</p>
            <div className="f-legal">
              <a href="/contact">Contact</a>
              <Link to="/careers">Careers</Link>
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