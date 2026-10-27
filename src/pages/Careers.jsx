import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const DEPARTMENTS = [
  {
    id: "ecom",
    title: "E-Commerce & Digital",
    icon: "💻",
    desc: "Manage our digital storefront, ERP integrations, omnichannel inventory sync, and multimedia product shoots.",
    roles: ["E-Commerce Managers", "Website Production", "SEO & Digital Marketing Specialists"]
  },
  {
    id: "sales",
    title: "Floor Sales & Customer Experience",
    icon: "🏬",
    desc: "Deliver world-class assisted retail experiences across our 3 floors of apparel, ethnic wear, and sarees.",
    roles: ["Retail Sales Executives", "Department Supervisors", "Bridal Consultants"]
  },
  {
    id: "billing",
    title: "Billing & Operations",
    icon: "🧾",
    desc: "Ensure seamless checkout workflows, GRetail POS management, and daily retail cash/UPI operations.",
    roles: ["Cashiers", "Billing Executives", "Inventory Controllers"]
  },
  {
    id: "logistics",
    title: "Logistics & Supply Chain",
    icon: "📦",
    desc: "Coordinate same-day local delivery, warehouse stocking, and dispatch logistics for online orders.",
    roles: ["Dispatch Coordinators", "Fleet Management", "Warehouse Associates"]
  }
];

