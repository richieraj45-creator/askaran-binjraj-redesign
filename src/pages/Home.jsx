import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  useEffect(() => {
    // Fallback timer for splash screen dismissal if storefront.js runs independently
    const splash = document.getElementById("splash");
    if (splash) {
      setTimeout(() => {
        splash.classList.add("done");
        document.body.classList.remove("lock");
        setTimeout(() => {
          if (splash.parentNode) splash.parentNode.removeChild(splash);
        }, 950);
      }, 4400);
    }
  }, []);

  return (
    <div className="storefront bg-[#FAFAF8] text-[#111111] min-h-screen">
      {/* Cinematic Splash Screen */}
      <div className="splash" id="splash">
        <div className="sp-dot" style={{ top: "8%", left: "12%", width: "3px", height: "3px", opacity: 0.18 }}></div>
        <div className="sp-dot" style={{ top: "15%", left: "78%", width: "2px", height: "2px", opacity: 0.24 }}></div>
        <div className="sp-dot" style={{ top: "22%", left: "34%", width: "2px", height: "2px", opacity: 0.3 }}></div>
        <div className="sp-ring">
          <svg width="500" height="500" viewBox="0 0 500 500" fill="none">
            <circle cx="250" cy="250" r="248" stroke="#E8E3DA" strokeWidth="1"></circle>
            <path d="M 250 2 A 248 248 0 0 1 497 223" stroke="#C8251E" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.55"></path>
          </svg>
        </div>
        <div className="sp-line-h" style={{ top: "28px" }}></div>
        <div className="sp-line-h" style={{ bottom: "28px" }}></div>
        <div className="sp-line-v" style={{ left: "28px" }}></div>
        <div className="sp-line-v" style={{ right: "28px" }}></div>
        <div className="sp-center">
          <div className="sp-logo">
            <div className="text-3xl sm:text-4xl font-serif font-bold text-[#C8251E] tracking-tight">ASKARAN BINJRAJ</div>
            <div className="sp-shimmer"></div>
          </div>
          <div className="sp-divider"></div>
          <div className="sp-tagline">Quality. Variety. Trust.</div>
          <div className="sp-dots">
            <div></div><div></div><div></div>
          </div>
          <p className="sp-since">EST. 1980 · DHEKIAJULI, ASSAM</p>
        </div>
      </div>

      {/* Announcement Bar */}
      <div className="sf-announce">
        Same-Day & 1-Day Delivery Available · New Ethnic Collection Just Dropped
      </div>

      {/* Header */}
      <header id="site-header" className="sf-header">
        <div className="sf-header-in">
          <Link to="/" className="sf-logo flex items-center gap-3">
            <div className="font-serif text-2xl font-bold text-[#C8251E] tracking-tight">ASKARAN BINJRAJ</div>
          </Link>
          <nav className="sf-nav">
            <a href="#fashion" data-scroll-to="fashion">Fashion</a>
            <a href="#ethnic" data-scroll-to="ethnic">Ethnic Wear</a>
            <a href="#travel" data-scroll-to="travel">Travel Gear</a>
            <a href="#cosmetics" data-scroll-to="cosmetics">Cosmetics</a>
            <a href="#jewelry" data-scroll-to="jewelry">Jewellery</a>
            <a href="#accessories" data-scroll-to="accessories">Accessories</a>
            <a href="#about" data-scroll-to="about">About</a>
            <a href="#careers" data-scroll-to="careers">Careers</a>
            <a href="#blog" data-scroll-to="blog">Journal</a>
          </nav>
          <div className="flex items-center gap-4">
            <a href="https://shop.askaranbinjraj.com/" target="_blank" rel="noopener noreferrer" className="sf-shop-btn">
              Shop Online ↗
            </a>
            <button className="sf-burger" id="burger" aria-label="Toggle Navigation">
              <span></span><span></span><span></span>
            </button>
          </div>
        </div>
        <div className="sf-mobile-nav" id="mobile-nav">
          <a href="#fashion" data-scroll-to="fashion">Fashion</a>
          <a href="#ethnic" data-scroll-to="ethnic">Ethnic Wear</a>
          <a href="#travel" data-scroll-to="travel">Travel Gear</a>
          <a href="#cosmetics" data-scroll-to="cosmetics">Cosmetics</a>
          <a href="#jewelry" data-scroll-to="jewelry">Jewellery</a>
          <a href="#accessories" data-scroll-to="accessories">Accessories</a>
          <a href="#about" data-scroll-to="about">About</a>
          <a href="#careers" data-scroll-to="careers">Careers</a>
          <a href="https://shop.askaranbinjraj.com/" target="_blank" rel="noopener noreferrer">Shop Online ↗</a>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="sf-hero">
        <div className="sf-slide active">
          <img src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=1600" alt="New Season" />
        </div>
        <div className="sf-slide">
          <img src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=1600" alt="Heritage Collection" />
        </div>
        <div className="sf-slide">
          <img src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=1600" alt="Fine Jewellery" />
        </div>
        <div className="sf-slide">
          <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1600" alt="Ready-to-Wear" />
        </div>
        <div className="sf-slide">
          <img src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=1600" alt="Travel & Style" />
        </div>
        <div className="sf-slide">
          <img src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=1600" alt="Beauty & Wellness" />
        </div>

        <div className="sf-hero-shade"></div>
        <div className="sf-hero-fade"></div>

        <button className="sf-arrow prev" id="hero-prev" aria-label="Previous Slide">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
        </button>
        <button className="sf-arrow next" id="hero-next" aria-label="Next Slide">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
        </button>

        <div className="sf-counter" id="hero-counter"><span>01<small>/ 05</small></span></div>
        <div className="sf-dots" id="hero-dots"></div>

        <div className="sf-hero-content">
          <div className="sf-hero-inner sf-hero-text-fade" id="hero-text">
            <div className="sf-eyebrow">
              <p id="hero-eyebrow-text">Heritage Collection</p>
            </div>
            <h1 id="hero-title">Six generations of<br /><em>artisan craft.</em></h1>
            <p className="sf-hero-sub" id="hero-sub">Authentic Banarasi sarees sourced directly from Varanasi weavers across six generations.</p>
            <div className="sf-cta-row">
              <a href="https://shop.askaranbinjraj.com/" target="_blank" rel="noopener noreferrer" className="sf-btn-red">Shop Online ↗</a>
              <a href="#ethnic" data-scroll-to="ethnic" className="sf-btn-ghost-w">Explore Departments</a>
            </div>
          </div>
        </div>
      </section>

      {/* Ticker */}
      <div className="sf-ticker">
        <div className="sf-ticker-track">
          <span><span>◆</span> Dhekiajuli Flagship</span>
          <span><span>◆</span> Six Generations of Trust</span>
          <span><span>◆</span> Authentic Banarasi Sarees</span>
          <span><span>◆</span> Premium Suitings & Formals</span>
          <span><span>◆</span> Luxury Travel Gear</span>
          <span><span>◆</span> Same-Day Delivery Available</span>
          <span><span>◆</span> Dhekiajuli Flagship</span>
          <span><span>◆</span> Six Generations of Trust</span>
        </div>
      </div>

      {/* Fashion Section */}
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
              <div className="sf-card-img h-full">
                <img src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&auto=format&fit=crop&q=80" alt="Fashion Model" />
                <div className="sf-card-shade"></div>
                <div className="sf-card-label"><p>Sharp Everyday Style</p><p>Branded shirts & tailored trousers</p></div>
              </div>
            </div>
            <div>
              <div className="sf-card-img">
                <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&auto=format&fit=crop&q=80" alt="Midi Dresses" />
                <div className="sf-card-shade"></div>
                <div className="sf-card-label"><p>Contemporary Fusion</p><p>Midi dresses & Indo-Western</p></div>
              </div>
            </div>
            <div>
              <div className="sf-card-img">
                <img src="https://images.unsplash.com/photo-1502784444187-359ac186c5bb?w=600&auto=format&fit=crop&q=80" alt="Kids Fashion" />
                <div className="sf-card-shade"></div>
                <div className="sf-card-label"><p>Little Trendsetters</p><p>Frocks & kids wear</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ethnic Section */}
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
                <p className="sf-sub">Elevate your journey with luxury luggage and travel accessories — suitcases, duffle bags, rucksacks, and laptop bags on the 4th Floor of Askaran Binjraj Shopping Mall.</p>
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

      {/* Jewellery Section */}
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

      {/* About Section */}
      <section id="about" className="sf-section sf-dark text-white">
        <div className="sf-wrap">
          <div className="sf-two-col">
            <div>
              <div className="sf-eyebrow-s light"><p>Our Heritage</p></div>
              <h2 className="sf-h2 light">Where heritage<br /><em>meets trust.</em></h2>
              <p className="sf-sub light mt-6">For six generations, Askaran Binjraj has been the cornerstone of shopping in Dhekiajuli, Assam. Founded on unwavering trust, quality, and variety.</p>
            </div>
            <div className="sf-stats">
              <div className="sf-stat"><p>6</p><p>Generations</p></div>
              <div className="sf-stat"><p>45+</p><p>Years Trust</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* Careers Section */}
      <section id="careers" className="sf-section bg-paper">
        <div className="sf-wrap">
          <div className="reveal">
            <div className="sf-head">
              <div className="sf-head-text">
                <div className="sf-eyebrow-s"><p>Join Our Team</p></div>
                <h2 className="sf-h2">Careers at<br /><em>Askaran Binjraj.</em></h2>
                <p className="sf-sub">Build your retail career with Dhekiajuli's premier shopping destination.</p>
              </div>
            </div>
          </div>
          <div className="sf-grid-3 reveal">
            <div className="sf-job">
              <div className="job-body">
                <div className="job-meta"><span className="job-tag">Retail</span><span className="job-dept">Sales</span></div>
                <h3>Senior Fashion Advisor</h3>
                <p className="job-loc">Dhekiajuli Mall · Full-time</p>
              </div>
            </div>
            <div className="sf-job">
              <div className="job-body">
                <div className="job-meta"><span className="job-tag">E-Commerce</span><span className="job-dept">Digital</span></div>
                <h3>E-Commerce Manager</h3>
                <p className="job-loc">Dhekiajuli · Hybrid</p>
              </div>
            </div>
            <div className="sf-job">
              <div className="job-body">
                <div className="job-meta"><span className="job-tag">Visual</span><span className="job-dept">Merchandising</span></div>
                <h3>Store Visual Merchandiser</h3>
                <p className="job-loc">Dhekiajuli Mall · Full-time</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="sf-footer">
        <div className="sf-wrap">
          <div className="sf-footer-grid">
            <div>
              <div className="font-serif text-xl font-bold text-[#C8251E] mb-2">ASKARAN BINJRAJ</div>
              <p className="f-desc">Shopping Mall in Dhekiajuli, Assam — offering fashion, ethnic wear, travel gear, cosmetics, and lifestyle items.</p>
              <p className="f-motto">Quality. Variety. Trust.</p>
            </div>
            <div>
              <h4>Explore</h4>
              <ul>
                <li><Link to="/collections">Collections</Link></li>
                <li><Link to="/about">About Mall</Link></li>
                <li><Link to="/careers">Careers</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4>Departments</h4>
              <ul>
                <li><a href="#fashion">Fashion</a></li>
                <li><a href="#ethnic">Ethnic Wear</a></li>
                <li><a href="#travel">Travel Gear</a></li>
                <li><a href="#cosmetics">Cosmetics</a></li>
              </ul>
            </div>
            <div>
              <h4>Visit Us</h4>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Askaran Binjraj Shopping Mall<br />
                1st Floor, Main Road<br />
                Dhekiajuli, Assam - 784110
              </p>
            </div>
            <div>
              <h4>Contact</h4>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Phone: 03712 244 247<br />
                Mobile: +91 88119 66701<br />
                Email: info.askaranbinjraj@gmail.com
              </p>
            </div>
          </div>
          <div className="sf-footer-bottom">
            <p>© 2026 Chandan Retail Private Limited · Shopping Mall in Dhekiajuli, Assam · NH 52</p>
            <p className="f-est">EST. 1980</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Float */}
      <a href="https://wa.me/918811966701" target="_blank" rel="noopener noreferrer" className="wa-float" aria-label="Chat on WhatsApp">
        <svg fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.334 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.334-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
      </a>
    </div>
  );
}