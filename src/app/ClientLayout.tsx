"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "./components/footer";
import { Header } from "./components/header";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Kept outside <Header> so it doesn't inherit the AOS fade-down
          transform, which pushed it off-screen when focused. */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <Header />

      {/* Main content area takes all available space */}
      <main id="main-content" tabIndex={-1} className="flex-grow">
        {children}
      </main>

      {/* Footer sits at the bottom */}
      <Footer />
    </div>
  );
}
