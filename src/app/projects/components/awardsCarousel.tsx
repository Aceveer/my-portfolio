"use client";

import { useState, useRef } from "react";
import { IconArrowNarrowLeft, IconArrowNarrowRight } from "@tabler/icons-react";
import { AnimatePresence, motion } from "framer-motion";

const slides = [
  {
    title: "Best Innovation Award",
    src: "https://images.unsplash.com/photo-1494806812796-244fe51b774d?q=80&w=1000",
  },
  {
    title: "Tech Leadership Recognition",
    src: "https://images.unsplash.com/photo-1518710843675-2540dd79065c?q=80&w=1000",
  },
  {
    title: "Excellence in Development",
    src: "https://images.unsplash.com/photo-1590041794748-2d8eb73a571c?q=80&w=1000",
  },
];

export default function SimpleImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const startXRef = useRef<number | null>(null);

  const handlePrevious = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    startXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (startXRef.current === null) return;
    const endX = e.changedTouches[0].clientX;
    const deltaX = startXRef.current - endX;
    if (deltaX > 50) handleNext();
    else if (deltaX < -50) handlePrevious();
    startXRef.current = null;
  };

  return (
    <div className="w-full h-screen bg-black flex items-center justify-center relative overflow-hidden">
      <div
        className="relative w-[80vw] max-w-3xl aspect-video transition-transform duration-300 ease-in-out hover:scale-105 overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <AnimatePresence custom={direction} mode="wait">
          <motion.img
            key={currentIndex}
            src={slides[currentIndex].src}
            alt={slides[currentIndex].title}
            className="w-full h-full object-cover rounded-lg absolute top-0 left-0"
            initial={{ x: direction > 0 ? 300 : -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: direction > 0 ? -300 : 300, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />
        </AnimatePresence>

        <div className="absolute top-4 left-4 bg-black/60 text-white px-3 py-1 rounded text-sm font-semibold z-10">
          {slides[currentIndex].title}
        </div>
      </div>

      <div className="absolute bottom-10 flex justify-center items-center gap-4">
        <button
          className="bg-neutral-800 p-3 rounded-full hover:bg-neutral-700 transition"
          onClick={handlePrevious}
        >
          <IconArrowNarrowLeft className="text-white" />
        </button>
        <button
          className="bg-neutral-800 p-3 rounded-full hover:bg-neutral-700 transition"
          onClick={handleNext}
        >
          <IconArrowNarrowRight className="text-white" />
        </button>
      </div>
    </div>
  );
}
