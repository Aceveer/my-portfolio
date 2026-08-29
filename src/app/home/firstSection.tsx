"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { HiArrowRight, HiOutlineMail } from "react-icons/hi";

const roles = [
  "Full Stack Developer",
  "Data Analysis & ML Expert",
  "Master's Graduate in IT",
  "Gaming Enthusiast",
  "Musician and Singer",
];

const roleToImage: Record<string, string> = {
  "Full Stack Developer": "/frontpage/F1.png",
  "Data Analysis & ML Expert": "/frontpage/F2.png",
  "Master's Graduate in IT": "/frontpage/F3.png",
  "Gaming Enthusiast": "/frontpage/F4.png",
  "Musician and Singer": "/frontpage/F5.png",
};

// Typing speeds
const TYPE_SPEED = 70;
const DELETE_SPEED = 60;
const PAUSE_AFTER_TYPING = 1200;

export default function FirstSection() {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [transformStyle, setTransformStyle] = useState("");

  const imageRef = useRef<HTMLImageElement>(null);

  const fullText = roles[index];
  const currentImage = roleToImage[fullText];

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    const card = imageRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateX = ((y / rect.height) - 0.5) * -10;
    const rotateY = ((x / rect.width) - 0.5) * 10;
    setTransformStyle(
      `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.04)`
    );
  };

  const handleMouseLeave = () => {
    setTransformStyle("perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)");
  };

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (!isDeleting && text.length < fullText.length) {
      timeout = setTimeout(() => setText(fullText.substring(0, text.length + 1)), TYPE_SPEED);
    } else if (!isDeleting && text.length === fullText.length) {
      timeout = setTimeout(() => setIsDeleting(true), PAUSE_AFTER_TYPING);
    } else if (isDeleting && text.length > 0) {
      timeout = setTimeout(() => setText(fullText.substring(0, text.length - 1)), DELETE_SPEED);
    } else if (isDeleting && text.length === 0) {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % roles.length);
    }
    return () => clearTimeout(timeout);
  }, [text, isDeleting, fullText]);

  return (
    <section className="relative w-full min-h-[100dvh] flex flex-col md:flex-row overflow-hidden bg-[#020024]">
      {/* Left: intro */}
      <div className="relative w-full md:w-1/2 min-h-[42dvh] md:min-h-[100dvh] flex flex-col justify-center px-8 sm:px-12 lg:px-20 py-16 bg-[#04061e]">
        {/* Star field */}
        {isClient && <div className="star-field">{generateStars()}</div>}
        {/* soft cyan wash */}
        <div className="pointer-events-none absolute -left-24 top-1/3 h-80 w-80 rounded-full bg-cyan-400/10 blur-[120px]" />

        <div className="relative z-10 max-w-xl">
          <p className="hero-rise text-sm font-mono uppercase tracking-[0.25em] text-cyan-300/80" style={{ animationDelay: "0.05s" }}>
            Hi, my name is
          </p>

          <h1
            className="hero-rise mt-4 text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05]"
            style={{ animationDelay: "0.15s" }}
          >
            Tanveer Akram
          </h1>

          <p
            className="hero-rise mt-5 text-xl md:text-2xl font-medium text-cyan-300 h-8"
            style={{ animationDelay: "0.28s" }}
          >
            {text}
            <span className="text-white blinking-cursor">|</span>
          </p>

          <p className="hero-rise mt-5 text-base text-slate-300/90 leading-relaxed max-w-md" style={{ animationDelay: "0.4s" }}>
            I build intuitive, performant web experiences and dig into data.
            Based in Adelaide, Australia.
          </p>

          <div className="hero-rise mt-9 flex flex-wrap items-center gap-4" style={{ animationDelay: "0.52s" }}>
            <a
              href="/projects"
              className="group inline-flex items-center gap-2 rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-[#04061e] transition-transform duration-200 hover:bg-cyan-300 active:scale-[0.98]"
            >
              View work
              <HiArrowRight className="transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>
            <a
              href="mailto:tanveerakramandrew@gmail.com"
              className="inline-flex items-center gap-2 rounded-full border border-cyan-300/40 px-6 py-3 text-sm font-semibold text-cyan-100 transition-colors duration-200 hover:border-cyan-300 hover:bg-cyan-300/10 active:scale-[0.98]"
            >
              <HiOutlineMail className="text-base" />
              Get in touch
            </a>
          </div>
        </div>
      </div>

      {/* Right: portrait synced to role */}
      <div className="relative w-full md:w-1/2 min-h-[58dvh] md:min-h-[100dvh] flex items-center justify-center overflow-hidden bg-[#020024]">
        <div className="glow-behind" />
        {isClient && (
          <div className={`image-wrapper z-10 ${isDeleting ? "slide-left-out" : "slide-left-in"}`}>
            <Image
              ref={imageRef}
              src={currentImage}
              alt={fullText}
              width={512}
              height={512}
              priority
              sizes="(max-width: 768px) 70vw, 28rem"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{ transform: transformStyle }}
              className="w-[70%] h-auto mx-auto md:w-[70%] max-w-md rounded-xl shadow-2xl shadow-cyan-500/10 transition-transform duration-200 ease-out"
            />
          </div>
        )}
      </div>
    </section>
  );
}

const generateStars = (count = 30) => {
  return Array.from({ length: count }).map((_, i) => {
    const size = Math.random() * 2 + 1;
    const top = Math.random() * 100;
    const left = Math.random() * 100;
    return (
      <div
        key={i}
        className="star"
        style={{ width: `${size}px`, height: `${size}px`, top: `${top}%`, left: `${left}%` }}
      />
    );
  });
};
