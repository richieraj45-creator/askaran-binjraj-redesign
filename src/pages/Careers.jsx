import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const DEPARTMENTS = [
  {
    id: "ecom",
    title: "E-Commerce & Digital",
    icon: "💻",
    roles: ["E-Commerce Managers", "Website Production", "SEO Specialists"]
  },
  {
    id: "sales",
    title: "Floor Sales & Customer Experience",
    icon: "🏬",
    roles: ["Retail Sales Executives", "Department Supervisors", "Customer Service Representatives"]
  },
  {
    id: "billing",
    title: "Billing & Operations",
    icon: "🧾",
    roles: ["Cashiers", "Billing Executives", "Store Operations"]
  },
  {
    id: "logistics",
    title: "Logistics & Supply Chain",
    icon: "📦",
    roles: ["Dispatch Coordinators", "Fleet Management", "Warehouse Associates"]
  }
];

export default function Careers() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="storefront" style={{ background: "#FAFAF8", minHeight: "100vh" }}>
      
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
            <Link to="/">FASHION</Link>
            <Link to="/">ETHNIC WEAR</Link>
            <Link to="/">TRAVEL GEAR</Link>
            <Link to="/">COSMETICS</Link>
            <Link to="/">JEWELLERY</Link>
            <Link to="/">ACCESSORIES</Link>
            <Link to="/">VISIT US</Link>
            <Link to="/careers" style={{ color: "var(--red)", borderBottom: "2px solid var(--red)", paddingBottom: "2px" }}>CAREERS</Link>
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
          <Link to="/" onClick={() => setMobileMenuOpen(false)}>FASHION</Link>
          <Link to="/" onClick={() => setMobileMenuOpen(false)}>ETHNIC WEAR</Link>
          <Link to="/" onClick={() => setMobileMenuOpen(false)}>TRAVEL GEAR</Link>
          <Link to="/" onClick={() => setMobileMenuOpen(false)}>COSMETICS</Link>
          <Link to="/" onClick={() => setMobileMenuOpen(false)}>JEWELLERY</Link>
          <Link to="/" onClick={() => setMobileMenuOpen(false)}>ACCESSORIES</Link>
          <Link to="/" onClick={() => setMobileMenuOpen(false)}>VISIT US</Link>
          <Link to="/careers" onClick={() => setMobileMenuOpen(false)} style={{ color: "var(--red)" }}>CAREERS</Link>
        </nav>
      </header>

      {/* Careers Hero Section matching OG Design */}
      <section style={{ padding: '80px 24px 40px', maxWidth: '850px', margin: '0 auto', textAlign: 'left' }}>
        <div style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.2em', color: 'var(--muted)', marginBottom: '24px', textTransform: 'uppercase' }}>
          Careers • Join the Askaran Binjraj Family
        </div>
        
        <h1 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(2.8rem, 5vw, 4.2rem)', fontWeight: 400, lineHeight: 1.1, color: 'var(--ink)', marginBottom: '28px' }}>
          Grow With Assam's <br/>
          <em style={{ color: 'var(--red)', fontStyle: 'italic' }}>Premier Retail Destination</em>
        </h1>
        
        <p style={{ fontSize: '1.05rem', color: 'var(--mid)', lineHeight: 1.7, maxWidth: '720px', margin: 0 }}>
          Chandan Retail Private Limited is expanding both our physical footprint in Dhekiajuli and our new digital storefront. We are looking for dedicated professionals to join our growing team.
        </p>
      </section>

      {/* Departments Section matching OG Design */}
      <section style={{ padding: '40px 24px 120px', maxWidth: '850px', margin: '0 auto' }}>
        <div style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.2em', color: 'var(--red)', marginBottom: '20px', textTransform: 'uppercase' }}>
          Current Openings
        </div>
        
        <h2 style={{ fontFamily: 'var(--serif)', fontSize: '2.2rem', fontWeight: 400, marginBottom: '48px', color: 'var(--ink)' }}>
          Open Departments & Roles
        </h2>
        
        <div style={{ borderTop: '1px solid var(--border)' }}>
          {DEPARTMENTS.map((dept, index) => (
            <div key={dept.id} style={{ padding: '40px 0', borderBottom: '1px solid var(--border)', position: 'relative' }}>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                <span style={{ fontSize: '1.4rem' }}>{dept.icon}</span>
                <h3 style={{ fontFamily: 'var(--serif)', fontSize: '1.65rem', fontWeight: 500, color: 'var(--ink)', margin: 0 }}>
                  {dept.title}
                </h3>
              </div>

              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px 0', color: 'var(--mid)', fontSize: '0.95rem' }}>
                {dept.roles.map((role, rIdx) => (
                  <li key={rIdx} style={{ marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ color: 'var(--red)', fontSize: '0.7rem' }}>♦</span> {role}
                  </li>
                ))}
              </ul>

              {/* Direct Mailto HR Integration */}
              <a 
                href={`mailto:hr@crpl.co.in?subject=Application for ${dept.title} Department&body=Hi Askaran Binjraj HR Team,%0D%0A%0D%0AI would like to apply for a role in the ${dept.title} department.%0D%0A%0D%0AMy Name: %0D%0AMy Phone Number: %0D%0ARelevant Experience: %0D%0A%0D%0A[Please attach your resume to this email]`}
                style={{ 
                  display: 'inline-flex',
                  alignItems: 'center',
                  fontSize: '0.75rem', 
                  fontWeight: 700, 
                  letterSpacing: '0.18em', 
                  color: 'var(--red)', 
                  textTransform: 'uppercase', 
                  textDecoration: 'none' 
                }}
              >
                Apply for this department <span style={{ marginLeft: '6px', fontSize: '1.1rem' }}>↗</span>
              </a>

              <div style={{ position: 'absolute', top: '40px', right: '10px', fontSize: '0.8rem', color: 'var(--muted)', letterSpacing: '0.1em' }}>
                0{index + 1}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Master Black Footer matching OG Design */}
      <footer className="sf-footer" style={{ background: '#111111', borderTop: 'none' }}>
        <div className="sf-wrap">
          <div className="sf-footer-grid">
            <div>
              <Link to="/" className="f-logo">
                <img 
                  src="/assets/logo-stacked.png" 
                  onError={(e) => { e.target.onerror = null; e.target.src = "/assets/logo-wide.png"; }} 
                  alt="Askaran Binjraj"
                  style={{ filter: "brightness(0) invert(1)" }} 
                />
              </Link>
              <p className="f-desc" style={{ color: '#888', fontStyle: 'italic', fontFamily: 'var(--serif)', fontSize: '1rem', marginTop: '16px' }}>
                Elegance, comfort, and style — timeless fashion crafted for every generation and occasion.
              </p>
            </div>
            <div>
              <h4 style={{ color: '#ffffff' }}>Explore</h4>
              <ul>
                <li><Link to="/" style={{ color: '#888' }}>Collections</Link></li>
                <li><Link to="/about" style={{ color: '#888' }}>About Us</Link></li>
                <li><Link to="/careers" style={{ color: 'var(--red)' }}>Careers</Link></li>
                <li><a href="/contact" style={{ color: '#888' }}>Contact</a></li>
                <li><a href="/terms" style={{ color: '#888' }}>Terms of Use</a></li>
              </ul>
            </div>
            <div style={{ gridColumn: "span 2" }}>
              <h4 style={{ color: '#ffffff' }}>Find Us</h4>
              <ul style={{ color: '#888', fontSize: '0.85rem' }}>
                <li style={{ display: 'flex', gap: '8px', marginBottom: '12px' }}>
                  <span style={{ color: 'var(--red)' }}>📍</span> Askaran Binjraj Shopping Mall<br/>NH 52, Main Road<br/>Dhekiajuli, Assam - 784110
                </li>
                <li style={{ display: 'flex', gap: '8px', marginBottom: '12px' }}>
                  <span style={{ color: 'var(--red)' }}>📞</span> <a href="tel:03712244247" style={{ color: '#888' }}>03712 244 247</a> · <a href="tel:+918811966701" style={{ color: '#888' }}>+91 88119 66701</a>
                </li>
                <li style={{ display: 'flex', gap: '8px' }}>
                  <span style={{ color: 'var(--red)' }}>✉️</span> <a href="mailto:info.askaranbinjraj@gmail.com" style={{ color: '#888' }}>info.askaranbinjraj@gmail.com</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="sf-footer-bottom" style={{ borderTopColor: '#333', marginTop: '40px', paddingTop: '24px' }}>
            <p style={{ color: '#666' }}>© 2026 CHANDAN RETAIL PRIVATE LIMITED. ALL RIGHTS RESERVED.</p>
            <p className="f-est" style={{ color: 'var(--red)' }}>EST. 1980</p>
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