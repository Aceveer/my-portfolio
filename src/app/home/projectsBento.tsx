"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { HiArrowRight, HiOutlineExternalLink } from "react-icons/hi";

type Project = {
  title: string;
  desc: string;
  tech: string;
  url: string;
  image?: string;
  featured?: boolean;
};

// Real projects, mirrored from the /projects page data.
const projects: Project[] = [
  {
    title: "JustKleen Services",
    desc: "Production website for a cleaning and security consultancy, with responsive design and SEO.",
    tech: "Next.js · Vercel Analytics",
    url: "https://www.justkleenservices.com/",
    image: "/experience/JustKleen.jpeg",
    featured: true,
  },
  {
    title: "SceneIt",
    desc: "Full-stack movie platform for exploring and managing movie data.",
    tech: "Next.js · FastAPI · MySQL",
    url: "https://github.com/Aceveer/SceneIt-Movie-Platform",
  },
  {
    title: "Marsupium Admin",
    desc: "Fintech admin dashboard for financial insights and user access control.",
    tech: "Next.js · .NET 6 · GCP",
    url: "https://marsupium-admin.vercel.app/login",
  },
  {
    title: "KoRa Consults",
    desc: "Website for a hospitality consultancy, SEO-tuned and fully responsive.",
    tech: "Next.js · Tailwind · Zoho",
    url: "https://www.koraconsults.com/",
  },
  {
    title: "IPL 2024 Analysis",
    desc: "Season-long analysis surfacing team and player performance insights.",
    tech: "Next.js · Python · Excel",
    url: "https://ipl2024tannuakram.vercel.app/",
  },
];

function handleCardMove(e: React.MouseEvent<HTMLElement>) {
  const el = e.currentTarget;
  const rect = el.getBoundingClientRect();
  el.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
  el.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
}

export default function ProjectsBento() {
  const reduce = useReducedMotion();
  const reveal = (i: number) => ({
    initial: reduce ? false : { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.55, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] as const },
  });

  const [featured, ...rest] = projects;

  return (
    <section className="relative w-full bg-[#020024] bg-tech-grid px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Project highlights</h2>
          <a
            href="/projects"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 hover:text-cyan-200"
          >
            View all projects
            <HiArrowRight className="transition-transform duration-200 group-hover:translate-x-0.5" />
          </a>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:auto-rows-[minmax(0,1fr)]">
          {/* Featured tile */}
          <motion.a
            {...reveal(0)}
            href={featured.url}
            target="_blank"
            rel="noopener noreferrer"
            onMouseMove={handleCardMove}
            className="bento-card group flex flex-col md:col-span-2 md:row-span-2"
          >
            <div className="relative flex-1 overflow-hidden">
              <Image
                src={featured.image ?? ""}
                alt={featured.title}
                width={800}
                height={500}
                sizes="(max-width: 768px) 100vw, 66vw"
                className="h-full w-full min-h-[220px] object-cover opacity-90 transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020024] via-[#020024]/40 to-transparent" />
            </div>
            <div className="relative z-10 p-6">
              <div className="flex items-center gap-2">
                <h3 className="text-2xl font-bold text-white">{featured.title}</h3>
                <HiOutlineExternalLink className="text-cyan-300 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
              </div>
              <p className="mt-2 max-w-md text-sm text-slate-300/90">{featured.desc}</p>
              <span className="mt-3 inline-block font-mono text-xs uppercase tracking-wider text-cyan-300/80">
                {featured.tech}
              </span>
            </div>
          </motion.a>

          {/* Remaining project tiles */}
          {rest.map((p, i) => (
            <motion.a
              key={p.title}
              {...reveal(i + 1)}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              onMouseMove={handleCardMove}
              className="bento-card group flex flex-col justify-between p-6"
            >
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                  <HiOutlineExternalLink className="text-cyan-300 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                </div>
                <p className="mt-2 text-sm text-slate-400">{p.desc}</p>
              </div>
              <span className="mt-4 font-mono text-xs uppercase tracking-wider text-cyan-300/80">
                {p.tech}
              </span>
            </motion.a>
          ))}

          {/* CTA tile */}
          <motion.a
            {...reveal(rest.length + 1)}
            href="/projects"
            onMouseMove={handleCardMove}
            className="bento-card group flex flex-col items-start justify-center gap-3 p-6"
          >
            <span className="text-lg font-semibold text-white">See the full archive</span>
            <p className="text-sm text-slate-400">Ten projects across web, fintech and machine learning.</p>
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-300">
              Browse all
              <HiArrowRight className="transition-transform duration-200 group-hover:translate-x-0.5" />
            </span>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
