import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

// Component & Page Imports
import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";
import { WhatsAppFloat } from "./components/whatsappfloat";
import Home from "./pages/Home";
import Collections from "./pages/Collections";
import CategoryDetail from "./pages/CategoryDetail";
import About from "./pages/About";
import Careers from "./pages/Careers";
import Contact from "./pages/contact";

const ScrollManager = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default function App() {
  return (
    <BrowserRouter>
      <ScrollManager />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/collections/:slug" element={<CategoryDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      <WhatsAppFloat />
    </BrowserRouter>
  );
}