export default function Careers() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedDept, setSelectedDept] = useState("E-Commerce & Digital");
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "",
    coverNote: ""
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    
    const subject = encodeURIComponent(`Job Application: ${selectedDept} - ${formData.name}`);
    const body = encodeURIComponent(
      `Candidate Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone}\n` +
      `Department / Role: ${selectedDept}\n` +
      `Experience: ${formData.experience}\n\n` +
      `Cover Note / Details:\n${formData.coverNote}\n\n` +
      `[Please attach resume file before sending]`
    );
    
    window.location.href = `mailto:hr@crpl.co.in?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", phone: "", experience: "", coverNote: "" });
    }, 4000);
  };

  return (
    <div className="storefront" style={{ background: "#FAFAF8", minHeight: "100vh" }}>
      
      {/* Sticky Header Navbar */}
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
          <a href="https://shop.askaranbinjraj.com/" target="_blank" rel="noopener noreferrer">SHOP ONLINE ↗</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section style={{ padding: "90px 24px 50px", maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
        <div style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.25em", color: "var(--red)", marginBottom: "16px", textTransform: "uppercase" }}>
          Chandan Retail Private Limited (Est. 1980)
        </div>
        <h1 style={{ fontFamily: "var(--serif)", fontSize: "clamp(2.8rem, 5.5vw, 4.4rem)", fontWeight: 400, lineHeight: 1.12, color: "var(--ink)", marginBottom: "24px" }}>
          Shape the future of retail <br />
          <em style={{ color: "var(--red)", fontStyle: "italic" }}>with Assam's finest.</em>
        </h1>
        <p style={{ fontSize: "1.05rem", color: "var(--mid)", lineHeight: 1.7, maxWidth: "700px", margin: "0 auto 36px" }}>
          We are scaling our iconic 3-floor flagship shopping destination in Dhekiajuli alongside our rapid omnichannel digital expansion. Join a legacy built on six generations of trust.
        </p>
        <a href="#apply-form" className="sf-btn-red" style={{ padding: "14px 32px", fontSize: "0.75rem", letterSpacing: "0.2em" }}>
          Submit Your Resume ↓
        </a>
      </section>

      {/* Departments Grid */}
      <section style={{ padding: "40px 24px 80px", maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.25em", color: "var(--muted)", marginBottom: "16px", textTransform: "uppercase", textAlign: "center" }}>
          Open Departments
        </div>
        <h2 style={{ fontFamily: "var(--serif)", fontSize: "2.4rem", fontWeight: 400, textAlign: "center", marginBottom: "48px" }}>
          Find your role in our <em>growing family.</em>
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "24px", marginBottom: "64px" }}>
          {DEPARTMENTS.map((dept) => (
            <div 
              key={dept.id} 
              onClick={() => setSelectedDept(dept.title)}
              style={{ 
                background: "#ffffff", 
                border: selectedDept === dept.title ? "2px solid var(--red)" : "1px solid var(--border)", 
                borderRadius: "12px", 
                padding: "32px 24px", 
                cursor: "pointer",
                transition: "all 0.25s ease",
                boxShadow: "0 4px 16px rgba(0,0,0,0.03)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between"
              }}
            >
              <div>
                <div style={{ fontSize: "2rem", marginBottom: "16px" }}>{dept.icon}</div>
                <h3 style={{ fontFamily: "var(--serif)", fontSize: "1.35rem", marginBottom: "10px", color: "var(--ink)" }}>{dept.title}</h3>
                <p style={{ fontSize: "0.85rem", color: "var(--mid)", lineHeight: 1.6, marginBottom: "20px" }}>{dept.desc}</p>
                <ul style={{ margin: 0, paddingLeft: "16px", fontSize: "0.82rem", color: "var(--muted)" }}>
                  {dept.roles.map((r, i) => (
                    <li key={i} style={{ marginBottom: "4px" }}>{r}</li>
                  ))}
                </ul>
              </div>
              <div style={{ marginTop: "24px", paddingTop: "16px", borderTop: "1px solid var(--border)", fontSize: "0.75rem", fontWeight: 700, color: "var(--red)", textTransform: "uppercase", letterSpacing: "0.15em" }}>
                {selectedDept === dept.title ? "✓ Selected in Form" : "Select Department →"}
              </div>
            </div>
          ))}
        </div>

        {/* Quick Application Form Box */}
        <div id="apply-form" style={{ background: "#ffffff", border: "1px solid var(--border)", borderRadius: "16px", padding: "48px 40px", maxWidth: "800px", margin: "0 auto", boxShadow: "0 10px 30px rgba(0,0,0,0.04)" }}>
          <div style={{ textAlign: "center", marginBottom: "36px" }}>
            <span className="sf-badge" style={{ marginBottom: "12px" }}>Direct HR Submission</span>
            <h3 style={{ fontFamily: "var(--serif)", fontSize: "2rem", margin: "0 0 8px" }}>Apply to Askaran Binjraj</h3>
            <p style={{ fontSize: "0.88rem", color: "var(--muted)", margin: 0 }}>All submissions go directly to our HR team at <strong>hr@crpl.co.in</strong></p>
          </div>

          {submitted ? (
            <div style={{ padding: "40px", textAlign: "center", background: "#F2F9F3", borderRadius: "10px", color: "var(--green)" }}>
              <h4 style={{ fontFamily: "var(--serif)", fontSize: "1.6rem", margin: "0 0 8px" }}>Application Prepared Successfully!</h4>
              <p style={{ fontSize: "0.9rem", color: "#2E7D32", margin: "0 0 16px" }}>Your email app has opened with your application pre-filled for <strong>hr@crpl.co.in</strong>.</p>
              <p style={{ fontSize: "0.8rem", color: "var(--muted)", margin: 0 }}>You can also email your resume directly anytime at <strong>hr@crpl.co.in</strong>.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
                <div>
                  <label style={{ display: "block", fontSize: "0.72rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "8px" }}>Full Name *</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="e.g. Richiraj Bora"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{ width: "100%", padding: "12px 16px", borderRadius: "6px", border: "1px solid var(--border)", fontSize: "0.92rem", background: "#FAFAF8" }}
                  />
                </div>
                <div>
                  <label style={{ display: "block", fontSize: "0.72rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "8px" }}>Selected Department</label>
                  <input 
                    type="text" 
                    readOnly
                    value={selectedDept}
                    style={{ width: "100%", padding: "12px 16px", borderRadius: "6px", border: "1px solid var(--border)", fontSize: "0.92rem", background: "#F4F0EA", fontWeight: 600, color: "var(--red)" }}
                  />
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
                <div>
                  <label style={{ display: "block", fontSize: "0.72rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "8px" }}>Email Address *</label>
                  <input 
                    type="email" 
                    required 
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{ width: "100%", padding: "12px 16px", borderRadius: "6px", border: "1px solid var(--border)", fontSize: "0.92rem", background: "#FAFAF8" }}
                  />
                </div>
                <div>
                  <label style={{ display: "block", fontSize: "0.72rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "8px" }}>Phone Number *</label>
                  <input 
                    type="tel" 
                    required 
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    style={{ width: "100%", padding: "12px 16px", borderRadius: "6px", border: "1px solid var(--border)", fontSize: "0.92rem", background: "#FAFAF8" }}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: "block", fontSize: "0.72rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "8px" }}>Relevant Experience & Background</label>
                <input 
                  type="text" 
                  placeholder="e.g. 3 years in retail operations or digital marketing"
                  value={formData.experience}
                  onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                  style={{ width: "100%", padding: "12px 16px", borderRadius: "6px", border: "1px solid var(--border)", fontSize: "0.92rem", background: "#FAFAF8" }}
                />
              </div>

              <div>
                <label style={{ display: "block", fontSize: "0.72rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "8px" }}>Cover Note / Additional Details</label>
                <textarea 
                  rows="4" 
                  placeholder="Tell us about yourself and why you'd love to join Askaran Binjraj..."
                  value={formData.coverNote}
                  onChange={(e) => setFormData({ ...formData, coverNote: e.target.value })}
                  style={{ width: "100%", padding: "12px 16px", borderRadius: "6px", border: "1px solid var(--border)", fontSize: "0.92rem", background: "#FAFAF8", resize: "vertical" }}
                />
              </div>

              <button 
                type="submit" 
                className="sf-btn-red" 
                style={{ width: "100%", justifyContent: "center", padding: "14px", marginTop: "10px", fontSize: "0.75rem", letterSpacing: "0.2em", cursor: "pointer", border: "none" }}
              >
                Send Application to hr@crpl.co.in ↗
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Master Dark Footer with Correct Logo */}
      <footer className="sf-footer" style={{ background: "#111111", borderTop: "none" }}>
        <div className="sf-wrap">
          <div className="sf-footer-grid">
            <div>
              <Link to="/" className="f-logo">
                <img 
                  src="/assets/logo-wide.png" 
                  onError={(e) => { e.target.onerror = null; e.target.src = "/assets/logo-stacked.png"; }} 
                  alt="Askaran Binjraj" 
                  style={{ height: "42px", width: "auto", objectFit: "contain", background: "#ffffff", padding: "4px", borderRadius: "4px" }} 
                />
              </Link>
              <p className="f-desc" style={{ color: "#888", fontStyle: "italic", fontFamily: "var(--serif)", fontSize: "1rem", marginTop: "16px" }}>
                Elegance, comfort, and style — timeless fashion crafted for every generation and occasion.
              </p>
            </div>
            <div>
              <h4 style={{ color: "#ffffff" }}>Explore</h4>
              <ul>
                <li><Link to="/" style={{ color: "#888" }}>Collections</Link></li>
                <li><Link to="/" style={{ color: "#888" }}>About Us</Link></li>
                <li><Link to="/careers" style={{ color: "var(--red)" }}>Careers</Link></li>
                <li><a href="https://shop.askaranbinjraj.com" target="_blank" rel="noopener noreferrer" style={{ color: "#888" }}>Online Store</a></li>
              </ul>
            </div>
            <div style={{ gridColumn: "span 2" }}>
              <h4 style={{ color: "#ffffff" }}>Find Us</h4>
              <ul style={{ color: "#888", fontSize: "0.85rem" }}>
                <li style={{ display: "flex", gap: "8px", marginBottom: "12px" }}>
                  <span style={{ color: "var(--red)" }}>📍</span> Askaran Binjraj Shopping Mall<br/>NH 52, Main Road<br/>Dhekiajuli, Assam - 784110
                </li>
                <li style={{ display: "flex", gap: "8px", marginBottom: "12px" }}>
                  <span style={{ color: "var(--red)" }}>📞</span> <a href="tel:03712244247" style={{ color: "#888" }}>03712 244 247</a> · <a href="tel:+918811966701" style={{ color: "#888" }}>+91 88119 66701</a>
                </li>
                <li style={{ display: "flex", gap: "8px" }}>
                  <span style={{ color: "var(--red)" }}>✉️</span> <a href="mailto:info.askaranbinjraj@gmail.com" style={{ color: "#888" }}>info.askaranbinjraj@gmail.com</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="sf-footer-bottom" style={{ borderTopColor: "#333", marginTop: "40px", paddingTop: "24px" }}>
            <p style={{ color: "#666" }}>© 2026 CHANDAN RETAIL PRIVATE LIMITED. ALL RIGHTS RESERVED.</p>
            <p className="f-est" style={{ color: "var(--red)" }}>EST. 1980</p>
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