import React, { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Dismiss splash screen on load
    const splash = document.getElementById("splash");
    if (splash) {
      const t1 = setTimeout(() => {
        splash.classList.add("done");
        document.body.classList.remove("lock");
        const t2 = setTimeout(() => {
          if (splash.parentNode) splash.parentNode.removeChild(splash);
        }, 950);
        return () => clearTimeout(t2);
      }, 3000);
      return () => clearTimeout(t1);
    }
  }, []);

  return (
    <div className="storefront-container">
      {/* Splash Screen Gate */}
      <div className="splash" id="splash">
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
          <div className="sp-logo">
            <div style={{ fontFamily: "var(--serif)", fontSize: "2.2rem", fontWeight: "bold", color: "#C8251E" }}>
              ASKARAN BINJRAJ
            </div>
          </div>
          <div className="sp-divider"></div>
          <div className="sp-tagline">Quality. Variety. Trust.</div>
          <p className="sp-since">EST. 1980 · DHEKIAJULI, ASSAM</p>
        </div>
      </div>

      {/* Top Announcement Bar */}
      <div className="sf-announce">
        Same-Day & 1-Day Delivery Available · New Ethnic Collection Just Dropped
      </div>

      {/* Primary Site Header */}
      <header id="site-header" className="sf-header">
        <div className="sf-header-in">
          <a href="/" className="sf-logo">
            <div style={{ fontFamily: "var(--serif)", fontSize: "1.5rem", fontWeight: "bold", color: "#C8251E" }}>
              ASKARAN BINJRAJ
            </div>
          </a>
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

      {/* Hero Slider Section */}
      <section id="hero" className="sf-hero">
        <div className="sf-slide active">
          <img src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=1600" alt="Ready to Wear" />
        </div>
        <div className="sf-hero-shade"></div>
        <div className="sf-hero-fade"></div>
        <div className="sf-counter" id="hero-counter"><span>04<small>/ 06</small></span></div>
        <div className="sf-hero-content">
          <div className="sf-hero-inner">
            <div className="sf-eyebrow"><p>Ready-to-Wear</p></div>
            <h1>Move through the world<br /><em>unforgettably.</em></h1>
            <p className="sf-hero-sub">Curated apparel, tailored suits, and authentic ethnic wear for men at Askaran Binjraj, Dhekiajuli.</p>
            <div className="sf-cta-row">
              <a href="https://shop.askaranbinjraj.com/" target="_blank" rel="noopener noreferrer" className="sf-btn-red">Shop Online ↗</a>
              <a href="#fashion" className="sf-btn-ghost-w">Explore Departments</a>
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
        </div>
      </div>

      {/* Department Floor Sections */}
      <section id="fashion" className="sf-section bg-paper">
        <div className="sf-wrap">
          <div className="sf-head">
            <div className="sf-head-text">
              <div className="sf-eyebrow-s"><p>1st Floor · Fashion & Apparel</p></div>
              <h2 className="sf-h2">Latest fashion<br /><em>under one roof.</em></h2>
              <p className="sf-sub">Branded shirts, tailored trousers, midi dresses, frocks and everyday style at Askaran Binjraj Shopping Mall.</p>
            </div>
            <a href="https://shop.askaranbinjraj.com/" target="_blank" rel="noopener noreferrer" className="sf-btn-red">Shop Fashion ↗</a>
          </div>
          <div className="sf-bento">
            <div className="tall">
              <div className="sf-card-img" style={{ minHeight: "430px" }}>
                <img src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&auto=format&fit=crop&q=80" alt="Everyday Style" />
                <div className="sf-card-label"><p>Sharp Everyday Style</p><p>Branded shirts & trousers</p></div>
              </div>
            </div>
            <div>
              <div className="sf-card-img" style={{ minHeight: "210px" }}>
                <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&auto=format&fit=crop&q=80" alt="Midi Dresses" />
                <div className="sf-card-label"><p>Contemporary Fusion</p><p>Midi dresses & Indo-Western</p></div>
              </div>
            </div>
            <div>
              <div className="sf-card-img" style={{ minHeight: "210px" }}>
                <img src="https://images.unsplash.com/photo-1502784444187-359ac186c5bb?w=600&auto=format&fit=crop&q=80" alt="Kids Fashion" />
                <div className="sf-card-label"><p>Little Trendsetters</p><p>Frocks & kids wear</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ethnic Section */}
      <section id="ethnic" className="sf-section bg-alt">
        <div className="sf-wrap">
          <div className="sf-head">
            <div className="sf-head-text">
              <div className="sf-eyebrow-s green"><p>Ethnic & Heritage</p></div>
              <h2 className="sf-h2"><em>Roots,</em><br />reimagined.</h2>
              <p className="sf-sub">Authentic Banarasi sarees, Muga and Assam silk, Mekhela Chador and bridal weaves — sourced directly from Varanasi weavers across six generations.</p>
            </div>
            <a href="https://shop.askaranbinjraj.com/" target="_blank" rel="noopener noreferrer" className="sf-btn-red">Shop Ethnic Wear ↗</a>
          </div>
          <div className="sf-grid-3">
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

      {/* Travel Section */}
      <section id="travel" className="sf-section bg-white">
        <div className="sf-wrap">
          <div className="sf-head">
            <div className="sf-head-text">
              <div className="sf-eyebrow-s"><p>4th Floor · Travel Gear</p></div>
              <h2 className="sf-h2">Pack smart,<br /><em>travel far.</em></h2>
              <p className="sf-sub">Luxury luggage and travel accessories — suitcases, duffle bags, rucksacks, and laptop bags on the 4th Floor.</p>
            </div>
            <a href="https://shop.askaranbinjraj.com/" target="_blank" rel="noopener noreferrer" className="sf-btn-red">Shop Travel Gear ↗</a>
          </div>
          <div className="sf-feature-grid">
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

      {/* Footer */}
      <footer className="sf-footer">
        <div className="sf-wrap">
          <div className="sf-footer-bottom">
            <p>© 2026 Chandan Retail Private Limited · Shopping Mall in Dhekiajuli, Assam</p>
            <p className="f-est">EST. 1980</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Action Button */}
      <a href="https://wa.me/918811966701" target="_blank" rel="noopener noreferrer" className="wa-float" aria-label="Chat on WhatsApp">
        <svg fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.334 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.334-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
      </a>
    </div>
  );
}