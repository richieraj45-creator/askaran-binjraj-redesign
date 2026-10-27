import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="storefront">
      
      {/* Splash Screen Gate */}
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
            <div style={{ fontFamily: "var(--serif)", fontSize: "2rem", fontWeight: "bold", color: "#C8251E", letterSpacing: "-0.01em" }}>ASKARAN BINJRAJ</div>
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

      {/* Hero Cinematic Section */}
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
              <div className="sf-card-img h-full" style={{ minHeight: "430px" }}>
                <img src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&auto=format&fit=crop&q=80" alt="Fashion Model" />
                <div className="sf-card-shade"></div>
                <div className="sf-card-label"><p>Sharp Everyday Style</p><p>Branded shirts & tailored trousers</p></div>
              </div>
            </div>
            <div>
              <div className="sf-card-img" style={{ minHeight: "210px" }}>
                <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&auto=format&fit=crop&q=80" alt="Midi Dresses" />
                <div className="sf-card-shade"></div>
                <div className="sf-card-label"><p>Contemporary Fusion</p><p>Midi dresses & Indo-Western</p></div>
              </div>
            </div>
            <div>
              <div className="sf-card-img" style={{ minHeight: "210px" }}>
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
      <section id="about" className="sf-section sf-dark text-white" style={{ background: "#111", color: "#fff", padding: "96px 0" }}>
        <div className="sf-wrap">
          <div className="sf-two-col">
            <div>
              <div className="sf-eyebrow-s light"><p>Our Heritage</p></div>
              <h2 className="sf-h2 light" style={{ color: "#fafaf8" }}>Where heritage<br /><em>meets trust.</em></h2>
              <p className="sf-sub light mt-6" style={{ color: "rgba(250,250,248,0.52)" }}>For six generations, Askaran Binjraj has been the cornerstone of shopping in Dhekiajuli, Assam. Founded on unwavering trust, quality, and variety.</p>
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
                <p className="job-loc">DhekiajuliMall · Full-time</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}