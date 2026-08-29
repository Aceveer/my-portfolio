"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";

export interface ChromaItem {
  image: string;
  title: string;
  subtitle: string;
  handle?: string;
  location?: string;
  borderColor?: string;
  gradient?: string;
  url?: string;
}

export interface ChromaGridProps {
  items?: ChromaItem[];
  className?: string;
  radius?: number;
  damping?: number;
  fadeOut?: number;
  ease?: string;
}

type SetterFn = (v: number | string) => void;

const ChromaGrid: React.FC<ChromaGridProps> = ({
  items,
  className = "",
  radius = 300,
  damping = 0.45,
  fadeOut = 0.6,
  ease = "power3.out",
}) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const fadeRef = useRef<HTMLDivElement>(null);
  const setX = useRef<SetterFn | null>(null);
  const setY = useRef<SetterFn | null>(null);
  const pos = useRef({ x: 0, y: 0 });

  const demo: ChromaItem[] = [
  {
    image: "/experience/JustKleen.jpeg",
    title: "JustKleen Services Website",
    subtitle: "Professional website for an ex-military, and a business in providing cleaning and security consultancy and services. Featuring responsive design and SEO optimization.",
    handle: "Next.js | Vercel Analytics",
    borderColor: "#22d3ee",
    gradient: "linear-gradient(145deg,#0e7490,#020024)",
    url: "https://www.justkleenservices.com/",
  },
  {
    image: "/projects/SCENEIT.png",
    title: "SceneIt",
    subtitle: "A full-stack movie platform enabling users to explore and manage movie data seamlessly.",
    handle: "Next.js | FastAPI | MySQL",
    borderColor: "#38bdf8",
    gradient: "linear-gradient(145deg,#075985,#020024)",
    url: "https://github.com/Aceveer/SceneIt-Movie-Platform",
  },
  {
    image: "/projects/ipl.png",
    title: "IPL 2024 Analysis",
    subtitle: "Comprehensive analysis of IPL 2024 season, offering insights into team and player performances.",
    handle: "Next.js | Python | MS Excel",
    borderColor: "#67e8f9",
    gradient: "linear-gradient(210deg,#0e7490,#020024)",
    url: "https://ipl2024tannuakram.vercel.app/",
  },
  {
    image: "/projects/marsupium.png",
    title: "Marsupium Admin",
    subtitle: "Admin dashboard for managing financial insights and user access in a fintech application.",
    handle: "Next.js | .NET 6 | GCP | Firebase",
    borderColor: "#22d3ee",
    gradient: "linear-gradient(165deg,#0891b2,#020024)",
    url: "https://marsupium-admin.vercel.app/login",
  },
  {
    image: "/projects/kc.png",
    title: "KoRa Consults",
    subtitle: "Professional website for a hospitality consultancy, featuring responsive design and SEO optimization.",
    handle: "Next.js | Tailwind CSS | ZOHO Mail",
    borderColor: "#38bdf8",
    gradient: "linear-gradient(195deg,#0b4d99,#020024)",
    url: "https://www.koraconsults.com/",
  },
  {
    image: "/projects/hh.png",
    title: "Volunteering Organization",
    subtitle: "Digital platform for volunteer signups and program management for a local charity.",
    handle: "Vue.js | Node.js | MySQL | Docker",
    borderColor: "#67e8f9",
    gradient: "linear-gradient(225deg,#0e7490,#020024)",
    url: "https://github.com/Aceveer/Volunteering-Website",
  },
  {
    image: "/projects/influx.png",
    title: "No Code Solution for InfluxDB",
    subtitle: "User-friendly interface for querying and visualizing time-series data without coding.",
    handle: "HTML | CSS | Node.js | InfluxDB | Grafana",
    borderColor: "#22d3ee",
    gradient: "linear-gradient(135deg,#0891b2,#020024)",
    url: "https://github.com/Aceveer/InflxuxDB",
  },
  {
    image: "/projects/grocery.png",
    title: "Grocery List Recommendation",
    subtitle: "Machine learning model predicting grocery reorders based on user behavior.",
    handle: "Python | Scikit-learn",
    borderColor: "#38bdf8",
    gradient: "linear-gradient(135deg,#075985,#020024)",
    url: "https://github.com/Aceveer/MBD-S1-2024/tree/main/Assignment%203",
  },
  {
    image: "/projects/energy.png",
    title: "Time Series Forecasting",
    subtitle: "Forecasting energy consumption trends using time-series data visualization.",
    handle: "Node.js | InfluxDB | Grafana",
    borderColor: "#67e8f9",
    gradient: "linear-gradient(135deg,#0e7490,#020024)",
    url: "https://github.com/Aceveer/MBD-S1-2024/tree/main/Assignment%202",
  },
  {
    image: "/projects/obesity.png",
    title: "Obesity Prediction",
    subtitle: "Predictive model analyzing factors contributing to obesity using machine learning.",
    handle: "Python | Scikit-learn",
    borderColor: "#22d3ee",
    gradient: "linear-gradient(135deg,#0b4d99,#020024)",
    url: "https://github.com/Aceveer/MBD-S1-2024/tree/main/Assignment%201",
  },
];


  const data = items?.length ? items : demo;

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    setX.current = gsap.quickSetter(el, "--x", "px") as SetterFn;
    setY.current = gsap.quickSetter(el, "--y", "px") as SetterFn;
    const { width, height } = el.getBoundingClientRect();
    pos.current = { x: width / 2, y: height / 2 };
    setX.current(pos.current.x);
    setY.current(pos.current.y);
  }, []);

  const moveTo = (x: number, y: number) => {
    gsap.to(pos.current, {
      x,
      y,
      duration: damping,
      ease,
      onUpdate: () => {
        setX.current?.(pos.current.x);
        setY.current?.(pos.current.y);
      },
      overwrite: true,
    });
  };

  const handleMove = (e: React.PointerEvent) => {
    const r = rootRef.current!.getBoundingClientRect();
    moveTo(e.clientX - r.left, e.clientY - r.top);
    gsap.to(fadeRef.current, { opacity: 0, duration: 0.25, overwrite: true });
  };

  const handleLeave = () => {
    gsap.to(fadeRef.current, {
      opacity: 1,
      duration: fadeOut,
      overwrite: true,
    });
  };

  const handleCardClick = (url?: string) => {
    if (url) window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleCardMove: React.MouseEventHandler<HTMLElement> = (e) => {
    const c = e.currentTarget as HTMLElement;
    const rect = c.getBoundingClientRect();
    c.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
    c.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
  };

  return (
    <div
      ref={rootRef}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      className={`relative w-full h-full flex flex-wrap justify-center items-start gap-3 fade-in-top ${className}`}
      style={
        {
          "--r": `${radius}px`,
          "--x": "50%",
          "--y": "50%",
        } as React.CSSProperties
      }
    >
      {data.map((c, i) => (
        <article
          key={i}
          role="link"
          tabIndex={0}
          aria-label={`${c.title} (opens in a new tab)`}
          onMouseMove={handleCardMove}
          onClick={() => handleCardClick(c.url)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              handleCardClick(c.url);
            }
          }}
          className="project-card group relative flex flex-col w-[300px] rounded-[20px] overflow-hidden border-2 border-transparent transition-colors duration-300 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#020024]"
          style={
            {
              "--card-border": c.borderColor || "transparent",
              background: c.gradient,
              "--spotlight-color": "rgba(255,255,255,0.3)",
            } as React.CSSProperties
          }
        >
          <div
            className="absolute inset-0 pointer-events-none transition-opacity duration-500 z-20 opacity-0 group-hover:opacity-100"
            style={{
              background:
                "radial-gradient(circle at var(--mouse-x) var(--mouse-y), var(--spotlight-color), transparent 70%)",
            }}
          />
          <div className="relative z-10 flex-1 p-[10px] box-border">
            <Image
              src={c.image}
              alt={c.title}
              width={300}
              height={200}
              sizes="300px"
              className="w-full h-full object-cover rounded-[10px]"
            />
          </div>
          <footer className="relative z-10 p-4 text-white font-sans w-full break-words">
            <h3 className="m-0 text-[1.05rem] font-semibold">{c.title}</h3>

            {c.handle && (
              <span className="mt-1 block font-mono text-[0.72rem] uppercase tracking-wide text-cyan-200/80">
                {c.handle}
              </span>
            )}

            <p className="mt-2 mb-0 text-[0.85rem] leading-relaxed opacity-85 break-words">
              {c.subtitle}
            </p>

            {c.location && (
              <span className="block text-[0.85rem] opacity-85 text-right">
                {c.location}
              </span>
            )}
          </footer>
        </article>
      ))}
      <div
        className="absolute inset-0 pointer-events-none z-30"
        style={{
          backdropFilter: "grayscale(1) brightness(0.78)",
          WebkitBackdropFilter: "grayscale(1) brightness(0.78)",
          background: "rgba(0,0,0,0.001)",
          maskImage:
            "radial-gradient(circle var(--r) at var(--x) var(--y),transparent 0%,transparent 15%,rgba(0,0,0,0.10) 30%,rgba(0,0,0,0.22)45%,rgba(0,0,0,0.35)60%,rgba(0,0,0,0.50)75%,rgba(0,0,0,0.68)88%,white 100%)",
          WebkitMaskImage:
            "radial-gradient(circle var(--r) at var(--x) var(--y),transparent 0%,transparent 15%,rgba(0,0,0,0.10) 30%,rgba(0,0,0,0.22)45%,rgba(0,0,0,0.35)60%,rgba(0,0,0,0.50)75%,rgba(0,0,0,0.68)88%,white 100%)",
        }}
      />
      <div
        ref={fadeRef}
        className="absolute inset-0 pointer-events-none transition-opacity duration-[250ms] z-40"
        style={{
          backdropFilter: "grayscale(1) brightness(0.78)",
          WebkitBackdropFilter: "grayscale(1) brightness(0.78)",
          background: "rgba(0,0,0,0.001)",
          maskImage:
            "radial-gradient(circle var(--r) at var(--x) var(--y),white 0%,white 15%,rgba(255,255,255,0.90)30%,rgba(255,255,255,0.78)45%,rgba(255,255,255,0.65)60%,rgba(255,255,255,0.50)75%,rgba(255,255,255,0.32)88%,transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(circle var(--r) at var(--x) var(--y),white 0%,white 15%,rgba(255,255,255,0.90)30%,rgba(255,255,255,0.78)45%,rgba(255,255,255,0.65)60%,rgba(255,255,255,0.50)75%,rgba(255,255,255,0.32)88%,transparent 100%)",
          opacity: 1,
        }}
      />
    </div>
  );
};

export default ChromaGrid;
