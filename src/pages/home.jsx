import React from "react";
import { Link } from "react-router-dom";
import { CATEGORIES } from "../Data/sitedata";
import { CategoryCard } from "../components/categorycard";
import { Reveal, Stagger, StaggerItem } from "../components/reveal";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAFAF8] text-[#111111] overflow-x-hidden">
      {/* Hero Section */}
      <section className="border-b border-[#E5E0D8] bg-[#FAFAF8] pt-16 pb-20 md:pt-24 md:pb-28 px-4 sm:px-6 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Brand Story */}
            <div className="lg:col-span-7 flex flex-col justify-center text-left">
              <div className="flex items-center space-x-4 mb-4">
                <span className="text-xs uppercase tracking-[0.3em] text-[#C41E3A] font-semibold">Est. 1980</span>
                <span className="h-[1px] w-12 bg-[#C41E3A]/40"></span>
                <span className="text-xs uppercase tracking-[0.3em] text-neutral-500 font-semibold">6th Generation</span>
              </div>
              
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium leading-[1.1] tracking-tight text-[#111111]">
                Six generations of artisan <span className="italic text-[#C41E3A]">craft.</span>
              </h1>
              
              <p className="mt-6 text-base sm:text-lg leading-relaxed text-neutral-600 font-light max-w-2xl">
                Authentic Banarasi sarees, Muga and Assam silk, Mekhela Chador and bridal weaves — sourced directly from Varanasi weavers across six generations of unwavering trust.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  to="/collections"
                  className="inline-flex items-center justify-center px-8 py-4 bg-[#C41E3A] text-white text-xs uppercase tracking-[0.2em] font-semibold rounded hover:bg-[#A01830] transition-colors shadow-sm"
                >
                  Shop Online →
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center justify-center px-8 py-4 border border-[#111111] text-[#111111] text-xs uppercase tracking-[0.2em] font-semibold rounded hover:bg-[#111111] hover:text-white transition-colors"
                >
                  Explore Departments
                </Link>
              </div>
            </div>

            {/* Right Column: Hero Visual Card */}
            <div className="lg:col-span-5 w-full">
              <div className="relative rounded-xl overflow-hidden shadow-xl border border-[#E5E0D8] h-[420px] lg:h-[480px] w-full bg-neutral-900 group">
                <img
                  src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=1000"
                  alt="Askaran Binjraj Heritage Weaves"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
                <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end text-white z-10">
                  <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold mb-2">
                    Heritage Collection
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-medium">Royal Banarasi Silks</h3>
                  <p className="mt-2 text-xs sm:text-sm text-gray-200 font-light">
                    Handcrafted masterworks from our flagship Dhekiajuli showcase.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Curated Mall Floors / Collections Grid */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-[#C41E3A] font-semibold">Our Flagship Departments</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-medium mt-3">Every floor of the mall, curated</h2>
          <p className="text-neutral-600 mt-4 text-sm sm:text-base">
            Explore our multi-floor destination for fashion essentials, ethnic wear, cosmetics, jewelry, and luxury living.
          </p>
        </div>

        <Stagger className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 w-full">
          {CATEGORIES.map((c) => (
            <StaggerItem key={c.slug} className="w-full block">
              <CategoryCard category={c} className="h-[360px] w-full block" />
            </StaggerItem>
          ))}
        </Stagger>
      </section>
    </main>
  );
}