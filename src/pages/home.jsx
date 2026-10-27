import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [currentSlide] = useState(4);
  const totalSlides = 6;

  return (
    <div className="storefront bg-[#FAFAF8] text-[#111111] min-h-screen">
      
      {/* Hero Cinematic Section */}
      <section id="hero" className="sf-hero relative min-h-[85vh] flex flex-col justify-between overflow-hidden bg-neutral-950 text-white">
        {/* Background Image with Dark Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=1600"
            alt="Askaran Binjraj Flagship Storefront"
            className="w-full h-full object-cover opacity-75"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/30" />
        </div>

        {/* Hero Content Body */}
        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 lg:px-12 pt-24 pb-16 flex flex-col justify-end flex-grow">
          <div className="max-w-3xl text-left">
            <span className="inline-block text-[11px] uppercase tracking-[0.3em] text-[#D4AF37] font-semibold mb-3">
              Ready-to-Wear · Dhekiajuli Flagship
            </span>
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-normal leading-[1.05] tracking-tight text-white">
              Move through the world <span className="italic text-[#C8251E]">unforgettably.</span>
            </h1>
            <p className="mt-6 text-base sm:text-lg leading-relaxed text-gray-200 font-light max-w-2xl">
              Curated apparel, tailored suits, and authentic ethnic wear for men and women at Askaran Binjraj, Dhekiajuli.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                to="/collections"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#C8251E] text-white text-xs uppercase tracking-[0.2em] font-semibold rounded hover:bg-[#A01830] transition-colors shadow-lg"
              >
                Shop Online ↗
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center justify-center px-8 py-4 border border-white/40 text-white text-xs uppercase tracking-[0.2em] font-semibold rounded hover:bg-white hover:text-black transition-colors"
              >
                Explore Departments
              </Link>
            </div>
          </div>
        </div>

        {/* Hero Carousel Slide Counter Indicator */}
        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 lg:px-12 pb-8 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {[...Array(totalSlides)].map((_, idx) => (
              <span
                key={idx}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  idx + 1 === currentSlide ? "w-8 bg-[#C8251E]" : "w-2 bg-white/40"
                }`}
              />
            ))}
          </div>
          <div className="font-serif text-lg tracking-widest text-white/90">
            {String(currentSlide).padStart(2, "0")}
            <small className="text-xs text-white/50 ml-1">/ {String(totalSlides).padStart(2, "0")}</small>
          </div>
        </div>
      </section>

      {/* Flagship Departments / Mall Floors Grid */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-[#C8251E] font-semibold">Our Flagship Mall</span>
          <h2 className="font-serif text-4xl sm:text-5xl font-medium mt-3">Every floor of the mall, curated</h2>
          <p className="text-neutral-600 mt-4 text-sm sm:text-base">
            Explore our multi-floor destination for fashion essentials, ethnic wear, cosmetics, jewelry, and luxury living in Dhekiajuli.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Fashion & Apparel", floor: "1st Floor", img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800", desc: "Branded shirts, trousers, and daily wear essentials." },
            { title: "Ethnic & Heritage", floor: "3rd Floor", img: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=800", desc: "Authentic Banarasi sarees, Muga & Assam silk." },
            { title: "Travel Gear", floor: "4th Floor", img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=800", desc: "Suitcases, duffle bags, and executive rucksacks." },
            { title: "Cosmetics & Beauty", floor: "2nd Floor", img: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800", desc: "Skincare, makeup, and premium fragrances." },
            { title: "Jewellery & Heirlooms", floor: "2nd Floor", img: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=800", desc: "Fine gold, silver, and lifestyle accessories." },
            { title: "Kids & Toys", floor: "Ground Floor", img: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&q=80&w=800", desc: "Vibrant fashion and school essentials for boys & girls." },
          ].map((dept, i) => (
            <div key={i} className="group relative rounded-xl overflow-hidden shadow-md bg-white border border-[#E5E0D8] h-[420px] flex flex-col justify-end">
              <img
                src={dept.img}
                alt={dept.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
              <div className="absolute inset-0 p-6 flex flex-col justify-end text-white z-10">
                <span className="text-[11px] uppercase tracking-[0.25em] text-[#D4AF37] font-semibold mb-1">
                  {dept.floor}
                </span>
                <h3 className="font-serif text-2xl font-medium">{dept.title}</h3>
                <p className="mt-1 text-xs text-gray-200 font-light">{dept.desc}</p>
                <Link
                  to="/collections"
                  className="mt-4 inline-flex items-center text-xs font-semibold uppercase tracking-widest text-white group-hover:text-[#D4AF37] transition-colors"
                >
                  Explore Floor →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}