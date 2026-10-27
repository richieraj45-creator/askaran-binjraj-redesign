import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";
import Lenis from "lenis";
import { Toaster } from "sonner";

// 🚀 Component Imports (Matching lowercase Linux filesystem casing)
import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";
import { WhatsAppFloat } from "./components/whatsappFloat";

// 🚀 Page Imports
import Collections from "./pages/Collections";
import CategoryDetail from "./pages/CategoryDetail";
import About from "./pages/About";
import Careers from "./pages/Careers";
import Contact from "./pages/contact";

// 🛡️ Error Boundary to catch any runtime glitches
class AppErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, errorMsg: "" };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, errorMsg: error.toString() };
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#FAFAF8] text-[#111111] p-8">
          <h1 className="text-2xl font-bold text-[#C41E3A] mb-4">React Component Crash Detected</h1>
          <div className="bg-white p-6 border border-gray-200 shadow-sm max-w-2xl w-full text-left font-mono text-sm overflow-auto text-red-600">
            {this.state.errorMsg}
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

const ScrollManager = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const SplashRedirect = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="h-screen w-full flex items-center justify-center bg-[#FAFAF8]">
        <h1 className="text-2xl font-serif text-[#C41E3A] animate-pulse">Loading Askaran Binjraj...</h1>
      </div>
    );
  }
  return <Navigate to="/collections" replace />;
};

function App() {
  useEffect(() => {
    let lenis = null;
    try {
      lenis = new Lenis({ lerp: 0.09, wheelMultiplier: 0.95 });
      const raf = (time) => {
        lenis.raf(time);
        lenis._id = requestAnimationFrame(raf);
      };
      lenis._id = requestAnimationFrame(raf);
    } catch (e) {
      lenis = null;
    }
    return () => {
      if (lenis) {
        cancelAnimationFrame(lenis._id);
        lenis.destroy();
      }
    };
  }, []);

  return (
    <div className="App">
      <AppErrorBoundary>
        <BrowserRouter>
          <ScrollManager />
          <Navbar />
          <Routes>
            <Route path="/" element={<SplashRedirect />} />
            <Route path="/collections" element={<Collections />} />
            <Route path="/collections/:slug" element={<CategoryDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
          <WhatsAppFloat />
        </BrowserRouter>
        <Toaster position="bottom-right" />
      </AppErrorBoundary>
    </div>
  );
}

export default App;