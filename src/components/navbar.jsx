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
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Brand Logo & Tagline */}
        <Link to="/" className="flex items-center gap-3 text-left group">
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#C41E3A]/10 text-[#C41E3A] font-serif text-xl font-bold">
            🌸
          </div>
          <div>
            <span className="block font-serif text-2xl sm:text-3xl font-bold tracking-tight text-[#C41E3A]">
              ASKARAN BINJRAJ
            </span>
            <span className="block text-xs uppercase tracking-[0.25em] text-[#2D5A27] font-semibold">
              Quality. Variety. Trust.
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-6 text-xs uppercase tracking-[0.15em] font-semibold text-[#111111]">
          <Link to="/collections" className="hover:text-[#C41E3A] transition-colors">Fashion</Link>
          <Link to="/collections" className="hover:text-[#C41E3A] transition-colors">Ethnic Wear</Link>
          <Link to="/collections" className="hover:text-[#C41E3A] transition-colors">Travel Gear</Link>
          <Link to="/collections" className="hover:text-[#C41E3A] transition-colors">Cosmetics</Link>
          <Link to="/collections" className="hover:text-[#C41E3A] transition-colors">Jewellery</Link>
          <Link to="/collections" className="hover:text-[#C41E3A] transition-colors">Accessories</Link>
          <Link to="/about" className="hover:text-[#C41E3A] transition-colors">About</Link>
          <Link to="/contact" className="hover:text-[#C41E3A] transition-colors">Contact</Link>
          <Link to="/careers" className="hover:text-[#C41E3A] transition-colors">Careers</Link>
        </nav>

        {/* Shop Online CTA */}
        <div className="flex items-center gap-3">
          <Link
            to="/collections"
            className="hidden sm:inline-flex items-center justify-center px-6 py-2.5 bg-[#C41E3A] text-white text-xs uppercase tracking-[0.2em] font-semibold rounded hover:bg-[#A01830] transition-colors shadow-sm"
          >
            Shop Online →
          </Link>
          
          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-neutral-800 hover:text-[#C41E3A] focus:outline-none"
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

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-[#E5E0D8] px-4 py-4 space-y-3 text-xs uppercase tracking-[0.15em] font-semibold">
          <Link to="/collections" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-neutral-800 hover:text-[#C41E3A]">Fashion</Link>
          <Link to="/collections" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-neutral-800 hover:text-[#C41E3A]">Ethnic Wear</Link>
          <Link to="/about" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-neutral-800 hover:text-[#C41E3A]">About</Link>
          <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-neutral-800 hover:text-[#C41E3A]">Contact</Link>
          <Link to="/careers" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-neutral-800 hover:text-[#C41E3A]">Careers</Link>
        </div>
      )}
    </header>
  );
}