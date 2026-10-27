import React, { useState } from "react";
import { Link } from "react-router-dom";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-[#FAFAF8] border-b border-[#E5E0D8] sticky top-0 z-50">
      {/* Top Announcement Bar */}
      <div className="bg-[#C41E3A] text-white text-[11px] uppercase tracking-[0.2em] py-1.5 px-4 text-center font-medium">
        Same-Day & 1-Day Delivery Available · New Ethnic Collection Just Dropped
      </div>

      {/* Main Header Container */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between gap-4">
        
        {/* Brand Logo & Tagline */}
        <Link to="/" className="flex items-center gap-3 text-left group">
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#C41E3A] text-white font-serif font-bold text-lg shadow-sm">
            AB
          </div>
          <div>
            <span className="block font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#C41E3A]">
              ASKARAN BINJRAJ
            </span>
            <span className="block text-[10px] uppercase tracking-[0.2em] text-[#2D5A27] font-semibold">
              Quality. Variety. Trust.
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center space-x-5 text-[11px] uppercase tracking-[0.15em] font-semibold text-[#111111]">
          <Link to="/collections" className="hover:text-[#C41E3A] transition-colors">Fashion</Link>
          <Link to="/collections" className="hover:text-[#C41E3A] transition-colors">Ethnic Wear</Link>
          <Link to="/collections" className="hover:text-[#C41E3A] transition-colors">Travel Gear</Link>
          <Link to="/collections" className="hover:text-[#C41E3A] transition-colors">Cosmetics</Link>
          <Link to="/collections" className="hover:text-[#C41E3A] transition-colors">Jewellery</Link>
          <Link to="/collections" className="hover:text-[#C41E3A] transition-colors">Accessories</Link>
          <Link to="/about" className="hover:text-[#C41E3A] transition-colors">Visit Us</Link>
          <Link to="/about" className="hover:text-[#C41E3A] transition-colors">About</Link>
          <Link to="/careers" className="hover:text-[#C41E3A] transition-colors">Careers</Link>
          <Link to="/contact" className="hover:text-[#C41E3A] transition-colors">Contact</Link>
        </nav>

        {/* Shop Online CTA */}
        <div className="flex items-center gap-3">
          <Link
            to="/collections"
            className="inline-flex items-center justify-center px-5 py-2.5 bg-[#C41E3A] text-white text-[11px] uppercase tracking-[0.2em] font-semibold rounded hover:bg-[#A01830] transition-colors shadow-sm"
          >
            Shop Online ↗
          </Link>
          
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 text-neutral-800 hover:text-[#C41E3A] focus:outline-none"
            aria-label="Toggle Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}