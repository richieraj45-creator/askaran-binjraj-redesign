import React, { useState } from "react";
import { Link } from "react-router-dom";

const JOBS = [
  {
    id: "ecom-lead",
    title: "E-Commerce & Digital Operations Executive",
    dept: "Digital Commerce",
    location: "Dhekiajuli Flagship / Hybrid",
    type: "Full-Time",
    desc: "Oversee enterprise ERP syncing, website catalog management, online orders, digital photography, and marketplace listings for Chandan Retail Private Limited.",
    reqs: [
      "Experience with Shopify, ERP middleware, or catalog spreadsheets",
      "Basic understanding of digital photography, SEO & omnichannel logistics",
      "Keen eye for fashion merchandising and online store UX"
    ]
  },
  {
    id: "saree-specialist",
    title: "Heritage Saree & Ethnic Wear Specialist",
    dept: "In-Store Retail",
    location: "Dhekiajuli Shopping Mall (3rd Floor)",
    type: "Full-Time",
    desc: "Assist customers with authentic Varanasi Banarasi sarees, bridal lehengas, and traditional Assam Silk Mekhela Chador. Provide personalized bridal consultations.",
    reqs: [
      "Proven experience in high-end sarees or handloom ethnic wear",
      "Fluent in Assamese & Hindi; warm customer service mindset",
      "Knowledge of saree weaves, silk certifications, and drape styling"
    ]
  },
  {
    id: "suiting-consultant",
    title: "Menswear Suiting & Formalwear Consultant",
    dept: "In-Store Retail",
    location: "Dhekiajuli Shopping Mall (1st Floor)",
    type: "Full-Time",
    desc: "Guide clients through custom suitings, branded shirts, blazer fitting, and celebratory menswear styling.",
    reqs: [
      "Retail sales experience in branded apparel or suiting",
      "Good understanding of fabric blends, measurements, and tailoring",
      "Strong communication and sales closing abilities"
    ]
  },
  {
    id: "billing-cashier",
    title: "Billing & Store Operations Executive",
    dept: "Operations",
    location: "Dhekiajuli Shopping Mall",
    type: "Full-Time",
    desc: "Handle daily POS billing, cash/UPI transactions, inventory receipts, customer checkout flow, and ERP bill entries.",
    reqs: [
      "Familiarity with POS software or GRetail ERP systems",
      "High accuracy in numbers, cash handling, and daily reporting",
      "Punctual, trustworthy, and detail-oriented"
    ]
  }
];

