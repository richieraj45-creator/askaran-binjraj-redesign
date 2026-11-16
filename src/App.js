import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Collections from "./pages/Collections";
import CategoryDetail from "./pages/CategoryDetail";
import Contact from "./pages/contact";
import Careers from "./pages/Careers";
import { Toaster } from "sonner";
import SiteLayout from "./components/SiteLayout";

function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#FAFAF8] px-6 text-center">
      <div className="max-w-xl">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#C41E3A]">404 · Page not found</p>
        <h1 className="mt-5 font-serif text-4xl font-medium text-[#111111] sm:text-5xl">
          This page isn’t available
        </h1>
        <p className="mt-5 text-base leading-relaxed text-neutral-600">
          The page may have moved, or the address may be incorrect. You can return to the homepage or explore our collections.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center justify-center bg-[#C41E3A] px-6 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:bg-[#A01830]"
          >
            Back to Home
          </Link>
          <Link
            to="/collections"
            className="inline-flex items-center justify-center border border-[#C41E3A] px-6 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#C41E3A] transition-colors hover:bg-[#C41E3A] hover:text-white"
          >
            Explore Collections
          </Link>
        </div>
      </div>
    </main>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<SiteLayout><About /></SiteLayout>} />
        <Route path="/collections" element={<SiteLayout><Collections /></SiteLayout>} />
        <Route path="/collections/:slug" element={<SiteLayout><CategoryDetail /></SiteLayout>} />
        <Route path="/contact" element={<SiteLayout><Contact /></SiteLayout>} />
        <Route path="/careers" element={<Careers />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster position="top-right" />
    </Router>
  );
}
