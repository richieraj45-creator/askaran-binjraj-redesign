import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CONTACT } from "../Data/sitedata";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#E5E0D8] bg-[#FAFAF8]">
      <div className="bg-[#C41E3A] px-4 py-1.5 text-center text-[10px] font-medium uppercase tracking-[0.16em] text-white sm:text-[11px]">
        Same-Day & 1-Day Delivery Available · New Ethnic Collection Just Dropped
      </div>

      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" onClick={closeMobileMenu} className="flex min-w-0 items-center">
          <img
            src="/assets/logo-horizontal.png"
            alt="Askaran Binjraj"
            className="h-9 w-auto max-w-[42vw] object-contain sm:h-10 sm:max-w-[210px]"
          />
        </Link>

        <nav className="hidden items-center gap-4 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#111111] xl:flex">
          <a href="/#fashion" className="transition-colors hover:text-[#C41E3A]">Fashion</a>
          <a href="/#ethnic" className="transition-colors hover:text-[#C41E3A]">Ethnic Wear</a>
          <a href="/#travel" className="transition-colors hover:text-[#C41E3A]">Travel Gear</a>
          <a href="/#cosmetics" className="transition-colors hover:text-[#C41E3A]">Cosmetics</a>
          <a href="/#jewelry" className="transition-colors hover:text-[#C41E3A]">Jewellery</a>
          <Link to="/collections" className="transition-colors hover:text-[#C41E3A]">Collections</Link>
          <Link to="/about" className="transition-colors hover:text-[#C41E3A]">About</Link>
          <Link to="/careers" className="transition-colors hover:text-[#C41E3A]">Careers</Link>
          <Link to="/contact" className="transition-colors hover:text-[#C41E3A]">Contact</Link>
        </nav>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <a
            href={CONTACT.shopUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded bg-[#C41E3A] px-3 py-2 text-[9px] font-semibold uppercase tracking-[0.08em] text-white shadow-sm transition-colors hover:bg-[#A01830] sm:px-4 sm:text-[10px] sm:tracking-[0.12em]"
          >
            Shop Online ↗
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((open) => !open)}
            className="p-2 text-neutral-800 transition-colors hover:text-[#C41E3A] focus:outline-none xl:hidden"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <nav
        id="mobile-navigation"
        className={`${mobileMenuOpen ? "block" : "hidden"} border-t border-[#E5E0D8] bg-[#FAFAF8] px-5 py-3 shadow-lg xl:hidden`}
        aria-label="Mobile navigation"
      >
        <div className="flex flex-col">
          <a href="/#fashion" onClick={closeMobileMenu} className="border-b border-[#E5E0D8] py-3 text-xs font-semibold uppercase tracking-[0.14em]">Fashion</a>
          <a href="/#ethnic" onClick={closeMobileMenu} className="border-b border-[#E5E0D8] py-3 text-xs font-semibold uppercase tracking-[0.14em]">Ethnic Wear</a>
          <a href="/#travel" onClick={closeMobileMenu} className="border-b border-[#E5E0D8] py-3 text-xs font-semibold uppercase tracking-[0.14em]">Travel Gear</a>
          <a href="/#cosmetics" onClick={closeMobileMenu} className="border-b border-[#E5E0D8] py-3 text-xs font-semibold uppercase tracking-[0.14em]">Cosmetics</a>
          <a href="/#jewelry" onClick={closeMobileMenu} className="border-b border-[#E5E0D8] py-3 text-xs font-semibold uppercase tracking-[0.14em]">Jewellery</a>
          <Link to="/collections" onClick={closeMobileMenu} className="border-b border-[#E5E0D8] py-3 text-xs font-semibold uppercase tracking-[0.14em]">Collections</Link>
          <Link to="/about" onClick={closeMobileMenu} className="border-b border-[#E5E0D8] py-3 text-xs font-semibold uppercase tracking-[0.14em]">About</Link>
          <Link to="/careers" onClick={closeMobileMenu} className="border-b border-[#E5E0D8] py-3 text-xs font-semibold uppercase tracking-[0.14em]">Careers</Link>
          <Link to="/contact" onClick={closeMobileMenu} className="py-3 text-xs font-semibold uppercase tracking-[0.14em]">Contact</Link>
        </div>
      </nav>
    </header>
  );
}
