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
      <Header />

      {/* Main content area takes all available space */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer sits at the bottom */}
      <Footer />
    </div>
  );
}