export default function Careers() {
  const [selectedJob, setSelectedJob] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
    experience: "",
    notes: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSelectedJob(null);
      setSubmitted(false);
      setFormData({ name: "", email: "", phone: "", role: "", experience: "", notes: "" });
    }, 3000);
  };

  return (
    <div className="storefront">
      {/* Announcement Bar */}
      <div className="sf-announce">
        We're Hiring Across Departments · Join Chandan Retail Private Limited (Est. 1980)
      </div>

      {/* Sticky Header Navbar */}
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
            <Link to="/">Fashion</Link>
            <Link to="/">Ethnic Wear</Link>
            <Link to="/">Travel Gear</Link>
            <Link to="/">Cosmetics</Link>
            <Link to="/">Jewellery</Link>
            <Link to="/">Accessories</Link>
            <Link to="/">Visit Us</Link>
            <Link to="/careers" style={{ color: "var(--red)" }}>Careers</Link>
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
        <nav className={`sf-mobile-nav ${mobileMenuOpen ? "open" : ""}`}>
          <Link to="/" onClick={() => setMobileMenuOpen(false)}>Fashion</Link>
          <Link to="/" onClick={() => setMobileMenuOpen(false)}>Ethnic Wear</Link>
          <Link to="/" onClick={() => setMobileMenuOpen(false)}>Travel Gear</Link>
          <Link to="/" onClick={() => setMobileMenuOpen(false)}>Cosmetics</Link>
          <Link to="/" onClick={() => setMobileMenuOpen(false)}>Jewellery</Link>
          <Link to="/" onClick={() => setMobileMenuOpen(false)}>Accessories</Link>
          <Link to="/" onClick={() => setMobileMenuOpen(false)}>Visit Us</Link>
          <Link to="/careers" onClick={() => setMobileMenuOpen(false)}>Careers</Link>
          <a href="https://shop.askaranbinjraj.com/" target="_blank" rel="noopener noreferrer">Shop Online ↗</a>
        </nav>
      </header>

      {/* Careers Hero Section */}
      <section className="sf-section bg-paper">
        <div className="sf-wrap">
          <div style={{ maxWidth: "760px", margin: "0 auto", textAlign: "center" }}>
            <div className="sf-eyebrow-s" style={{ justifyContent: "center" }}>
              <p>Careers at Askaran Binjraj</p>
            </div>
            <h1 className="sf-h2" style={{ fontSize: "clamp(2.5rem, 5vw, 3.8rem)", marginBottom: "20px" }}>
              Build your career with<br /><em>Assam's retail landmark.</em>
            </h1>
            <p className="sf-sub" style={{ margin: "0 auto 36px", fontSize: "1rem" }}>
              For over 45 years, Askaran Binjraj (Chandan Retail Private Limited) has set the gold standard in quality, variety, and customer trust. Join our expanding team in Dhekiajuli as we grow our physical mall footprint and omnichannel digital presence.
            </p>
            <div style={{ display: "flex", gap: "16px", justifyContent: "center" }}>
              <a href="#open-roles" className="sf-btn-red">View Openings ↓</a>
              <a href="mailto:hr@crpl.co.in" className="sf-btn-ghost-w" style={{ color: "var(--ink)", borderColor: "var(--border)" }}>
                Email HR Directly ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Culture & Values */}
      <section className="sf-section bg-alt">
        <div className="sf-wrap">
          <div className="sf-head" style={{ textAlign: "center", display: "block", marginBottom: "48px" }}>
            <div className="sf-eyebrow-s"><p>Why Join Us</p></div>
            <h2 className="sf-h2">A heritage of trust,<br /><em>a future of growth.</em></h2>
          </div>
          <div className="sf-grid-4">
            <div className="sf-acc-tile" style={{ padding: "28px" }}>
              <h3 style={{ fontFamily: "var(--serif)", fontSize: "1.3rem", margin: "0 0 10px", color: "var(--red)" }}>6 Generations</h3>
              <p style={{ fontSize: "0.85rem", color: "var(--mid)", margin: 0, lineHeight: 1.6 }}>Work alongside legendary heritage in fashion, handloom sarees, and fine retail excellence.</p>
            </div>
            <div className="sf-acc-tile" style={{ padding: "28px" }}>
              <h3 style={{ fontFamily: "var(--serif)", fontSize: "1.3rem", margin: "0 0 10px", color: "var(--green)" }}>Growth & Training</h3>
              <p style={{ fontSize: "0.85rem", color: "var(--mid)", margin: 0, lineHeight: 1.6 }}>Comprehensive on-the-job mentorship across merchandise, ERP tech, customer service, and store management.</p>
            </div>
            <div className="sf-acc-tile" style={{ padding: "28px" }}>
              <h3 style={{ fontFamily: "var(--serif)", fontSize: "1.3rem", margin: "0 0 10px", color: "var(--ink)" }}>Competitive Pay</h3>
              <p style={{ fontSize: "0.85rem", color: "var(--mid)", margin: 0, lineHeight: 1.6 }}>Market-leading salary structures, performance incentives, annual bonuses, and career progression.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Roles Section */}
      <section id="open-roles" className="sf-section bg-white">
        <div className="sf-wrap">
          <div className="sf-head">
            <div className="sf-head-text">
              <div className="sf-eyebrow-s"><p>Current Opportunities</p></div>
              <h2 className="sf-h2">Explore available<br /><em>positions.</em></h2>
            </div>
          </div>

          <div className="sf-vertical-stack">
            {JOBS.map((job) => (
              <div key={job.id} className="sf-og-card">
                <div className="card-body-pad" style={{ padding: "32px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "12px", marginBottom: "12px" }}>
                    <div>
                      <span className="sf-badge" style={{ marginBottom: "8px" }}>{job.dept}</span>
                      <h3 style={{ fontSize: "1.5rem", margin: "4px 0" }}>{job.title}</h3>
                      <p style={{ fontSize: "0.82rem", color: "var(--muted)", margin: 0 }}>📍 {job.location} · {job.type}</p>
                    </div>
                    <button 
                      onClick={() => setSelectedJob(job)} 
                      className="sf-btn-red"
                      style={{ cursor: "pointer", border: "none" }}
                    >
                      Apply Now →
                    </button>
                  </div>
                  <p style={{ fontSize: "0.9rem", color: "var(--mid)", margin: "16px 0", lineHeight: 1.6 }}>{job.desc}</p>
                  <div style={{ borderTop: "1px dashed var(--border)", paddingTop: "14px", marginTop: "14px" }}>
                    <p style={{ fontSize: "0.78rem", fontWeight: 700, textTransform: uppercase, letterSpacing: "0.15em", color: "var(--ink)", margin: "0 0 8px" }}>Requirements:</p>
                    <ul style={{ margin: 0, paddingLeft: "20px", fontSize: "0.84rem", color: "var(--mid)" }}>
                      {job.reqs.map((req, idx) => (
                        <li key={idx} style={{ marginBottom: "4px" }}>{req}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Modal */}
      {selectedJob && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.65)", zIndex: 9999, display: "flex", alignItems: "center", justifyContent: "center", padding: "20px" }}>
          <div style={{ background: "#ffffff", borderRadius: "12px", maxWidth: "560px", width: "100%", padding: "36px", position: "relative", boxShadow: "0 20px 40px rgba(0,0,0,0.25)" }}>
            <button 
              onClick={() => setSelectedJob(null)} 
              style={{ position: "absolute", top: "18px", right: "20px", background: "none", border: "none", fontSize: "1.5rem", cursor: "pointer", color: "var(--muted)" }}
            >
              ×
            </button>
            <span className="sf-badge">{selectedJob.dept}</span>
            <h3 style={{ fontFamily: "var(--serif)", fontSize: "1.5rem", margin: "8px 0 4px" }}>Apply for {selectedJob.title}</h3>
            <p style={{ fontSize: "0.82rem", color: "var(--muted)", margin: "0 0 24px" }}>Submit your details directly to Chandan Retail HR team.</p>

            {submitted ? (
              <div style={{ padding: "32px", textAlign: "center", background: "#F2F9F3", borderRadius: "8px", color: "var(--green)" }}>
                <h4 style={{ margin: "0 0 8px", fontFamily: "var(--serif)", fontSize: "1.4rem" }}>Application Submitted!</h4>
                <p style={{ margin: 0, fontSize: "0.88rem" }}>Thank you for applying. Our HR team at hr@crpl.co.in will contact you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                <div>
                  <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: "6px" }}>Full Name *</label>
                  <input 
                    type="text" 
                    required 
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{ width: "100%", padding: "10px 14px", borderRadius: "4px", border: "1px solid var(--border)", fontSize: "0.9rem" }}
                  />
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                  <div>
                    <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: "6px" }}>Email Address *</label>
                    <input 
                      type="email" 
                      required 
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{ width: "100%", padding: "10px 14px", borderRadius: "4px", border: "1px solid var(--border)", fontSize: "0.9rem" }}
                    />
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: "6px" }}>Phone Number *</label>
                    <input 
                      type="tel" 
                      required 
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      style={{ width: "100%", padding: "10px 14px", borderRadius: "4px", border: "1px solid var(--border)", fontSize: "0.9rem" }}
                    />
                  </div>
                </div>
                <div>
                  <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: "6px" }}>Years of Relevant Experience</label>
                  <input 
                    type="text" 
                    placeholder="e.g. 2 years in retail sales" 
                    value={formData.experience}
                    onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                    style={{ width: "100%", padding: "10px 14px", borderRadius: "4px", border: "1px solid var(--border)", fontSize: "0.9rem" }}
                  />
                </div>
                <div>
                  <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: "6px" }}>Cover Note / Additional Details</label>
                  <textarea 
                    rows="3" 
                    placeholder="Tell us about yourself..." 
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    style={{ width: "100%", padding: "10px 14px", borderRadius: "4px", border: "1px solid var(--border)", fontSize: "0.9rem", resize: "vertical" }}
                  />
                </div>
                <button type="submit" className="sf-btn-red" style={{ width: "100%", justifyContent: "center", marginTop: "8px", cursor: "pointer", border: "none" }}>
                  Submit Application →
                </button>
              </form>
            )}
          </div>
        </div>
      )}

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
              <p className="f-desc">Fashion · Ethnic Wear · Travel Gear · Cosmetics · Jewellery · Accessories — all in one place.</p>
              <p className="f-motto">Quality. Variety. Trust.</p>
              <a href="https://shop.askaranbinjraj.com/" target="_blank" rel="noopener noreferrer" className="f-shop">Shop Online ↗</a>
            </div>
            <div>
              <h4>Departments</h4>
              <ul>
                <li><Link to="/">Fashion</Link></li>
                <li><Link to="/">Ethnic Wear</Link></li>
                <li><Link to="/">Travel Gear</Link></li>
                <li><Link to="/">Cosmetics</Link></li>
                <li><Link to="/">Jewellery</Link></li>
                <li><Link to="/">Accessories</Link></li>
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
              </ul>
            </div>
            <div>
              <h4>Company</h4>
              <ul>
                <li><Link to="/">Visit Us</Link></li>
                <li><Link to="/careers" style={{ color: "var(--red)" }}>Careers</Link></li>
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
    </div>
  );
}